const fs = require('fs');

fs.appendFile('output.txt', '\nThis is additional text.', (error) => {
    if (error) {
        console.error(error);
    } else {
        console.log('Data appended to the file.');
    }
});
