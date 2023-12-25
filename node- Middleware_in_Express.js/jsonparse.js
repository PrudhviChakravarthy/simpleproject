const express = require('express');
const app = express();

app.use(express.json()); // Automatically parses incoming JSON data.

app.post('/data', (req, res) => {
    const data = req.body;
    res.json(data);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
