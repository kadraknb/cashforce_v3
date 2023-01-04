const express = require('express');

const { controllersProviders } = require('../controllers');

const router = express.Router();

router.get('/:id', controllersProviders.getProvider);

module.exports = router;