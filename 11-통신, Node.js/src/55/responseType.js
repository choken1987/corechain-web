window.onload = function() {

  var xhr = new XMLHttpRequest();

  // responseType = blob
  xhr.responseType = 'blob'; // binary *

  xhr.open('GET', '/nodejs.png');
  // xhr.open('GET', '/images/jimin.jpg'); // FIXME 경로 에러

  xhr.onload = function() {

    // Blob 오브젝트에서 Blob URL 생성
    var url = window.URL.createObjectURL(xhr.response);

    var el = document.createElement('img');

    // 이미지가 로드되면 Blob에서 URL해제
    el.onload = function() {
      window.URL.revokeObjectURL(url);
    }

    // el.onload() 보다 뒤에 선언
    el.src = url;

    document.getElementById('result').appendChild(el);

  }

  xhr.send();

}
