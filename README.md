#▣ 3부 자바스크립트 오브젝트

#8장 자바스크립트의 언어적 개념
#8.1 자바스크립트 기준과 범위 
```
호스트 오브젝트

Object()
new Object()

인스턴스 생성, 반환
파라미터 값이 undefinced . null이면 빈 Object 인스턴스 반환

JS는 에러를 내지 않으려는 성향을 보임
(부분이 전체에 영향을 주지 않으려)

new Object()
new Object(12345)
new Object("ABCD")

[object Object]
12345
ABCD

Primitive 값을 지원하는 빌트인 오브젝트는 
인스턴스를 출력하며 인스턴스를 출력하지 않고
인스턴스를 생성할 때 

object HTMLScriptElement

object.nodeName

---

Object Literal
var obj = {}
Hash, 연산 배열


Object.create

함수
메소드

Object.create
Object.protoType

호출방법

Object.create()

Object.prototype.toString()
인스턴스.toString()

debugger;

function != method

브라우저
내장 함수
빌트인 함수
내장
빌트인
뉘앙스에 차이가 있음

_proto_
method
Overiding


상속구조
var obj = new Object(1234)
obj
Number
Object

---
toString()
toLoclaeString()
valueOf() // valueOfPrimitive
hasOwnProperty() // 상속받지 않은 것, 상속받은 것인지 체크 할때 쓰임

---
prototype chain
{
    {
        {},
        {}
    }
}

연결
function Sports(){}
Sports.prototype = {soccer: function(){}}

상속
function soccer (){}
Sports.prototype = new soccer();

Java
class diagram
설계
JavaScript
~설계

많은 상속구조 지양
유지보수 어려움

Sport.rotytype = new soccer()
soccer.prototype에 연결된 메소드러 인스터늣 생성
var obj = new Sports
prototype 에 연결된 메소드로 인스턴스 생성
```
#8.2 빌트인 
#8.3 빌트인 오브젝트 
#8.4 오브젝트 인식 
#8.5 prototype 오브젝트 
#8.6 new 연산자 
#8.7 constructor 
#8.8 instanceof 연산자 

9장 Object 오브젝트
9.1 프로퍼티 리스트 
9.2 Object 분류 
9.3 new Object( ) 
9.4 Object( ) 
9.5 문자열 표시 반환 
9.6 지역화 문자로 변환 
9.7 프리미티브 값 반환 
9.8 프로퍼티 소유 여부 
9.9 prototype에 오브젝트 존재 여부 
9.10 프로퍼티 열거 가능 여부

#10장 글로벌 오브젝트
#10.1 개요 
인스턴스를 생성할 수가 없음
new 연산자 사용불가
메서드x
함수o
#10.2 프로퍼티 리스트
값 프로퍼티
NaN
함수 프로퍼티
parseInt
이 외 프로퍼티
Math
JSON
eval() // 문자열 값을 자바스크립트 코드로 간주하여 실행
#10.3 글로벌 프로퍼티 
for in 문으로 열거 불가
오브젝트로지정하지 않고 프로퍼티 접근
parseInt() 바로 사용 // ES5부터는 오브젝트를 지정해야함
window 오브젝트와의 관계 // HOST Object
NaN
window.NaN
#10.4 NaN 여부
isNaN()
NaN도 Number 타입 값의 일종으로 이해
NaN === NaN 결과는 false 설계 실수
//exam
12  //false
'34'    //false
'AB'    //true
isNaN(null)     //true
isNaN()
null
NaN === NaN

