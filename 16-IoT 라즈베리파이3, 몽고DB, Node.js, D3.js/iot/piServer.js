
//
var dbName,
    MongoClient = require('mongodb').MongoClient;
    MongoClient.connect('mongodb://127.0.0.1:27017/sports', function(err, db) {
      dbName = db;
    });

var http = require("http"),
    url = require('url'),
    app = require('express')(),
    server = http.createServer(app),
    webSocket = require('ws').Server,
    socket = new webSocket({server:server}),
    // socket = new require('ws').Server({port: 3000}),
    qs = require('querystring');

    //
    app.get('/', function(req, res) {
      var fileName = 'form.html';
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
    socket.on('connection', function(cws) {
      console.log('connect socket')
      debugger;
      var collection = dbName.collection('sports');
      cws.on('message', function(message) {
        var data = JSON.parse(message);
        console.log(data);
        debugger;
        collection.insert({
          name: data.name,
          item: data.item,
        });
      });
    });

    //
    var server = require('http').createServer(app);
    server.listen(3000);
    console.log('server on port 3000');
