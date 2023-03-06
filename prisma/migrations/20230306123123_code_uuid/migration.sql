/*
  Warnings:

  - Changed the type of `code` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropIndex
DROP INDEX "users_code_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "code",
ADD COLUMN     "code" UUID NOT NULL;
