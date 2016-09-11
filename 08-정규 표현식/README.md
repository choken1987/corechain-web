# 정규 표현식

## files

* book.daum.net-1452302023330.consolelog	338	2016-01-09 10:14	-a--
* book.daum.net-1452314512173.consolelog	1,019	2016-01-09 13:41	-a--
* book.daum.net-1452356327296.consolelog	9,855	2016-01-10 01:18	-a--
* regExp.md	16,776	2016-01-10 17:54	-a--
* book.daum.net-1452416239962.consolelog	29,903	2016-01-10 17:57	-a--
* regExp.js	3,565	2016-01-11 09:14	-a--

## Chapter 01 정규 표현식의 개요 

```

```

### 1.1첫 만남 

```

```

### 1.2정규 표현식의 3대 요소 

```
* 문자열을 대상으로
* 조건을 지정하여
- ^, $, +?
- ^, $, *, ?, |, ()
* 실행
- match(), replace(), search(), split()
```

### 1.3자바스크립트에서 정규 표현식의 위치 

```

```

### 1.4예제 환경 설정 

```

```

### 1.4.1 자바스크립트 작성 위치 

```

```

### 1.4.2 결과 출력 함수 

```

```

### 1.4.3 본문 형태 

```

```

### 1.5패턴과 매치 

```

```

### 1.6함수와 메소드 

```

```

### 1.7정규 표현식 작성 방법 

```
//.test
//.exec
```

### 1.7.1 메소드 파라미터에 패턴 작성 

```
* 변수에 패턴 할당
var pattern = /sp/;
"문자열".match(pattern);
```

### 1.7.2 메소드 앞에 패턴 작성 

```
/sp/.exec
/sp/.test
```

### 1.7.3 RegExp 클래스 사용 

```
var regexp = new RegExp("sp"); // 문자열 조합 시 사용
```

### 1.8 정규 표현식의 실수 

```

```



## Chapter 02 문자열 매치 

```
*읽는 방법
- 매치 대상에 s가 있고 이어서 p가 있으면 매치가 된다
- 매치 대상이 "sprots"가 있고
s에 이어 p가 있으므로 패턴 /sp/에 매치 됩니다.

```

### 2.1텍스트 문자열 매치 

```

```

### 2.2플래그 

```
i : ignore case
g : global
m : multiline
u : unicode
y : sticky

* 작성 방법
- 패턴 다음에 소문자로 작성
- i, ig .... 다수 작성 가능
- mgi와 같이 순서 바꾸어도 가능
* 대문자로 플래스 작성

```

### 2.2.1 대소문자 무시 i 

```
- 매치가 되면 매치된 문자열을 변환하지 않고 반환
```

### 2.2.2 글로벌 g 

```
- global 뉘앙스 = repeat
- 패턴으로 매치하고, 매치를 반복 수행

!! 주의
new RegExp('s', 'ig').exec('SPORTS') // ["S"]
플래그 g를 작성하더라도 모두가 아닌 하나만 매치합니다.
```

### 2.2.3 멀티라인 m 

```
"sports\nMulti\nMulti"
/^Multi/m
/^Multi/mg
/Multi/
```

### 2.3대체 | 

```

/c|bc|a|abc/

// 반환 우선순위.
// 1. index 가 작은 것
// 2. 패턴 우선 순

```

### 2.4앞뒤 문자 매치 . 

```
.(dot)

//
"SPORTS".match(/../g)
["SP", "OR", "TS"]

//
"sop, sap, sac, sp".match(/s.p/g);

```

### 2.5공백 문자 

```
* white-space
- 문자이지만 보이지 않는 문자
- 토큰(tocken)을 구분할 때 사용
- 토큰: 화이트 스페이스 양 옆에 문자 또는 단어
* 문자 이스케이프(Character Escape)
- 역슬래시에 이어 문자 값 지정

```

### 2.6줄 분리자 

