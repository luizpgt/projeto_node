const express = require('express');
const app = express();
const db = require('./db/connection');
const PORT = 3000;

app.listen(PORT, function() {
  console.log(`Projeto Bomba Atomica Iniciado! ${PORT}`);
});

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
  res.send("Atomic Bomb Project");
});
