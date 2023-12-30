const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:3000');
const username = 'user123';

ws.on('open', () => {
    console.log('Connected to the server.');
    ws.send(`auth:${username}`);
});

ws.on('message', (message) => {
    console.log(`Received from server: ${message}`);
    if (message.startsWith('Server: Authentication successful.')) {
        ws.send('Client: Hello, server! (Authenticated)');
    }
});
