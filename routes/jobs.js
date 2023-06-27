// rota que adiciona os jobs : post

const express = require('express');
const router  = express.Router();
const Job     = require('../models/Job');

router.get('/test', (req, res) => {
  res.send('deu certo');
});

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
