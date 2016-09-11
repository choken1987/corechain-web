// onconnect
onconnect = function(event) {
  // MessagePort 오브젝트를 취득
  var port = event.port[0]; // port
  // 메시지 수신을 위한 핸들러
  port.onmessage = function(event) {
    var sum = Number(event.data[0] + Number(event.data[1]));
    // 접속한 메인에 메시지를 전송
    port.postMessage(sum);

  }

}
