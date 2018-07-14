const   express = require('express'),
        app     = express(),
        socket  = require('socket.io');

app.use(express.static('public'));


const server = app.listen(3000, (err) => {
    if(err) throw err;
    console.log("Listening on port 3000");
})

//Socket setup
const io = socket(server);
io.on('connection', (socket) => {
    console.log("Socket Connection", socket.id);
    /* Refers to the socket between the server and that client */
    /* data refers to the message and handle sent from the emit paramenter */
    socket.on('text', (data) => {
        /* Refers to all the sockets connected to this server */
        io.sockets.emit('text', data);
    });

    socket.on('type', (data) => {
        socket.broadcast.emit('type', data);
    });
});
