const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const secretKey = 'mySecretKey';

app.use(express.json());

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Perform authentication logic here (e.g., check against a database)

    if (username === 'kyo' && password === 'akiv') {
        const token = jwt.sign({ username }, secretKey);
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Authentication failed' });
    }
});

app.get('/secure-auth', (req, res) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    try {
        jwt.verify(token, secretKey);
        res.json({ message: 'Access granted to secure resource' });
    } catch (err) {
        res.status(401).json({ message: 'Authentication failed' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
