const express = require('express');

const orders = require('./orders');
const providers = require('./providers');

const routers = express.Router();

routers.use('/orders', orders);

routers.use('/providers', providers);

module.exports = routers;