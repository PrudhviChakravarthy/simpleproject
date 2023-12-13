const express = require('express');
const app = express();

const users = [
    { username: 'kyo', password: 'bhim' },
    { username: 'kas', password: 'akiv' },
];

app.use(express.json());

app.use((req, res, next) => {
    const { username, password } = req.body;
    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
        req.user = user;
        next();
    } else {
        res.status(401).json({ message: 'Authentication failed' });
    }
});

app.get('/secure-access', (req, res) => {
    res.json({ message: 'Access granted to secure resource' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