#10.5 무한대 값 여부 
isFinite() // 그래프. 나누기.
#10.6 정숫값 변환 
parseInt() //
"123ABA"    //123
"asfd13"    //NaN
2번째 파라미터 진수 // default 10진수
//exam
parseInt() //NaN
parseInt(' 1 2')
#10.7 실숫값 변환 
parseFloat()
셈연산에서 의도적으로 실수로 변환후 연산해야 하는 경우가 있음
//exam
'-12e3' // -12000
#10.8 문자열 실행 
eval()
ES5 strict 모드에서는 실행 불가 // use strict
// 보안문제 있음. 문자열 생성 후 실행 시키는 이슈.
// 개발상 면피 차원에서도 사용 하지 말 것.
//exam
eval("parseInt('-123.45e8')") //-123
// with() 도 사용 하지 말 것
// 정적인 아키텍쳐에 동적인 아키텍쳐를 사용
#10.9 URI 인코딩
제외
예약문자
마크문자
#10.10 URI 확장 인코딩
예약문자도 인코딩 시킴 
#10.11 URI 디코딩 
#10.12 URI 확장 디코딩 

#11장 String 오브젝트
#11.1 프로퍼티 리스트
프로퍼티란? key, value
ES5 함수가 증가. ~메서드
#11.2 new String( ) 
#11.3 String( ) 
숫자 -> 문자
""+123 // String(123)
#11.4 length 프로퍼티
"ABC".length
1234.length // undefined
1234.toString().length // 4

Number(1234).toString()
//"1234"
Number(1234).length
//undefined
Number(1234).toString().length
//4

"string"[0]
// "s"

자바스크립트는 쪼개서 값을 가지고 있다?
for문의 두번째가 표현식
value.length 매번 평가

#11.5 문자열로 변환 
toString()

"123".toString() 호출 시 
String 오브젝트에 toString()이 없으면
Object 오브젝트의 toString()을 호출하기 떄문
때문에 빌트인 오브젝틍 toString()과 valueOf() 가 존재

#11.6 프리미티브 값 반환 
valueOf()

primitive value 프로퍼티를 가져옴

"문자열".valueOf()
    String("문자열").primitiveValue = ~~
    valueOf = getPrimitiveValue()

#11.7 인덱스 번째 문자 반환 
charAt()

"SPORTS".charAt(3)
"SPORTS"[3] // ES5 사용가능. 배열개념으로 사용.

"SPORTS".charAt(100) // 빈문자열 반환
"SPORTS"[100] // undefined

#11.8 유니코드 값 반환 
.charCodeAt()

인덱스보다 작거나 크면 NaN 반환

#11.9 유니코드를 문자열로 변환 
.fromCharCode()

ㄱ 유니코드 12593, 4352

#11.10 문자열 연결 
.concat()

new String(123).concat('ABC')
// 인스턴스를 생성하고 프리미티브 값과 ABC 연결
// [[PrimitiveValue]]: "123"

#11.11 작은 인덱스 반환 
.indexOf()

일치하는 문자가 없으면 -1 반환
// 존재 여부 체크시 보편적으로 -1으로 체크

첫번째 파라미터    문자열
두번쨰 파라미터    시작 인덱스

//exam
'12345'.indexOf(23) // 1 ~2

function isContain(value, compare, start){
    return value.indexOf(compare, start) > -1;
}

isContain(12345, 3, 0) ? "있음" : "없음"

#11.12 큰 인덱스 반환 
.lastIndexOf()

//exam02.html

#11.13 값의 위치 반환 
.localeCompare()

1 앞
0 같음
-1 뒤

Unicode 사전 순으로 비교

#11.14 매치 결과 반환
.match()

매치 결과를 배열로 반환
정규 표현식과 관계
매치 대상에 정규표현식의 패턴을 적용하여 매치 // ex) url, email

정규표현식을 사용할 수 있는 메서드
match()
replace()
search()
split()

//exam
match(/s/ig); // [S,s]

#11.15 매치 결과를 지정한 값으로 대체 
.replace()

두 번째 파라미터가 함수이면 함수를 호출하고 함수에서 반환한 값으로 대체
data 위치에 작성한 문자열은 변경되지 않음
매치 대상은 바뀌지 않음 // 원본 보존

#11.16 앞뒤 화이트 스페이스 삭제 
.trim() // ES5 에서 생김

정규표현식으로 표현 // IE 6,7,8

