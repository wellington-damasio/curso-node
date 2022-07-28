const Sequelize = require('sequelize')
const connection = require('../database/database')

// Importando Model com o qual vamos nos relacionar
const Category = require('../categories/Category')


const Article = connection.define('article', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

Category.hasMany(Article) // Uma categoria tem muitos artigos (1-P-N)
Article.belongsTo(Category)// Um artigo pertence a uma categoria (1-P-1)

module.exports = Article





// Do not uncomment the line below, it will foce tables to be created every time the app is launched
// Article.sync({force: true}) //Cria a tabela sempre que executamos o programa