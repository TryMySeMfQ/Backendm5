import express from 'express';
import { registrar, login, logout, renovarToken } from '../controllers/authController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import rateLimit from 'express-rate-limit';
import { body } from 'express-validator';
import validarRequisicao from '../middlewares/validarRequisicao.js';

const router = express.Router();

// Configuração de limite de taxa (para prevenir ataques de força bruta)
const limitadorTaxa = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 10, // Limite mais restritivo
  headersPadroes: true,
  headersLegados: false,
  ignorarRequisicoesBemSucedidas: true, // Contar apenas tentativas falhas
  handler: (req, res) => {
    res.status(429).json({
      erro: "Muitas tentativas. Tente novamente mais tarde.",
      codigo: "LIMITE_TAXA_EXCEDIDO",
      tempoEspera: req.rateLimit.resetTime
    });
  }
});

// Configuração de segurança para cookies
const opcoesCookies = {
  httpOnly: true, // Acessível apenas pelo servidor
  secure: process.env.NODE_ENV === 'production', // HTTPS em produção
  sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
  maxAge: 24 * 60 * 60 * 1000, // 24 horas
  path: '/',
  domain: process.env.DOMINIO_COOKIE || 'localhost',
  signed: true // Cookies assinados
};

// Validação avançada dos campos
const validarAutenticacao = [
  body('email')
    .isEmail()
    .withMessage('Formato de email inválido')
    .normalizeEmail(),
  body('senha')
    .isLength({ min: 8 })
    .withMessage('A senha deve ter pelo menos 8 caracteres')
    .matches(/[0-9]/)
    .withMessage('A senha deve conter um número')
    .matches(/[a-z]/)
    .withMessage('A senha deve conter uma letra minúscula')
    .matches(/[A-Z]/)
    .withMessage('A senha deve conter uma letra maiúscula')
];

// Rotas públicas
router.post('/registrar', 
  limitadorTaxa,
  validarAutenticacao,
  validarRequisicao,
  (req, res, next) => {
    // Configura cabeçalho de política de permissões
    res.setHeader('Permissions-Policy', 'interest-cohort=()');
    next();
  },
  registrar
);

router.post('/login', 
  limitadorTaxa,
  validarAutenticacao,
  validarRequisicao,
  login
);

// Rotas protegidas
router.get('/perfil', 
  authMiddleware, 
  (req, res) => {
    res.json({ 
      usuario: req.user,
      mensagem: `Bem-vindo, ${req.user.id}!`,
      sessao: req.user.sessionId
    });
  }
);

router.post('/logout', 
  authMiddleware,
  (req, res, next) => {
    // Remove todos os cookies de autenticação
    ['token_sessao', 'token_atualizacao'].forEach(nomeCookie => {
      res.clearCookie(nomeCookie, {
        domain: process.env.DOMINIO_COOKIE || 'localhost',
        path: '/'
      });
    });
    next();
  },
  logout
);

router.post('/renovar-token', 
  (req, res, next) => {
    // Verifica token de atualização dos cookies assinados
    const tokenAtualizacao = req.signedCookies.token_atualizacao;
    if (!tokenAtualizacao) {
      return res.status(401).json({ erro: "Token de atualização faltando" });
    }
    req.tokenAtualizacao = tokenAtualizacao;
    next();
  },
  renovarToken
);

// Middleware de cabeçalhos de segurança para todas rotas
router.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

// Rota de verificação de saúde
router.get('/status', (req, res) => {
  res
    .setHeader('Cache-Control', 'no-store')
    .status(200)
    .json({ 
      status: 'Operacional',
      horario: new Date().toISOString(),
      tempoAtividade: process.uptime()
    });
});

export default router;