// noteClient.js를 복사하여 변경/추가한다.

window.onload = function(){
    // 데이터를 제외한 그래프를 그린다.
    // 막대 그래프를 그릴 때 주석을 해제한다.
    graph.initGrpah();

    var noteSocket = io.connect();

    // Raspberry Pi Node.js 서버 연결 WebSocket
    // var piSocket = new WebSocket("ws:192.168.11.9:3000");
    var piSocket = new WebSocket("ws:192.168.1.101:3000");

    // Raspberry Pi의 Node.js 서버에서 데이터를 전송했을 때 이벤트가 발생한다
    // 노트북의 Node.js 서버로 데이터를 전송한다.
    piSocket.onmessage = function(event) {
        noteSocket.emit('fromRi', event.data);
    }

    // 노트북의 Node.js 서버에서 데이터를 전송했을 때 이벤트가 발생한다
    noteSocket.on('fromNoteServer', function(data){
        // graph.js의 drawBar()를 호출하여 그래프 그릴 값을 반환받는다.
        // 막대 그래프를 그릴 때 주석을 해제한다.
        var value = graph.drawBar(data);

        // Raspberry Pi의 Node.js 서버로 값을 전송한다.
        piSocket.send(data);
    });
}
