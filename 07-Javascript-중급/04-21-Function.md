# ▣ 4부 자바스크립트 아키텍처와 메커니즘

```
---
JavaScript 핵심

기능핵심    control
기술핵심    object name:value

---
컨트롤

DOM: HTML, CSS 컨트롤
HTML5 API: File, IndexedDB
그래픽: SVG, Canvas, WebGL
통신: XMLHttpRequest, Socket
```

## 21장 Function 오브젝트 구조, 구성

```
---
sprots(); // (window)sports();

---
Function 오브젝트 생성
엔진이 function 키워드를 만나면
빌트인 Function오브젝트로 Function 오브젝트 생성
인스턴스 개념

---
생성한 오브젝트를 sports 변수에 할당

---
sports 함수 호출

// call 호출

---
// 텍스트를 객체로 바라봐야하는 수준까지 올라가야 함
```

### 21.1 생각의 전환 

```
---
** 자바스크립트는 OOP
- Function 오브젝트를 독립된 ++객체++로 인식, 접근 // 객체

** 오브젝트 저장 형태
- function 키워드를 만나 생성한 Function 오브젝트를 {name: value} 형태로 저장
- 즉, {sports: Function 오브젝트}형태


** 함수를 호출하면
- 함수 이름으로 검색하여 value 값을 구하여 value가 Function 오브젝트이면 실행하게 됨

---
{key: value}

** 함수가 호출되면 엔진은
- {key: {key: value}} 형태의 프로퍼티를 조합하여실행환경을 인식하고 함수 코드를 실행

** {key: value}형태에 맞추어 생각을 전환해야
-

** function(){} 코드를 보면
- {key: value} 형태의 Function 오브젝트가 연상되어야 하며 Function 오브젝트의 프로퍼티가 연상되어야 한다.



```

### 21.2 아키텍처와 메커니즘 개요 

```
** 아키텍처
- 목적을 가진 구조

** 메커니즘
- 목적을 달성하기 위한 방법

** 아키텍처와 메커니즘에 대한 정확한 이해

---
자바스크립트 목적

---

```

### 21.3 아키텍처와 메커니즘 키워드 리스트 

```
---
10 Executable Code and Execution Contexts
10.1 Types of Executable Code
10.1.1 Strict Mode Code
10.2 Lexical Environments
10.2.1 Environment Records
10.2.2 Lexical Environment Operations
10.2.3 The Global Environment
10.3 Execution Contexts
10.3.1 Identifier Resolution
10.4 Establishing an Execution Context
10.4.1 Entering Global Code
10.4.2 Entering Eval Code
10.4.3 Entering Function Code
10.5 Declaration Binding Instantiation
10.6 Arguments Object

---
// scope -> environment
// 뉘앙스 차이

```

### 21.4 Function 오브젝트와 Function 인스턴스 

```
- Function 오브젝트를 생성
- sports 오브젝트에 prototype 오브젝트를 첨부
- prototype에 contructor 프로퍼티를 설정
- protytype.contructor에서 sports 오브젝트를 참조할수 있도록 설정
- prototype에 __proto__ 오브젝트를 첨부
- 빌트인 Object 오브젝트의 prototype에 연결된 프로퍼티로 Object 인스턴스를 생성하여 prototype.__proto__에 첨부
// 자바스크립트 아키텍쳐
// 메서드만 옴. 함수X
- sports 오브젝트에 __proto__ 오브젝트를 첨부
- 빌트인 Function 오브젝트의 prototype에 연결된 프로퍼티 Function 인스턴스를 생성
- 생성한 FUnction 인스턴스를 sports.__proto__에 첨부
// call, apply, bind
- sports 오브젝트 프로퍼티에 초깃값을 설정
// arguments, caller, length, name

---
실행 환경 인식

** 실행 환경 인식 필요성
- 함수가 호출되었을 때 실행될 환경을 인식할 수 있어야 환경에 맞추어 함수를 실행할 수 있음
// 정적 환경

** 실행 환경 설정 시점
- Fucntion 오브젝트를 생성하는 시점에 환경 설정
- ex) 함수에 작성한 코드, 실행 영역, ㅍ라미터 등
- Function 오브젝트를 생성하고 바로 실행하는 것이 아니므로 함수가 호출되었을 때 사용 할 수 있도록 환경 저장 필요

** 생성한 Function 오브젝트 저장
- {name: value}형태
- 인식한 환경을 Function 오브젝트의 내부 프로퍼티에 설정

---
내부 프로퍼티

** 내부 프로퍼티란

** 표기
[[]] // [[scope]]
** 내부 프로퍼티 분류
** 공통 프로퍼티
** 선택적 프로퍼티

```

### 21.5 Function 오브젝트 생성 

```

```

### 21.6 Function 오브젝트 프로퍼티 

```

```

### 21.7 __proto__ 오브젝트 

```

```

### 21.8 공통 내부 프로퍼티 

```
[[Class]] // 오브젝트 유형 구분


```

### 21.9 선택적 내부 프로퍼티 

```
[[PrimitiveValue]]
[[Call]] // function
[[Scope]]
[[Code]] // function // 컴파일 시점 활용
```

### 21.10 함수 선언문과 함수 표현식 

```
---
함수 선언문

function a(){}

---
함수 표현식
// 정규 표현식
// 

var fn = function(){}


```

### 21.11 자바스크립트 엔진 해석 

```
** 자바스크립트는 스크립팅 언어
** 함수 형태에 따라 해석 순서가 다름
- 중간에 있는 코드가 먼저 해석될 수 있음
** 함수 선언문 먼저 해석
** 함수 표현식 해석
// undefined 우선 처리

```

### 21.12 함수 앞에서 호출 

```
** 함수 선언문은 초기화 단계에서
- Function 오브젝트를 생성하므로 함수를 호출하는 위치에 영향을 받지 않음. 함수 앞에서 호출해도 됨

** 형태

** 호이스팅(Hoisting)

```

### 21.13 함수 오버라이딩 

```
** 오버라이딩(Overriding)
- 함수 이름이 같을 때 함수 코드 대체(replace)
- 파라미터 수, 데이터 타입 체크하지 않음 // Java, C와 차이
- {key: value}로 저장하기 때문 // 타입이나 파라미터수를 체크하지 않음
** 형태
- 마지막에 작성 된 함수로 호출됨
```

### 21.14 함수 표현식 오버라이딩 

```

```

### 21.15 함수 선언문, 함수 표현식 오버라이딩 

```

```

### 21.16 함수 표현식, 함수 선언문 오버라이딩 

```

```
