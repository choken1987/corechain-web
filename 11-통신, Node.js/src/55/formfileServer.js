var app = require("express")();
var url = require("url");

// multer
var multer = require("multer");
// var upload = multer();
var upload = multer({dest: './images/'}); // destination

//
app.get("/", function(req, res) {
  var fileName = "formfile.html";
  console.log("get: ", fileName);
  res.sendFile(fileName, {root: __dirname});
});

// name 속성이 imageFile인 파일 정보가 req.file에 설정된다
// app.post("/", upload.single(), function(req, res, nex){
app.post("/images", upload.single("imageFile"), function(req, res, next){

  console.log('POST', req.file.originalname);
  //
  res.send(req.file);
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
