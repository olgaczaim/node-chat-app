const path = require('path');
const http = require('http');
const publicPath = path.join(__dirname, '../public');
const socketIO  = require('socket.io');
const port = process.env.PORT || 3000;
const express = require('express');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection', (socket) => {
   console.log('New user connected');

   socket.on('disconnect', () => {
       console.log('User vas disconnected');
   });
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});