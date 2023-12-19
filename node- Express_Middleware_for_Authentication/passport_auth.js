const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const app = express();

passport.use(new LocalStrategy((username, password, done) => {
    if (username === 'admin' && password === 'password123') {
        return done(null, { id: 1, username: 'admin' });
    } else {
        return done(null, false);
    }
}));

app.use(express.json());
app.use(passport.initialize());

app.post('/login',
    passport.authenticate('local', { session: false }),
    (req, res) => {
        res.json({ message: 'Logged in' });
    }
);

app.get('/admin',
    passport.authenticate('local', { session: false }),
    (req, res) => {
        res.send('Admin area');
    }
);

app.listen(3000, () => {
    console.log('Express app with Passport.js authentication is running on port 3000');
});
