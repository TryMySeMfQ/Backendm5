import { Router }  from "express"; 
import EstatisticaController from "../controller/Estatistica.controller.js";

const EstatisticaRoutes = Router();

//READ das rotas
EstatisticaRoutes.get("/", EstatisticaController.getEstatisticaController);

//CREATE das rotas
EstatisticaRoutes.post("/cadastro", EstatisticaController.createEstatisticaController);

//UPDATE das rotas
EstatisticaRoutes.put("/atualizar/:id", EstatisticaController.updateEstatisticaController);

//DELETE das rotas
EstatisticaRoutes.delete("/deletar/:id", EstatisticaController.deleteEstatisticaController);

export default EstatisticaRoutes;