/*
  Warnings:

  - You are about to drop the column `assignedTo` on the `memos` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `memos` table. All the data in the column will be lost.
  - Added the required column `assignTo` to the `memos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "memos" DROP COLUMN "assignedTo",
DROP COLUMN "price",
ADD COLUMN     "assignTo" TEXT NOT NULL;
