const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        ws.send(`Server: You sent "${message}"`);
    });

    ws.send('Server: Connection established.');
});
