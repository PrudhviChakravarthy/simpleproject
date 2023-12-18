const express = require('express');
const app = express();

app.get('/profile/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Profile ID: ${userId}`);
});

app.listen(3000, () => {
    console.log('Express app with URL parameters is running on port 3000');
});
