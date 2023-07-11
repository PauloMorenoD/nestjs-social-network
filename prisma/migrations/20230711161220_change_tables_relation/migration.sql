/*
  Warnings:

  - You are about to drop the column `commentId` on the `posts` table. All the data in the column will be lost.
  - Added the required column `postId` to the `comments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_commentId_fkey";

-- AlterTable
ALTER TABLE "comments" ADD COLUMN     "postId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "commentId";

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_postId_fkey" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
