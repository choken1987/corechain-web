//------------------------------------------------
//  Server 환경 설정
//------------------------------------------------
var app = require('express')(),
    url = require('url'),
    server = require('http').createServer(app),
    socket = require('socket.io').listen(server);

// req: Request 오브젝트, res: Response 오브젝트
app.get('/', function (req, res) {
    res.sendFile('graph.html', {root: __dirname});
});

app.use(function(req, res) {
    var fileName = url.parse(req.url).pathname.replace("/", "");
    res.sendFile(fileName, { root: __dirname });
});

socket.sockets.on('connection', function(client){
    var oldTime = Date.now();
    var collection = dbName.collection('button');

    // 브라우저에서 fromRi 이벤트를 발생시키면 실행된다.
    // socket.emit('fromRi', event.target.value);
    // 두 번째 파라미터 값이 핸들러의 data 파라미터에 설정된다. 
    client.on('fromRi', function(data){
        // 0.1초 단위로 정수 값을 구한다
        // 5초(50)가 넘으면 50으로 처리한다.
        var currentTime = Date.now();
        var gap = Math.round((currentTime - oldTime) / 100);
        if (gap > 50){
            gap = 50;
        }
        oldTime = currentTime;
        collection.insert({value: gap});
        socket.sockets.emit('fromNoteServer', gap);
    });
});
server.listen(3000);
console.log('http://127.0.0.1:3000');

//------------------------------------------------
//  MongoDB
//------------------------------------------------
var dbName, MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://127.0.0.1/button', function(err, db) {
    dbName = db; 
});