## 25장 실행 콘텍스트

```

```

### 25.1 실행 콘텍스트 생성 기준 

```

```

### 25.2 실행 콘텍스트와 상태 컴포넌트 

```
---
상태 컴포넌트

ec
    lec lexical context
    vec value context
    tbc this binding context

---
환경 컴포넌트

** 환경 컴포넌트
** 환경 컴포넌트 내용
** 실행 컴텍스트 초기화 단계에서
** 컴포넌트를 분리하는 이유
- 
- 초깃값으로 환원할 때 사용하기 위해서
// 렉시컬 환경 컴포넌트
// 변수 환경 컴포넌트
// 둘 사이의 차이가 발생

---
this 바인딩 컴포넌트

** 목적
** 엑서스 매커니즘
- 호출한 함수가 속한 오브젝를 참조할 수 있도록 this 바인딩 컴포넌트에 호출한 함수가 속한 오브젝트를 설정
- obj.sprots()에서 this로 obj 참조
- obj를 this 바인딩 컴포넌트에 설정
- obj의 프로퍼티가 변경되면 동적을 참조
```

### 25.3 스택 

```
** 스택
** FILO
- first in last out
- 함수가 호출되면
-- 스택의 ㄱ장 위에 실행 컨텍스트가 놓이게 됨
- 다시 함수안에서 호출하면
-- 호출된 함수의 실행 컨텍스트가 가장 위에 놓이게 됨
- 함수가 종료되면 스택에서 빠져 나옴(FILO)
- 가장 아래에는 글로벌 오브젝트가 위치
```

### 25.4 글로벌 코드 실행 콘텍스트 

```

```

### 25.5 글로벌 코드 실행 

```

```

### 25.6 함수 코드 실행 콘텍스트 

```
// 실행 단계에서 처리
** 함수 코드 처리 단계
- 준비 단계
** 함수 코드와 글로벌 코드 차이
- 글로벌 코드
-- 외부 렉시컬 환경 참조 값 없음
-- 오브젝트 환경 레코드에 해석/실행 결과 바인딩

- 함수 코드
-- 렉시컬 환경
-- 외부 렉시컬 환경 참조 값 있음
-- 선언적 환경 레코드에 해석/실행 결과 바인딩
-- 스코프 있음

---
함수 호출

** 함수가 호출되면
- 실행 컨텍스트에 파라미터를 넘겨 줌
** 호출한 함수가 속한 오브젝트를
- this 바인딩 컴포넌트에 설정하여 this로 참조
** 호출된 함수 코드
- 호출된 [[Code]]
** 호출한 함수의 파라미터 값

--
함수코드 환경 설정

```

### 25.7 실행 콘텍스트와 환경 설정 

```

```

### 25.8 파라미터 값 매핑 

```
** 파라미터 값 매핑이란?
// ?, 코드, 파라미터
** 엔진 관점
- 실행 콘텍스트에 파라미터로 넘겨 준 값과
- 함수의 [[FormalParameters]]에작성된 이름을 사용하여 이름과 값을 매핑하고 결과를 ++선언적 환경 레코드++에 설정하는 것
// 파라미터 설정 후 함수선언문이 설정 됨
fn = function(one, two){
    var one;
}
// 위 코드에서 초기화 단계에서 var one 은 undefined 처리 하지 않음

// 선언적 환경 레코드에서 변수 값을 가져옴

// 파라미터 값 변동 주의 (참조관계)
// object 참조 시
```

### 25.9 함수, 변수 바인딩

```
** 바인딩 순서
- 파라미터 값을 환경 레코드에 설정
- 모든 함수 선언문을 Function 오브젝트로 생성하여 ++선언적 환경 레코드에 설정++
- arguments 오브젝트를 선언적 환경 레코드에 바인딩 // 설정X
- 모든 변수와 함수 표현식을 선언적 환경 레코드에 반영
** 설정과 바인딩 차이
- 설정은 프로퍼티가 존재하더라도 값을 대체
-- ex) 파라미터 이름과 함수 이름이 같으면 함수로 대체됨
- 바인딩은 프로퍼티가 존재하면 값을 설정하지 않음
-- ex) 파라미터 이름과 변수 이름이 같더라도 초기화 단계에서는 대체되지 않음

```

### 25.10 eval 코드와 실행 콘텍스트 

```
- 파라미터가 문자열이 아니면 실행하지 않고 해석만 하여 반환
- 빌트인 글로벌 오브젝트 함수로 함수 앞에 오브젝트를 작성하지 않음
```

### 25.11 try-catch와 실행 콘텍스트

```

```
