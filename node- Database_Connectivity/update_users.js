const connection = require('./mysql_connect');

const updatedData = { name: 'Updated Name', age: 35 };
const recordId = 1; // Replace with the ID of the record you want to update

connection.query('UPDATE users SET ? WHERE id = ?', [updatedData, recordId], (err, result) => {
    if (err) {
        console.error('Error updating record:', err);
        return;
    }
    console.log('Record updated:', result.affectedRows);
});
