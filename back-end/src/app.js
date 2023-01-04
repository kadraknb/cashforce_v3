const express = require('express');
require('express-async-errors');

const errorMiddleware = require('./middlewares/erros');
const routes = require('./routes/router');

const app = express();

app.use(express.json());

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'YOUR-DOMAIN.TLD');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.use(routes);

app.use(errorMiddleware);

module.exports = app;
