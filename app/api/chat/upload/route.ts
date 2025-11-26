import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { prisma } from "../../../lib/prisma";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import path from "path";

const s3Client = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const BUCKET_NAME = process.env.S3_BUCKET_NAME!;
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB for chat uploads
const ALLOWED_MIME_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp"];

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.email) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "File exceeds the 5MB size limit for chat uploads" },
        { status: 400 }
      );
    }

    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: "Only image uploads are supported in chat" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findFirst({
      where: { email: session.user.email },
      select: { id: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const timestamp = Date.now();
    const ext = path.extname(file.name) || ".png";
    const baseName = path
      .basename(file.name, ext)
      .replace(/[^a-zA-Z0-9_-]/g, "_")
      .toLowerCase();
    const s3Folder = `documents/chat/${user.id}`;
    const s3FileName = `${s3Folder}/${timestamp}-${baseName}${ext}`;

    const tempDocument = await prisma.document.create({
      data: {
        name: file.name,
        fileName: s3FileName,
        url: "",
        fileSize: file.size,
        fileType: file.type,
        category: "CHAT_UPLOADS",
        status: "UPLOADING",
        userId: user.id,
      },
    });

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    await s3Client.send(
      new PutObjectCommand({
        Bucket: BUCKET_NAME,
        Key: s3FileName,
        Body: buffer,
        ContentType: file.type,
        ContentLength: file.size,
        Metadata: {
          "chat-upload": "true",
          "document-id": tempDocument.id.toString(),
        },
      })
    );

    const fileUrl = `https://${BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${s3FileName}`;

    const document = await prisma.document.update({
      where: { id: tempDocument.id },
      data: {
        url: fileUrl,
        status: "UPLOADED",
      },
    });

    const chatMessage = await prisma.chatMessage.create({
      data: {
        userId: user.id,
        documentId: document.id,
        mediaUrl: document.url,
        messageType: "IMAGE",
      },
      include: {
        user: { select: { username: true } },
        document: { select: { url: true } },
      },
    });

    return NextResponse.json({
      success: true,
      url: document.url,
      chatMessage,
    });
  } catch (error) {
    console.error("Chat upload failed:", error);
    return NextResponse.json(
      { error: "Image upload failed" },
      { status: 500 }
    );
  }
}

