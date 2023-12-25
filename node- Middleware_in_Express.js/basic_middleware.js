function loggerMiddleware(req, res, next) {
    console.log(`Received ${req.method} request for ${req.url}`);
    next(); // Call next() to pass control to the next middleware or route handler.
}
