### 클라이언트 접속 인식

```
* Node.js에서 클라이언트 접속 인식 단계

* 접속 인식 준비
- HTTP 모듈 추출: var http = require("http");
- 웹 서버 생성: var server = http.createServer();

* 접속 인식 이벤트 설정
- server.on("connection", function(){}) 형태
- on(); 이벤트 설정 메소드
- connection: 이벤트 타입
--- 클라이언트에서 서버에 접속하면 connection 이벤트 발생
--- 크롬: 2번 발생, 파이어폭스: 1번 발생
- function(){}: callback 함수

* 클라이언트 접속 대기
- server.listen(3000);
- 3000번 포트로 접속 대기
- http://127.0.0.1:3000 // http://localhost:3000

```

### HTTP 요청 인식

```
* 클라이언트의 요청(Request) 인식

* request 인식 이벤트 설정
- http.on()
- on: 이벤트 설정
- reqeust: 

```

### 클라이언트에 파일 전송

```
* 개요
- 클라이언트에서 Request를 한다는 것은 처음 표시할 컨텐츠가 포함된 파일을 요청한다는 것
- 일반적으로 index.html과 같이 index 이름을 사용
- 메인 페이지라고도 부름

* 사전 준비
- 컨텐츠가 포함된 index.html
- 클라이언트 요청을 인식하기 위한 Javascript 파일

```

## express.js

### npm

```
* npm

* package.json
- npm으로 설치한 Package 정보 저장
- npm init

```

### express.js

```
* 목적, 형태
- Node.js 환경에서 웹/ 모바일 애플리케이션을 위한 프레임 워크
- 파일 전송, 데이터 포맷 등의 유틸리티(utility) 제공
- node,js http 모듈에 추가한 형태

* 설치 방법
- npm install express --save
- "dependencies" : {"express:" "^*.*.*"}가 추가됨
- 모듈 디렉토리 하위 폴더에 생김

```

### express 메서드

```
* 서버 생성

* 클라이언트의 request 인식
server.get("/", function(req, res) {
    res.sendFile("radio.html", {root: __dirname});
})
// get 방식
// __dirname: 글로벌 변수로 현재 디렉토리의 경로

* 브라우저에서 post 메서드로 전송

```

### <form> 전송

```

```

### 디버깅

```

* node-inspector

* 설치
- npm install -g node-inspector

* 디버깅 시작
- node-debug ${파일명}
// node-debug sendClient.js
- 브라우저가 자동으로 디버깅 상태로 실행
- 코드의 첫 라인에 break point가 설정
// http://127.0.0.1:8080/?port=5858

```

## Ajax

### 

```

// XML vs JSON; XML이 더 무겁긴 하지만 안전; 이기종간 데이터 전송


```

### XMLHttpRequest

```
// ref; https://developer.mozilla.org/ko/docs/XMLHttpRequest
* XHR

* 정의
- 클라이언트와 서버 간의 데이터 전송을 위해 클라이언트에 스크립트 기능을 제공하는 API

* req, rep
- fetch: 스펙에서 request와 response를 포함한 의미의 용어로 사용

* SOP (Same Origin Policy)
- 컨텐츠 source가 같은 URL에만 접근 가능

```

### 비동기 통신: GET

```

* 오브젝트 생성
- new XMLHttpRequest();

* 초기화; 서버와 연결
open();

* 이벤트 설정
xhr.onload = function(){};

* 전송
xhr.send();

* 단계 별 예제 진행

```

### 비동기 통신: POST

```

```

### 이벤트 타입

```

abort
loadstart
load
error
loadend
progress
timeout

```

### onreadystatechange 

```
* onreadystatechange
- readyState 속성 값이 바뀔 떄 마다 핸들러 함수를 호출
- 동기 통신에서는 사용 불가

* readyState
0   UNSENT
1   OPEND
2   HEADERS_RECEIVED
3   LOADING
4   DONE

```

### setRequestHeader

```

```

### timeout

```

```

### 

```
text 텍스트 형태의 데이터
xml DOM Document 형태의 데이터
url
```

### responseText

```

```

### responseXML

```

```

### responseType

```
```

###

```

```

### <form>

```
// json 전송 시 name 속성 선택 적 사용(대체; id [, class])
```

###

```

```

### cache 방지

```
* 개요
- 서버에서 가져온 파일을 다시 요청하면 브라우저가 파일을 캐시(cache)하여 두 번째부터는 파일을 가져오지 않는 경우가 있음
- 따라서 파일 내용이 변경되더라도 반영되지 않는 경우가 있음
- 이 때, 매번 서버에서 파일을 가져오도록 처리가 필요함

* 캐시 방지 방법
- URL에 현재 시각을 첨부하여 URL이 변경된 것 처럼 만듬
- Request Header 변경

```

### bind()

```
xhr.onload = this.success.bind(that, xhr);



```

###

```

```

###

```

```

###

```

```

###

```

```

###

```

```

###

```

```

###

```

```

###

```

```

###

```

```

###

```

```

