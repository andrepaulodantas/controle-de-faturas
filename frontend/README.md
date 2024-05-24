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
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio/frontend
Instale as dependências:

Copiar código
npm install
Inicie o servidor de desenvolvimento:

Copiar código
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
