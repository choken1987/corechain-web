

window.onload = function() {

  var eventSource = new EventSource('/sse');

  eventSource.addEventListener('sports', function(event) {
    showData(event, 'event; sports');
  }, false);

  eventSource.addEventListener('book', function(event) {
    showData(event, 'event; book');
  }, false);

  eventSource.addEventListener('close', function(event) {
    showData(event, 'event; close');
    window.setTimeout(function() {
      obj.close();
    }, 3000);
  }, false);

  function showData(event, type) {
    var data = JSON.parse(event.data);
    for (var key in data) {
      console.log('data' + data[key]);
    }
  }
}
