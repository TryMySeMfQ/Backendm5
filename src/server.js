import app from './app.js';
import { logEvents } from './middlewares/logger.middlewares.js';

const PORT = process.env.BACKEND_PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Rodando na porta http://localhost:${PORT}`);
  logEvents(`Rodando na porta http://localhost:${PORT}`, 'listen.log');
});