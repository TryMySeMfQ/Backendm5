import { Router } from "express";
import AlimentoController from "../controller/Alimento.controller.js";

const alimentoRoutes = Router();
//READ das rotas
/**
 * @swagger
 * /alimento:
*
 *   get:
 *     summary: Lista todos os alimentos disponíveis
 *     tags:
 *       - Alimentos
 *     responses:
 *       200:
 *         description: Lista todos os alimentos disponíveis
 */
alimentoRoutes.get("/",AlimentoController.getAlimentoController);

/**
 * @swagger
 * /alimento/cadastro:
 *   post:
 *     summary: Cadastra um novo alimento
 *     tags:
 *       - Alimentos
 *     responses:
 *       200:
 *         description: Cadastra um novo alimento
 */
//CREATE das rotas
alimentoRoutes.post("/cadastro",AlimentoController.createAlimentoController);

//UPDATE das rotas
/**
 * @swagger
 * /alimento/atualizar/:id:
 *   put:
 *     summary: Atualiza os dados de um alimento pelo ID
 *     tags:
 *       - Alimentos
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do alimento a ser atualizado
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
 *                 example: Arroz Integral
 *               descricao:
 *                 type: string
 *                 example: Pacote de arroz integral de 1kg
 *               peso:
 *                 type: number
 *                 format: float
 *                 example: 1.0
 *               validade:
 *                 type: string
 *                 format: date
 *                 example: 2025-12-31
 *               categoriaEncontrada:
 *                 type: string
 *                 example: Grãos
 *               estado:
 *                 type: string
 *                 example: Em bom estado
 *               imagem_url:
 *                 type: string
 *                 format: uri
 *                 example: https://exemplo.com/imagens/arroz.png
 *     responses:
 *       200:
 *         description: Alimento atualizado com sucesso
 *       404:
 *         description: Alimento não encontrado
 */
alimentoRoutes.put("/atualizar/:id",AlimentoController.updateAlimentoControlller);

//DELETE das rotas
/**
 * @swagger
 * /alimento/deletar/:id:
 *   delete:
 *     summary: Remove um alimento pelo ID
 *     tags:
 *       - Alimentos
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do alimento a ser removido
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Alimento removido com sucesso
 *       404:
 *         description: Alimento não encontrado
 */
alimentoRoutes.delete("/deletar/:id",AlimentoController.deleteAlimentoController);

export default alimentoRoutes;