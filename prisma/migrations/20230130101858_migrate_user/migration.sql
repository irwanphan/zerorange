/*
  Warnings:

  - You are about to alter the column `firstName` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(30)`.
  - You are about to alter the column `lastName` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(30)`.
  - A unique constraint covering the columns `[code]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "dateOfBirth" DATE,
ADD COLUMN     "emailVerified" TIMESTAMP(3),
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "lastAccess" TIMESTAMP(3),
ADD COLUMN     "phone" VARCHAR(15),
ALTER COLUMN "firstName" SET DATA TYPE VARCHAR(30),
ALTER COLUMN "lastName" SET DATA TYPE VARCHAR(30);

-- CreateIndex
CREATE UNIQUE INDEX "User_code_key" ON "User"("code");
