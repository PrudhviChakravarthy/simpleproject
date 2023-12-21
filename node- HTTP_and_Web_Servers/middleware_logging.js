const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log(`Received request: ${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Welcome to the Express server!');
});

app.listen(3000, () => {
    console.log('Express server with request logging middleware is running on port 3000');
});
