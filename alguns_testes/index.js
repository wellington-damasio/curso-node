const express = require("express")
const app = express()

// Set EJS as view engine (renderer) of the HTML)
app.set("view engine", "ejs")

// Definindo que vamos usar os arquivos estaticos da pagina 'public'
app.use(express.static('public'))

app.get("/:name/:age", (req, res) => {
  // res.send("Bem vindo ao meu site")

  // let name = 'Wellington'
  // let age = 19

  let name = req.params.name
  let age = req.params.age
  let company = 'Dam Digital'
  let favLang = 'JavaScript'

  let showErrorMessage = 0
  
  const produtos = [
    {nome: 'Leite', preco: 'R$2,50', cat: 'alimentos'},
    {nome: 'Kit de limpeza', preco: 'R$50,00', cat: 'casa'},
    {nome: 'Snickers', preco: 'R$3,50', cat: 'doces'},
    {nome: 'pct. batata palha', preco: 'R$4,70', cat: 'alimentos'},
    {nome: 'Caderno tilibra', preco: 'R$10,20', cat: 'escola'},
    {nome: 'Cx. de bombom', preco: 'R$11,50', cat: 'doces'},
    {nome: 'Peito de frango (1kg)', preco: 'R$22,50', cat: 'alimentos'},
    {nome: 'Pote de mel', preco: 'R$34,00', cat: 'alimentos'},
    {nome: 'Barra de cereal', preco: 'R$2,00', cat: 'alimentos'}
  ]
  // Set page EJS file Express will render when accessing this route
  // It is not necessary to specify folder, Express  will always check the 'views' folder for rendering HTML
  res.render("index", {
    name,
    age,
    company,
    favLang,
    showErrorMessage,
    produtos
  })
})

app.get("/perfil", (req, res) => {
  res.render("user/perfil")
})

app.listen(8081, () => {
  console.log("App rodando")
})