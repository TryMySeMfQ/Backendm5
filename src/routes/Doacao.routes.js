import { Router } from "express";
import DoacaoController from "../controller/Doacao.controller.js";


const doacaoRoutes = Router();
// READ das rotas
/**
 * @swagger
 * /Doacao:
 *   get:
 *     summary: Lista todas as doações registradas
 *     tags:
 *     - Doacao
 *     responses:
 *       200:
 *         description: Lista todas as doações registradas
 */
doacaoRoutes.get("/", DoacaoController.getDoacaoController);

// CREATE das rotas
/**
 * @swagger
 * /Doacao/cadastro:
 *   post:
 *     summary: Cadastra uma nova doação
 *     tags:
 *     - Doacao
 *     responses:
 *       200:
 *         description: Cadastra uma nova doação
 */
doacaoRoutes.post("/cadastro", DoacaoController.createDoacaoController);

// UPDATE das rotas
/**
 * @swagger
 * /Doacao/atualizar/:id:
 *   put:
 *     summary: Atualiza os dados de uma doação pelo ID
 *     tags:
 *     - Doacao
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da doação a ser atualizada
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               alimento:
 *                 type: string
 *                 example: Arroz
 *               quantidade:
 *                 type: integer
 *                 example: 20
 *               doador_nome:
 *                 type: string
 *                 example: Maria Silva
 *               data_doacao:
 *                 type: string
 *                 format: date
 *                 example: 2025-05-21
 *               localizacao:
 *                 type: string
 *                 example: Rua Central, 789 - Salvador
 *               validado:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Dados da doação atualizados com sucesso
 *       404:
 *         description: Doação não encontrada
 */
doacaoRoutes.put("/atualizar/:id", DoacaoController.updateDoacaoController);

// DELETE das rotas
/**
 * @swagger
 * /Doacao/deletar/:id:
 *   delete:
 *     summary: Remove uma doação pelo ID
 *     tags:
 *     - Doacao
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da doação a ser removida
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Doação removida com sucesso
 *       404:
 *         description: Doação não encontrada
 */
doacaoRoutes.delete("/deletar/:id", DoacaoController.deleteDoacaoController);

export default doacaoRoutes;