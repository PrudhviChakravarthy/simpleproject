const express = require('express');
const basicAuth = require('express-basic-auth');

const app = express();

app.use(basicAuth({
    users: { 'kyo': 'kyo' },
    challenge: true,
    unauthorizedResponse: 'Unauthorized',
}));

app.get('/admin', (req, res) => {
    res.send('Admin area');
});

app.listen(3000, () => {
    console.log('Express server with basic HTTP authentication is running on port 3000');
});
