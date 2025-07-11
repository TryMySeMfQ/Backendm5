import { PrismaClient } from "@prisma/client";

const prisma =  new PrismaClient();

//READ
export async function getAlimento(){
    const rows = await prisma.alimento.findMany();
    return rows;
}

//CREATE
export async function createAlimento(db){
    const created = await prisma.alimento.create({
        data: {
            nome: db.nome,            
            descricao: db.descricao,     
            peso: db.peso,           
            validade: db.validade,      
            categoria: db.categoria,     
            estado: db.estado,        
            imagem_url: db.imagem_url,
        },
    });
    return created;
}

export async function deleteAlimento(id){
    const consists = await prisma.alimento.findUnique({where: {id} });
    if(!consists) return null;

    const del = await prisma.alimento.delete({where: {id} });

    return del;
}


//UPDATE
//nao recebe o criado em
export async function updateAlimento(id, db){
    const update = await prisma.alimento.update({
        where:{id},
        data:{
            nome: db.nome,            
            descricao: db.descricao,     
            peso: db.peso,           
            validade: db.validade,      
            categoria: db.categoria,     
            estado: db.estado,        
            imagem_url: db.imagem_url,   
        },
    });
    return update;
}
