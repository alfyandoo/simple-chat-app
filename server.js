const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', async (req, res) => {
    res.sendFile(`${__dirname}/src/index.html`);
});

app.use(express.static("src"));

io.on('connection', async (socket) => {
    await socket.on('newMessage', (msg) => {
        io.emit('newMessage', msg);
    });

    await socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

http.listen(3000, async () => {
    await console.log('listening on port 3000');
});