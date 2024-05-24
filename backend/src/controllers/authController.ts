import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
require('dotenv').config();

export const login = (req: Request, res: Response) => {
  const { username, password } = req.body;

  // Verificar se a variável de ambiente JWT_SECRET está definida
  if (!process.env.JWT_SECRET) {
    return res.status(500).json({ message: 'A chave secreta do JWT não está definida' });
  }

  // Validar credenciais (exemplo simples)
  if (username === 'admin' && password === 'password') {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.json({ token });
  }

  return res.status(401).json({ message: 'Credenciais inválidas' });
};

export const createUser = (req: Request, res: Response) => {
  // Implementar a criação de um usuário
  if (!process.env.JWT_SECRET) {
    return res.status(500).json({ message: 'A chave secreta do JWT não está definida' });
  } else {
    return res.status(501).json({ message: 'Not implemented' });
  }
};

export const getUser = (req: Request, res: Response) => {
  // Implementar a obtenção de um usuário
  if (!process.env.JWT_SECRET) {
    return res.status(500).json({ message: 'A chave secreta do JWT não está definida' });
  } else {
    return res.status(501).json({ message: 'Not implemented' });
  }
};

export const updateUser = (req: Request, res: Response) => {
  // Implementar a atualização de um usuário
  if (!process.env.JWT_SECRET) {
    return res.status(500).json({ message: 'A chave secreta do JWT não está definida' });
  } else {
    return res.status(501).json({ message: 'Not implemented' });
  }
};

export const deleteUser = (req: Request, res: Response) => {
  // Implementar a exclusão de um usuário
  if (!process.env.JWT_SECRET) {
    return res.status(500).json({ message: 'A chave secreta do JWT não está definida' });
  } else {
    return res.status(501).json({ message: 'Not implemented' });
  }
};
