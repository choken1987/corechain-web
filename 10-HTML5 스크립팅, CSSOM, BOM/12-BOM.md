### BOM

```
console.log(window.window);
console.log(window.self);
console.log(window.document);
console.log(window.name);
console.log(window.location);
console.log(window.history);
console.log(window.locationbar.visible);
console.log(window.menubar.visible);
console.log(window.personalbar.visible);
console.log(window.scrollbars.visible);
console.log(window.statusbar.visible);
console.log(window.toolbar.visible);
console.log(window.status);
```


### 브라우징 컨텍스트 생성

```

var newObject = window.open(url, target, features, replace);

```

### 다른 브라우징 컨텍스트 속성

```

* 다른 브라우징 컨텍스트: <iframe>, <object>를 포함한 브라우징 컨텍스트

frames
opener
parent // 페어런트 windows 반환. parent가 없으면 자신 window 반환


```

### User prompt

```

alert()
confirm()
prompt()
print()

```

### Timers

```

* setTimeOut()

this //

* setInterval

// V8 엔진; C++; 40/1000 으로 렌더링?

// socketIO; 헤더는 한번만 보낸 후 데이터만 통신

```

### Base64

```

btoa()
atob()

a ASCII
b Binary

// ASCII 문자열을 Base64 문자열로 인코딩
var encodeValue = window.btoa('abcde12345');
// Base64 인코딩 문자열을 ASCII 문자열로 디코딩
var decodeValue = window.atob(encodeValue);

```

### Navigator

```

사용자의 브라우저의 버전, 브라우저 헤더 정보 제공

userAgent
vendor
language
onLine

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
