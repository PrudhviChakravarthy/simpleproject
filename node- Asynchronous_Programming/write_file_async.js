const fs = require('fs');

const data = 'Hello, World!';
fs.writeFile('output.txt', data, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Data written to output.txt');
});
