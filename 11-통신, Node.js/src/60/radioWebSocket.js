window.onload = function() {

  var socket = new Websocket('ws:127.0.0.1');

  // var node = document.querySelector('input');

  node.addEventListener('click', function(event) {
    // document.getElementsByTagName('input')
    // socket.send(document.)
  });

  socket.onopen = function() {
    console.log('socket onpen');
  };

  socket.onmessage = function() {
    
  }
}
