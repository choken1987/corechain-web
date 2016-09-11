window.onload = function() {
  var ip = ":127.0.0.1";
  // var ip = ":localhost";
  // var ip = ":192.168.1.101";
  var port = ":3000";
  var socket = new WebSocket("ws"+ip+port);

  document.getElementById('send').onclick = function() {
    var nameNode = document.getElementById('name');
    var itemNode = document.getElementById('item');

    var data = JSON.stringify({
      name: nameNode.value,
      item: itemNode.value,
    });

    socket.send(data); //

    nameNode.value = '';
    itemNode.value = '';

  }
}
