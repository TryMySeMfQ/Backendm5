//seervicos
import{
    getAlimento,
    createAlimento,
    deleteAlimento,
    updateAlimento,
} from "../service/Alimento.service.js";
//depois colocar logs

class AlimentoController{

    //controller do read
    async getAlimentoController(req,res){
        const alimentoController = await getAlimento();

        res.status(200).json({message:"Todos os alimentos: ", alimentoController});
    }

    //controller do create
    async createAlimentoController(req, res){
        //corpo da requisicao
        const{
            nome,          
            descricao,
            peso,
            validade,
            categoria,
            estado,
            imagem_url,
        } = req.body 

        //validando se tem
        if(
            !nome ||           
            !descricao ||
            !peso ||
            !validade ||
            !categoria ||
            !estado ||
            !imagem_url
        ){
            res.status(400).json({message:"Adicione todos dados corretamente",});
        }

       try{
            const alimentoCre = await createAlimento({
                nome,          
                descricao,
                peso,
                validade,
                categoria,
                estado,
                imagem_url,
            });

            res.status(201).json({
                message:"Alimento criado!", alimentoCre
            });
       }catch(error){
            res.status(500).json({ message:"Erro ao cadastrar alimento", error:error.message });
       }

    } 



    //DELETE
    async deleteAlimentoController(req,res){
        //parametro da requisicao
        const {id} = req.params; 

        const alimentoDel =  await deleteAlimento(id);

        if(!alimentoDel) return res.status(404).json({
            message:"Alimento não enconstrado"
        });

        res.status(200).json({
            message:"Alimento deletado!",
            alimentoDeletado: alimentoDel
        });

    }


    //UPDATE (delete+create)
     async updateAlimentoControlller(req, res){
        //parametro da requisicao
        const {id} = req.params; 
        //corpo da requisicao
        const{
            nome,          
            descricao,
            peso,
            validade,
            categoria,
            estado,
            imagem_url,
        } = req.body 

        //validando se tem
        if(
            !nome ||           
            !descricao ||
            !peso ||
            !validade ||
            !categoria ||
            !estado ||
            !imagem_url
        ){
            res.status(400).json({message:"Adicione todos dados corretamente",});
        }

        try{
            const alimentoUp = await updateAlimento(id,{
                nome,          
                descricao,
                peso,
                validade,
                categoria,
                estado,
                imagem_url,
            });

            if(!alimentoUp)return res.status(404).json({
            message:"Alimento não encontrado"
            });
        
            res.status(200).json({
                message:"Alimento Atualizado!", Alimento:alimentoUp
            });

        }catch(error){
            res.status(500).json({ message:"Erro ao atualizar alimento", error:error.message });
        }

     }


}

export default new AlimentoController();