const express = require('express');
const router = express.Router();

const { weatherController } = require('../controller/weather');
const { catchAsync } = require('../middleware/index');

router.post('/', catchAsync(weatherController));

module.exports = router;