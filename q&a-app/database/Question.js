const Sequelize = require('sequelize')
const connection = require('./database')


// Criando uma TABLE utilizando o Sequelize 
const Question = connection.define('question', {
  titulo: {
    type: Sequelize.STRING, // Campo do tipo string (texto curto)
    allowNull: false // Evitando que o campo esteja nulo no banco de dados
  },
  description: {
    type: Sequelize.TEXT, // Campo tipo text (textos longos)
    allowNull: false // Não aceita valores nulos (vazios)
  }
})

// Mandando a table para o MySQL
// não força a criação caso seja já existente no banco de dados
Question
  .sync({force: false})
  .then(() => {
    console.log('TABLE atualizada')
  })

module.exports = Question