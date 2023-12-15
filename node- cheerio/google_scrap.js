const request = require('request');
const cheerio = require('cheerio');

const url = 'https://google.com';

request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        const $ = cheerio.load(body);
        console.log($('title').text());
    }
});
