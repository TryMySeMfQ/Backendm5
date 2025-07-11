// tests/alimento.test.js
import request from 'supertest';
import app from '../src/app.js';


describe("Testes da rota /estatistica", () => {
  let id;
  test("GET /doacao/", async () => {
    const res = await request(app).get("/doacao/");
    expect(res.statusCode).toBe(200);
  });

  test("POST /doacao/cadastro", async () => {
    const res = await request(app)
      .post("/doacao/cadastro")
      .send({
        alimento_nome: "Maçã", 
        quantidade: 100, 
        doador_nome: "João",
        data_doacao: "2023-10-01", 
        localizacao: "Rua A, 123",
        validado: true,
      });
    expect(res.statusCode).toBe(201);
    id = res.body.doacaoCre.id; // armazena o ID retornado
  });

  test("PUT /doacao/atualizar/:id", async () => {
    const res = await request(app)
      .put(`/doacao/atualizar/${id}`)
      .send({
        alimento_nome: "Maçã", 
        quantidade: 100, 
        doador_nome: "João",
        data_doacao: "2023-10-01", 
        localizacao: "Rua A, 123",
        validado: true,
      });
    expect(res.statusCode).toBe(200);
  });

  test("DELETE /doacao/deletar/:id", async () => {
    const res = await request(app).delete(`/doacao/deletar/${id}`);
    expect(res.statusCode).toBe(200);
  });
});