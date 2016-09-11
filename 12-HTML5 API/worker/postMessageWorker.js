self.onmessage = function(event) {
  console.log('4. Worker 수신: ', event.data);
}
console.log('2. Worker에서 전송');
self.postMessage('워커에서 전송');