```
* 라인 단위 분리
- LF: 줄을 바꾸고 바뀐 줄의 현재 위치로 이동
- CR: 주을 바꾸고 바뀐 줄의 처음으로 이동
- 일반적으로 프로그램에서 줄을 바꿀 때는 LF와 CR을 같이 작성
```


## Chapter 04 매치 위치 지정 

```

```

### 4.1처음부터 매치 ^ 

```
caret(^)

'first\u000aStart\u000aStart'
/^Start/m
/^Start/mg
/^Start/g
```

### 4.2끝에 매치 $ 

```
dolar($)
```

### 4.363개 문자 매치 ＼B 

```
* 기능
- 영문 대문자(26), 소문자(26), 숫자(10), 언더바(_)
- \B로 매치된 문자는 반환하지 않음 // 주의

// exam
"a12b 12d e12f"
/\B12\B/g
```

### 4.4단어 경계 ＼b 

```
- \b는 빈 문자도 매칭시킴 // 주의

// exam
"ab abab.abab"
/\bab/
/ab\b/
```

### 4.5클로저 사용 내부 함수 
```

```


## Chapter 03 정규 표현식 메소드 

```

```

### 3.1메소드 구성 

```

```

### 3.2값 추출 match( ) 

```
result.index
result.input

- g플래스는 index와 input을 제공하지 않음

function returnPattern(){
    return /sp/g;
}
"문자열".match(returnPattern());
```

### 3.3인덱스 추출 search( ) 

```
* 개요
* indexOf()와 차이
- indexOf: 시작 위치 지정 가능
- search: 다양한 조건의 패턴 지정 가능
```

### 3.4매치 결과 분리 split( ) 
String.prototype.split (separator, limit)
```
"12_34_56".split('_')
["12", "34", "56"]
"12_34_56".split('')
["1", "2", "_", "3", "4", "_", "5", "6"]
"12_34_56".split('S')
["12_34_56"]
"12_34_56".split()
["12_34_56"]
"12_34_56".split('', 1)
["1"]
"12_34_56".split('', 3)
["1", "2", "_"]
"12_34_56".split('', 10)
["1", "2", "_", "3", "4", "_", "5", "6"]
"12a34a56".split(/(A)/)
["12a34a56"]
"12a34a56".split('_', 2)
["12a34a56"]
"12a34a56".split(/(A)/)
["12a34a56"]
"12a34a56".split(/(B)/)
["12a34a56"]
"12a34a56".split(/(a)/)
["12", "a", "34", "a", "56"] // 구분자로 문자열을 분리한 위치에 구분자를 포함
```

### 3.5값 치환 replace( ) 

```

"12_34_12".replace('12', 89);
"89_34_12"
"12_34_12".replace(/12/g, 89);
"89_34_89"
"12_34_12".replace(/12/g, function(){return 'aa';}());
"aa_34_aa"
```

### 3.6매치 여부 test( ) 

```
// 추천. 빠름.
return true | false

/12/.test('12_34_12')
true
```

### 3.7하나만 매치 exec( ) 

```
- 매치가 되면 ㅊ매치된 값ㅇ,ㄹ, 매치되지 않으면 null을 반환
```

### 3.8match 메소드와 exec 메소드 간 인터페이스 

```

```

### 3.9정규 표현식에 대한 논단 

```

```



## Chapter 05 수량자 

```

```

### 5.1욕심 많은 매치 

```

```

### 5.1.1 하나 이상 매치 + 

```
* 기능
- "aaac".match(/a+/);
- 모든 문자 매치; .+

// exam
"aaac aac".match(/a+/);
["aaa"]
"aaac aac".match(/a+/).input;
"aaac aac"
"aaac aac".match(/a+/).index;
0
"aaac aac".match(/a+/g);
["aaa", "aa"]
"aaac aac".match(/a+/g).input;
undefined
"aaac aac".match(/a+/g).index;
undefined
"aaac aac".match(/a+./g);
["aaac", "aac"]
"aaac aac".match(/a+\b/g);
null
"aaac aac".match(/a+\B/g);
["aaa", "aa"]

* 정규표현식 최적화
"abcAB".match(/.+AB/)


```

