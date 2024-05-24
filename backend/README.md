# Backend para Sistema de Faturas

Este projeto implementa a API backend para um sistema de gerenciamento de faturas. Ele fornece endpoints para autenticação, criação, leitura, atualização e exclusão de faturas, bem como upload de PDFs.

## Tecnologias Utilizadas

- Node.js
- Express.js
- TypeScript
- Sequelize (ORM)
- Multer (Upload de Arquivos)
- JWT (JSON Web Token)
- PDF-parse

## Instalação

### Pré-requisitos

- Node.js instalado
- Banco de dados (por exemplo, PostgreSQL, MySQL, SQLite)

### Passos para Instalação

1. Clone o repositório:

```sh
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio/backend

Instale as dependências:

Copiar código
npm install
Configure as variáveis de ambiente. Crie um arquivo .env na raiz do diretório do projeto e adicione as seguintes variáveis:

Copiar código
JWT_SECRET=your_jwt_secret
DB_HOST=localhost
DB_USER=your_db_user
DB_PASS=your_db_password
DB_NAME=your_db_name
DB_DIALECT= postgres #ou mysql, sqlite, etc.
Execute as migrações do banco de dados:

Copiar código
npx sequelize-cli db:migrate
Inicie o servidor:
sh
Copiar código
npm run dev
O servidor estará rodando em http://localhost:3002.

Endpoints
Autenticação
POST /api/auth/login: Autentica o usuário e retorna um token JWT.
Faturas
POST /api/invoices: Cria uma nova fatura.
POST /api/invoices/upload: Faz upload de um PDF e extrai dados para criar faturas.
GET /api/invoices: Obtém todas as faturas.
GET /api/invoices/:id: Obtém uma fatura específica pelo ID.
PUT /api/invoices/:id: Atualiza uma fatura específica pelo ID.
DELETE /api/invoices/:id: Deleta uma fatura específica pelo ID.
GET /api/invoices/clients: Obtém todos os números de clientes únicos.
GET /api/invoices/client/:clientNumber: Obtém todas as faturas de um cliente específico.
GET /api/invoices/download/:id: Faz o download de um arquivo PDF de uma fatura específica.
GET /api/invoices/all: Obtém todas as faturas.
Estrutura do Projeto
src/controllers: Controladores para autenticação e faturas.
src/models: Modelos Sequelize para as faturas.
src/middlewares: Middleware para upload de arquivos e autenticação JWT.
src/routes: Definições de rotas para autenticação e faturas.
src/types: Tipos TypeScript usados no projeto.
src/server.ts: Arquivo principal do servidor.
Contribuição
Fork o repositório
Crie uma branch para sua feature (git checkout -b feature/fooBar)
Commit suas mudanças (git commit -am 'Add some fooBar')
Push para a branch (git push origin feature/fooBar)
Crie um novo Pull Request

