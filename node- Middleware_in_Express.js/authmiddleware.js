function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next(); // User is authenticated, proceed to the next middleware.
    } else {
        res.status(401).send('Unauthorized');
    }
}
