// rota que adiciona os jobs : post

const express = require('express');
const router  = express.Router();
const Job     = require('../models/Job');

router.get('/test', (req, res) => {
  res.send('deu certo');
});

// detalhe da vaga "view/1"
router.get('/view/:id', (req, res) => Job.findOne ({
  where: {id: req.params.id}
}).then (job => {
  res.render('view', {
  job
  });
}).catch (err => console.log(err)));

// form rota envio
router.get('/add', (req, res) => {
  res.render('layouts/add');
})

// add job via post
router.post('/add', (req, res) => {
  let {title, salary, company, description, email, new_job} = req.body;

  // insert
  Job.create({
    title,
    description,
    salary,
    company,
    email,
    new_job
  }).then(() => res.redirect('/'))
    .catch(err => console.log(err));
  // ^ insere e volta pra home
})

module.exports = router;
