-- CreateTable
CREATE TABLE "Tarefa" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "concluida" BOOLEAN NOT NULL,

    CONSTRAINT "Tarefa_pkey" PRIMARY KEY ("id")
);
