## ▣ 5부 자바스크립트 객체 지향 프로그래밍

```

```

### 26장 Function 인스턴스

```
// function FnA(){};
// FnA.prototype.getValue = function(){};
```

### 26.1 Function 인스턴스 생성 

```

```

### 26.2 생성자 함수 

```
** 생성자 함수
** 인스턴스 생성 방법
- new 연산자: 인스턴스 생성 제어 // new 연산자 하는것 없음
- 생성자 함수:
-- 인스턴스 생성 및 반환
-- 인스턴스 초깃값 할당
** 생성자 함수 형태

// 표현식; 평가 후 값 반환

- new라는 단어의 선입견으로 인해 new 연산자가 인스턴스를 생성하는 것으로 생각할 수 있다.
- 하지만 Baseball Function 오브젝트의 [[Construct]]를 실행하여 인스턴스르ㅡㄹ 생성
- So, new Baseball()에서 Basevall이 생성자 함수임.

//
[[Cunstruct]]의 인스ㅓㄴ스 생성 과정
- 새로운 Object 오브젝트를 생성
- 생성한 오브젝트에 자바스크립트 내부 처리용 메서드를 설정
- 오브젝트의 [[Class]]에 'Object'를 설정 // Function 인스턴스 -> Object
- Baseball 오브젝트의 [[Prototype]]에 설정된 프로퍼티를 생성한 오브젝트의 [[Prototype]]에 설정
```

### 26.3 constructor 프로퍼티 

```
- 생성하는 Function 오브젝트를 참조하도록 설정

```

### 26.4 constructor로 인스턴스 생성 

```

```

### 26.5 인스턴스 프로퍼티 존재 체크 

```

```

### 26.6 prototype 오브젝트 

```
** prototype 오브젝트 목적
- 프로퍼티 연결을 통한 프로퍼티 확장
- 생성한 각 인스턴스에서 prototype의 프로퍼티 공유
- 다른 Function 인스턴스를 상속 받음
** 프로퍼티 확장
- prototype이 오브젝트이므로 프로퍼티를 연결하여 확장 가능
** 프로퍼티 공유
- prototype에 연결된 프로퍼티로 인스턴스 생성
- 인스턴스에서 prototype에 연결된 프로퍼티 값 공유
** 인스턴스 상속
- Function 오브젝트를 인스턴스로 생성하여 prototype 연결
-- 객체지향의 상속 개념
-- prototype-based ingeritance(상속)라고 함
- prototype으로 상속을 구현한 형태를 ++ 프로토타입 체인(Prototype Chain)이라고 함

// 상속 vs 컴포넌트

```

### 26.7 Function 오브젝트 확장과 인스턴스 

```
-- prototype = {key: {key: value}} 형태로 확장
// prototype.constructor = Object;
```

### 26.8 prototype에 프로퍼티 연결 방법, 목적 

```
---
방법

--4
object.prototype = {get: function(){}}
constructor 지워짐

---
프로퍼티 연결 목적

** prototype의 프로퍼티 공유
- 공유하게 되므로 한 곳에서 값을 바꾸면 모든 인스턴스에 반영

** 인스턴스마다 값을 사용하려면
- this가 원본 Function 오브젝트를 참조하지 않고 생성한 인스턴스를 참조
```

### 26.9 prototype에 오브젝트 연결 및 고려사항 

```
object.prototype = {};
object.constructor = Object;
```

### 26.10 prototype과 this 

```
- prototype에 연결된 프로퍼티가 인스턴스 프로퍼티가 되므로this.prototype.fn()형태가 아닌 this.fn() 형태로 호출
```

### 26.11 prototype의 프로퍼티 공유 시점 

```
- 실행 시점에 공유
```

### 26.12 prototype의 프로퍼티 값 변경 

```

```

### 26.13 인스턴스에 프로퍼티 추가 

```
- 인스턴스마다 값을 다르게 가질 수 있음
```

### 26.14 인스턴스 프로퍼티 추가 고려사항 
```

```
