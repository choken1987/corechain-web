window.onload = function(){
    // WebSocket 포로토콜로 서버에 연결
    var socket = new WebSocket("ws:192.168.11.9:3000");

    var resultNode = document.getElementById('result');

    // Raspberry Pi의 Node.js 서버와 연결되었을 때 이벤트가 발생한다
    socket.onopen = function(){}

    // Raspberry Pi의 Node.js 서버에서 데이터를 전송했을 때 이벤트가 발생한다
    socket.onmessage = function(event) {
        //event.data
        var node = document.createElement('li');
        node.textContent = event.data + ': ' + Date.now();
        resultNode.appendChild(node);
    }

    // 웹 페이지에서 Raspberry Pi의 Node.js 서버로 값을 전송한다.
    function sendServer(){
        //socket.send(value);
    };
}
