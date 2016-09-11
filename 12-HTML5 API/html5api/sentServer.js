var app = require('express')();
var ulr = require('url');
app.get('/', function(req, res){
  console.log('get: /');
  res.sendFile('sent.html', {root: __dirname});
})
// new EventSource('/sse'); 로 연결하면 실행
app.get('/sse', function(res, req) {
  console.log('sse');
  // 통신 헤더 값 설정
  res.writeHead(200, {
    'Content-Type': 'text/event-stream', // stream
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
  });
  // \n\n
  res.write('\n\n');
});

app.use(function(req, res) {
  var fileName = url.parse(req.url).pathname.replace('/', '');
  res.sendFile(fileName, {root: __dirname});
  console.log('use: ' + fileName);
})

app.listen(3000);
console.log('server startup; port 3000');
