//--------------------------------------------------
// Raspberry Pi 3에 이 코드 형태로 작성해야 한다.
// 브라우저와  Raspberry Pi 3의 Node.js 서버가 
//     WebSocket 통신으로 데이터를 송수신한다.
//--------------------------------------------------
var saveSocket, 
    http = require('http'),
    url = require('url'),
    app = require('express')(),
    server = http.createServer(app),
    webSocket = require('ws').Server,
    socket = new webSocket({server:server});

var GPIO = require('onoff').Gpio,
    button = new GPIO(13, 'in', 'both'),
    led = new GPIO(23, 'out');

// 브라우저 주소창에 URL을 입력하면 connection 이벤트가 발생한다.
socket.on('connection', function(cws) {
    saveSocket = cws;

    // 브라우저에서 Raspberry Pi Node.js로 데이터를 전송하면 이벤트가 발생한다.
    cws.on('message', function(data) {
        // 값이 20보다 작으면 on, 아니면 off
        console.log(data);
        if (Number(data) < 20) {
            led.writeSync(1);
        } else {
            led.writeSync(0);
        }
    })
});
server.listen(3000);

function buttonValue(err, state) {
    // 1: 눌렀을 때, 0: 눌렀다가 놓았을 때
    // 문자열 타입으로 전송해야 한다.
    if (state == 1) {
        saveSocket.send("1");
    }
}
button.watch(buttonValue);
console.log("준비 완료");
