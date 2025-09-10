/*
  Warnings:

  - You are about to drop the `Document` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."DocumentCategory" AS ENUM ('PRESCRIPTION', 'XRAY', 'LAB_TESTS', 'GENERAL_DOCUMENTS', 'OTHERS');

-- CreateEnum
CREATE TYPE "public"."DocumentStatus" AS ENUM ('UPLOADING', 'UPLOADED', 'PROCESSING', 'FAILED');

-- DropForeignKey
ALTER TABLE "public"."Document" DROP CONSTRAINT "Document_userId_fkey";

-- DropTable
DROP TABLE "public"."Document";

-- CreateTable
CREATE TABLE "public"."documents" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "fileSize" INTEGER NOT NULL,
    "fileType" TEXT NOT NULL,
    "category" "public"."DocumentCategory" NOT NULL,
    "status" "public"."DocumentStatus" NOT NULL DEFAULT 'UPLOADED',
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "documents_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."documents" ADD CONSTRAINT "documents_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
