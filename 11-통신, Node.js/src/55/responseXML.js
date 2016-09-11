window.onload = function() {

  var xhr = new XMLHttpRequest();

  xhr.open('GET', '/xmlData.xml');

  xhr.onload = function() {

    // if (xhr.status = 200) {
    if (xhr.status === 200) {

      //
      console.log(xhr.responseURL);

      // XML은 오브젝트형태로 전송 됨. 불필요한 프로퍼티 등... 이 동반되기 때문에 무거움.
      var data = xhr.responseXML;

      // DOM 형태로 전송 되기 떄문에 프로퍼티에 바로 접근 가능.
      var nodes = data.getElementsByTagName('item');
      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i].children.item(0);
        console.log(node.nodeName, ': ', node.textContent);
      }

    }

  }

  xhr.send();

}
