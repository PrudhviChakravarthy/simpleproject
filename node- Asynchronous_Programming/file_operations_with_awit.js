const fs = require('fs').promises;

async function copyFile() {
    try {
        const data = await fs.readFile('numbers.txt', 'utf8');
        await fs.writeFile('numbers1.txt', data);
        console.log('File copied successfully.');
    } catch (err) {
        console.error(err);
    }
}

copyFile();
