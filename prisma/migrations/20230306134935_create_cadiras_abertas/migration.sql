/*
  Warnings:

  - You are about to drop the `materias` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "materias" DROP CONSTRAINT "materias_alunos_matriculados_fkey";

-- DropForeignKey
ALTER TABLE "materias" DROP CONSTRAINT "materias_id_professor_fkey";

-- DropTable
DROP TABLE "materias";

-- CreateTable
CREATE TABLE "cadeiras" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "dt_inicio" TIMESTAMP(3),
    "dt_fim" TIMESTAMP(3),
    "carga_horaria" INTEGER NOT NULL,
    "id_professor" TEXT NOT NULL,

    CONSTRAINT "cadeiras_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cadeiras_abertas" (
    "id" TEXT NOT NULL,
    "id_cadeira" TEXT NOT NULL,
    "id_aluno" TEXT NOT NULL,

    CONSTRAINT "cadeiras_abertas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cadeiras" ADD CONSTRAINT "cadeiras_id_professor_fkey" FOREIGN KEY ("id_professor") REFERENCES "professores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cadeiras_abertas" ADD CONSTRAINT "cadeiras_abertas_id_cadeira_fkey" FOREIGN KEY ("id_cadeira") REFERENCES "cadeiras"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cadeiras_abertas" ADD CONSTRAINT "cadeiras_abertas_id_aluno_fkey" FOREIGN KEY ("id_aluno") REFERENCES "alunos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
