//
var worker = new Worker('xhrWorker.js');

//
worker.postMessage('start');

//
worker.onmessage = function(event) {
  var data = event.data;
  console.log('결과 :', event.data);
  if(data === 'end') {
    worker.terminate();
  }
}
