
window.onload = function() {

  var client = new XMLHttpRequest();

  client.open('GET', 'http://127.0.0.1:3500/jsonData.txt');

  client.onload(function(){console.log('onload');});

  client.send();

}
