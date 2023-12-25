function modifyRequest(req, res, next) {
    req.customData = 'Modified Data';
    next();
}

app.use(modifyRequest);

app.get('/', (req, res) => {
    res.send(req.customData);
});
