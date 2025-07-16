import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

// Configurações reutilizáveis
const jwtConfig = {
  expiresIn: '1h',
  issuer: 'your-app-name'
};

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict',
  maxAge: 3600000, // 1 hora
  path: '/'
};

export const register = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // Validação básica
    if (!email || !password) {
      return res.status(400).json({ error: "Email e senha são obrigatórios" });
    }

    // Verifica se usuário já existe
    const userExists = await prisma.user.findUnique({ where: { email } });
    if (userExists) {
      return res.status(409).json({ error: "Email já cadastrado" });
    }

    // Criptografa senha
    const hashedPassword = await bcrypt.hash(password, 12);

    // Cria usuário no banco
    const user = await prisma.user.create({
      data: { 
        email, 
        password: hashedPassword, 
        name,
        lastLogin: new Date() 
      },
      select: { id: true, email: true, name: true }
    });

    // Gera token JWT
    const token = jwt.sign(
      { 
        userId: user.id,
        sessionId: uuidv4()
      }, 
      process.env.JWT_SECRET, 
      jwtConfig
    );

    // Configura cookie seguro
    res.cookie('session_token', token, cookieOptions);

    return res.status(201).json({ user });
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validação básica
    if (!email || !password) {
      return res.status(400).json({ error: "Email e senha são obrigatórios" });
    }

    // Busca usuário
    const user = await prisma.user.findUnique({ 
      where: { email },
      select: { id: true, email: true, name: true, password: true }
    });

    if (!user) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }

    // Compara senhas
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }

    // Atualiza último login
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLogin: new Date() }
    });

    // Gera novo token
    const token = jwt.sign(
      { 
        userId: user.id,
        sessionId: uuidv4()
      }, 
      process.env.JWT_SECRET, 
      jwtConfig
    );

    // Configura cookie seguro
    res.cookie('session_token', token, cookieOptions);

    // Remove a senha antes de retornar
    const { password: _, ...userWithoutPassword } = user;

    return res.json({ user: userWithoutPassword });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const logout = async (req, res) => {
  try {
    // Limpa todos os cookies de autenticação
    ['session_token', 'refresh_token'].forEach(cookieName => {
      res.clearCookie(cookieName, {
        path: '/',
        domain: process.env.COOKIE_DOMAIN || 'localhost',
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
      });
    });

    // Invalida o token no banco de dados
    if (req.user?.id) {
      await prisma.user.update({
        where: { id: req.user.id },
        data: { lastLogout: new Date() }
      });
    }

    res.status(200).json({ 
      success: true,
      message: "Logout realizado com sucesso" 
    });

  } catch (error) {
    console.error('Erro no logout:', error);
    res.status(500).json({ 
      error: "Erro durante o logout",
      details: error.message 
    });
  }
};