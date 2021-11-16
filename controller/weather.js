// Libraries
const axios = require('axios');
const nodeGeocoder = require('node-geocoder');
const geoCoder = nodeGeocoder({ provider: 'openstreetmap' });

// Open Weather API
const oneCallUrl = 'https://api.openweathermap.org/data/2.5/onecall'
const openWeatherAPIKey = process.env.OPENWEATHER_API_KEY;

// const fs = require('fs')

const savedData = require('../data/weatherData.json')

module.exports = {
    async weatherController(req, res, next) {
        const { lat, lon, units, lang } = req.body;
        //* Get weather data from open weather API
        // const weatherData = await axios.get(oneCallUrl, {
        //     params: {
        //         lat, lon, appid: openWeatherAPIKey, units, lang
        //     }
        // })
        // if(!weatherData) return res.status(404);
        // // console.log(weatherData.data);

        //* respond as JSON file to preserve API calls to openWeatherAPI. This is only done once to have response at hand.
        // fs.writeFile('weatherData.json', JSON.stringify(weatherData.data, null, 2), err => {
        //     if (err) {
        //         return console.log(err)
        //     }
        //     console.log('saved all data in json file')
        // })

        // Reverse geocode to obtain location name.
        const location = await geoCoder.reverse({ lat, lon})
        if(!location) return res.status(404);
        res.status(200).json({
            // weatherData: weatherData.data,
            weatherData: savedData,
            location
        })
    },

}