#11.17 검색된 첫 번째 인덱스 반환 
search()
```
매치되는 첫 번째 인덱스 반환
매치되지 않으면 -1 반환

//exam
'cbacba'.search(/a/g);
```
#11.18 시작에서 끝 직전까지 값 반환: substring( ) 
.substring()
```
시작인덱스
종료 인덱스
첫 번째 파라미터 값이 두번째 파라미터 값보다 크면 바꾸어서 사용

//exam
'aaa'.substring(5, 'A')
```
#11.19 지정한 문자 수 반환
.substr() 
```
시작인덱스
개수 // substring과 차이점

// exam
'01234567'.substr('-3', 3) // 
```
#11.20 시작에서 끝 직전까지 반환: slice( )
.slice()
```
```
#11.21 구분자로 분리하여 반환 
.split()
```
tag attribute 구분 // ' ', ;
delimiter

'a3fasdf3afsdf'.split('') // 각 글자마자 split
```
#11.22 소문자로 변환 
.toLowerCase()
```
```
11.23 대문자로 변환
.toUpperCase()
```
```

#12장 Number 오브젝트

#12.1 프로퍼티 리스트 
Number
```
숫자는 명시해서 오류 발생을 막는다.
```
#12.2 new Number( ) 

```
new Number('ABC') // NaN
// NaN 도 값의 하나로 취급
```
#12.3 Number( ) 

```
Number 인스턴스를 생성하지 않음 // !!
Number(true); // 1
false // 0
null // 0
undefined // NaN
Number(new Number(789)) // 인스턴스를 지정하면 프리미티브 값 반환
```
#12.4 Number 상수 
MAX_VALUE
MIN_VALUE
NaN
POSITIVE_INFINITY
NEGATIVE_INFINITY
```
```
#12.5 문자열로 변환 
toString()
```
123.toString() // error
```
#12.6 지역화 문자로 변환 
toLocaleString()
```

```
#12.7 프리미티브 값 반환 
valueOf()
```

```
#12.8 지수 표기로 변환 
.toExponential() // 지수
```
지수표기법으로 표시
파라미터 - 소수점 자릿수
```
#12.9 고정 소수점 표기로 변환 
.toFixed()
```

```
#12.10 고정 소수점 또는 지수 표기로 변환
.toPrecision() // 정확성
```
지수표기와 고정소수점 메서드 기능을 통합
```

#13장 Array 오브젝트
Array Object
```
call 배열 엘리먼트
list
element

[,,,] // undefin
```
#13.1 프로퍼티 리스트 

```
push
join
shift
unsifht
sort
reverse
...
```
#13.2 배열 개념 

```

```
#13.3 length 프로퍼티 
.length
```
프로퍼티
//exam
length 직접 접근은 자제
더 크게 할당 시 undefined할당
더 작게 할당 시 뒤에서 부터 삭제
```
#13.4 엘리먼트 추가 

```

```
#13.5 엘리먼트 삭제 
delete
```
프로퍼티를 삭제하면 undefined

remove 와 비교 // 삭제한 값을 반환

delete list[2]

// exam

--1
var value = 123;
delete value; // false

value = 123; // global value
delete value; // true

--2
var book = {title: '책'}
delete book.title // true

--3
var value = [1,2,3,4,5]
delete value[3]; // true
log.value[3]; // undefinedd

--4
prototype.'property' 삭제?
```
#13.6 new Array( ) 

```

```
#13.7 Array( ) 

```

```
#13.8 문자열로 연결하여 반환 

```

```
#13.9 지역화 문자로 변환, 연결 

