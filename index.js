if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
// Libraries
const express = require('express');

// Initialize express
const app = express();
const port = process.env.PORT || 5000;
// receive data as json
app.use(express.json());

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
