const express = require('express');

const { controllersOrders } = require('../controllers');

const router = express.Router();

router.get('/', controllersOrders.getAll);

module.exports = router;