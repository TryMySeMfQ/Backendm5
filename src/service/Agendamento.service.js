import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//READ 
export async function getAgendamento() {
    const rows = await prisma.agendamento.findMany();
    return rows;
}

//CREATE
export async function createAgendamento(db) {
    const created = await prisma.agendamento.create({
        data: {
            data_hora : db.data_hora,                
            status : db.status,                   
            observacoes : db.observacoes,
            alimento_nome: db.alimento_nome,
            distribuidor_nome: db.distribuidor_nome,
            receptor_nome: db.receptor_nome,
        }
    });
    return created;

}

export async function deleteAgendamento(id) { 
    const consists = await prisma.agendamento.findUnique({where:{id}});
    if (!consists) return null;

    const del = await prisma.agendamento.delete ({where: {id} }); 

    return del;
}

//UPDATE
export async function uptadeAgendamento(id, db){
    const update = await prisma.agendamento.update({
        where: { id },
        data: {
            data_hora : db.data_hora,                
            status : db.status,                   
            observacoes : db.observacoes,
            alimento_nome: db.alimento_nome,
            distribuidor_nome: db.distribuidor_nome,
            receptor_nome: db.receptor_nome,
        },
    });
    return update;
}
