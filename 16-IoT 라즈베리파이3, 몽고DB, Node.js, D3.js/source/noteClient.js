window.onload = function(){
    // 노트북 Node.js 서버 연결 WebSocket
    // new WebSocket("ws:127.0.0.1:3000");을 사용했더니
    // Respberry Pi와 충동이 나는지 Raspberry Pi와 통신이 되지 않았다.
    // 그래서 socket.io를 사용한 것임
    var noteSocket = io.connect();

    // Raspberry Pi Node.js 서버 연결 WebSocket
    var piSocket = new WebSocket("ws:192.168.11.9:3000");

    // 노트북 Node.js 서버에서 전송한 값 출력
    var resultNode = document.getElementById('result');

    // Raspberry Pi의 Node.js 서버에서 데이터를 전송했을 때 이벤트가 발생한다
    // 노트북의 Node.js 서버로 데이터를 전송한다.
    piSocket.onmessage = function(event) {
        noteSocket.emit('fromRi', event.data);
    }

    // 노트북의 Node.js 서버에서 데이터를 전송했을 때 이벤트가 발생한다
    // Raspberry Pi의 Node.js 서버로 값을 전송한다.
    noteSocket.on('fromNoteServer', function(data){
        piSocket.send(data);
        var node = document.createElement('li');
        node.textContent = data;
        resultNode.appendChild(node);
    });
}

/*
// Raspberry Pi의 Node.js 서버와 연결되었을 때 이벤트가 발생한다
piSocket.onopen = function(){}
// 노트북의 Node.js 서버와 연결되었을 때 이벤트가 발생한다
noteSocket.onopen = function(){}
*/
