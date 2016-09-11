window.onload = function() {

  var el = document.querySelector('button');

  el.addEventListener('click', function(event){

    // form으로 FormData 오브젝트 생성
    var obj = new FormData(event.target.form);

    var xhr = new XMLHttpRequest();

    xhr.open('POST', './');

    xhr.onload = function() {
      console.log('서버 response 데이터');

      //
      var data = JSON.parse(xhr.response);

      for (var name in data) {
        if (data.hasOwnProperty(name)) {
          console.log('name', ': ', data[name]);
        }
      }
    }

    xhr.send(obj);

  });

}
