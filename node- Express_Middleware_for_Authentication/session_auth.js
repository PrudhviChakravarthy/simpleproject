const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true,
}));

app.get('/login', (req, res) => {
    req.session.authenticated = true;
    res.send('Logged in');
});

app.get('/admin', (req, res) => {
    if (req.session.authenticated) {
        res.send('Admin area');
    } else {
        res.send('Unauthorized');
    }
});

app.listen(3000, () => {
    console.log('Express app with session-based authentication is running on port 3000');
});
