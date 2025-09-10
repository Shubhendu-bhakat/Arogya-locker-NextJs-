// app/api/upload/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

// Configure S3 client
const s3Client = new S3Client({
  region: process.env.AWS_REGION!, 
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const BUCKET_NAME = process.env.S3_BUCKET_NAME!;
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB in bytes

export async function POST(req: NextRequest) {
  try {
    // Parse the form data
    const formData = await req.formData();
    const file = formData.get('file') as File;

    // Check if file is provided
    if (!file) {
      return NextResponse.json(
        { error: 'File is required' },
        { status: 400 }
      );
    }

    // Check file size (10MB limit)
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'File size should not exceed 10MB' },
        { status: 400 }
      );
    }

    // Generate unique file name
    const timestamp = Date.now();
    const fileName = `${timestamp}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to S3
    const uploadCommand = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: fileName,
      Body: buffer,
      ContentType: file.type,
      ContentLength: file.size,
      // Optional: Set ACL to public-read if you want files to be publicly accessible
      // ACL: 'public-read',
    });

    const result = await s3Client.send(uploadCommand);

    // Generate the file URL
    const fileUrl = `https://${BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;

    return NextResponse.json({
      success: true,
      message: 'File uploaded successfully',
      data: {
        fileName,
        fileUrl,
        fileSize: file.size,
        fileType: file.type,
        uploadedAt: new Date().toISOString(),
        etag: result.ETag,
      }
    });

  } catch (error) {
    console.error('Upload error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to upload file',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}