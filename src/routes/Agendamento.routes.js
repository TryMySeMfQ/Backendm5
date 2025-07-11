import { Router } from 'express';
import  AgendamentoController  from '../controller/Agendamento.controller.js';

const AgendamentoRouter = Router();
//READ das rotas 
/**
 * @swagger
 * /agendamento:
 *   get:
 *     summary: Lista todos os Agendamentos cadastrados
 *     tags:
 *      - Agendamentos
 *     responses:
 *       200:
 *         description: Lista todos os Agendamentos cadastrados
 */
AgendamentoRouter.get("/", AgendamentoController.getAgendamentoController);

//CREATE das rotas
/**
 * @swagger
 * /agendamento/cadastro:
 *   post:
 *     summary: Cadastra um novo Agendamento
 *     tags:
 *       - Agendamentos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: Instituto Solidário
 *               tipo:
 *                 type: string
 *                 example: ONG
 *               endereco:
 *                 type: string
 *                 example: Rua das Flores, 123
 *               contato:
 *                 type: string
 *                 example: (71) 99999-9999
 *               capacidade_recebimento:
 *                 type: integer
 *                 example: 500
 *               alimentos_recebidos:
 *                 type: integer
 *                 example: 250
 *     responses:
 *       200:
 *         description: Cadastra um novo Agendamento
 *       400:
 *         description: Dados inválidos fornecidos
 */

AgendamentoRouter.post("/cadastro", AgendamentoController.createAgendamentoController)

//UPDATE das rotas
/**
 * @swagger
 * /agendamento/atualizar/{id}:
 *   put:
 *     summary: Atualiza os dados de um Agendamento pelo ID
 *     tags:
 *       - Agendamentos
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do Agendamento a ser atualizado
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
 *                 example: Instituto Esperança
 *               tipo:
 *                 type: string
 *                 example: ONG
 *               endereco:
 *                 type: string
 *                 example: Rua do Sol, 456
 *               contato:
 *                 type: string
 *                 example: (71) 98888-8888
 *               capacidade_recebimento:
 *                 type: integer
 *                 example: 300
 *               alimentos_recebidos:
 *                 type: integer
 *                 example: 120
 *     responses:
 *       200:
 *         description: Dados atualizados com sucesso
 *       404:
 *         description: Agendamento não encontrado
 */

AgendamentoRouter.put("/atualizar/:id", AgendamentoController.uptadeAgendamentoController);

//DELETE das rotas
/**
 * @swagger
 * /agendamento/deletar/{id}:
 *   delete:
 *     summary: Remove um Agendamento pelo ID
 *     tags:
 *      - Agendamentos
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do Agendamento a ser removido
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Agendamento removido com sucesso
 *       404:
 *         description: Agendamento não encontrado
 */  
AgendamentoRouter.delete("/deletar/:id", AgendamentoController.deleteAgendamentoController);

export default AgendamentoRouter;