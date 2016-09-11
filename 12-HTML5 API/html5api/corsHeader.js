
window.onload = function() {

  var client = new XMLHttpRequest();

  client.open('GET', 'http://127.0.0.1:3500/jsonData.txt');

  client.onload = function(){
    var data = JSON.parse(client.response); //
    for (var key in data) {
        console.log(key, ': ', data[key]);
    }
  };

  client.send();

}
