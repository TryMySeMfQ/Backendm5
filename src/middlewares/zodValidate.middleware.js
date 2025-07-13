import { z } from "zod";

export const validateBody = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      error: "Erro de validação no corpo da requisição",
      detalhes: result.error.flatten()
    });
  }
  req.body = result.data;
  next();
};

export const validateParams = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.params);
  if (!result.success) {
    return res.status(400).json({
      error: "Erro de validação nos parâmetros",
      detalhes: result.error.flatten()
    });
  }
  req.params = result.data;
  next();
};

export const validateQuery = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.query);
  if (!result.success) {
    return res.status(400).json({
      error: "Erro de validação na query string",
      detalhes: result.error.flatten()
    });
  }
  req.query = result.data;
  next();
};
