
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

//////////////////////////////////////////////////

app.listen(3000);
console.log('http://127.0.0.1:3000/file_name.html');
