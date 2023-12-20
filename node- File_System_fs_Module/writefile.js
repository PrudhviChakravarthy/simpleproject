const fs = require('fs');

try {
    fs.writeFileSync('output.txt', 'This is some text.');
    console.log('File written successfully.');
} catch (error) {
    console.error(error);
}
