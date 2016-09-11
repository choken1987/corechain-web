
// self.onmessage = function() {
//
//   var cnt = 0;
//   var interval = setInterval(function(){
//     self.postMessage('a' + new Date().toLocaleString());
//     cnt++;
//     if (cnt == 5) {
//       clearInterval(interval);
//     }
//   }, 1000);
//
// };

self.onmessage = function() {
  server.get();
}

var server = {
  count: 0,
  get: function() {
    var xhr = new XMLHttpRequest();
    xhr.onload = this.success.bind(this, xhr), //
    // xhr.onload = this.success(xhr), // vs
    xhr.open('GET', 'xhr.txt');
    xhr.send();
  },
  success: function(xhr) { // parameter
    if (this.count === 5) { // this
      self.postMessage('end');
      return;
    }

    self.postMessage(xhr.response + Date.now());

    this.count++; // this

    //
    self.setTimeout(function() {
      server.get();
    }, 1000);

  },
}
