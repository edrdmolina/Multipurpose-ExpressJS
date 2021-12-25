if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
// Libraries
const express = require('express');
const cors = require('cors');
const path = require('path');

// Initialize express
const app = express();
const port = process.env.PORT || 5000;
// receive data as json
app.use(express.json());

// Use cors
// https://expressjs.com/en/resources/middleware/cors.html
app.use(cors());

// test route
app.use(express.static(path.join(__dirname, 'client/build')));

// Initialize routes
const weatherAPI = require('./routes/weather');
app.use('/api/weather', weatherAPI);

const jokesAPI = require('./routes/jokes');
app.use('/api/jokes', jokesAPI);

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/public/index.html'));
  });

app.listen(port, () => {
    console.log(`API Server listening at http://localhost:${port}`)
})
