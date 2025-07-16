import express from 'express';
import { register, login } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// Exemplo de rota protegida:
router.get('/profile', authMiddleware, (req, res) => {
  res.json({ message: `Bem-vindo, usuário ${req.userId}!` });
});

export default router;