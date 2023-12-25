const cors = require('cors');

app.use(cors()); // Enables CORS for all routes.

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});
