window.onload = function() {

  var xhr = new XMLHttpRequest();

  xhr.responseType = 'json';

  xhr.open('GET', '/jsonData.txt');

  xhr.onload = function() {

    var header = xhr.getResponseHeader('Content-Type');
    console.log(header);

    hader = xhr.getAllResponseHeaders();

    console.log(header);

    var data = JSON.parse(xhr.response);

    for (var name in data) {
      if (data.hasOwnProperty(name)) {
        console.log(name, ': ', data[name]);
      }
    }

  }

  xhr.send();

}
