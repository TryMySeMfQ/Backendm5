-- CreateEnum
CREATE TYPE "categoriaENUM" AS ENUM ('LEGUME', 'FRUTA', 'DOCE', 'CARNE', 'TRANSGENICO', 'LANCHE', 'REFEICAO');

-- CreateEnum
CREATE TYPE "tipoENUM" AS ENUM ('ONG', 'ESCOLA', 'HOSPITAL', 'PJ', 'PF', 'OUTRO');

-- CreateEnum
CREATE TYPE "statusENUM" AS ENUM ('INICIADO', 'ACEITO', 'CONCLUIDO', 'RECEBIDO');

-- CreateEnum
CREATE TYPE "tipagemENUM" AS ENUM ('IMPORTANTE', 'URGENTE', 'OUTRAS');

-- CreateTable
CREATE TABLE "alimento" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "peso" INTEGER NOT NULL,
    "validade" TEXT NOT NULL,
    "categoria" "categoriaENUM" NOT NULL,
    "estado" INTEGER NOT NULL,
    "imagem_url" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "alimento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "distribuidor" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "contato" TEXT NOT NULL,
    "documento" TEXT NOT NULL,
    "alimentos" TEXT NOT NULL,
    "regiao_atuacao" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "distribuidor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estatistica" (
    "id" TEXT NOT NULL,
    "mais_desperdicados" TEXT NOT NULL,
    "total_alimentos" INTEGER NOT NULL,
    "total_doacoes" INTEGER NOT NULL,
    "total_recebidos" INTEGER NOT NULL,
    "ranking_categoria" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "estatistica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doacao" (
    "id" TEXT NOT NULL,
    "alimento_nome" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "doador_nome" TEXT NOT NULL,
    "data_doacao" TIMESTAMP(3) NOT NULL,
    "localizacao" TEXT NOT NULL,
    "validado" BOOLEAN NOT NULL DEFAULT false,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "doacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "receptor" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" "tipoENUM" NOT NULL,
    "endereco" TEXT NOT NULL,
    "contato" TEXT NOT NULL,
    "capacidade_recebimento" INTEGER NOT NULL,
    "alimentos_recebidos" INTEGER NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Atualizado_em" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "receptor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "agendamento" (
    "id" TEXT NOT NULL,
    "data_hora" TIMESTAMP(3) NOT NULL,
    "status" "statusENUM" NOT NULL,
    "observacoes" TEXT NOT NULL,
    "alimento_nome" TEXT NOT NULL,
    "distribuidor_nome" TEXT NOT NULL,
    "receptor_nome" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "agendamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notificacoes" (
    "id" TEXT NOT NULL,
    "categoria" "tipagemENUM" NOT NULL,
    "mensagem" TEXT NOT NULL,
    "receptor" TEXT NOT NULL,
    "lida" BOOLEAN NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notificacoes_pkey" PRIMARY KEY ("id")
);
