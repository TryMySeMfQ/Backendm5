import { PrismaClient } from "@prisma/client";

const prisma =  new PrismaClient();

//READ
export async function getNotificacoes(){
    const rows = await prisma.notificacoes.findMany();
    return rows;
}

//CREATE
export async function createNotificacoes(db){
    const created = await prisma.notificacoes.create({
        data: {
            categoria: db.categoria,
            mensagem: db.mensagem,
            receptor: db.receptor,
            lida: db.lida,
        },
    });
    return created;
}

export async function deleteNotificacoes(id){
    const consists = await prisma.notificacoes.findUnique({where: {id} });
    if(!consists) return null;

    const del = await prisma.notificacoes.delete({where: {id} });

    return del;
}

export async function updateNotificacoes(id, db){
    const update = await prisma.notificacoes.update({
        where:{id},
        data:{
            categoria: db.categoria,
            mensagem: db.mensagem,
            receptor: db.receptor,
            lida: db.lida,
        },
    });
    return update;
}
