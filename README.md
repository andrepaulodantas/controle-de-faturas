# Backend para Sistema de Faturas

Este projeto implementa a API backend para um sistema de gerenciamento de faturas. Ele fornece endpoints para autenticação, criação, leitura, atualização e exclusão de faturas, bem como upload de PDFs.

Para fazer upload de PDFs o usuário precisa se logar e depois pode começar a fazer upload de faturas

O projeto está online no link a seguir https://engdeveloper.com/

## Tecnologias Utilizadas

- Node.js
- Express.js
- TypeScript
- Sequelize (ORM)
- Multer (Upload de Arquivos)
- JWT (JSON Web Token)
- PDF-parse
- Jest para testes
- PostgreSQL

## Instalação

### Pré-requisitos

- Node.js instalado
- Banco de dados (por exemplo, PostgreSQL, MySQL, SQLite)

### Passos para Instalação

1. Clone o repositório:

```sh
git clone https://github.com/andrepaulodantas/controle-de-faturas.git 
cd seu-repositorio/backend

Instale as dependências:

npm install
Configure as variáveis de ambiente. Crie um arquivo .env na raiz do diretório do projeto e adicione as seguintes variáveis:

JWT_SECRET=your_jwt_secret
DB_HOST=localhost
DB_USER=your_db_user
DB_PASS=your_db_password
DB_NAME=your_db_name
DB_DIALECT= postgres #ou mysql, sqlite, etc.
Execute as migrações do banco de dados:

npx sequelize-cli db:migrate
Inicie o servidor:
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

Estrutura dos Testes
npm test

 PASS  src/components/CustomRechartsComponents/CustomRechartsComponents.test.tsx
 PASS  src/pages/LoginPage/LoginPage.test.tsx
 PASS  src/App.test.tsx
 PASS  src/pages/DashboardPage/DashboardPage.test.tsx
 Test Suites: 4 passed, 4 total
 Tests:       7 passed, 7 total

Distribuído sob a licença MIT. Veja LICENSE para mais informações.


### `README.md` do Frontend

```markdown
# Frontend para Sistema de Faturas

Este projeto implementa a interface de usuário para um sistema de gerenciamento de faturas. Ele permite que os usuários façam login, visualizem faturas, filtrem por cliente e façam upload de PDFs.

## Tecnologias Utilizadas

- React
- TypeScript
- Material-UI
- Axios
- React Router

## Instalação

### Pré-requisitos

- Node.js instalado

### Passos para Instalação

1. Clone o repositório:

```sh
git clone https://github.com/andrepaulodantas/controle-de-faturas.git 
cd seu-repositorio/frontend
Instale as dependências:

npm install
Inicie o servidor de desenvolvimento:

npm start
O aplicativo estará rodando em http://localhost:3000.

Funcionalidades
Login: Autentica o usuário e armazena o token JWT.
Dashboard: Visualiza faturas, filtra por cliente e exibe gráficos de consumo e custo.
Upload de PDF: Faz upload de um arquivo PDF para extrair e criar faturas.
Estrutura do Projeto
src/components: Componentes reutilizáveis, incluindo o header, gráficos e campos de formulário.
src/pages: Páginas principais do aplicativo (Login, Dashboard, Upload).
src/types: Tipos TypeScript usados no projeto.
src/App.tsx: Componente principal do aplicativo.
src/index.tsx: Arquivo de entrada do aplicativo.
Configuração do Ambiente
Certifique-se de que o backend está rodando em http://localhost:3002 para que o frontend possa se comunicar com a API.

Contribuição
Fork o repositório
Crie uma branch para sua feature (git checkout -b feature/fooBar)
Commit suas mudanças (git commit -am 'Add some fooBar')
Push para a branch (git push origin feature/fooBar)
Crie um novo Pull Request
Licença
Distribuído sob a licença MIT. Veja LICENSE para mais informações.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
# controle-de-faturas
