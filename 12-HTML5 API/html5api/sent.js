// ie 11 미지원
window.onload = function() {
  //
  var eventSource = new EventSource('/sse');
  eventSource.onopen = function() {
    alert('connection complete');
  }

}
