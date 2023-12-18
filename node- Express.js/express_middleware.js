const express = require('express');
const app = express();

// Custom middleware
app.use((req, res, next) => {
    console.log('Middleware log: Request received.');
    next();
});

app.get('/', (req, res) => {
    res.send('Express middleware example');
});

app.listen(3000, () => {
    console.log('Express app with middleware is running on port 3000');
});