### 5.1.2 없거나 하나 이상 매치 * 

```
// exam
"AAAC".match(/A*/)
["AAA"]
"AABAAAC".match(/A*/)
["AA"]
"12AB_12EFG".match(/12C*/)
["12"]
"123AB_12EFG".match(/123C*/)
["123"]
"ABC_123".match(/123C*/)
["123"]
```

### 5.1.3 없거나 하나만 매치 ? 

```
// exam
"123SSSK".match(/123S*K/)
["123SSSK"]
"123SSSK".match(/123S+K/)
["123SSSK"]
"123SSSK".match(/123S?K/)
null

// 존재 비교 문자
?   ; 없냐 있냐(1개)
*   ; 없냐 있냐(다수)
+   ; 있냐(다수)
{}  ; 개수 제한

```

### 5.2숫자로 매치 범위 지정 

```

```

### 5.2.1 수에 매치 {숫자} 

```
// exam
"AAAK".match(/A{2}K?/)
["AA"]
"AAAK".match(/A{2}K/)
["AAK"]
"AAAK".match(/A{2}K/).index
1
"AAAK".match(/A{2}K?/).index
0
```

### 5.2.2 수 이상에 매치 {숫자,} 

```

// exam
"AAAKAA".match(/A{2,}&/).index
4
"AAAKAA".match(/A{2,}/).index
0
```

### 5.2.3 매치 구간 지정 {숫자,숫자} 

```
"CCC".match(/A/)
null
"CCC".match(/A{1,2}/)
null
"CCC".match(/A{0,2}/) // 최소 매치 수가 0이므로 매치에 성공
[""]
```

### 5.3욕심 없는 매치 

```

```

### 5.3.1 한 번만 매치 +? 

```

// exam
"aaaac".match(/aa+/)
["aaaa"]
"aaaac".match(/aa+?/)
["aa"]
```

### 5.3.2 최소 매치 *? 

```
// exam
"abcabc".match(/abc?/)
["abc"]
"abcabc".match(/abc*/)
["abc"]
"abcabc".match(/abc*?/) // 주의; 매치가 되더라도 해당 패턴은 반환시키지 않음
["ab"]
```

### 5.3.3 숫자 범위 무시 {숫자,숫자}? 
```
// exam
"aaaaaac".match(/a{1,5}/)
["aaaaa"]
"aaaaaac".match(/a{1,5}?/)
["a"]
"aaaaaac".match(/a{2,5}/)
["aaaaa"]
"aaaaaac".match(/a{2,}/)
["aaaaaa"]
"aaaaaac".match(/a{2,}?/)
["aa"]
"aaaaaac".match(/a{2,5}?/)
["aa"]
```


## Chapter 06 문자 클래스 

```

```

### 6.1문자 집합 [ ] 

```
// exam
"abcde".match(/[ab]/)
["a"]
"abcde".match(/[]/)
null
"abcde".match(/[bac]/)
["a"]
"정규표현식".match(/[표정]/)
["정"]
"정규표현식".match(/[표정]/g)
["정", "표"]
"abcde".match(/[bac]/g)
["a", "b", "c"]
```

### 6.2패턴 문자를 문자화 

```
// exam1
"?a.b?c.+.?d+e1?+".match(/1|\+|\.|\?/g)
["?", ".", "?", ".", "+", ".", "?", "+", "1", "?", "+"]
"?a.b?c.+.?d+e1?+".match(/[1+.?]/g)
["?", ".", "?", ".", "+", ".", "?", "+", "1", "?", "+"]

// exam2
"abc+d+e1+".match(/[1+]/g)
["+", "+", "1", "+"]
"abc+d+e1+".match(/1+/g)
["1"]
"abc+d+e1+".match(/1\+/g)
["1+"]
"abc+d+e1+".match(/1|\+/g)
["+", "+", "1", "+"]

// tip; 정규표현식 작성 방법
큰 틀 작성 뒤 옵션으로 제한 조건 추가
```

