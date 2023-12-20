const fs = require('fs');

try {
    const data = fs.readFileSync('example.txt', 'utf8');
    console.log(data);
} catch (error) {
    console.error(error);
}
