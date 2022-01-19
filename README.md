# MSA Token Client
Projeto Client para o microservice MSA-PERFIL

# 1. informações
Projeto Client para utilizar o MSA-TOKEN.

Para saber quais operações e payloads assim como seus objetos de entrada e de saída, utilize o arquivo `swagger-token.yml`.

# 2. Tecnologias

- [Git (Gitbash)](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)

## 2.1 Banco de dados
- N/A

## 2.2 Dependencias JavaScript
- Axios.js
- Nodemon.js
- ng-fwpa-core (Package do proprio projeto)

## 2.3Dependencias Microservice
    N/A

## 2.4 Auth
    N/A

# 3. Instalação/Builder
Para trabalhar em ambinete de desenvolvimento, é necessário ter instalado os softwares relacionados no item 2 (Tecnologias), Utilize o Git para clonar o projeto do repositório, e os comando do NPM para executar a instalação dos módulos de dependências do Javascipt.


Para o trabalho de Implementação de código, vc pode utlizar o [VSCode](https://code.visualstudio.com/) com IDE de trabalho.

# 4. Outras informações

## 4.2
- @author: Pablo Flanmarion
- email: pabloflanmarion@gmail.com

## 4.3 Modo de Usar:
Exemplo
~~~JavaScript
const tokenClient = require("ng-msa-pa-perfil-client");

client.getMSAToken("perfil").then((res) => {
  console.log("####### Exemplo get Token #######");
  console.log(res);
});

client.getMSAResumeToken("perfil").then((res) => {
  console.log("####### Exemplo get ResumeToken #######");
  console.log(res);
});
~~~
