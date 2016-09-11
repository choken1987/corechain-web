# HTML5 API 

## files

* example.js	3,082	2016-03-19 13:43	-a--
* Typed_arrays.js	1,672	2016-03-19 17:54	-a--
* HTML5_API.md	4,848	2016-03-20 17:02	-a--

***

## 목차

```
1) Page Visibility, Web Notifications, Text Selection, Fullscreen,
2) Progress Events, Server-Sent Events, CORS
5) ES6: Promise, TypedArray, ArrayBuffer, DataView
3) Web Storage, File API, Web Workers
4) Web Component(HTML Templates, Shadow DOM, Custom Elements, HTML Imports)
```

### Fullscreen

```

```

### Page Visibility 

```
* 보일때만 비디오 재생

attribute

hidden
visibillityState
visibilitychange
```

### Web Notifications 

```
* 개요
- 메시지 알림 표시
- 브라우저가 열려 있거나 최소화했을 때 가능
* 단계
- 알림 표시 허가 체크 및 승인
-- 미승인상태 시 허가 요청 창 표시
- 알림 작성
-- 알림 인스턴스를 생성하면 알림이 전송됨
- 알림 닫기

```

### Text Selection 

```
selection
range
```

### Progress Events

```

```

### Server-Sent Events

```
new EventSource()
url
withCredentials
readyState
onopen
onmessage
onerror

* 목적
* 유스케이스
- 바로 앞에 유스케이스와 같으며 아래 사항이 다르다
- 서버는 클라이언트에 event가 포함된 메시지를 전송
- event 프로퍼티 값이 핸들러 이름이 되어 호출됨
- event 타입이 close이면 3초 후에 close()를 실행
- 서버는 close 입ㄴ트를 받아 콘솔에 close를 출력

```

### CORS

```
Cross Origin Resource Sharing
```

### Promise

```

```

### TypedArray 

```
* Typed Array
- Array이지만 Array.isArray() 반환 값은 false
* 출현 배경
- Array 오브젝트는 동적으로 배열에 엘리먼트 추가/삭제 가능
--- 삭제하면 처리 속도를 위해 undefined 설정
- 배열의 길이가 변경되지 않는 타입 필요
- 바이너리 데이터 처리 필요
* Typed Array spec.
- WebGL에서 바이너리 데이터 취급을 위한 스펙 제정
- 현재는 ES6 통합
- XMLHttpRequest, WebSocket, File API 등에서 사용
```

### 번외

```
new 연산자
{}.prototype

함수
메서드

인스턴스

///

encode base64

///
구조체
스트럭쳐

```


### ArrayBuffer 

```

```

### DataView

```

```

### Web Storage

~~~

~~~

### File API

~~~

~~~

### Web Workers

~~~
* 개요
- 백그라운드에서 별도의 스레드(비동기)로 자바스크립트 코드 실행
- Worker는 HTML의 콘텐츠에 직접 access 불가
* 메시지
- Document와 Worker의 데이터 송수신에 message 사용
- postMessage(message)의 파라미터에 전송할 값 지정
* 제한적 API 사용
- Worker에서 window 및 API 사용에 제한 있음
* Worker 종류
- 전용(Dedecated) 워커: Worker 인스턴스를 생성한 코드 전용
- 공유(Shared) 워커: 탭이 다른 코드에서 Worker 공유
~~~

## Web Component

### HTML Templates

```
* Template
- 같은형태(엘리먼트)를 반복하여 컨텐츠를 표현할때 사용
- 템플릿을 정의, 재사용
* 현재모습
- display: none 으로 템플릿 형태의 엘리먼트 작성
- 자바스크립트로 복사/편집하여 컨텐츠 표현
- 구글 품질 가이드 라인: 검색 랭크 조작 가능성이 있어 위반

-문자열로 엘리먼트를 작성하고 innerHTML 사용

* HTML5 Template 효율성
-

```

### Shadow DOM

```
* 현재의 문제점
- HTML 다큐먼트 전체에 style이 반영되므로 DOM Tree를 추가하면 style이 충돌될 가능성이 있어 체크 필요
* 대첵
- style 적용범위 한정
* Shadow DOM
- DOM Tree의 컴포넌트화와 캡슐화
- 객체화: DOM Tree와 style을 다큐먼트에 의존하지 않고  독립적으로 실행
- 캡슐화: 필요한 시점에 다큐먼트에 반영하여 컨텐츠 표현
* Shadow DOM 접근
- <template>에 DOM Tree와 style작성
-- DOM Tree와 style이 다큐먼트에 반영/표시되지 않음
- 필요시점에 template을 엘리먼트에 첨부

```

### Custom Elements

```
* 개요
- 개발자가 임의의 엘리먼트 작성
- 의미 부여, 유지보수 용이
```

### HTML Imports

```
* 현재
* HTML Imports
- html 파일을 Document로 로드할 수 있도록 한 것
- <link rel="import" href="x-custom.html">
```

## Promise

### Promise

```
* 키워드
- 비동기 처리, 연결
* 개요
- Promise는 오브젝트로 비동기 처리 및 이외 연결에 사용
- 비동기 처리는 일련의 흐름이 끊어져 연속 실행 불가
- Promise는 비동기 처리가 완료되면 연결된 콜백(핸들러) 함수 실행
- 비동기 처리와 연결하여 실행할 함수/ 메서드를 정의하는 것
--- 이벤트 처리와 차이 있음
* 스펙변화
- DOM에서 JavaScript로 전환되었지만 DOM도 사용 가능
- Promise를 적용한 HTML5 API 증가
```