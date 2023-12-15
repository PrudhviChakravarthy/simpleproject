const request = require('request');
const cheerio = require('cheerio');

const url = 'https://example.com';

request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        const $ = cheerio.load(body);
        $('.article').each((index, element) => {
            const title = $(element).find('h2').text();
            const link = $(element).find('a').attr('href');
            console.log(`Title: ${title}`);
            console.log(`Link: ${link}`);
        });
    }
});
