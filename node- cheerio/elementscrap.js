const cheerio = require('cheerio');
const html = '<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>';
const $ = cheerio.load(html);

$('li').each((index, element) => {
    console.log($(element).text());
});
