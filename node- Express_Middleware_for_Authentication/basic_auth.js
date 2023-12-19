const express = require('express');
const basicAuth = require('express-basic-auth');

const app = express();

const users = {
    'admin': 'password123',
};

app.use(basicAuth({
    users,
    challenge: true,
    unauthorizedResponse: 'Unauthorized',
}));

app.get('/admin', (req, res) => {
    res.send('Admin area');
});

app.listen(3000, () => {
    console.log('Express app with basic authentication is running on port 3000');
});
