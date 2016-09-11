window.onload = function() {

  // WebSocket 프로토콜 서버에 연결
  var socket = new WebSocket('ws:127.0.0.1:3000'); //
  // var socket = new WebSocket('ws:localhost:3000'); //
  debugger;
  // console.log(socket);
  console.log(socket.url);

  //
  socket.onopen = function() {
    debugger;
    console.log(socket.readyState);

    // 서버로 메시지 전송
    socket.send('클라이언트에서 전송');
    console.log('서버로 전송');
  }

  // 서버에서 보낸 메시지 인식을 위한 이벤트 설정
  socket.onmessage = function(event) {
    // 서버에서 받은 메시지 출력
    var message = event.data;
    console.log(message);
  }

}
