## socket

### HTTP 특징

```
* 요청과 응답
- 다음에 클라이언트에서 요청할 떄 다시 연결

* Form 전체 전송
- 서버에서 데이터 분리
- 전송할 때마다 헤더(Header)와 전문(Body)전송 // 

* 비동기 통신
- XMLHttpRequest 오브젝트 사용
- 비동기로 데이터만 전송
- HTTP 통신이므로 전송한 후 통신이 끊어짐

```

### Socket 통신

```
* 개요
- 클라이언트에서 요청할 떄 서버와 연결
- 연결(Connection/Session)이 유지된 상태에서 전용 프로토콜(not:(HTTP)) 사용 //
- 연결된 후에는 양방향에서 전송 가능

* 통신 연결
- 처음은 HTTP 통신으로 서버에 연결
- 연결되면 Socket 프로토콜로 변경 //

* 형태
- 처음 연결할 때만 헤더와 본문(Body) 전송
- 연결된 후에는 헤더는 전송하지 않고 본문만 전송

- 클라이언트와 서버에 소켓 설정
- 활용 사례: 채팅

- IE10부터 지원

```

### socket.io

```
IE6에서도 사용 가능
```

### WebSocket

```
* readyState


* WebSocket
- npm install ws --save
```

### WebSocket 실습 문제

```
* 클라리언트 프로그램
연결 인식을 위한 이벤트 // onopen
웹페이지에 라디오 버튼
선택한 값을 서버로 전송
서버에서 보낸 메시지 인식을 위한 이벤트를 설정 // onmessage
서버에서 보낸 메시지를 console.log()에 출력

* 서버 프로그램
클라이언트에 접속하면 radioSocket.html 파일을 전송
클라이언트에서 보낸 메시지(값을)을 콘솔에 출력
받은 값에 서버에서 출력

```

### WebSocket

```
url

onopen
onmessage
onclose

binaryType

```

###

```

```

###

```

```