### 6.3백스페이스 [＼b] 

```

```

### 6.4구간 [-] 

```

```

### 6.5CSS 프로퍼티 형태 변경 

```

```

### 6.6제외 [^] 

```

// exam 1
"abcd".match(/[^a]/)
["b"]
"abcd".match(/[^a]/g)
["b", "c", "d"]
"abcdefg".match(/[^a-c]/g)
["d", "e", "f", "g"]
"abcdefg".match(/[^a-cf-g]/g)
["d", "e"]

// exam 2
"정규표현식".match(/[^정표]/g)
["규", "현", "식"]
"정규표현식".match(/[^정표][식]/g)
["현식"]
```

### 6.7텍스트 값 추출 

```
// exam
"<div id='sports'>축구</div>".match(/<\/?[^>]+>/ig)
["<div id='sports'>", "</div>"]
"<div id='spo>rts'>축구</div>".match(/<\/?[^>]+>/ig)
["<div id='spo>", "</div>"]

```

### 6.8독식을 막아라 
```

```


## Chapter 07 이스케이프 문자 클래스 

```
\d
\D
\s
\S
\w
\W
\uhhhh
\xhh
\c

// exam
'^abc'.match(/^a/)
null
'^abc'.match(/a/)
["a"]
'^abc'.match(/^a/g)
null
'^abc'.match(/\^a/g)
["^a"]
'b^ac'.match(/^a/g)
null
'b^ac'.match(/\^a/g)
["^a"]
"\\ab".match(/\\a/)
["\a"]
"\\ab".match(/\\\a/)
["\a"]
"\\ab".match(/\\\\a/)
null
"\\ab".match(/\\a/)
["\a"]
"\\ab".match(/\\\a/)
["\a"]
"\\ab".match(/\\+a/)
["\a"]
"\\ab".match(/\\*a/)
["\a"]
"\\ab".match(/\\{2}a/)
null
"\\ab".match(/\\{1}a/)
["\a"]
"\\\\ab".match(/\\{2}a/)
["\\a"]
"\\\\ab"
"\\ab"
"\\ab"
"\ab"
```

### 7.1패턴 문자의 문자화 

```

```

### 7.2숫자 매치 

```

```

### 7.2.1 숫자만 매치 ＼d 

```

```

### 7.2.2 숫자 이외 매치 ＼D 

```
[^0-9]

// exam
'1abc23'.match(/\d/)
["1"]
'1abc23'.match(/\D/)
["a"]
'1abc23'.match(/\d/g)
["1", "2", "3"]
'1abc23'.match(/\D/g)
["a", "b", "c"]
'abc3'.match(/^\D+/g)
["abc"]
'abc3'.match(/^\D+$/g)
null
'abc'.match(/^\D+$/g)
["abc"]
```

### 7.3문자 매치 

```

```

### 7.3.1 보이지 않는 문자 매치 ＼s 

```
// exam
'\u0009'
"   "
'\u0009'.match(/\s/)
["  "]
'\u0009'.match(/^\s/)
["  "]
'\u0009\u0061'.match(/\s/)
["  "]
'\u0009\u0061'.match(/\S/)
["a"]
'\u0009\u0061'.match(/\s|\S/)
["  "]
'\u0009\u0061'.match(/\s|\S/g)
["  ", "a"]
'\u0009\u0061aa'.match(/\s|\S/g)
["  ", "a", "a", "a"]
'\u0009\u0061aa'.match(/\s+|\S+/g)
["  ", "aaa"]
'\u0009\u0009\u0061aa'.match(/\s+|\S+/g)
["      ", "aaa"]
'\u0009\u0009\u0061aa\u0009'.match(/\s+|\S+/g)
["      ", "aaa", " "]
```

