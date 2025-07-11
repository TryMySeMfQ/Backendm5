//servicos
import{
    getDistribuidor,
    createDistribuidor,
    deleteDistribuidor,
    updateDistribuidor,
} from "../service/Distribuidor.service.js";
//depois colocar logs

class DistribuidorController{

    //controller do read
    async getDistribuidorController(req,res){
        const distribuidorController = await getDistribuidor();

        res.status(200).json({message:"Todos os distribuidores: ", distribuidorController});
    }

    //controller do create
    async createDistribuidorController(req, res){
        //corpo da requisicao
        const{
            nome,          
            contato,
            documento,
            alimentos,
            regiao_atuacao,
        } = req.body 

        //validando se tem
        if(
            !nome ||           
            !contato ||
            !documento ||
            !alimentos ||
            !regiao_atuacao 
        ){
            res.status(400).json({message:"Adicione todos dados corretamente",});
        }

        try{
            const distribuidorCre = await createDistribuidor({
                nome,           
                contato,
                documento,
                alimentos,
                regiao_atuacao,
            });

            res.status(201).json({
                message:"distribuidor criado!", distribuidorCre
            });
        }catch(error){
            res.status(500).json({ message:"Erro ao cadastrar alimento", error:error.message });
        }



    } 

    //DELETE
    async deleteDistribuidorController(req,res){
        //parametro da requisicao
        const {id} = req.params; 

        const distribuidorDel =  await deleteDistribuidor(id);

        if(!distribuidorDel) return res.status(404).json({
            message:"Distribuidor não enconstrado"
        });

        res.status(200).json({
            message:"distribuidor deletado!",
            distribuidoroDeletado: distribuidorDel
        });

    }


    //UPDATE (delete+create)
     async updateDistribuidorControlller(req,res){
        //parametro da requisicao
        const {id} = req.params; 
        //corpo da requisicao
        const{
            nome,           
            contato,
            documento,
            alimentos,
            regiao_atuacao,
        } = req.body 

        //validando se tem
        if(
            !nome ||           
            !contato ||
            !documento ||
            !alimentos ||
            !regiao_atuacao
        ){
            res.status(400).json({message:"Adicione todos dados corretamente",});
        }

        try{
            const distribuidorUp = await updateDistribuidor(id,{
                nome,           
                contato,
                documento,
                alimentos,
                regiao_atuacao,
            });
            if(!distribuidorUp)return res.status(404).json({
                message:"distribuidor não enconstrado"
                });
        
            res.status(200).json({
                message:"distribuidor Atualizado!",  updateDistribuidor:distribuidorUp
            });
        }catch(error){
            res.status(500).json({ message:"Erro ao atualizar alimento", error:error.message });
        }


     }


}

export default new  DistribuidorController();