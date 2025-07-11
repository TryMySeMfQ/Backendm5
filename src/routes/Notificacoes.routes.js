import { Router } from "express";
import NotificacoesController from "../controller/Notificacoes.controller.js";

const NotificacoesRoutes = Router();
//READ das rotas
NotificacoesRoutes.get("/", NotificacoesController.getNotificacoesController);

//CREATE das rotas
NotificacoesRoutes.post("/cadastro",NotificacoesController.createNotificacoesController);

//UPDATE das rotas
NotificacoesRoutes.put("/atualizar/:id",NotificacoesController.updateNotificacoesController);

//DELETE das rotas
NotificacoesRoutes.delete("/deletar/:id",NotificacoesController.deleteNotificacoesController);

export default NotificacoesRoutes;