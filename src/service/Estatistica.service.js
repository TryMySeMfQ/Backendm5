import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//READ
export async function getEstatistica() {
    const rows = await prisma.estatistica.findMany();
    return rows;
}

//CREATE
export async function createEstatistica(db) {
    const created = await prisma.estatistica.create({
        data: {
            mais_desperdicados: db.mais_desperdicados,
            total_alimentos: db.total_alimentos,
            total_doacoes: db.total_doacoes,
            total_recebidos: db.total_recebidos,
            ranking_categoria: db.ranking_categoria,
    }});
    return created;
}

export async function deleteEstatistica(id) {
    const consists = await prisma.estatistica.findUnique({ where: { id } });
    if (!consists) return null;

    const del = await prisma.estatistica.delete({ where: { id } });

    return del;
}

//UPDATE
//nao recebe o criado em
export async function updateEstatistica(id, db) {
    const update = await prisma.estatistica.update({
        where: { id },
        data: {
            mais_desperdicados: db.mais_desperdicados,
            total_alimentos: db.total_alimentos,
            total_doacoes: db.total_doacoes,
            total_recebidos: db.total_recebidos,
            ranking_categoria: db.ranking_categoria,
        },
    });
    return update;
}