if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
// Libraries
const express = require('express');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const mongoose = require('mongoose');
const mongoUri = process.env['MONGO_URI']

mongoose.connect(mongoUri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

// Initialize express
const app = express();
const port = process.env.PORT || 5000;

// helmet for security purposes
app.use(helmet());

// receive data as json
app.use(express.json());

// Use cors
// https://expressjs.com/en/resources/middleware/cors.html
app.use(cors());

// Initialize routes
const weatherAPI = require('./routes/weather');
app.use('/api/weather', weatherAPI);

const jokesAPI = require('./routes/jokes');
app.use('/api/jokes', jokesAPI);

const portfolioAPI = require('./routes/portfolio');
app.use('/api/portfolio', portfolioAPI);

// Handles any requests that don't match the ones above
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/public/index.html'));
  });

app.listen(port, () => {
    console.log(`API Server listening at http://localhost:${port}`)
})