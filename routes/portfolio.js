const express = require('express');
const { addVisit } = require('../controller/portfolio');
const { catchAsync } = require('../middleware');
const router = express.Router();

router.put('/', catchAsync(addVisit))

module.exports = router;