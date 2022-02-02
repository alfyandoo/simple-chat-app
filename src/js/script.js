const socket = io();

$('form').submit(() => {
    socket.emit('newMessage', $('#text-box').val());
    $('#text-box').val('');
    return false;
});

socket.on('newMessage', (msg) => {
    $('#messages').append($('<li>').text(msg));
});