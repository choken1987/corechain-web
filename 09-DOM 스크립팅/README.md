# DOM 스크립팅

## files

* log.js	1,596	2015-12-19 09:56	-a--
* log.html	854	2016-01-16 14:25	-a--
* 09-DOM.js	2,859	2016-01-16 14:47	-a--
* el-14-child.html	317	2016-01-16 14:52	-a--
* el-21-element-method.html	1,556	2016-01-16 15:42	-a--
* el-21-event.html	1,302	2016-01-16 17:56	-a--
* el-21-43-event.html	1,324	2016-01-17 11:36	-a--
* el-23-21-selector.html	2,941	2016-01-17 15:37	-a--
* 09-DOM.md	7,700	2016-01-17 16:20	-a--
* el-27-interface.html	2,587	2016-01-17 17:55	-a--

***

# 1부 DOM의 개요 

```
* 누가
-사용자

* 무엇을
- element, attribute, event

* 어덯게
- CRUD

* 언제
- html 렌더링, CRUD 필요시, 이벤트 발생 시

* 어디에
- document <!doctype html>

*왜
- 역동적인 컨텐츠 제공
```

## 1장 유저 인터페이스2 

```

```

### 1.1DOM API2 

```
* API
- 메서드, 속성(프로퍼티) 포함
- 실체(객체)가 아닌 인터페이스 제공

* 인터페이스인 이유
- 다수의 언어에서 DOM  상용
- 언어에 의존하지 않고 중립 형태 ㅔ공

* API ㅈ구현
- 오브젝트(Object), 인스턴스(Instance)
- JavaScript 브라우저가 Built0in Object로 제공
- Java: import 문을 소스 코드에 작성
```

### 1.2DOM의 궁극적인 목적3 

```

```

### 1.3엘리먼트에 접근4 

```

```

### 1.4웹 페이지 구성 요소7 

```

```

### 1.5구조와 표현의 분리16 

```

```

2장 애플리케이션 실행 환경18 
2.1애플리케이션 실행 환경 설정 18 
2.2코드 작성 기준 20 
2.3자바스크립트 프레임워크 사용 목적 30 

### 3장 DOM 개요32 

```

```

### 3.1DOM 출현 배경 32

```
* W3C
- World Wide Web Consortium
- 웹 기술 표준 제정
- 표준(Standard)가 아닌 권고(Recormandation) 사용
// https://www.w3.org/DOM/DOMTR

* 브라우저 전쟁
- IE: DHTML(Dynamic HTML) // 크로스 브라우징 문제 발생 원인

```


### 3.2DOM 레벨 34 

```
* DOM 레벨
- 레벨 1, 2, 3
- HTML5에 통합
- 레벨4: HTML5에서 분리

* DOM 레벨 0
- 브라우저 전쟁 시기의 DOM 레벨
- 정식 레벨이 아닌 구분을 위한 레벨
// IE 6, 7, 8이 없어 질 때까지는 사용해야 함
```

### 3.3DOM 권고와 표준 41 

```
* HTML 5 핵심
- 오픈 플ㄽ폼(Open Platform)
- 표준 바탕(Standard)
// delete 자바 애플릿, 어도비 플래시, MS 실버라이트
```

### 3.4DOM 트리 42 

```
* DOM 레벨 1
* DOM 레벨 2
- IE 6, 7, 8 // 크로스 브라우징 문제 발생 시점
// XML vs JSON - Object vs String
* DOM 레벨 3
- XML // 이기종간 데이터

* HTML5
* DOM 워킹 그룹 분리
- HTML, Web Apps, CSSOM
* 많은 이벤트 타입 추가
- <video>, <audio> 제어 이벤트 ㅇ입
- click을 onclick 형태로 사용
-- <button onclick="clickButton()">버튼</button>
- 엘리먼트에 이벤트 작성(비표준 이었음) // DHTML
* CSSOM 분리
- CSS Object Model // https://www.w3.org/TR/cssom/
- Media Query
- Selector

// HTML element 13개 속성 들어갈 수 있음

// DOM 구성 요소


* 엘리먼트

* 노드(attribute)
- 12개의 노드 타입
- node element      : <div>
- node 속성       : id="sports"
- node 텍스트      : "텍스트"

```

# 2부 DOM Core 

## 4장 HTML 엘리먼트 오브젝트50 

```

* getElementById()
- document 에 존재하지 않으면 null 반환 (undefined X)
- 엘리먼트를 생성만 하고 document에 첨부하지 않으면 검색ㅎ지 못함
-- 즉, DOM tree에 존재해야 함
* getElementsByTagName()
- NodeList
- 엘리먼트가 배열로 반환
- 컬렉션: 일반적으로 배열, 객체에서 사용
```

### 4.1prototype 기반 객체지향 언어 50 

```

```

### 4.2엘리먼트 오브젝트 52 

```

```

