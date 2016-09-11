## CSSOM View Module

### MediaQueryList

```

```

### window.screen 

```
window.screen.width
window.screen.height
window.screen.availWidth
window.screen.availHeight
window.screen.colorDepth
window.screen.pixelDepth
```

### window - viewport

```
innerWidth
innerHeight
scrollX
scrollY
pageXOffset // 브라우저 안에서 다큐먼트가 가로 방향으로 스크롤된 픽셀 수
pageYOffset // 브라우저 안에서 다큐먼트가 세로 방향으로 스크롤된 픽셀 수
// 크로스 브라우징 문제가 있으므로 page~로 사용. not scroll
```

### window - client

```
window.screenX
window.screenY
window.outerWidth
window.outerHeight
window.devicePixelRatio

```

### elementFromPoint()

```
window.onclick = function(e) {
    var element = document.elementFromPoint(e.clientX, e.clientY);
}
```

### elementsFormPoint()

```
e.clientX
e.clientY
var nodes = document.
```

### Element 프로퍼티; Element - client

```
el.clientWidth
el.clientHeight
el.clientTop
el.clientLeft
el.offsetWidth
el.offsetHeight
el.offsetTop
el.offsetLeft
el.offsetParent
el.scrollTop
el.scrollLeft
el.scrollWidth
el.scrollHeight
```

### Element - offset

```
offsetWidth
offsetHeight
clientWidth
clientHeight
```

### Element - scroll

```
scrollWidth
scrollHeight
scrollTop
scrollLeft

// overflow: scroll;
```

### getBoundingClientRect();

```
// 모바일에서 필수 활용; 스크롤

```

### getClientRects();

```

```

### 

```

```

### 

```

```
