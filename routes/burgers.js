const express = require('express');
const router = express.Router();

const { registerAdmin } = require('../controller/burgers');
const { catchAsync } = require('../middleware/index');

// Register e-commerce Admin
router.post('/register-admin', catchAsync(registerAdmin));

// Login admin

module.exports = router;