var app = require('express')();
var url = require('url');
//
var corser = require('corser');

app.use(corser.create());

app.use(function(req, res) {
  var fileName = url.parse(req.url).pathname.replace('/', '');
  res.sendFile(fileName, {root: __dirname});
  console.log('use: ' + fileName);
})

app.listen(3500);
console.log('server startup; port 3500');
