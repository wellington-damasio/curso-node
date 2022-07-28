const express = require('express');
const router = express.Router()
const User = require('./User');
const bcrypt = require('bcrypt');

router.get('/admin/users', (req, res) => {
  User
    .findAll()
    .then(users => {
      res.render('users/index', {users})
    })
})

router.get('/admin/users/create', (req, res) => {
  res.render('users/create')
})

router.get('/logout', (req, res) => {
  req.session.user = undefined
  res.redirect('admin/users/login')
})

router.get('/admin/users/login', (req, res) => {
  res.render('users/login')
})

router.post('/authenticate', (req, res) => {
  let email = req.body.email
  let password = req.body.password

  User
    .findOne({where: {email}})
    .then(user => {
      if(user != undefined) { // caso exista usuario
        let correctPass = bcrypt.compareSync(password, user.password)

        if(correctPass) {
          req.session.user = {
            id: user.id,
            email: user.email
          }

          res.json(req.session.user)
        } else {
          res.redirect('users/login')
        }
      } else {
        res.redirect('users/login')
      }
    })
})

router.post('/users/create', (req, res) => {
  let name = req.body.name
  let username = req.body.username
  let email = req.body.email

  User
    .findOne({where: {email: email}})
    .then(user => {
      if(user == undefined) {
        let password = req.body.password
        let salt = bcrypt.genSaltSync(10)
        let hash = bcrypt.hashSync(password, salt)
      
        User
          .create({
            name: name,
            userName: username,
            email: email,
            password: hash
          })
          .then(() => {
            res.redirect('/admin/users')
          })
          .catch(err => {
            res.send('Falha ao enviar formulario' + err)
          })

      } else {
        res.send('Email já cadastrado')
      }
    })
})

router.post('/users/delete/:id', (req, res) => {
  let userId = req.params.id

  if(!userId != NaN) {
    User
    .destroy({where: {id: userId}})
    .then(() => {
      res.redirect('/admin/users')
    })
  } else {
    res.send('Não foi possível deletar o usuario')
  }
})

module.exports = router
