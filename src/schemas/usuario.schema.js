import { z } from "zod";

export const criarUsuarioSchema = z.object({
  nome: z.string().min(1, "O nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  senha: z.string().min(6, "A senha deve ter no mínimo 6 caracteres")
});
