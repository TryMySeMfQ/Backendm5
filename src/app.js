import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { logger } from './middlewares/logger.middlewares.js';
import { swaggerUi, swaggerSpec } from './swagger.js';

// Configura variáveis de ambiente
dotenv.config();

const app = express();

// CORS configurado
const cors_config = { origin: 'http://localhost:3000' };

// Middlewares
app.use(logger);
app.use(express.json());
app.use(cors(cors_config));

// Rotas
import alimentoRoutes from './routes/Alimento.routes.js';
import distribuidorRoutes from './routes/Distribuidor.routes.js';
import doacaoRoutes from './routes/Doacao.routes.js';
import estatisticaRoutes from './routes/Estatistica.routes.js';
import notificacoesRoutes from './routes/Notificacoes.routes.js';
import receptorRoutes from './routes/Receptores.routes.js';
import agendamentoRoutes from './routes/Agendamento.routes.js';

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Usando rotas
app.use("/alimento", alimentoRoutes);
app.use("/distribuidor", distribuidorRoutes);
app.use("/doacao", doacaoRoutes);
app.use("/estatistica", estatisticaRoutes);
app.use("/receptor", receptorRoutes);
app.use("/notificacoes", notificacoesRoutes);
app.use("/agendamento", agendamentoRoutes);

export default app;