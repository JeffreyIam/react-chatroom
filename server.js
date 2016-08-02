var express = require('express');
var app = express();
var http = require('http').Server(app);
app.use(express.static('public'));
var io = require('socket.io')(http);

io.on('connection', function(socket) {
  console.log('user connected');
  socket.on('message', function(data) {
    console.log('sending ' + JSON.stringify(data));
    io.emit('chat message', data);
  });
});

http.listen(3000, function() { console.log('Listening on port 3000'); });
