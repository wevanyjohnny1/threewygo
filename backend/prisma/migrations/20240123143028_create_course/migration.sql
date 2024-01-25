/*
  Warnings:

  - Made the column `end_at` on table `courses` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "courses" ALTER COLUMN "end_at" SET NOT NULL;
