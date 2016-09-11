

var server = require("express")();
var qs = require("querystring");

//
server.get("/", function(req, res) {
  res.sendFile("radio.html", {root: __dirname});
})

// 클ㄹ이언트에서 POST로 <form>을 전송했을 때 설정
server.post("/", function(req, res) {
  console.log("access post method");
  var formValue = "";
  // utf-8 인코딩
  req.setEncoding("utf8");
  // 클라이언트에서 form을 전송했을 때 이벤트 발생
  req.on("data", function(data) {
    console.log(data);
    // radio=on 형태를 {radio: 'on'} 형태로 변환
    // formValue = qs.parse(data).radio;
    formValue = qs.parse(data).test;
  })
  // data를 전부 읽었을 때 이벤트 발생
  req.on("end", function() {
    console.log(formValue);
    // 클라이언트에 응답을 전송. 웹페이지가 바뀌어 표시
    res.end(formValue);
  })
})

server.listen(3000);
console.log("서버 3000번 포트 listen")
