const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path');
const db = require('./db/connection');
const PORT = 3000;
const Job = require('./models/Job.js');

const bodyParser = require('body-parser');

app.listen(PORT, function() {
  console.log(`Projeto Bomba Atomica Iniciado! ${PORT}`);
});

//body parser
app.use(bodyParser.urlencoded({extended: false}));

// handlebars
app.set('views', path.join(__dirname, 'views')); // onde estao as views
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'})); // arquivo principal de layout
app.set('view engine', 'handlebars'); // qual a view engine


// static folder
app.use(express.static(path.join(__dirname, 'public')));
// db connection
db
  .authenticate()
  .then( () => {
    console.log("Conectou ao banco com sucesso");
  })
  .catch(err => {
    console.log("Ocorreu um erro ao conectar", err);
  })

// rota
app.get('/', (req,res) => {
  Job.findAll({order: [
    ['createdAt', 'DESC']
  ]}).then(jobs=> {
      res.render('layouts/index', {jobs});
    });
});


// jobs routes
app.use('/jobs', require('./routes/jobs')); // todas rotas do jobs comecam com jobs

