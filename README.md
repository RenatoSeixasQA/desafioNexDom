# Projeto Cypress

Este é um projeto de testes automatizados utilizando o [Cypress](https://www.cypress.io/). O objetivo deste repositório é demonstrar como configurar e executar testes automatizados em uma aplicação web.

## Requisitos

Antes de começar, verifique se você tem os seguintes itens instalados na sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [Git](https://git-scm.com/)
- [Cypress](https://www.cypress.io/) (a instalação do Cypress será realizada automaticamente durante o processo)

## Passo a Passo

### 1. Clonar o repositório

Clone o repositório do GitHub para a sua máquina local usando o comando abaixo:

```bash
git clone https://github.com/usuario/repo-cypress.git
```
### 2. Acessar o diretório do projeto
Após o repositório ser clonado, acesse o diretório do projeto:

Clone o repositório do GitHub para a sua máquina local usando o comando abaixo:

```bash
cd repo-cypress
```

### 3. Instalar as dependências
Dentro do diretório do projeto, instale as dependências necessárias utilizando o npm (Node Package Manager). Caso você use o Yarn, o comando correspondente seria yarn install.
```bash
npm install
```
### 4. Executar o Cypress
Após a instalação das dependências, você pode iniciar o Cypress utilizando o seguinte comando:
```bash
npx cypress open
```
Isso irá abrir a interface gráfica do Cypress, onde você pode visualizar e executar os testes.
```bash
npx cypress run
```
Para executar os testes do back end, utilize o arquivo  Collection.json que está na raiz do projeto e importe para o postman 
 Nas urls substitua {repositorio} pelo repositorio de teste e {proprietario} pelo proprietario de teste 





