const jokes = require('../data/jokes.json');

module.exports = {
    // Return one random joke.
    getJoke(req, res, next) {
        const idx = Math.floor(Math.random() * jokes.length);
        return res.status(200).json(jokes[idx]);
    },
    // Return entire Jokes Array.
    getJokes(req, res, next) {
        return res.status(200).json(jokes);
    }
}