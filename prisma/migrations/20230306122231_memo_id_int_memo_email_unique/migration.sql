/*
  Warnings:

  - The primary key for the `memos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `memos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "memos" DROP CONSTRAINT "memos_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "memos_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
