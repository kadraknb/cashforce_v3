const express = require('express');

const orders = require('./orders');

const routers = express.Router();

routers.use('/orders', orders);

module.exports = routers;