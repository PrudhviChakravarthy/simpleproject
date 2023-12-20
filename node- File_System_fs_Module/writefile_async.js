const fs = require('fs');

fs.writeFile('output.txt', 'This is some text.', (error) => {
    if (error) {
        console.error(error);
    } else {
        console.log('File written successfully.');
    }
});
