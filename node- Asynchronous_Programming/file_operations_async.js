const fs = require('fs').promises;

fs.readFile('numbers.txt', 'utf8')
    .then((data) => fs.writeFile('numbers1.txt', data))
    .then(() => console.log('File content copied'))
    .catch((err) => console.error(err));