### 7.3.2 공백 체크 패턴 

```

```

### 7.3.3 문자열 앞뒤 공백 삭제 

```

```

### 7.3.4 보이는 문자 매치 ＼S 

```

```

### 7.463개 문자 매치 

```

```

### 7.4.1 63개 문자만 매치 ＼w 

```
[0-9a-zA-Z\_]
```

### 7.4.2 63개 이외 문자 매치 ＼W 

```
// exam
'_!*@#^!*@&^#(!%$(@'.match(/\W*/g)
["", "!*@#^!*@&^#(!%$(@", ""]
'_!*@#^!*@&^#(!%$(@'.match(/\W+/g)
["!*@#^!*@&^#(!%$(@"]
```

### 7.4.3 E-Mail 주소 체크 

```

```

### 7.5문자 이스케이프 

```

```

### 7.5.1 유니코드 매치 ＼u 

```

```

### 7.5.2 16진수 매치 ＼xhh 

```

```

### 7.5.3 제어 문자 매치 ＼c 

```

```

### 7.5.4 제어 이스케이프 문자 
```

```


### Chapter 08 그룹화 

```

```

### 8.1매치 결과 캡처 ( ) 

```
// exam
"ABC".match(/A/)
["A"]
"ABC".match(/(A)/)
["A", "A"]
"ABC".match(/((A))/)
["A", "A", "A"]
"ABC".match(/(A)B/)
["AB", "A"]
"ABCDEF".match(/AB(C|P)(D|Q)EF/)
["ABCDEF", "C", "D"]
"ABCDEF".match(/AB(\S)(D|Q)EF/)
["ABCDEF", "C", "D"]

//
undefined 설정 매커니즘
* 매치 및 설정 방법
- 패턴에서 소괄호() 수 만큼 반환할 배열의 2번쨰 인덱스부터 undefined 설정
- 패턴을 매치하여 값이 매치되면 인덱스에 값 설정
- 따라서 undefined가 매치된 값으로 대체 됨
- 소괄호()의 패턴이 매치되지 않으면 undefined가 유지
- 반환할 배열의 첫 번째 인덱스에 전체 매치 값을 설정

// exam
"baseball".match(/((ball)|(base))/)
["base", "base", undefined, "base"]
/((ball))|((base))/.exec("baseball")
["base", undefined, undefined, "base", "base"]

//
밖에서 안으로, 왼쪽에서 오른쪽으로 undefined를 설정

((base)|(ball))
(base|(ball))
(base|ball)
(base)  => ['', 'undefined', undefined, 'base']
        => ['', 'base', undefined, 'base']
base    => ['base', 'base', undefined, 'base']
```

### 8.2캡처 값 참조 

```
$1
$2
```

### 8.2.1 백래퍼런스 ＼숫자 

```
'abcdef'.match(/ab(c)(d)\1\2/);

// exam
"abcdef_cd".match(/ab(c|k)(d|x)ef_/);
["abcdef_", "c", "d"]
"abcdef_cd".match(/ab(c|k)(d|x)ef_\1\2/);
["abcdef_cd", "c", "d"]
"abcdef_cd".match(/ab(c|k)(d|x)ef_.\2/);
["abcdef_cd", "c", "d"]
```

### 8.2.2 RegExp.$숫자 

```
// exam
"abcdef_cd".match(/ab(c|k)(d|x)ef/);
["abcdef", "c", "d"]
RegExp.$_
"abcdef_cd"
RegExp.$1
"c"
RegExp.$2
"d"
```

### 8.2.3 숫자 값에 콤마 삽입 

```

```

### 8.3백트래킹 

