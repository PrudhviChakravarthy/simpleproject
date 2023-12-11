const fs = require('fs').promises;

fs.readFile('example.txt', 'utf8')
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
