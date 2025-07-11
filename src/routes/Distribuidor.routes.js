import { Router } from "express";
//classe controller
import DistribuidorController from "../controller/Distribuidor.controller.js";

const DistribuidorRoutes = Router();
//READ das rotas
/**
 * @swagger
 * /Distribuidor:
 *   get:
 *     summary: Lista todos os distribuidores cadastrados
 *     tags:
 *       - Distribuidores
 *     responses:
 *       200:
 *         description: Lista todos os distribuidores cadastrados
 */
DistribuidorRoutes.get("/",DistribuidorController.getDistribuidorController);

//CREATE das rotas
/**
 * @swagger
 * /Distribuidor/cadastro:
 *   post:
 *     summary: Cadastra um novo distribuidor
 *     tags:
 *       - Distribuidores
 *     responses:
 *       200:
 *         description: Cadastra um novo distribuidor
 */
DistribuidorRoutes.post("/cadastro",DistribuidorController.createDistribuidorController);

//UPDATE das rotas
/**
 * @swagger
 * /Distribuidor/atualizar/:id:
 *   put:
 *     summary: Atualiza os dados de um distribuidor pelo ID
 *     tags:
 *       - Distribuidores
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do distribuidor a ser atualizado
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: João Distribuidor
 *               contato:
 *                 type: string
 *                 example: (71) 91234-5678
 *               documento:
 *                 type: string
 *                 example: 123.456.789-00
 *               alimentos:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["Feijão", "Arroz", "Macarrão"]
 *               regiao_atuacao:
 *                 type: string
 *                 example: Região Metropolitana de Salvador
 *               criado_em:
 *                 type: string
 *                 format: date-time
 *                 example: 2024-01-15T10:00:00Z
 *               atualizado_em:
 *                 type: string
 *                 format: date-time
 *                 example: 2025-05-21T14:30:00Z
 *     responses:
 *       200:
 *         description: Atualiza os dados de um distribuidor pelo ID
 *       404:
 *         description: Distribuidor não encontrado
 */
DistribuidorRoutes.put("/atualizar/:id",DistribuidorController.updateDistribuidorControlller);

//DELETE das rotas
/**
 * @swagger
 * /Distribuidor/deletar/:id:
 *   delete:
 *     summary: Remove um distribuidor pelo ID
 *     tags:
 *       - Distribuidores
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do distribuidor a ser removido
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Distribuidor removido com sucesso
 *       404:
 *         description: Distribuidor não encontrado
 */
DistribuidorRoutes.delete("/deletar/:id",DistribuidorController.deleteDistribuidorController);


export default DistribuidorRoutes;