```
* backtracking
- 비슷한 사전적 의미: 같은 코드를 따라 되돌아오다.
* lastIndex
- 되돌아 오기 위해서는 돌아올 위치를 알아야 함
* 클로저
- 돌아 왔을 때 매치 대상을 알아야 하므로 매치 여부에 관계없이 매치 대상 저잦ㅇ 필ㅇ
- 저장하는 곳을 클로저라고 함. 개념적이지만 정규표현식 이해에 필요

// exam
"swim".match(/swiA?m/)
["swim"]
"swim".match(/swiA?i/)
null
"swim".match(/swi?i/)
["swi"]

// exam2
"swim".match(/s.*?/)
["s"]
"swim".match(/s.*?m/)
["swim"]
```

### 8.4최대로 매치 

```

// exam
'aabaac'.match(/(aa|aabaac|b)/);
["aa", "aa"]
aabaac'.match(/(aabaac|aa|b)/g);
["aabaac"]
'aabaac'.match(/(aa|aabaac|b)/g);
["aa", "b", "aa"]
'aabaac'.match(/(aa|aabaac|b)*/);
["aabaa", "aa"]
'aabaac'.match(/(aa|aabaac|b)*/g);
["aabaa", "", ""]
'aababaac'.match(/(aa|abaac|b)*/);
["aababaac", "abaac"] // 최대로 매치하는 성향을 가짐; 1, 3, 2번이 매치되어 최종 반환 값을 가짐

// exam2
"aabkkcd".match(/(aa|ba|b|c)/);
["aa", "aa"]
"aabkkcd".match(/(aa|ba|b|c)*/);
["aab", "b"]

// exam3
"aabaac".match(/(aa|ba|b|c)*/);
["aaba", "ba"]
"aabacb".match(/(aa|aaba|b|c)*/);
["aab", "b"]
"aabacb".match(/(aaba|aa||b|c)*/);
["aabacb", "b"]
"aabacb".match(/(aaba|aa|b|c)*/);
```

### 8.5캡처하지 않는 그룹 (?:) 

```
"abcdef".match(/ab(cd)ef/);
["abcdef", "cd"]
"abcdef".match(/ab(?:cd)ef/);
["abcdef"]
RegExp.$_
"abcdef"
RegExp.$1
""
```

### 8.6전방 매치 (?=) 

```
* Lookahead
- ?=에 이어 작성한 문자를 매치하여 먼저 매치 기준 위치를 찾고 그 위치에서 앞으로 매치

// exam
"abcc".match(/ab(?=c)/)
["ab"]
"abdcc".match(/ab(?=c)/)
null
"abdcc".match(/ab(?=d)c/)
null
"abdcc".match(/ab(?=d)d/)
["abd"]
"abdcc".match(/ab(?=d)dcc/)
["abdcc"]
```

### 8.7전방 부정 매치 (?!) 
```
* 주의
- 매치가 되면 null을 반환 매치가 되지 않으면 값을 반한

// exam
"abcdef".match(/ab(?!ef)/)
["ab"]
"abcdef".match(/ab(?!cd)/)
null

// email
4.10.5.1.5
http://www.w3.org/TR/html5/forms.html#e-mail-state-(type=email)


```



### Chapter 09 RegExp 클래스 

```

```

### 9.1RegExp 인스턴스 생성 

```
// 콤마 만들기; 동적으로 사용
var len = len || 3
var pattern = '(^[+-]?\\d+)(\\d{' + len + '})';
var obj = new RegExp(pattern);

```

### 9.2RegExp 인스턴스 여부 체크 

```

```

### 9.3패턴 미지정 

```

```

### 9.4인스턴스 생성 후 exec( ) 호출 

```

```

### 9.5인스턴스 생성 후 test( ) 호출 

```

```

### 9.6문자열로 변환 toString( ) 

```

```

### 9.7RegExp 프로퍼티 

```

```

Chapter 10 정규 표현식 활용 
10.1값 전체 영문자 체크 
10.2단위 체크 및 설정 (12px) 
10.3〈script〉〈/script〉 블록 제거 
10.4〈script〉〈/script〉를 분리하여 값 추출 
10.5엘리먼트에서 class name 제거 
10.6역동적으로 RegExp 인스턴스 생성 
