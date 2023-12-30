const WebSocket = require('ws');
const users = new Map();

const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        if (message.startsWith('auth:')) {
            const [, username] = message.split(':');
            users.set(username, ws);
            ws.send('Server: Authentication successful.');
        } else {
            wss.clients.forEach((client) => {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(`Server: Broadcast - ${message}`);
                }
            });
        };
    });

    ws.on('close', () => {
        const username = [...users.entries()].find(([key, value]) => value === ws)?.[0];
        if (username) {
            users.delete(username);
        }
    });
});
