// Importando dependencias e database
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const connection = require('./database/database')
const session = require('express-session');

// Importando routers
const categoriesController = require('./categories/categoriesController')
const articlesController = require('./articles/articlesController')
const userController = require('./user/userController');

// Importando Models
const Category = require('./categories/Category')
const Article = require('./articles/Article')

// Express Sessions
app.use(session({
  secret: 'paoDeBatata',
  cookie: {
    maxAge: 30000000000
  },
  resave: false,
  saveUninitialized: false
}))

// -----------------------
//       View engine
// -----------------------
app.set('view engine', 'ejs')


// -----------------------
//    Arquivos estaticos
// -----------------------
// app.use(express.static('public'))
app.use(express.static(__dirname + '/public'));

// -----------------------
//        Body parser
// -----------------------
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


// -----------------------
//         Database
// -----------------------
connection
  .authenticate()
  .then(() => {
    console.log('Conexão realizada com sucesso')
  })
  .catch(() => {
    console.log('Ops... Conexão falhou')
  })

// -----------------------
//         Sessions
// -----------------------



// -----------------------
//         Routes
// -----------------------
app.get('/', (req, res) => {
  Article
    .findAll({order: [['id', 'DESC']], limit: 4})
    .then(articles => {
      Category
        .findAll()
        .then(categories => {
        {res.render('home', {articles, categories})}
      })
    })
})

app.get('/admin', (req, res) => {
  Article
    .findAll({order: [['id', 'DESC']], limit: 4})
    .then(articles => {res.render('home_admin', {articles})})
})

app.get('/articles/:slug', (req, res) => {
  let slug = req.params.slug

  Article
    .findOne({where: {slug}})
    .then(article => {
      if(article != undefined) {
        // res.render('article', {article})
        Category.findAll()
        .then(categories => {
          res.render('article', {article, categories})
        })
      } else {
        res.redirect('/')
      }
    })
    .catch(err => {
      res.redirect('/')
    })
})

app.get('/categories/:slug', (req, res) => {
  let slug = req.params.slug

  Category
    .findOne({where: {slug}, include: [{model: Article}], order: [[Article, 'id', 'DESC']]})
    .then(category => {
      if(category != undefined) {
        Category.findAll().then(categories => {
          res.render('category', {articles: category.articles, categories, category})
        })
      } else {
        res.redirect('/')
      }
    })
    .catch(err => {
      res.redirect('/')
    })
})

app.use('/', categoriesController)

app.use('/', articlesController)
app.use('/', userController)

app.listen(8091, () => {
  console.log('Servidor ativo...')
})