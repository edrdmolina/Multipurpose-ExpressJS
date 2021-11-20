const express = require('express');
const router = express.Router();

const { weatherController, getLatLon } = require('../controller/weather');
const { catchAsync } = require('../middleware/index');

router.post('/', catchAsync(weatherController));

router.post('/location', catchAsync(getLatLon));

module.exports = router;