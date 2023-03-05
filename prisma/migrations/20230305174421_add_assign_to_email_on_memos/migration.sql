/*
  Warnings:

  - Added the required column `assignToEmail` to the `memos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "memos" ADD COLUMN     "assignToEmail" TEXT NOT NULL;
