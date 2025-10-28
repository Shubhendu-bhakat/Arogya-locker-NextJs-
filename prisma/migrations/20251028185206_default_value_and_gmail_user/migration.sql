-- CreateEnum
CREATE TYPE "public"."Provider" AS ENUM ('CREDENTIALS', 'GOOGLE');

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "provider" "public"."Provider" NOT NULL DEFAULT 'CREDENTIALS';
