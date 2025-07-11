// tests/alimento.test.js
import request from 'supertest';
import app from '../src/app.js';



describe("Testes da rota /estatistica", () => {
let id;


  test("GET /estatistica/", async () => {
    const res = await request(app).get("/estatistica/");
    expect(res.statusCode).toBe(200);
  });

  test("POST /estatistica/cadastro", async () => {
    const res = await request(app)
      .post("/estatistica/cadastro")
      .send({
        mais_desperdicados: "Maçã",
        total_alimentos: 100,
        total_doacoes: 50,
        total_recebidos: 30,
        ranking_categoria: "Frutas",
      });
       console.log("Resposta do POST:", res.body);

    expect(res.statusCode).toBe(201);
    id = res.body.estatisticaCre.id; // armazena o ID retornado
  });

  test("PUT /estatistica/atualizar/:id", async () => {
    const res = await request(app)
      .put(`/estatistica/atualizar/${id}`)
      .send({
        mais_desperdicados: "Maçã",
        total_alimentos: 100,
        total_doacoes: 50,
        total_recebidos: 30,
        ranking_categoria: "Frutas",
      });
    expect(res.statusCode).toBe(200);
  });

  test("DELETE /estatistica/deletar/:id", async () => {
    const res = await request(app).delete(`/estatistica/deletar/${id}`);
    expect(res.statusCode).toBe(200);
  });
});