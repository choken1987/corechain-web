
//
var app = require('express')();
var url = require('url');

//
app.get('/', function(req, res) {
  var fileName = 'webSocket.html';
  res.sendFile(fileName, {root: __dirname});
  console.log('get: ' + fileName);
});

//
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
/*
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
*/
// WebSocket
var socket = new require('ws').Server({port: 3000});
// var socket = new require('ws').Server({host: '127.0.0.1', port: 3000});
// 클라이언트 연결을 인식하기 위한 이벤트 설정
socket.on('connection', function(cws) {
  // 클라이언트 보낸 메시지를 인식하기 위한 이벤트 설정
  cws.on('massage', function(message) {
    // 수신한 메시지에 '서버 응답'을 첨부하여 다시 전송
    cws.send(message + ': 서버 응답');
    console.log(message);
  })
})
