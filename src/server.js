import app from './app.js';
import { logEvents } from './middlewares/logger.middlewares.js';

const PORT = process.env.BACKEND_PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  logEvents(`Servidor iniciado na porta ${PORT}`, 'server.log');
});