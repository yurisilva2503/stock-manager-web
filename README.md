# PyStock 🐍 - Gerenciamento de Estoque 

## O que é? 📦

O PyStock é um poderoso programa de gerenciamento de estoque desenvolvido para auxiliar empresas na otimização do controle de produtos e materiais.

## Como funciona❓

O PyStock opera por meio da integração de suas funcionalidades utilizando tecnologias como React e Express, juntamente com o ambiente Node.js. Essa combinação possibilita o cadastro eficiente de usuários, produtos e outras informações essenciais para o gerenciamento de estoque.

## Destaques 🚀

- **Controle de Estoque Abrangente:** O PyStock oferece um sistema abrangente de controle de estoque, permitindo que empresas mantenham um registro detalhado de seus produtos e materiais.

- **Integração Direta com Banco de Dados:** A aplicação conta com uma integração direta com banco de dados para garantir que as informações sejam armazenadas de maneira segura e acessível.

## Como foi feito? ⚙️

O PyStock foi desenvolvido utilizando as seguintes tecnologias:

- **Frontend:** React + Vite
- **Backend:** Node.js + Express + Nodemon
- **Banco de Dados:** MySQL
- **Integração:** CORS

## Instruções de Uso 📝

1. Clone o repositório para sua máquina local.
2. Instale as dependências do frontend e do backend.
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```
3. Configure as variáveis de ambiente necessárias para a conexão com o banco de dados e outras configurações específicas.
4. Inicie o frontend e o backend.
   ```bash
   cd client
   npm run dev
   cd ../server
   npm start
   ```
5. Acesse a aplicação no seu navegador e faça login com User = admin e Password = admin.

## Observação 🧐
- O dump para criação do schema do banco de dados no mysql workbench 8.0 está na pasta dump, então é só entrar na sua conexão padrão e executar o script. Por fim, basta alterar as credenciais da conexão no aquivo db.js na pasta server.

## Licença 📄

Este projeto está licenciado sob a [Licença MIT](LICENSE).
