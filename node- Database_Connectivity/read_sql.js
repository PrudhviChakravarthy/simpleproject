const connection = require('./mysql_connect');

connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
        console.error('Error reading records:', err);
        return;
    }
    console.log('Records:');
    console.log(results);
});
