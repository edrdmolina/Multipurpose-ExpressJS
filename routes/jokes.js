const express = require('express');
const router = express.Router();

const { getJokes, getJoke } = require('../controller/jokes');

router.get('/', getJokes);

router.get('/joke', getJoke);

module.exports = router;