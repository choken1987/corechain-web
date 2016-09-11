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
    button = new GPIO(13, 'in', 'both');

/*
노트북에서 HTML 파일을 전송하므로 삭제한다.
// req: Request 오브젝트, res: Response 오브젝트
app.get('/', function (req, res) {
    res.sendFile('piButton.html', {root: __dirname});
});

app.use(function(req, res) {
    var fileName = url.parse(req.url).pathname.replace("/", "");
    res.sendFile(fileName, { root: __dirname });
});
*/

// 브라우저 주소창에 URL을 입력하면 connection 이벤트가 발생한다.
socket.on('connection', function(cws) {
    saveSocket = cws;
});
server.listen(3000);

/*
1. socket.on('connection', function(cws){}에 작성하면
2. 버튼을 클릭했을 때 데이터 두 번 발생하므로 on() 밖에 작성하였다.
3. 한편 connection 이벤트가 발생했을 때 파라미터 값인 cws를 사용할 수 없으므로
- on() 함수 안에서 cws를 saveSocket에 할당한다.
*/
function buttonValue(err, state) {
    // 1: 눌렀을 때, 0: 눌렀다가 놓았을 때
    // 문자열 타입으로 전송해야 한다.
    if (state == 1) {
        saveSocket.send("1");
    }
}
button.watch(buttonValue);
console.log("준비 완료");
