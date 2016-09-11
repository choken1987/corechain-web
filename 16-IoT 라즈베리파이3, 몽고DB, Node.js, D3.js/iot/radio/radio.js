
//
var fs = require('fs');
var http = require("http");
var server = http.createServer();

//
server.on("connection", function() {
  console.log("Server Connection");
});

//
server.on("request", function(req, res) {
  console.log('Client Request');

  //
  fs.readFile("radio.html", function(error, data) {
    // 통신 헤더 작성
    res.writeHead(200, {
      "Content-type": "text/html"
    })
    // data에 radio.html이 설정
    res.end(data);
  })
});

//
server.listen(3000);
console.log("Server On");