```

```
#13.10 값을 결합하여 배열로 반환 
.concat()
```
arr.concat(1,2); // arr은 변경되지 않는다.
```
#13.11 배열 끝에 추가 
.push()
```

```
#13.12 배열 첫 번째에 삽입 
.unshift()
```
배열 처음에 파라미터 값을 삽입. length 반환.
```
#13.13 배열과 분리자 결합 
.join
```
[1,2,3,4,5].join() // "1,2,3,4,5"
```
#13.14 마지막 엘리먼트 삭제 
.pop()
```
```
#13.15 첫 번째 엘리먼트 삭제 
.shift()
```
```
#13.16 엘리먼트 값 정렬 
.sort()
```
Unicode dictionary order 순으로 정렬
원본이 바뀌므로 copy 처리
undefined 는 마지막으로 이동
파라미터에 함수를 작성하면 함수를 호출하고 반환된 값으으로 정렬 // JAVA Collection sort 와 비슷

문자열 비교시 첫자리 부터 비교

--sort 알고리즘
sort()는 0보다 큰 값이 반환되면 배열에서 값의 위치를 바꾼다. // value>0 true
sort()는 0보다 작거나같으면 배열에서 값의 위치를 바꾸지 않는다.
이와 같은 방법으로 다시 처음으로 돌아가 바뀌는 것이 없을 때까지 배열의 엘리먼트 위치를 조정한다.
```
#13.17 역순으로 바꿈 
.reverse()
```
원본 수정됨
```
#13.18 인덱스 범위 반환 
.slice() // 썰다
```
```
#13.19 엘리먼트 삭제, 삽입
.splice() // (밧줄 등을 꼬아서) 잇다. 붙이다.
```
삭제, 삽입 복합 기능. 비추천.
```

#14장 Array 5th 오브젝트

#14.1 프로퍼티 리스트 
ES5 Array
```
// 함수 - 오브젝트
isArray()
// 메서드 - 인스턴스
indexOf() // 배열도 체크
```
#14.2 배열 여부 반환 
.isArray()
```
Object.prototype.toString.call('a')             // 타입 체크
Object.prototype.toString.call(1)               // 타입 체크
Object.prototype.toString.call('[1,2,3,4]')     // 타입 체크

// isArray 선언
Object.prototype.toString.call(args) === '[object Array]';     // 타입 체크
```
#14.3 배열 반복 실행 
.forEach()
```
파라미터
1 Function 콜백 함수
2 Object this로 참조할 오브젝트
---
실행 중에 data 위치의 배열이 변경되었을 떄
인덱스는 변경되지 않음
콜백 함수에서 배열을 줄였을 경우 에러

콜백함수에서 return 문을 만나면 다음 배열을 처리

---
function(element, index, list){
}

장점 : this 등 스코프를 활용
단점 : 멈출 수 없음

---


```
#14.4 forEach와 for 비교 

```



```
#14.5 반환 값이 false가 될 때까지 반복 
.every()
```
반환값이 false가 될 떄까지 콜백 함수호출
callback function 에 element, index, list 를 넘겨줌
배열에서 false 조건이 앞에 있을때 효율성이 높음
```
#14.6 반환 값이 true가 될 때까지 반복 
.some()
```
반환값이 true가 될 떄까지 콜백 함수 호출
```
#14.7 true를 반환한 엘리먼트 반환 
Array.prototype.filter ( callbackfn [ , thisArg ] )
```
조건에 맞는 배열을 추출 할 때 활용
```
#14.8 반환 값을 배열로 반환 
Array.prototype.map ( callbackfn [ , thisArg ] )
```
콜백 함수에서 변환한 값을 새로운배열에 설정하여 반환
반복해서 읽는것과 파라미터를 넘겨주는 것은 forEach()와 같음
//callbackfn == iterater
```
#14.9 엘리먼트 값 누적 
Array.prototype.reduce ( callbackfn [ , initialValue ] )
```
배열 끝ㅌ까지 콜백 함수를 호출하고 콜백 함수에서 반환한 값을 반환
두 번쨰 파라미터를 작성하면 처리가 다름

콜백 함수를 호출하면서 네 개의 파라미터 값을 넘겨 줌

직전 값 previous
```
#14.10 엘리먼트 값 누적: 배열 끝에서 앞으로 누적 
Array.prototype.reduceRight ( callbackfn [ , initialValue ] )
```
배열 끝에서 앞으로 읽어가면서
```
#14.11 일치하는 엘리먼트 인덱스 반환 
Array.prototype.indexOf ( searchElement [ , fromIndex ] )
```
파라미터 값과 일치하는 엘리먼트 인덱스를 반환
데이터 타입까지 체크 // 1 === "1" // false
일치하는 엘리먼트가 있으면 검색 종료
일치하는 엘리먼트가 없으면 -1
```
#14.12 String.indexOf( )와 Array.indexOf( ) 

