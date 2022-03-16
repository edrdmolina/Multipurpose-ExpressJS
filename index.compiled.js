"use strict";

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
} // Libraries


var express = require('express');

var cors = require('cors');

var path = require('path'); // Initialize express


var app = express();
var port = process.env.PORT || 5000; // receive data as json

app.use(express.json()); // Use cors
// https://expressjs.com/en/resources/middleware/cors.html

app.use(cors()); // Initialize routes

var weatherAPI = require('./routes/weather');

app.use('/api/weather', weatherAPI);

var jokesAPI = require('./routes/jokes');

app.use('/api/jokes', jokesAPI); // Handles any requests that don't match the ones above

app.use(express["static"](path.join(__dirname, 'client/build'))); // app.get('*', (req,res) =>{
//     res.sendFile(path.join(__dirname+'/client/public/index.html'));
//   });

app.listen(port, function () {
  console.log("API Server listening at http://localhost:".concat(port));
});
