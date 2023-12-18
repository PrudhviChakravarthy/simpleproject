const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    const data = req.body;
    res.json(data);
});

app.listen(3000, () => {
    console.log('Express app handling POST requests is running on port 3000');
});
