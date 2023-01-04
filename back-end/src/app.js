const express = require('express');
require('express-async-errors');

const errorMiddleware = require('./middlewares/erros');
const routes = require('./routes/router');

const app = express();

app.use(express.json());

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'YOUR-DOMAIN.TLD'); // update to match the domain you will make the request from
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

const accessControl = (_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET,POST,DELETE,OPTIONS,PUT,PATCH',
  );
  res.header('Access-Control-Allow-Headers', '*');
  next();
};
app.use(accessControl);

app.use(routes);

app.use(errorMiddleware);

module.exports = app;
