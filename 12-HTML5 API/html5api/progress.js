window.onload = function() {

  var node = document.querySelector('progress');
  var xhr = new XMLHttpRequest();

  //
  xhr.open('GET', '/img.png');

  //  다운로드가 진행될때 마다 호출
  xhr.onprogress = function(event) {
    // 진척 계산 가능일 때만 계산 할 수 있다.
    if (event.lengthComputable === true) {
      // 진척 값(loaded)과 전체 값(total)으로 진행율을 구한다.
      node.value = (event.loaded / event.total) * 100;
    }
  }

  // 다운로드가 완료되었을 때 실행된다.
  xhr.onload = function(event) {
    node.value = event.loaded;
  }

  //
  xhr.send();

}
