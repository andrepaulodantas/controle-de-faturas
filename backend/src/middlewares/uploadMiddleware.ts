import multer from 'multer';
import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { CustomRequest } from '../types/custom';
require('dotenv').config(); // Carregar as variáveis de ambiente do arquivo .env

// Configuração do multer para armazenamento de arquivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Diretório de destino dos uploads
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`); // Nome do arquivo
  }
});

const upload = multer({ storage: storage }); // Inicialização do multer com a configuração de armazenamento

// Middleware para autenticação JWT
const authenticateJWT = (req: CustomRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    // Usar a variável de ambiente JWT_SECRET
    jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Token inválido
      }

      req.user = user; // Definir a propriedade user no objeto req
      next(); // Chamar o próximo middleware
    });
  } else {
    res.sendStatus(401); // Cabeçalho de autorização ausente
  }
};

export { upload, authenticateJWT };
