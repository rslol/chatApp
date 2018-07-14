/* Client-Side Socket Connection */
const socket    = io.connect('http://localhost:3000');

/* Query Dom */
const output    = document.getElementById('output');
const handle    = document.getElementById('handle');
const message   = document.getElementById('message');
const btn       = document.getElementById('send');
const status    = document.getElementById('status');

/* Emit Event */
btn.addEventListener('click', () => {
    /* Emit takes two paramenters, name of message & data sent */
    socket.emit('text', {
        /* Assigning variable message to the value of the const message*/
        message: message.value,
        /* Assigning variable handle to the value of the const handle */
        handle: handle.value
    });
});

/*  */
message.addEventListener('keypress', () => {
    socket.emit('type', handle.value)
});

/* Listen for events */
socket.on('text', (data) => {
    status.innerHTML = '';
    /* += whatever is in the HTML I want you to add this to it */
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});

socket.on('type', (data) => {
    status.innerHTML = '<p><em>' + data + ' is typing </em></p>';
});