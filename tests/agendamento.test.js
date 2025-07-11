// tests/alimento.test.js
import request from 'supertest';
import app from '../src/app.js';



describe("Testes da rota /agendamento", () => {
  let id;
  test("GET /agendamento/", async () => {
    const res = await request(app).get("/agendamento/");
    expect(res.statusCode).toBe(200);
  });

  test("POST /agendamento/cadastro", async () => {
    const res = await request(app)
      .post("/agendamento/cadastro")
      .send({
            data_hora: "2025-12-01",            
            status:  "ACEITO",                   
            observacoes: "Rio de Janeiro",               
            alimento_nome: "Banana",               
            distribuidor_nome: "Jorge", 
            receptor_nome: "Marvio",
      });
    expect(res.statusCode).toBe(201);
    // salva o id retornado
    id = res.body.agendamentoCre.id;
  });

  test("PUT agendamento/atualizar/:id", async () => {
    const res = await request(app)
      .put(`/agendamento/atualizar/${id}`)
      .send({
            data_hora: "2025-12-01",            
            status:  "RECEBIDO",                   
            observacoes: "Rio de Janeiro ATT",               
            alimento_nome: "Oreo",               
            distribuidor_nome: "laercio", 
            receptor_nome: "BREroz"
      });
    expect(res.statusCode).toBe(200);
        console.log(id)
  });

  test("DELETE /agendamento/deletar/:id", async () => {
    const res = await request(app).delete(`/agendamento/deletar/${id}`);
    expect(res.statusCode).toBe(200);
  });
});