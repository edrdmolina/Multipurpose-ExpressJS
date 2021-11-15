// Libraries
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const jokesUrl = 'https://deadliestjokes.fandom.com/wiki/Chuck_Norris';

async function scrapeData() {
    try {
        // Fetch data with axios
        const res = await axios.get(jokesUrl);
        // console.log(res.data)

        // Load data in cheerio
        const $ = cheerio.load(res.data);

        // Select all list items
        const listItems = $('.mw-parser-output p');
        // console.log(listItems.length)
        // console.log($(listItems).text())
        const jokes = [];

        listItems.each((idx, el) => {
            // create joke object
            if (idx < 6) return;

            const joke = { 
                // remove line breaks from the string
                // https://stackoverflow.com/questions/10805125/how-to-remove-all-line-breaks-from-a-string
                joke: $(el).text().replace(/(\r\n|\n|\r)/gm, ""),
                idx
            };
            // add joke object to array.
            jokes.push(joke)
        })

        // Write data to JSON file.
        fs.writeFile('jokes.json', JSON.stringify(jokes, null, 2), err => {
            if (err) {
                return console.log(err);
            }
            console.log('Successfully written data to jokes.json file.')
        })

    } catch (err) {
        console.log(err)
    }
}

scrapeData();