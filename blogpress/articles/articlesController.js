const express = require('express')
const router = express.Router()
const Category = require('../categories/Category');
const Article = require('./Article');
const slugify = require('slugify');
const adminAuth = require('../middlewares/adminAuth');

router.get('/admin/articles', adminAuth, (req, res) => {
  Article
    .findAll({
      include: [{model: Category}]
    })
    .then(articles => {
      res.render('admin/articles/index', {articles})
    })
})

router.get("/articles/page/:num",async (req, res) => {
  var page = req.params.num;
  var offset = 0;
  const {count, rows} = await Article.findAndCountAll()

  if(isNaN(page) || page == 1){
      offset = 0;
  }else{
      offset = (parseInt(page) - 1) * 4;
  }

  Article.findAll({
      limit: 4,
      offset: offset,
      order: [['id', 'DESC']]
  }).then(articles => {
      var next;
      if(offset + 4 >= count){
          next = false;
      }else{
          next = true;
      }

      let algo = offset + 4

      Category.findAll().then(categories => {
          res.render("pagination",{articles, categories, count, next, page})
      });
  })
})


router.get('/admin/articles/new', adminAuth, (req, res) => {
  Category
    .findAll()
    .then(categories => {
      res.render('admin/articles/new', {categories: categories})
    })
})

router.get('/admin/articles/edit/:id', adminAuth, (req, res) => {
  let id = req.params.id
  Article
    .findByPk(id)
    .then(article => {
      Category
        .findAll()
        .then(categories => {
          if(id != undefined) {
            res.render('admin/articles/edit', {article: article, categories: categories})
          } else {
            res.redirect('admin/articles')
          }
        })
    })
})

router.post('/articles/save', (req, res) => {
  let title = req.body.title
  let body = req.body.body
  let categoryId = req.body.category

  Article.create({
    title: title,
    slug: slugify(title, {lower: true, strict: true}),
    body: body,
    categoryId: categoryId
  }).then(() => {
    res.redirect('/admin/articles')
  })
})

router.post('/articles/delete', (req, res) => {
  let id = req.body["article-id"]

  Article
    .destroy({where: {id}})
    .then(() => res.redirect('/admin/articles'))
})

router.post('/articles/update/', (req, res) => {
  let id = req.body["article-id"]
  let title = req.body.title
  let body = req.body.body
  let categoryId = req.body.category

  Article
    .update({
      title: title,
      slug: slugify(title, {lower: true, strict: true}),
      body: body,
      categoryId: categoryId
    }, {where: {id: id}})
    .then(() => res.redirect('/admin/articles'))
})
module.exports = router