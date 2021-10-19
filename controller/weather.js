// Libraries
const axios = require('axios');

const oneCallUrl = 'https://api.openweathermap.org/data/2.5/onecall'
const apiKey = process.env.OPENWEATHER_API_KEY;

const fs = require('fs')

module.exports = {
    async weatherController(req, res, next) {
        console.log(req.body)
        const { lat, lon, units, lang } = req.body;
        const weatherData = await axios.get(oneCallUrl, {
            params: {
                lat, lon, appid: apiKey, units, lang
            }
        })

        console.log(weatherData.data);

        fs.writeFile('weatherData.json', JSON.stringify(weatherData.data, null, 2), err => {
            if (err) {
                return console.log(err)
            }
            console.log('saved all data in json file')
        })

        res.status(200).json({
            weatherData: weatherData.data,
        })
    },
}