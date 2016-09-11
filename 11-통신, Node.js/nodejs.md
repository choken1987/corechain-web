

```
1. 주제
Node.js 환경에서 클라이언트(브라우저)와 서버의 Text, Text 파일, JSON, 이미지 파일(Blob) 송수신을 다룹니다. 특히 WebSocket, XMLHttpRequest은 W3C 스펙을 중심으로 속성, 메소드를 모두 다룹니다. 통신은 그다지 변화가 없으므로 한 번은 자세하게 알아 둘 필요가 있습니다.
1) Node.js: Thread, Sync/Async, Event 방식
2) HTTP 통신: TCP/IP Model, TCP/IP 통신, TCP/IP 데이터 송수신
3) Node.js + HTTP 통신: express.js를 사용한 데이터 송수신, 전송
4) Ajax: XMLHttpRequest, 비동기 Request, 비동기 Response, FormData
5) Socket: Socket 개념, socket.io, WebSocket
```

```
// cmd 명령어
cmd
help
dir
cd
mkdir
cls; clear
exit
```

```
* 자바스크립트 셀
- 커맨드 창에서 자바스크립트 코드를 실행하는 것

* 디렉토리 생성

* JavaScript 코드 작성

* JavaScript 코드 실행
```

### Node.js

```

* 키워드
- 네트워크 어플리케이션 플랫폼
- 싱글 스레드, 비동기 I/O, 이벤트 처리
- 서버와 클라이언트에서 자바스크립트 이용
- 2009년 발표

* 구성
- Node.js 엔진
= 자바스크립트 엔진: 구글 V8
- 비동기 I/O 처리: Libuv
// 위 2개는 C++, 아래 1개는 C

* 기능 중심으로 진행
- 예를 들어 스레드(thread) 개념을 완전하게 이해하려면
--- CPU, OS에 대한 이해 필요
--- 하드웨어, 메모리에 대한 이해 필요
- 이는 본 과정의 범위가 아니므로 기능 중심으로 진행
```

### 스레드

```
* 스레드
= CPU를 사용하는 단위
- 하나의 스레드로 클라이언트 요청(request)에 대응

* 일반적인 스레드 처리 방법
- 스레드별로 메모리 등의 자원ㄷ을 할당
- 요청(접속)이 증가하면 스레드를 증가시켜 scalable에 대응
= 메모리, 스레드 관리 등의 비용(오버헤드) 증가
```

### 싱글 스레드

```
* Node.js 방법
- 요청(접속)이 증가하더라도 스레드를 증가(생성)시키지 않고 하나의 스레드로 scalable에 대응
```

### 비동기 I/O

```
* 동기
- 요청과 스레드가 1:1 형태
- 요청(Reqeust) 처리가 완료되어야 다음 요청 처리

* 비동기
- 요청과 처리의 분리 // 
- 요청에 대한 처리를 스레드에 넘기고 비동기로 전환
- 다른 요청 응대

* Node.js 환경에서 용어
- synchronous와 blocking은 같은 의미
- asynchronous와 non-blocking은 같은 의미
```

### 이벤트 방식

```
* 필요성
- 비동기는 흐름이 끊어져서 연속 처리 불가
- 처리가 끝난 것을 인식해야 다음 처리 가능
- 처리가 끝나면 이벤트를 발생시켜 통지

* 이벤트와 callback 함수
- click 이벤트가 발생하면 핸들러가 호출되는 형태
- 처리 완료 이벤트가 발생하면 callback(핸들러) 함수 호출

* Node.js 프로그래밍 방법
- 발생한 이벤트를 인식하기 위한 이벤트 설정
- 함수 호출 -> 연결 단절
- 이벤트 발생 -> callback 함수 호출
- 클라이언트와 통신도 같은 형태

```

### Node.js 코드

```

* 개발 언어
- C++
- 소스 코드로 install: python 필요

* 언어 관점의 주요 개념
- Mutex: 상호 배제, 동시 접근 배제
- Critical Section: 임계 영역(자원, 연산 포함)
- Semaphore: 임계 영역에 접근
// C++ 개념

- Node.js 엔진: 통신, 컨트롤
- V8 엔진: 자바스크립트 코드 컴파일, 어셈블리로 변환
- Libuv: 비동기 I/O

```

### 효율적 사용

```
* 작은 데이터, 짧은 처리
- 작은 데이터의 I/O 에 적합
- 채팅과 같은 실시간 짧은 처리에 적합
- IoT의 사물에서 발생하는 작은 데이터

* 고려 사항
- 데이터 복사, 긴 시간의 batch 처리와 같이 지속적인 연결 처리에는 효율이 떨어짐

* 부가 사항
- 데이터 송수신에 따른 DataBase와 같은 처리

```

### package 사용기준

```
* npm site
- https://www.npmjs.com/

* package
- npm 사이트에 등록된 프로그램을 지칭

* 기능 중심 접근
- 본 과정은 일반적으로 알려진 package 사용
- 코드 분석이 아닌 기능 중심으로 접근
- 프로젝트 환경에 적합한 Package 선택 및 사용 // !

```

### HTTP 통신

```
* W3C HTTP spec

* HTTP

* 컨텐츠 송수신 프로토콜
- 웹브라우저와 웹서버 사이의 컨텐츠 송수신 프로토콜
--- HTML, XML, 이미지 파일 등...
--- 센서와 연동하여 데이터 송수신

- 요청, 응답 형태의 통신 규약(프로토콜)
- TCP/IP 기반

* HTTP/1.1과 HTTP/2 차이


```

### OSI 7

```
https://ko.wikipedia.org/wiki/OSI_%EB%AA%A8%ED%98%95

```

### TCP/IP

```

* TCP
- 전송 제어 프로토콜
- 세션 형태로 1대1 통신
- 고속 전송보다 에러없는 데이터 전송이 목적
// 에러없는 데이터 전송; vs UDP(ex.. stream)

* IP
- IP 주소와 포트 번호로 TCP/IP 커넥션 연결

```

### TCP/IP 데이터 송수신

```
* TCP 세그먼트 // segmant
- 전송 데이터 단위
- 네트워크에서 효율적인 라우팅을 위해 메시지를 분할한 것

* IP 패킷 // packet

// TCP는 헤더/바디 모두 계속 전송, socket은 헤더먼저 전송 후 바디만 전송

```

### 메시지

```
* 구분

* 구성
- 시작줄, header, body

* 시작줄
- 요청: URL, adress, method(GET, POST...)
- 응답: status, code

* 헤더
- 요청: Accept, Cache-Control, Cookie, User-Agent ...
- 응답: Content-Encoding, Contetnt-Type ...

* 본문
- 요청: 서버로 보내는 데이터
- 응답: 클라이언트로 보내는 데이터

```

### 트랜잭션

```
* Tranaction
- 요청과 응답의 상호 작용

* HTTP Method: HTTP/1.1 기준
- GET:  
- POST: 
- PUT: 
- DELETE: 
- CONNECT: 
- HEAD: 
- OPTIONS: 
- TRACE: 

* HTTP 응답 메시지의 상태코드
- 101 ~ 199: 
- 200 ~ 299: 
- 300 ~ 305: 
- 400 ~ 499: 
- 500 ~ 599: 

```