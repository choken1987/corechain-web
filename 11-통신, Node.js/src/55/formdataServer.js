var app = require("express")();
var url = require("url");

// multer
var multer = require("multer");
var upload = multer();

//
app.get("/", function(req, res) {
  var fileName = "formdata.html";
  console.log("get: ", fileName);
  res.sendFile(fileName, {root: __dirname});
});

// <form>의 name 속성과 같음
// {name: value} 형태로 req.body에 설정하게 된다.
app.post("/", upload.single(), function(req, res, nex){

  console.log(typeof req.body);
  console.log('body: ', req.body);
  //
  res.send(req.body);
})


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
