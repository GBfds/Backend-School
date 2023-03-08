-- DropIndex
DROP INDEX "alunos_email_key";

-- DropIndex
DROP INDEX "professores_email_key";

-- CreateTable
CREATE TABLE "cadeiras_pendentes" (
    "id" TEXT NOT NULL,
    "id_aluno" TEXT NOT NULL,
    "id_cadeira" TEXT NOT NULL,
    "confirmacao_prof" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "cadeiras_pendentes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cadeiras_pendentes" ADD CONSTRAINT "cadeiras_pendentes_id_aluno_fkey" FOREIGN KEY ("id_aluno") REFERENCES "alunos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cadeiras_pendentes" ADD CONSTRAINT "cadeiras_pendentes_id_cadeira_fkey" FOREIGN KEY ("id_cadeira") REFERENCES "cadeiras"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
