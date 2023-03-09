/*
  Warnings:

  - You are about to alter the column `telefone` on the `professores` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(11)`.
  - You are about to alter the column `cpf` on the `professores` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(11)`.

*/
-- AlterTable
ALTER TABLE "professores" ALTER COLUMN "telefone" SET DATA TYPE VARCHAR(11),
ALTER COLUMN "cpf" SET DATA TYPE VARCHAR(11);
