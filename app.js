const express = require('express');
const app = express();

const PORT = 3000;

app.listen(PORT, function() {
  console.log(`Projeto Bomba Atomica Iniciado!`);
});

// rota
app.get('/', (req,res) => {
  res.send("Atomic Bomb Project");
});
