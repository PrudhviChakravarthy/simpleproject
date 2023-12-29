const http = require('http');
const express = require('express');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/socketIOChatClient.html');
});

io.on('connection', (socket) => {
    socket.on('chat message', (message) => {
        io.emit('chat message', message);
    });
});

server.listen(3000, () => {
    console.log('Socket.io chat server is running on port 3000');
});
