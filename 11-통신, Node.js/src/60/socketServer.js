
//
// var app = require('express');
var app = require('express')();
var url = require('url');

app.get('/', function(req, res) {
  var fileName = 'socket.html';
  res.sendFile(fileName, {root: __dirname});
  console.log('get: ' + fileName);
});

app.use(function(req, res) {
  var fileName = url.parse(req.url).pathname.replace('/', '');
  res.sendFile(fileName, {root: __dirname});
  console.log('use: ', fileName);
});

//
var server = require('http').createServer(app);
server.listen(3000);
console.log('server on port 3000');

// 소켓
var socket = require('socket.io').listen(server);

socket.sockets.on('connection', function(client) {
  // 클라이언트에서 buttonClick 이벤트를 발생 시 실행
  // socket.emit('buttonClick', event.target.value);
  // 두 번째 파라미터 값이 핸들러의 value 속성에 설정
  client.on('buttonClick', function(value) {
    console.log(value);
    socket.sockets.emit('formServer', value);
  })
})