```
---Array
두번 째 파라미터가 음수일 경우
length - 두번 째 파라미터
---String
// String.indexOf()는 음수일 경우라도 0번 인덱스부터 탐색
```
#14.13 일치하는 엘리먼트 인덱스 반환: 배열 끝에서 앞으로 검색
Array.prototype.lastIndexOf ( searchElement [ , fromIndex ] )
```
```

#15장 JSON 오브젝트

#15.1 JSON 개요 
```
JavaScript Object Notation
built in Object // like String, Number
대부분의 자바스크립트 값 타입을 지원
new 연산자로 인스턴스 생성 불가

--주요기능
데이터 송수긴 상호간의 데이터 변환 기준 // !!변환. undefined, null 체크. 데이터 신뢰성. true, false로 변환됨. 
오브젝트가 아닌 텍스트 형태이므로 송수신 속도가 빠름 // !!
// XML을 대체

--Doc
더글라스 클라포드
MIME 타입: apllication/json
파일 확장자: json
```
#15.2 자바스크립트 값으로 변환 
parse ( text [ , reviver ] )
```
123. 123.0 // 소수점 아래 숫자 작성
16진수 사용 불가 // 10진수
0123 사용 불가 // 123
1.23e5 지수 사용 불가

---callbackfn
json 탐색하며 데이터 정제
파싱한 값에 반영한다
값이 변경되지 않으면 반환한 필요가 없다고 생각할 수 있으나
-값을 바호나하지 않으면 프로퍼티(이름:값)을 삭제한다
또한 undefined를 반환하면 삭제한다
-이렇게 편집한 오브젝트를 반환한다
```
#15.3 JSON 형태의 문자열로 변환
stringify ( value [ , replacer [ , space ] ] )
```
첫번째 파라미터에 변환할 값을 자바스크립트 형태로 작성
일반적으로 []또는 {}를 작성하지만 String 등도 작성 가능
// 옵션적인 것은 하지 말 것

Infinity, NaN, null 은 문자열 'null'로 변환
// 데이터 검증. 데이터 레이어. 

true, false는 값은 변환 하지 않고 문자열로 변환


```


#16장 Function 오브젝트

#16.1 프로퍼티 리스트 
```
toSring()
call()
apply()
bind()
```
#16.2 함수 개요 

```
```
#16.3 new Function( ) 

```
eval() 축소판?
파라미터를 두개 작성
마지막 파라미터에 함수에서 실행할 자바스크립트 코드 작성
마지막을 제외한 파라미터에 호출한 함수에서 받을 파라미터 작성
//보안에취약
```
#16.4 Function( ) 

```

```
#16.5 함수 생명주기 

