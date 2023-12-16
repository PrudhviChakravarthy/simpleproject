const connection = require('./mysql_connect');

const data = { name: 'kyo', age: 28 };

connection.query('INSERT INTO users SET ?', data, (err, result) => {
    if (err) {
        console.error('Error creating record:', err);
        return;
    }
    console.log('Record created:', result.insertId);
});
