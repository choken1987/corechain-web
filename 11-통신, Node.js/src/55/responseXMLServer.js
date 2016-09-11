var app = require("express")();
var url = require("url");

// body-parser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//
app.get("/", function(req, res) {
  console.log("get: responseXML.html");
  res.sendFile("responseXML.html", {root: __dirname});
});

//
app.use(function(req, res) {
  var fileName = url.parse(req.url).pathname.replace("/", "");
  if (fileName === 'xmlData.xml') {
    res.set("Content-Type", "text/xml")
  }
  res.sendFile(fileName, {root: __dirname});
  console.log("use: ", fileName);
});

app.listen(3000);
console.log('server on; port: 3000')
