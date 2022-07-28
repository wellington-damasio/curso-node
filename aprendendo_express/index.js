// IMPORTANDO E UTILIZANDO O EXPRESS
const express = require("express")
const app = express() // Função que carrega todo o framework do express

// Criando uma rota com o Express
//(qual URL aponta, o que a rota faz)
app.get("/", (req, res) => {

  // Enviando uma resposta ao usuario que acessar o servidor
  // Resposta pode ser:
  // 1. página html
  // 2. arquivo para download
  // 3. JSON
  // 4. XML, etc...
  res.send("<h1>Bem vindo ao meu servidor</h1>")
})

// Criando rota para o blog
// app.get("/blog/:article?", (req, res) => {
//   // /param? == parametro opcional na URL
  
//   let article = req.params.article

//   if(article || article != '/criar_artigo') {
//     res.send(`<h2>${article}</h2>`)
//   } else {
//     res.send("<h2>Bem vindo ao meu blog!</h2>")
//   }
// })

// Entendendo query params (não tão utilizados hoje em dia)
app.get("/blog/criar_artigo", (req, res) => {
  let nome = req.query["nome"]

  if(nome) {
    res.send(nome)
  } else {
    res.send("Crie um nome para seu artigo")
  }
})

app.get("/canal/youtube", (req, res) => {
  let canal = req.query["canal"]

  if(canal) {
    res.send(canal)
  } else {
    res.send("Nenhum canal fornecido")
  }
})

// Criando rota para meu 2º projeto
app.get("/projetos/2", (req, res) => {
  res.send("<h1>Este é meu segundo projeto. Espero que goste ;)</h1>")
})

// Tratando dado (:nome) enviado pelo usuário na requisição
app.get("/ola/:nome", (req, res) => {
  // req = dados enviados pelo usuario
  // res = resposta que será enviada ao usuario

  let userName = req.params.nome
  res.send(`<h1>Olá! Bem vindo ${userName}</h1>`)
})

// Criando servidor com express | 
// (aponta a porta (8181), o que vamos servidor (funtion))
app.listen(8188, function(error) {
  if(error) {
    console.log("Nenhum erro aconteceu")
  } else {
    console.log("Servidor iniciado com sucesso")
  }
})

