
//
var app = require('express')();
var url = require('url');

//
app.get('/', function(req, res) {
  var fileName = 'xhr.html';
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
app.listen(3000);
console.log('server on port 3000');
