window.onload = function() {

  //
  var socket = new WebSocket("ws:192.168.1.101:3000");
  var resultNode = document.getElementById('result');

  //
  socket.onmessage = function() {
    var node = document.getElementById('li');
    node.textContent = event.data + ': ' + Date.now();
    resultNode.appendChild(node);
  }
}
