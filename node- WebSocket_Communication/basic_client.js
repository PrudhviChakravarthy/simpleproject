const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:3000');

ws.on('open', () => {
    console.log('Connected to the server.');
    ws.send('Client: Hello, server!');
});

ws.on('message', (message) => {
    console.log(`Received from server: ${message}`);
});
