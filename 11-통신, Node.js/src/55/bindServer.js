var app = require("express")();
var url = require("url");

// multer
var multer = require("multer");
var upload = multer();

//
app.get("/", function(req, res) {
  var fileName = "bind.html";
  console.log("get: ", fileName);
  res.sendFile(fileName, {root: __dirname});
});

//
app.use(function(req, res) {
  var fileName = url.parse(req.url).pathname.replace("/", "");
  if (fileName === 'bindData.txt') {
    res.set("Content-Type", "json")
  }
  res.sendFile(fileName, {root: __dirname});
  console.log("use: ", fileName);
});

app.listen(3000);
console.log('server on; port: 3000')
