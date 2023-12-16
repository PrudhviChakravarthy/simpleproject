const connection = require('./mysql_connect');

const recordId = 1; // Replace with the ID of the record you want to delete

connection.query('DELETE FROM users WHERE id = ?', recordId, (err, result) => {
    if (err) {
        console.error('Error deleting record:', err);
        return;
    }
    console.log('Record deleted:', result.affectedRows);
});
