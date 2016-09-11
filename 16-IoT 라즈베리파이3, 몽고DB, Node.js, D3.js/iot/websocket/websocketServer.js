
//
var http = require("http"),
    url = require('url'),
    app = require('express')(),
    server = http.createServer(app),
    webSocket = require('ws').Server,

    soket = new webSocket({server:server});

    var raspi = require("raspi-io"),
    five = require("johnny-five");

    var board = new five.Board({
        io: new raspi()
    });

    //
    app.get('/', function(req, res) {
      var fileName = 'websocket.html';
      res.sendFile(fileName, {root: __dirname});
      console.log('get: ' + fileName);
    });

    //
    app.use(function(req, res) {
      var fileName = url.parse(req.url).pathname.replace('/', '');
      res.sendFile(fileName, {root: __dirname});
      console.log('use: ', fileName);
    });

    // 클라이언트에서 연결을 인식하기 위해 이벤트를 설정
    socket.on('connetion', function(cws) {
      var led = new fine.Led('GPIO22');
      // 클라이언트 메시지를 인식하기 위해 이벤트를 설정
      cws.on('message', function(message) {
        message === 'on' ? led.on() : led.off();
        cws.send(message);
      });
    });

    //
    var server = require('http').createServer(app);
    server.listen(3000);
    console.log('server on port 3000');
