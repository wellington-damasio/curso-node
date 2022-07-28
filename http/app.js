// Definindo variável para usar o módulo http do Node.js
let http = require("http")

// Criando servidor na porta 8181 com o http do Node
http.createServer( (req, res) => {
  res.end("<h1>Bem-vindo ao site</h1'>")
}).listen(8180)
console.log('Servidor está rodando')