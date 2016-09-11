var app = require('express')();
var url = require('url');
app.get('/', function(req, res){
  console.log('get: /');
  res.sendFile('message.html', {root: __dirname});
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

  // 주석이므로 클라이언트로 전송되지 않음
  res.write(':' + '주석' + '\n');

  // 클라이언트로 메시지 전송
  // 'data: message' 형태
  // '\n'은 이어진 데이터가 있다는 것을 나타냄

  res.write('date: ' + '첫 번째 데이터' + '\n');

  // 끝에 '\n\n'을 나타내면 종료를 나타냄
  res.write('data: ' + '두 번째 데이터' + '\n\n');

});

app.use(function(req, res) {
  var fileName = url.parse(req.url).pathname.replace('/', '');
  res.sendFile(fileName, {root: __dirname});
  console.log('use: ' + fileName);
})

app.listen(3000);
console.log('server startup; port 3000');
