const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());
app.use(session({ secret: 'your-secret-key' }));

app.get('/', (req, res) => {
    req.session.views = (req.session.views || 0) + 1;
    res.send(`You've visited this page ${req.session.views} times.`);
});
