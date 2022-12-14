<h1 align="center">Gerador de Certificado</h1>
<p align="center">
 <a href="#roadmap">Requisitos</a> • 
 <a href="#tecnologias">Tecnologias</a> • 
 <a href="#autor">Autor</a>
</p>

<h4 align="center"> 
	Concluído
</h4>

### Features

- [x] Fazer download do template
- [x] Criar PDF

### [Pré-requisitos](#roadmap)

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/)
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o BackEnd (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/romulociro/GeradorCertificado>

# Vá para a pasta GeradorCertificado
$ cd GeradorCertificado

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ node app.js

# O servidor inciará na porta:8081

# Modelo de Requisição
curl --location --request POST 'localhost:8081/certificado' \
--header 'Content-Type: application/json' \
--data-raw '{
    "template": "https://firebasestorage.googleapis.com/v0/b/certificado-223af.appspot.com/o/template.hbs?alt=media&token=ca00bc0f-e6b3-43b7-b3ea-858ef841f508",
    "data": {
    "name": "Curso de Java",
    "date": "17/08/2022",
    "studentname": "Joaquim"
    }
}'
```


### 🛠 [Tecnologias](#tecnologias)

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Handlebars](https://handlebarsjs.com/)
- [Puppeteer](https://github.com/puppeteer/puppeteer)
- [Axios](https://github.com/axios/axios)


### [Autor](#autor)
Rômulo Ciro
