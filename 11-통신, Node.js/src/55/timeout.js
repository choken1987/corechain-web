window.onload = function() {
  var xhr = new XMLHttpRequest();

  // timeout을 2초 설정
  // 2초동안 getData.txt를 수신하지 못하면 ontimeout 이벤트 발생
  xhr.timeout = 2000;
  xhr.open('GET', '/getData.txt');

  // timeout이 발생하면 실행
  xhr.ontimeout = function() {
    console.log('timeout 발생: ', (xhr.response || '데이터 없음'));
  }

  // ontimeout 이벤트가 발생하면 onload 이벤트는 미 발생
  xhr.onload = function() {
    console.log('서버 데이터: ', xhr.response);
  }

  xhr.send();
}
