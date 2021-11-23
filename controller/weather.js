// Libraries
const axios = require('axios');
const nodeGeocoder = require('node-geocoder');

// Open Weather API
const oneCallUrl = 'https://api.openweathermap.org/data/2.5/onecall'
const openWeatherAPIKey = process.env.OPENWEATHER_API_KEY;
// Initialize Node Geo Coder
const geoCoder = nodeGeocoder({ 
    provider: 'mapquest', apiKey: process.env.MAPQUEST_API_KEY 
});

// const fs = require('fs')

const savedData = require('../data/weatherData.json')

module.exports = {
    async weatherController(req, res) {
        const { lat, lon, units, lang } = req.body;

        /*
        //* Get weather data from open weather API
        const weatherData = await axios.get(oneCallUrl, {
            params: {
                lat, lon, appid: openWeatherAPIKey, units, lang
            }
        })
        if(!weatherData) return res.status(404);
        */

        /*
        //* respond as JSON file to preserve API calls to openWeatherAPI. This is only done once to have response at hand.
        fs.writeFile('weatherData.json', JSON.stringify(weatherData.data, null, 2), err => {
            if (err) {
                return console.log(err)
            }
            console.log('saved all data in json file')
        })
        */

        // Reverse geocode to obtain location name.
        const location = await geoCoder.reverse({ lat, lon})
        if(!location.length) return res.status(404);
        return res.status(200).json({
            // weatherData: weatherData.data,
            weatherData: savedData,
            location: location[0]
        })
    },
    async geoLocation(req, res) {
        const { countryCode, address } = req.body;

        const result = await geoCoder.geocode(address)
        // console.log('result: ', result)
        if(!result.length) {
            return res.status(200).json({ 
                error: 'No location found. Try a Different City or Zip Code at geocode'
            })
        }


        // Filter out all locations except all that have country from input
        const location = result.filter(r => r.countryCode === countryCode)
        // console.log('location: ', location)
        if(!location.length) {
            return res.status(200).json({ 
                error: 'No location found. Try a Different Zip Code'
            })
        }

        return res.status(200).json({
            location: location[0]
        })
    }

}