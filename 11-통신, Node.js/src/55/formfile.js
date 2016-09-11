window.onload = function() {

  var el = document.querySelector('button');

  el.addEventListener('click', function(event) {

    // Formdata obj
    var obj = new FormData(event.target.form);

    // FormData.append();
    obj.append('sports', '스포츠');
    obj.append('name', '네임');

    //
    var xhr = new XMLHttpRequest();

    // xhr.open('POST', './images');
    xhr.open('POST', '/images');

    xhr.onlaod = function(req, res) {

      data = req.response;

      var el = document.createElement('img');

      el.src = data.path;

      document.getElementId('result').appendChild(el);

    }

    xhr.send(obj);

  });
}
