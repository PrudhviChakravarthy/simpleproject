const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

const secretKey = 'your-secret-key';

app.post('/login', (req, res) => {
    const user = {
        username: 'admin',
        role: 'admin',
    };

    const token = jwt.sign(user, secretKey);
    res.json({ token });
});

app.get('/admin', (req, res) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).send('Unauthorized');
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).send('Forbidden');
        }

        if (user.role === 'admin') {
            res.send('Admin area');
        } else {
            res.status(403).send('Forbidden');
        }
    });
});

app.listen(3000, () => {
    console.log('Express app with JWT authentication is running on port 3000');
});
