var app = require("express")();
var url = require("url");

// body-parser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//
app.get("/", function(req, res) {
  console.log("get: responseType.html");
  res.sendFile("responseType.html", {root: __dirname});
});

// FIXME 경로 에러
// 이미지 경로 변경
app.get("/image", function(req, res) {
  var fileName = url.parse(req.url).pathname.replace("/", "../");
  res.sendFile(fileName, {root: __dirname});
  console.log("use: ", fileName);
});

//
app.use(function(req, res) {
  var fileName = url.parse(req.url).pathname.replace("/", "");
  res.sendFile(fileName, {root: __dirname});
  console.log("use: ", fileName);
});

app.listen(3000);
console.log('server on; port: 3000')
