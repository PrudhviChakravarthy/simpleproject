const cheerio = require('cheerio');
const html = '<h1>Hello, Cheerio!</h1>';
const $ = cheerio.load(html);

console.log($('h1').text()); // Output: "Hello, Cheerio!"
