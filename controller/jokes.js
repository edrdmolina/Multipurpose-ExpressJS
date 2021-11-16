const jokes = require('../data/jokes.json');

module.exports = {
    // Return one random joke.
    getJoke(req, res, next) {
        const idx = Math.floor(Math.random() * jokes.length);
        res.set('Access-Control-Allow-Origin', '*');
        return res.status(200).json(jokes[idx]);
    },
    // Return entire Jokes Array.
    getJokes(req, res, next) {
        res.set('Access-Control-Allow-Origin', '*');
        return res.status(200).json(jokes);
    }
}