### 4.3HTML 엘리먼트 오브젝트 생성 56 

```

```



## 5장 DOM 트리 제어84 

```

```

### 5.1 DOM 노드 제어 84 

```

```

### 5.2DOM 구조 제어 98 

```

```

### 5.3랜더링의 최소화112 

```

```

### 6장 HTML 엘리먼트 속성 제어128 

```
* Element 속성
** nodeName vs tagName
- 일반 엘리먼트에는 차이가 없으나 nodeName: '#document'로 존재. tagName은 속성 자체가 없음.
- nodeName 사용 권장

```

### 6.1속성 제어 128 

```
setAttribute()
getAttribute()
hasAttribute()
removeAttribute() // 반환 값 undefined - IE9이하에서는 true/false 반환

// 타이틀 미지정
* 노드 제어를 위한 메서드
- node(#parent레벨#).appendChild(document.createElement('div'))
- cloneNode(), remove()를 제외하고 parent노드를 지정


```

### 6.2NamedNodeMap 인터페이스 138 

```

```

### 6.3속성 노드 제어 147 

```

* hasChildNodes
- textNode 도 포함시킴(값이 있을경우)
ex) <li>test</li> // 1
ex) <li></li> // 0

Methods
Node.appendChild()
Node.cloneNode()
Node.compareDocumentPosition()
Node.contains()
Node.hasChildNodes()
Node.insertBefore()
Node.isDefaultNamespace()
Node.isEqualNode()
Node.lookupNamespaceURI()
Node.lookupPrefix()
Node.normalize()
Node.removeChild()
Node.replaceChild()

```


# 3부 DOM Events 

```
* 이벤트 처리
- 이벤트 설정, 발생, 해제

* 이벤트 설정, 해제 형태
- 이벤트 타입
- 이벤트 리스너(핸들러)
- 캡쳐/버블

* 이벤트 전파
- 이벤트 버블링 방지
- 디폴트 액션
```

## 7장 DOM 이벤트 모델156 

```

```

### 7.1이벤트 개요 156 

```

```

### 7.2이벤트의 설정과 해제 159 

```
* DOM 형태
- element.addEventListener(1, 2, 3)
1. event type
2. 이벤트 리스터(핸들러)
3. 버블/캡쳐: 디폴트(capture: false)

* 이벤트 설정방법
- 엘리먼트에 작성 // onclick="method()"
- js 파일에 작성 // 
```

### 7.3이벤트 전파167 

```
* event.stoppropagation();

* event.preventDefualt();

```

### 7.4이벤트 설정시 고려사항 177 

```

```

### 7.5Event 인터페이스 184 

```

```


### 8장 DOM 이벤트 모듈190 

```

```

### 8.1이벤트 모듈 타입190 

```

```

### 8.2마우스 이벤트 191 

```
event.type

mouseover

mousedown
mouseup
click

mousedown
mouseup
click

dbclick

mouseout


```

### 8.3키보드 이벤트 209 

```
keydown
keyup
keypress
```

### 8.4Mutation 이벤트 215 

```

```

### 8.5HTML 이벤트 222 

```
select
change
load
unload
resize
scroll
reset
submit

load

var contentLoaded = false;
document.addEventListener("DOMContentLoaded", function(event){
    // <body> 가 로드ㅇ되었으므로 js.log()를 사용할 수 있습니다.
    js.log("DOM 파싱 완료");
    contentLoaded = true
});

window.onload = function(event){
    js.log(event.type);
    js.log(contentLoaded);
}

//
var el = document.getElementById('clickID');
el.onclick = show.bind(sports, el);

var soport = {
    value: 1234
}

function show (element, event) {
    js.log(element.textContent);
    event.targetId

}
```

4부 DOM HTML 

9장 DOM HTML234 
9.1DOM HTML 개요 234 
9.2HTMLCollection 인터페이스 236 
9.3HTMLOptionsCollection 인터페이스 241 
9.4HTMLDocument 인터페이스 245 
9.5 HTMLElement 인터페이스 254 

10장 DOM HTML 인터페이스259 
10.1HTML 도큐먼트 인터페이스 259 
10.2폼 컨트롤 인터페이스 283 
10.3리스트 인터페이스 322 
10.4문단 인터페이스 324 
10.5오브젝트 인터페이스 329 
10.6테이블 인터페이스 346 
10.7프레임 인터페이스 376 

5부 DOM Style & Views 

11장 DOM Style384 
11.1CSS 구조 384 
11.2스타일 적용 우선순위 387 
11.3'link', 'style' 엘리먼트의 속성 제어 399 
11.4Document 확장 414 
11.5룰셋 제어 418 

12장 DOM Views440 
12.1인라인 스타일 440 
12.2DOM Views 452 


### Selectors

```

```

### Interface

```

```

### DOMTokenList

```

```

### DOM Parsing

```
innerHTML
outerHTML
insertAdjacentHTML()



```
