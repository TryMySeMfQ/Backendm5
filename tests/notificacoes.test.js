// tests/alimento.test.js
import request from 'supertest';
import app from '../src/app.js';
import { text } from 'express';
describe("Testes da rota /notificacoes", () => {
  let idCriado;

  test("POST /notificacoes/cadastro", async () => {
    const res = await request(app)
      .post("/notificacoes/cadastro")
      .send({
        categoria: "IMPORTANTE",
        mensagem: "Cadastro finalizado",
        receptor: "Armazem",
        lida: true,
      });
    expect(res.statusCode).toBe(201);
    idCriado= res.body.notificacoesCre.id; // armazena o ID retornado
  });

  test("GET /notificacoes/", async () => {
    const res = await request(app).get("/notificacoes/");
    expect(res.statusCode).toBe(200);
  });

  test("PUT /notificacoes/atualizar/:id", async () => {
    const res = await request(app)
      .put(`/notificacoes/atualizar/${idCriado}`)
      .send({
        categoria: "IMPORTANTE",
        mensagem: "Cadastro atualizado",
        receptor: "Armazem",
        lida: true,
      });
    expect(res.statusCode).toBe(200);
  });

  test("DELETE /notificacoes/deletar/:id", async () => {
    const res = await request(app).delete(`/notificacoes/deletar/${idCriado}`);
    expect(res.statusCode).toBe(200);
  });
});