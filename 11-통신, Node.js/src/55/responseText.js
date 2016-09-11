window.onload = function() {

  var xhr = new XMLHttpRequest();

  xhr.onload = function() {

    //
    console.log(xhr.responseURL);

    // 실무에서는 응답의 순차를 보장할 수 없기 때문에 이 점에 유의해서 코드를 작성
    // JSON.parse(); // 안전하게 파싱 처리
    var data = xhr.responseText;
    console.log(JSON.parse(data));

  }


}
