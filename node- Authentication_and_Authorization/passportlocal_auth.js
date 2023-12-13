const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const app = express();

const users = [
    { username: 'vams', password: 'nellore' },
    { username: 'tej', password: 'gunt' },
];

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new LocalStrategy((username, password, done) => {
        const user = users.find((user) => user.username === username && user.password === password);
        if (user) {
            return done(null, user);
        } else {
            return done(null, false, { message: 'Authentication failed' });
        }
    })
);

passport.serializeUser((user, done) => {
    done(null, user.username);
});

passport.deserializeUser((username, done) => {
    const user = users.find((user) => user.username === username);
    done(null, user);
});

app.post('/login', passport.authenticate('local'), (req, res) => {
    res.json({ message: 'Authentication successful' });
});

app.get('/secure-resource', (req, res) => {
    if (req.isAuthenticated()) {
        res.json({ message: 'Access granted to secure resource' });
    } else {
        res.status(401).json({ message: 'Authentication failed' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
