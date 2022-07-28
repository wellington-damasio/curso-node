const Sequelize = require('sequelize')
const connection = new Sequelize('blogpress', 'root', 'max3314aline', {
  host: 'localhost',
  dialect: 'mysql',
  timezone: '-03:00'
})

module.exports = connection

