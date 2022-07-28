const Sequelize = require('sequelize')
const connection = require('../database/database')

const Category = connection.define('categories', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Category
// Exemplo de slug
// Como usar o sequelize em suas aplicações
// como-usar-o-sequelize-em-suas-aplicações




// Do not uncomment the line below, it will foce tables to be created every time the app is launched

// Category.sync({force: true}) //Cria a tabela sempre que executamos o programa