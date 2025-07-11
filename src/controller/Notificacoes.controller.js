import{
    getNotificacoes,
    createNotificacoes,
    deleteNotificacoes,
    updateNotificacoes,
} from "../service/Notificacoes.service.js";


class NotificacoesController{

    // controller do READ
    async getNotificacoesController(req, res) {
        const notificacoesController = await getNotificacoes();

        res.status(200).json({message:"Notificações encontradas com sucesso: ", notificacoesController});
    }


    // controller do CREATE
    async createNotificacoesController(req, res) {
        //corpo da requisição
        const { 
            categoria, 
            mensagem, 
            receptor, 
            lida, 
        } = req.body
        
        //validando se tem
        if(
            !categoria || 
            !mensagem || 
            !receptor || 
            !lida
        ) {
            return res.status(400).json({message:"Preencha todos os campos obrigatórios!"});
        } 

        const notificacoesCre = await createNotificacoes({
            categoria, 
            mensagem, 
            receptor, 
            lida,
        }); 

    res.status(201).json({message:"Notificação criada com sucesso!", notificacoesCre});

    }


    // UPDATE
    async updateNotificacoesController(req, res) {
        const { id } = req.params;
        const { 
            categoria, 
            mensagem, 
            receptor, 
            lida,  
        } = req.body;

        if(
            !categoria || 
            !mensagem || 
            !receptor || 
            !lida
        ) {
            return res.status(400).json({message:"Preencha todos os campos obrigatórios!"});
        }   
        try{
            const NotificacoesUp = await updateNotificacoes(id, {
                categoria, 
                mensagem, 
                receptor, 
                lida,  
            });

            if(!NotificacoesUp)return res.status(404).json({
                message:"Notificação não encontrado"
            });
        
            res.status(200).json({
                message:"Notificação Atualizada!", Notificação:NotificacoesUp
            });

        }catch(error){
            res.status(500).json({ message:"Erro ao atualizar Notificação", error:error.message });
        }

}

   // controller do DELETE
    async deleteNotificacoesController(req, res) {
        const { id } = req.params;

        const NotificacoesDel = await deleteNotificacoes(id);

        if(!NotificacoesDel) {
            return res.status(404).json({message:"Notificação não encontrada!"});
        }

        res.status(200).json({message:"Notificação deletada com sucesso!", NotificacoesDel});
    }

}
export default new NotificacoesController();