window.onload = function() {
  var seq = 0, xhr = new XMLHttpRequest();
  var types = [];
  types.push('abort');
  types.push('error');
  types.push('loadstart');
  types.push('load');
  types.push('error');
  types.push('loadend');
  types.push('progress');
  types.push('timeout');

  types.forEach(function(type) {
    xhr.addEventListener(type, eventHandler, false);
  }, this);

  xhr.open('GET', '/getData.txt');
  xhr.send();


  function eventHandler(event) {
    console.log(event.type, ',', ++seq);
    console.log('서버 데이터: ', xhr.response);
  }

}
