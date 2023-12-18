const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/greet/:name', (req, res) => {
    const name = req.params.name;
    res.render('greeting', { name });
});

app.listen(3000, () => {
    console.log('Express app with EJS view engine is running on port 3000');
});
