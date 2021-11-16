const express = require('express');
const router = express.Router();
const cors = require('cors')

const { weatherController } = require('../controller/weather');
const { catchAsync } = require('../middleware/index');

// https://expressjs.com/en/resources/middleware/cors.html
router.post('/', cors(), catchAsync(weatherController));

module.exports = router;