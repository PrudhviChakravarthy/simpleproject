const express = require('express');
const passport = require('passport');
const app = express();


// This is a demo example so 

app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/provider', passport.authenticate('provider'));

app.get('/auth/provider/callback', passport.authenticate('provider', { failureRedirect: '/login' }), (req, res) => {
});

app.get('/secure-resource', (req, res) => {
    if (req.isAuthenticated()) {
        // Access granted to secure resource
    } else {
        // Authentication failed
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