```
엔진이 function 키워드를 만나면
인스턴스 이름이 getBook인 인스턴스 생성
생성한 

--함수 코드 실행
엔진이 컨트롤이 함수로 이동
파라미터 이름에 넘겨준 파라미터 값을 매핑
함수 블록 안에 자바스크립트 코드를 실행
//네임스페이스 #DATA#.
```
#16.6 함수 선언문 
Declaration
```
function키워드와 함수 이름은 필수
파라미터, 블록 안의 자바스크립트는 선택
엔진이 function 키워드를 만나면 Function 오브젝트를 생성
```
#16.7 함수 표현식 
Expression
function [name]([param1[, param2[, ..., paramN]]]) {
   statements
}
```
var name = function(){}
표현식 형태로 Function 오브젝트를 변수에 할당하는 형태
함수 이름이 옵션으로 작성하지 않아도 됨
이때 변수이름이 함수 이름이 됨

---
// 표현식 평가 = 표현식 평가
// 표현식 평가 -> 결과 반환
(function(){})();

---
1. inside 이름으로 Function인스턴스를 생성하고 outside에 할당한다.
2. 함수 밖에서 inside()함수를 호출하면 에러가 발생하므로
- outside()를 호출하여 안으로 이동한 후 호출
3. 함수 안에서 inside()함수를 호출하는 것은 자신을 호출하는 것이며
- 무한을 호출하게 되므로 함수가 종료되도록 조치를 취해야 한다.
- 자신을 호출하는 형태를 재귀 함수라고 한다.
4. 변수 할당과 함수 이름을 같이 사용하는 것은 좋은 형태가 아니며
 - 재귀 함수 호출은 다른 방법으로 할 수 있다.

```
#16.8 문자열로 변환 
.toString()
```

```
#16.9 함수 호출 
Function.prototype.call (thisArg [ , arg1 [ , arg2, … ] ] )
```
getTotal.call(this, 10, 20)
첫번 째 파라미터에 호출된 함수에서 this로 참조할 오브젝트 지정 // !! this
일반적으로 this를 사용하지만다른 오브젝트를 지정할 수 있음
호출된 함수의 파라미터로 넘어가지 않고 두 번째부터 넘어 감
```
#16.10 함수 호출: 배열 사용 
Function.prototype.apply (thisArg, argArray)
```

```
#16.11 call( )과 apply( ) 차이

```
//call은 파라미터 개수가 정해져 있을 때 씀
//apply 파라미터 개수가 가변적
//overloading 을 대체 하는 JS의 형태. arguments. 
```

#17장 Boolean 오브젝트

#17.1 프로퍼티 리스트 
```
---overliding
toString()
valueOf()
```
#17.2 Boolean 개요 
```
true, false
---값
undefined
null
---숫자
0
NaN
---문자열
''
---Object
true
```
#17.3 new Boolean( ) 
```
```
#17.4 Boolean( ) 
```
인스턴스를생성하지 않음
```
#17.5 문자열로 변환 
```
```
#17.6 프리미티브 값 반환
```
```

#18장 Math 오브젝트
```
존재여부는 알아둘 것
활용용도: 그래프, 동적인 애니메이션 궤도 계산

---개요
Single Obejct(Singleton)
new 연산자로 새로운 인스턴스를 생성할 수 없는 오브젝트
함수로 이뤄짐. ~메서드
```
#18.1 프로퍼티 리스트 
```
```
#18.2 Math 오브젝트 상수 
```
abs()
floor()
ceil()
round()
random()
pow()   // 부동소수점 계산시 활용
```
#18.3 절댓값 
.abs()
```

```
#18.4 소수 이하 버림 
.floor()
```
-1.7 // -2
```
#18.5 소수 이하 절상 
.ceil()
```
-1.7 // -1
```
#18.6 소수 이하 반올림 
.round()
```
-0.5~0 // -0
0~0.5 // +0
비트계산
```
#18.7 최댓값 
.max()
```
Math.max.apply('a', [1,2,3,4,5,6,7])
```
#18.8 최솟값 
.min()
```
```
#18.9 0에서 1미만 난수 
.random()
```
0~1 // 1미만
//parseInt(Math.random()*10+1)
```
#18.10 자연로그 
.log()
```
```
#18.11 코사인 
```
라디안(radian)
```
#18.12 아크 코사인 
```
-1~1
```
#18.13 사인 
.sin()
```
Math.sin(Math.PI/2) // 1
```
#18.14 아크 사인 
.asin()
```
// PI차트 할 때 많이 나옴
```
#18.15 탄젠트 

```

```
#18.16 아크 탄젠트 

```

```
#18.17 y, x 좌표 아크 탄젠트 

```

```
#18.18 제곱근 
.sqrt()
```
```
#18.19 자연로그 상수(e)의 x승 

```

```
#18.20 y자승 값
.pow()
```
(10, 2)
(10, 0)
(10) // NaN. 두번째 파라미터를 강제
(-2, 0.1) // y값이 무한대가 아니면서 정수가 아니면 NaN
```


#19장 Date 오브젝트
```
```
#19.1 프로퍼티 리스트 

