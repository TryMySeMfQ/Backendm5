//servicos
import {
    getEstatistica,
    createEstatistica,
    deleteEstatistica,
    updateEstatistica,
} from '../service/Estatistica.service.js';

class EstatisticaController {
    // controller do READ
    async getEstatisticaController(req, res) {
        const estatisticaController = await getEstatistica();

        res.status(200).json({ message: "Estatisticas encontradas com sucesso: ", estatisticaController });
    }

    // controller do CREATE
    async createEstatisticaController(req, res) {
        //corpo da requisição
        const {
            mais_desperdicados,
            total_alimentos,
            total_doacoes,
            total_recebidos,
            ranking_categoria,
        } = req.body

        //validando se tem
        if (
            !mais_desperdicados ||
            !total_alimentos ||
            !total_doacoes ||
            !total_recebidos ||
            !ranking_categoria
        ) {
            return res.status(400).json({ message: "Preencha todos os campos obrigatórios!" });
        }

        try{
            const estatisticaCre = await createEstatistica({
                mais_desperdicados,
                total_alimentos,
                total_doacoes,
                total_recebidos,
                ranking_categoria,
            });

            res.status(201).json({ message: "Estatistica criada com sucesso!", estatisticaCre });
            
        }catch(error){
            res.status(500).json({ message:"Erro ao cadastrar alimento", error:error.message });
        }



    }

    // UPDATE
    async updateEstatisticaController(req, res) {
        const { id } = req.params;
        const {
            mais_desperdicados,
            total_alimentos,
            total_doacoes,
            total_recebidos,
            ranking_categoria,
        } = req.body

        //validando se tem
        if (
            !mais_desperdicados ||
            !total_alimentos ||
            !total_doacoes ||
            !total_recebidos ||
            !ranking_categoria
        ) {
            return res.status(400).json({ message: "Preencha todos os campos obrigatórios!" });
        }

        const estatisticaUp = await updateEstatistica(id, {
            mais_desperdicados,
            total_alimentos,
            total_doacoes,
            total_recebidos,
            ranking_categoria,
        });

        res.status(200).json({ message: "Estatistica atualizada com sucesso!", estatisticaUp });
    }

    // DELETE
    async deleteEstatisticaController(req, res) {
        const { id } = req.params;

        const estatisticaDel = await deleteEstatistica(id);

        if (!estatisticaDel) {
            return res.status(404).json({ message: "Estatistica não encontrada!" });
        }

        res.status(200).json({ message: "Estatistica deletada com sucesso!", estatisticaDel });
    }
}
export default new EstatisticaController();