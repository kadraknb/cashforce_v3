const express = require('express');
require('express-async-errors');

const errorMiddleware = require('./middlewares/erros');
const routes = require('./routes/router');

const app = express();

app.use(express.json());

app.use(routes);

app.use(errorMiddleware);

module.exports = app;
