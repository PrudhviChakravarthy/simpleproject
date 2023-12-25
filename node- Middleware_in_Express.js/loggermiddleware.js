const express = require('express');
const app = express();

app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
