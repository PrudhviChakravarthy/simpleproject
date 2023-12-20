const fs = require('fs');

fs.rename('oldfile.txt', 'newfile.txt', (error) => {
    if (error) {
        console.error(error);
    } else {
        console.log('File renamed successfully.');
    }
});
