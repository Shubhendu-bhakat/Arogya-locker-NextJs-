import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../[...nextauth]/route";
import { prisma } from "../../../../lib/prisma";
import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const BUCKET_NAME = process.env.S3_BUCKET_NAME!;

// DELETE document for authenticated user

export async function DELETE(
  req: NextRequest,
  { params }: { params:  Promise<{ docId: string }> }
) {
    const { docId } = await params;
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const documentId = parseInt(docId);

    // Find the user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Find the document belonging to this user
    const document = await prisma.document.findFirst({
      where: { id: documentId, userId: user.id },
    });

    if (!document) {
      return NextResponse.json(
        { error: "Document not found or access denied" },
        { status: 404 }
      );
    }
    if (document.fileName) {
      try {
        await s3.send(
          new DeleteObjectCommand({
            Bucket: BUCKET_NAME,
            Key: document.fileName,
          })
        );
        console.log("Deleted from S3:", document.fileName);
      } catch (s3Error) {
        console.error("S3 deletion error:", s3Error);
        return NextResponse.json(
          { error: "Failed to delete from S3" },
          { status: 500 }
        );
      }
    }

    // Delete from DB
    await prisma.document.delete({
      where: { id: documentId },
    });

    return NextResponse.json({
      success: true,
      message: "Document deleted successfully (S3 + DB)",
    });
  } catch (error) {
    console.error("Delete document error:", error);
    return NextResponse.json(
      { error: "Failed to delete document" },
      { status: 500 }
    );
  }
}
