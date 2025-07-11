// tests/alimento.test.js
import request from 'supertest';
import app from '../src/app.js';

let id;
describe("Testes da rota /distribuidor", () => {
  test("GET /distribuidor/", async () => {
    const res = await request(app).get("/alimento/");
    expect(res.statusCode).toBe(200);
  });

  test("POST /distribuidor/cadastro", async () => {
    const res = await request(app)
      .post("/distribuidor/cadastro")
      .send({
        nome: "Mercadão",
        contato : "21000000001",
        documento : " 00.394.460/0000-07",
        alimentos: "Abobora",
        regiao_atuacao: "Sudeste",

      });
    expect(res.statusCode).toBe(201);
     // salva o id retornado
    id = res.body.distribuidorCre.id;
  });

  test("PUT /distribuidor/atualizar/:id", async () => {
    const res = await request(app)
      .put(`/distribuidor/atualizar/${id}`)
      .send({
       nome: "Mercadão",
        contato: "21000000001",
        documento : " 00.394.460/0000-07",
        alimentos: "Abobora",
        regiao_atuacao: "Sudeste",

      });
    expect(res.statusCode).toBe(200);
  });

  test("DELETE /distribuidor/deletar/:id", async () => {
    const res = await request(app).delete(`/distribuidor/deletar/${id}`);
    expect(res.statusCode).toBe(200);
  });
});