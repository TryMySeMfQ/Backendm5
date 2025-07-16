import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

const JWT_SECRET = process.env.JWT_SECRET;
const EXPIRES_IN = '1h';

export const generateToken = (userId) => {
  return jwt.sign(
    {
      userId,
      sessionId: uuidv4() // Identificador único para cada sessão
    },
    JWT_SECRET,
    { expiresIn: EXPIRES_IN }
  );
};

export const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};


