import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//READ 
export async function getReceptor() {
    const rows = await prisma.receptor .findMany();
    return rows;
}

//CREATE
export async function createReceptor(db) {
    const created = await prisma.receptor.create({
        data: {
            nome: db.nome,
            tipo: db.tipo,
            endereco: db.endereco,
            contato: db.contato,
            capacidade_recebimento: db.capacidade_recebimento,
            alimentos_recebidos: db.alimentos_recebidos
        }
    });
    return created;

}

export async function deleteReceptor(id) { 
    const consists = await prisma.receptor.findUnique({where:{id}});
    if (!consists) return null;

    const del = await prisma.receptor.delete ({where: {id}}); 

    return del;
}

//UPDATE
export async function updateReceptor(id, db){
    const update = await prisma.receptor.update({
        where: { id },
        data: {
            nome: db.nome,
            tipo: db.tipo,
            endereco: db.endereco,
            contato: db.contato,
            capacidade_recebimento: db.capacidade_recebimento,
            alimentos_recebidos: db.alimentos_recebidos
        },
    });
    return update;
}
