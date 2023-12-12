const http = require('http');
const fs = require('fs');


http.get('https://www.google.com/', (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data += chunk;
    });
    response.on('end', () => {
        fs.writeFile('google.html', data, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Website data saved to google.html');
        });
    });
});