```
ms / 1/1000초
ms 가 primitive 값이며 시간값(Time Value)라고 부름
UTC
1970년 1월 1일부터 밀리초로 제공, 남는 초는 무시
위 일자를 기준으로 전 후 100,000,000일 지원 // 
월은 0부터 시작. // 0:1월, 1:2월, 11:12월
일은 1에서 31일까지 정수로 표시
요일은 0부터 시작. // 0:일요일, 1:월요일, 6:토요일
GMT와 조금 차이가 있지만 거의 같음
JS는 UTC 기준
---
타임존
---
get, set // 인스턴스에서 호출 가능
```
#19.2 Date 오브젝트 개요 

```

```
#19.3 문자열 값을 밀리초로 변환 
.parse()
```
크로스 브라우징 이슈
```
#19.4 UTC 기준 밀리초로 변환 
```

```
#19.5 현재 시각을 밀리초로 반환

```

```
#19.6 new Date( ) 

```
클라이언트의 시간을 사용자가 변경할 수 있으므로 서버 시간 사용
```
#19.7 Date( ) 

```

```
#19.8 시간 반환-1 

```

```
#19.9 시간 반환-2 

```

```
#19.10 년, 월 구하기 

```

```
#19.11 요일, 일 구하기 

```

```
#19.12 시, 분 구하기 

```

```
#19.13 초, 밀리초 구하기 

```

```
#19.14 시간값 구하기 

```

```
#19.15 연도 변경 

```

```
#19.16 월 변경 

```

```
#19.17 일 변경 

```

```
#19.18 시 변경 

```

```
#19.19 분 변경 

```

```
#19.20 초 변경 

```

```
#19.21 밀리초 변경 

```

```
#19.22 경과한 시간값 변경 

```

```
#19.23 Date 오브젝트와 JSON 연동

```
```


#20장 Object 5th 오브젝트
```
추가된 것은 모두 함수이며 메소드는 없음
프로퍼티 이름은 같지만 인스턴스 마다 다른 값을 가지려는 것
Object의 prototype에 연결된 메소드는 모든 빌트인 오브젝트에 상속
Object 오브젝트에 추가된 함수는 이런 목적을 가진 함수
```
#20.1 프로퍼티 리스트 
```

```
#20.2 오브젝트에 프로퍼티 추가 
.defineProperty()
```
```
#20.3 오브젝트 프로퍼티 열거 불가 

```
enumerable: true
```
#20.4 ES5 Object 개요 

```
프로퍼티마다 상태를 갖고 있다
```
#20.5 프로퍼티 디스크립터 타입 

```
---데이터
value
writable
---악세스
get
set
---공용
enumberable
configurable
```
#20.6 get 속성 

```

```
#20.7 set 속성 

```

```
#20.8 프로퍼티 디스크립터 반환 
.getOwnPropertyDescripter()
```

```
#20.9 다수의 프로퍼티 추가, 변경 
.defineProperties()
```
soccer:{value: '축구', enumerable:true}

```
#20.10 프로퍼티 이름 반환 
.getOwnPropertyNames()
```
열거(enumberable) 가능 여부 체크하지 않음
Object.getOwnPropertyNames(obj)
```
#20.11 열거 가능 프로퍼티 이름 반환 
.keys()
```
Object.keys(obj)
```
#20.12 prototype에 연결된 프로퍼티 반환 
.getProtoTypeOf()
```
```
#20.13 프로퍼티 추가 금지 설정 

```

```
#20.14 프로퍼티 추가 금지 여부 

```

```
#20.15 프로퍼티 추가, 삭제 금지 설정 

```

```
#20.16 프로퍼티 추가, 삭제 금지 여부

```

```
#20.17 프로퍼티 추가, 삭제, 변경 금지 설정 

```

```
#20.18 프로퍼티 추가, 삭제, 변경 금지 여부

```

```

```
seal() // ㅇ브젝트에 프로퍼티 추가, 삭제 금지 설정
delete obj.book;

isSealed()

freeze() // 오브젝트에 프로퍼티 추가, 삭제 변경 금지 설정
isFrozen()
```
