const express = require('express');
const app = express();

app.get('/api/data', (req, res) => {
    const data = { message: 'This is API data' };
    res.json(data);
});

app.listen(3000, () => {
    console.log('API server is running on port 3000');
});
