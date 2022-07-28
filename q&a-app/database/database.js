const Sequelize = require('sequelize')

// Criando uma conexão com o banco de dados
const connection = new Sequelize('q_and_a_db', 'root', 'max3314aline', {
  host: 'localhost',
  dialect: 'mysql'
})
// Exportando conexão para usá-la em outros arquivos
module.exports = connection

