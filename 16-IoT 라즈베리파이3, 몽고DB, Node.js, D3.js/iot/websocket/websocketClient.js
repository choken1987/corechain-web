

window.onload = function() {
  //
  var ip = ":" + "192.168.1.101";
  var port = ":" + "3000";
  var socket = new webSocket("ws" + ip + port);
  // 진행 결과를 출력하는 페어런트 엘리먼트
  var resultNode = document.getElementById('result');
  // 버튼을 클릭했을 때 on/off 값을 서버로 전송
  document.getElementById('group').addEventListener('click', sendServer, false);

  // 연결이 완료되었을 때 발생할 이벤트
  socket.onopen = function() {
    // 서버로 메시지 전송
    socket.send('클라이언트에서 연결');
    var node = document.createElement('li');
    nod.textContent = '클라이언트에서 연결';
    resultNode.appendChild(node);
  }

  // 서버에서 보낸 메시지 인식을 위한 이벤트
  socket.onmessage = function(event) {
    //서버에서 받은 메시지 출력
    var node = document.createElement('li');
    node.textContent = '서버에서 받은 값: ' + event.data;
    resultNode.appendChild(node)
  };

  // 버튼을 클릭했을 때 on/off 값을 서버로 전송
  function sendServer(event) {
    // label을 클릭하면 이벤트가 두 번 발생하므로 제외
    if(event.target.nodeName === "LABEL") {
      return;
    }
    socket.send(event.target.value);
    var node = document.createElement('li');
    node.textContent = 'CT에서 보낸 값: ' + event.target.value;
    resultNode.appendChild(node);
  }



}
