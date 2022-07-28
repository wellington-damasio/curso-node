const express = require("express")
const app = express()
const bodyParser  = require("body-parser")

// Importando objeto de conexão com banco de dados
const connection = require('./database/database')

// Importando Models do banco de dados
const questionModel = require('./database/Question')
const answerModel = require('./database/Answer')

// ----------
// Database
// ----------
connection // connection promisse
  .authenticate() //Loga no banco de dados
  .then (() => {
    console.log('Conexão com banco de dados realizada com sucesso')
  })
  .catch(errorMsg => {
    console.log(errorMsg)
  })


// Set EJS as view engine (render)
app.set("view engine", "ejs")

// Using static files from /public
app.use(express.static('public'))

// O body-parser traduz os dados enviados pelo formulário em JavaScript
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json()) // body-parser traduz dados enviados como JSON

// ----------
// ROUTES
// ----------

app.get("/", (req, res) => {
  questionModel
    .findAll({raw: true, order: [['id', 'DESC']]}) // SELECT * FROM questions
    .then(questions => {
      res.render("home", {
        questions: questions
      })
    })
})

app.get("/perguntar", (req, res) => {
  res.render("perguntar")
})

// Criando rota para página específica de cada pergunta
app.get("/pergunta/:id", (req, res) => {
  let id = req.params.id

  questionModel
    .findOne({
      where: {id: id}
    })
    .then(question => {
      if(question != undefined) {
        answerModel.findAll({
          where: {questionId: question.id},
          order: [['id', 'DESC']]
        }).then(answers => {
          res.render("pergunta", {
            question: question,
            answers: answers
          })
        })

      } else {
        res.redirect("/")
      }
    })
})

// Rotas do tipo POST são (geralmente) usadas para receber dados de formulários
app.post("/salvarpergunta", (req, res) => {
  const questionTitle = req.body["question-title"]
  const questionDesc = req.body["question-desc"]
  
  questionModel.create({ // Equivalente ao INSERT no SQL
    titulo: questionTitle,
    description: questionDesc,
  }).then(() => {
    // Após receber os dados do user, enviamos o mesmo para a home page
    res.redirect("/")
  })
})

app.post("/salvarresposta", (req, res) => {
  const answerBody = req.body["answer-body"]
  const questionId = req.body["question-id"]

  answerModel.create({
    body: answerBody,
    questionId: questionId
  }).then(() => {
    res.redirect("/pergunta/" + questionId)
  })
})

app.listen(8090, () => {
  console.log('Servidor do App ativo')
})