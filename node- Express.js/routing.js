const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('This is the home page.');
});

app.get('/about', (req, res) => {
    res.send('About us');
});

app.post('/contact', (req, res) => {
    res.send('Contact information submitted.');
});

app.listen(3000, () => {
    console.log('Express app with routing is running on port 3000');
});
