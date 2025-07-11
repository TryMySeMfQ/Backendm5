    import{
        getAgendamento, uptadeAgendamento, createAgendamento, deleteAgendamento
    } from "../service/Agendamento.service.js";

    //depois colocar logs 

    //import {  tipoENUM } from "@prisma/client";

    class AgendamentoController{

        //controller do read
        async getAgendamentoController(req,res){
            const AgendamentoController = await getAgendamento();

            res.status (200).json({message: "Todos os agendamentos: ", AgendamentoController});

        }

        //controller do create 
        async createAgendamentoController(req,res){
            //corpo da requisicao
                const{
                    data_hora,                
                    status,                   
                    observacoes,
                    alimento_nome,
                    distribuidor_nome,
                    receptor_nome,
                } = req.body 

                //validando se tem
                if(
                    !data_hora ||               
                    !status ||                 
                    !observacoes||
                    !alimento_nome ||
                    !distribuidor_nome ||
                    !receptor_nome
                ){

                res.status(400).json({message: "Adicione todos dados corretamente"});
                }

            try{
                const agendamentoCre = await createAgendamento({
                    data_hora,                
                    status,                   
                    observacoes,
                    alimento_nome,
                    distribuidor_nome,
                    receptor_nome,
                });

                res.status(201).json({
                    message: "Agendamento criado com sucesso",
                    agendamentoCre,
                });
            }catch(error){
                res.status(500).json({ message:"Erro ao cadastrar um agendamento", error:error.message });
            }


        }
        //DELETE
        async deleteAgendamentoController(req,res){
            //parametro da requisicao
            const { id } = req.params;

            const agendamentoDel = await deleteAgendamento(id);

            if(!agendamentoDel){
                return res.status(404).json({message: "Agendamento não encontrado"});
            }

            res.status(200).json({message: "Agendamento deletado com sucesso", AgendamentoDeletado: agendamentoDel});

        }


        //UPDATE
        async uptadeAgendamentoController(req,res){
            //parametro da requsicao
            const { id } = req.params;
            //corpo da requisicao
            const {
                data_hora,                
                status,                   
                observacoes,
                alimento_nome,
                distribuidor_nome,
                receptor_nome,
            } = req.body;

            //validando se tem
            if(
                !data_hora ||               
                !status ||                 
                !observacoes ||
                !alimento_nome ||
                !distribuidor_nome ||
                !receptor_nome
            ){
                res.status(400).json({message: "Adicione todos dados corretamente"});
            }

            try{
                const agendamentoUp = await uptadeAgendamento(id,{
                    data_hora,                
                    status,                   
                    observacoes,
                    alimento_nome,
                    distribuidor_nome,
                    receptor_nome,
                });
                
                if(!agendamentoUp){
                    return res.status(404).json({message: "Agendamento não encontrado"});
                }

                res.status(200).json({
                    message: "Agendamento atualizado com sucesso",
                    AgendamentoAtualizado: agendamentoUp
                });

            }catch(error){
                res.status(500).json({ message:"Erro ao atualizar Agendamento", error:error.message });
            }


        }
    }
    export default new AgendamentoController();