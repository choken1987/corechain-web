
//
var http = require("http");
var server = http.createServer();

//
server.on("connection", function() {
  console.log("Server Connection");
});

//
server.on("request", function() {
  console.log('Client Request');
});

//
server.listen(3000);
console.log("Server On");
