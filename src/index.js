const express = require('express');
const Rotas = require('./router/router');
const app = express();

app.get('/customer/:id', Rotas.getByID);
app.get('/customer', Rotas.getAll);

app.listen(3002, () => console.log("executando"))