// tests/alimento.test.js
import request from 'supertest';
import app from '../src/app.js';

let id;
describe("Testes da rota /alimento", () => {
  it("GET alimento/", async () => {
    const res = await request(app).get("/alimento/");
    expect(res.statusCode).toBe(200);
  });

  it("POST /alimento/cadastro", async () => {
    const res = await request(app)
      .post("/alimento/cadastro")
      .send({
        nome: "Banana",
        descricao: "Alimento de teste",
        peso: 10,
        validade: "2025-12-31",
        categoria: "FRUTA",
        estado: 1,
        imagem_url: "http://imagem.com/"
      });
    expect(res.statusCode).toBe(201);
     // salva o id retornado
    id = res.body.alimentoCre.id;
    expect(id).toBeDefined(); // opcional: garante que o id veio
  });

  it("PUT /alimento/atualizar/:id", async () => {
    const res = await request(app)
      .put(`/alimento/atualizar/${id}`)
      .send({
        nome: "Banana Atualiza",
        descricao: "Alimento de teste",
        peso: 10,
        validade: "2025-12-01",
        categoria: "FRUTA",
        estado: 1,
        imagem_url: "http://imagem.com/new"
      });
    expect(res.statusCode).toBe(200);
  });

  it("DELETE /alimento/deletar/:id", async () => {
    const res = await request(app).delete(`/alimento/deletar/${id}`);
    expect(res.statusCode).toBe(200);

    // Verifica se o alimento foi realmente deletado
  const getRes = await request(app).get(`/alimento/${id}`);
  expect(getRes.statusCode).toBe(404); // Não deve encontrar o alimento
  });
});