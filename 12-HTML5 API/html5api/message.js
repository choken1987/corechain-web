
window.onload = function() {

  var eventSource = new EventSource('/sse');

  eventSource.onopen = function() {
    console.log('onopen');
  }

  eventSource.onmessage = function(event) {
    var data = event.data.split('\n');
    data.forEach(function(message){
      console.log(message);
    })
  }

  eventSource.onerror = function(event) {
    console.log('onerror');
  }

}
