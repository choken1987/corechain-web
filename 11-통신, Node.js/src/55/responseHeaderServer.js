var app = require("express")();
var url = require("url");

// body-parser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//
app.get("/", function(req, res) {
  var fileName = "responseHeader.html";
  console.log("get: ", fileName);
  res.sendFile(fileName, {root: __dirname});
});

//
app.use(function(req, res) {
  var fileName = url.parse(req.url).pathname.replace("/", "");
  if (fileName === 'jsonData.txt') {
    //
    res.set('Content-Type', 'application/json;charset=UTF-8');
  }
  res.sendFile(fileName, {root: __dirname});
  console.log("use: ", fileName);
});

app.listen(3000);
console.log('server on; port: 3000')
