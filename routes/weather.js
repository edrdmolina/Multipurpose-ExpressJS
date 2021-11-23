const express = require('express');
const router = express.Router();

const { weatherController, geoLocation } = require('../controller/weather');
const { catchAsync } = require('../middleware/index');

router.post('/', catchAsync(weatherController));

router.post('/geolocation', catchAsync(geoLocation));

module.exports = router;