// app/api/documents/upload/route.ts
import { NextRequest, NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import  { prisma} from "../../../../lib/prisma";
import path from "path";
import { getServerSession } from "next-auth";
import { authOptions } from "../../[...nextauth]/route";
import { error } from "console";


const s3Client = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const BUCKET_NAME = process.env.S3_BUCKET_NAME!;
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

const ALLOWED_MIME_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
export async function GET(req: NextRequest) {
  const userByServer = await getServerSession(authOptions);
  if (!userByServer) {
    return NextResponse.json({error:"User Not Found"},{status:401}); // 401 Unauthorized
  }

  console.log(userByServer?.user?.email); // name, email, image

  // find the user based on the email
  const user = await prisma.user.findFirst({
    where: {
      //@ts-ignore
      email: userByServer.user?.email,
    },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 400 });
  }

  const userId = user.id;

  return NextResponse.json({ userId });
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const category = formData.get("category") as string;
    const userId = parseInt(formData.get("userId") as string, 10);
    

    // ✅ Validations
    if (!file) {
      return NextResponse.json({ error: "File is required" }, { status: 400 });
    }
    if (!category) {
      return NextResponse.json({ error: "Category is required" }, { status: 400 });
    }
    if (!userId || isNaN(userId)) {
      return NextResponse.json({ error: "Valid user ID required" }, { status: 400 });
    }
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        {
          error: "File size should not exceed 10MB",
          maxSize: "10MB",
          currentSize: `${(file.size / (1024 * 1024)).toFixed(2)}MB`,
        },
        { status: 400 }
      );
    }
    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
      return NextResponse.json(
        {
          error: "File type not allowed",
          allowedTypes: ["PDF", "Images (JPG, PNG, GIF, WebP)", "Word Documents"],
          receivedType: file.type,
        },
        { status: 400 }
      );
    }

    // ✅ Check if user exists
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // ✅ Generate unique safe filename
    const timestamp = Date.now();
    const ext = path.extname(file.name);
    const baseName = path.basename(file.name, ext).replace(/[^a-zA-Z0-9_-]/g, "_");
    const s3FileName = `documents/${userId}/${category.toLowerCase()}/${timestamp}-${baseName}${ext}`;

    // ✅ Create document record with UPLOADING status
    const document = await prisma.document.create({
      data: {
        name: file.name,
        fileName: s3FileName,
        url: "",
        fileSize: file.size,
        fileType: file.type,
        category: category as any,
        status: "UPLOADING",
        userId,
      },
    });

    try {
      // Upload to S3
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      await s3Client.send(
        new PutObjectCommand({
          Bucket: BUCKET_NAME,
          Key: s3FileName,
          Body: buffer,
          ContentType: file.type,
          ContentLength: file.size,
          ServerSideEncryption: "AES256",
          Metadata: {
            "document-id": document.id.toString(),
            "user-id": userId.toString(),
            category,
            "original-name": file.name,
          },
        })
      );

      const fileUrl = `https://${BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${s3FileName}`;

      // ✅ Update document with final URL & status
      const updatedDocument = await prisma.document.update({
        where: { id: document.id },
        data: { url: fileUrl, status: "UPLOADED" },
        include: {
          user: { select: { id: true, username: true, email: true } },
        },
      });

      return NextResponse.json({
        success: true,
        message: "Document uploaded successfully",
        data: updatedDocument,
      });
    } catch (s3Error) {
      // Mark as FAILED
      await prisma.document.update({
        where: { id: document.id },
        data: { status: "FAILED" },
      });

      console.error("S3 Upload error:", s3Error);
      return NextResponse.json({ error: "Failed to upload to cloud storage" }, { status: 500 });
    }
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      {
        error: "Failed to upload document",
        details:
          process.env.NODE_ENV === "development"
            ? error instanceof Error
              ? error.message
              : "Unknown error"
            : "Internal server error",
      },
      { status: 500 }
    );
  }
}
