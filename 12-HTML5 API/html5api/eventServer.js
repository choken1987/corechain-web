var app = require('express')();
var url = require('url');
app.get('/', function(req, res){
  console.log('get: /');
  res.sendFile('event.html', {root: __dirname});
});
// new EventSource('/sse'); 로 연결하면 실행
app.get('/sse', function(req, res) {
  console.log('sse');
  // 통신 헤더 값 설정
  res.writeHead(200, {
    'Content-Type': 'text/event-stream', // stream
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
  });

  // 클라이언트로 메시지 전송
  res.write('data:' + JSON.stringify({sports: '스포츠'}) + '\n');
  res.write('event.sports' + '\n\n');
  res.write('data:' + JSON.stringify({book: '도서'}) + '\n');
  res.write('event.book' + '\n\n');
  res.write('data:' + JSON.stringify({close: '전송 완료'}) + '\n');
  res.write('event.close' + '\n\n');

});

app.use(function(req, res) {
  var fileName = url.parse(req.url).pathname.replace('/', '');
  res.sendFile(fileName, {root: __dirname});
  console.log('use: ' + fileName);
})

app.listen(3000);
console.log('server startup; port 3000');
