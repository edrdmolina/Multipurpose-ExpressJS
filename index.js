if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
// Libraries
const express = require('express');
const cors = require('cors');

// Initialize express
const app = express();
const port = process.env.PORT || 5000;
// receive data as json
app.use(express.json());

// Use cors
// https://expressjs.com/en/resources/middleware/cors.html
app.use(cors());

// test route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Initialize routes
const weatherAPI = require('./routes/weather');
app.use('/api/weather', weatherAPI);

const jokesAPI = require('./routes/jokes');
app.use('/api/jokes', jokesAPI);

app.listen(port, () => {
    console.log(`API Server listening at http://localhost:${port}`)
})
