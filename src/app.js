'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

//carrega todas as rotas da aplicação
const indexRoute = require('./routes/index-route');
const consultaRoute = require('./routes/consulta-route');

app.use(bodyParser.json());
app.use(bodyParser.json({limit: '2mb'}));
app.use(bodyParser.urlencoded({extended: false}));


app.use('/', indexRoute);
app.use('/consulta', consultaRoute);

module.exports = app;