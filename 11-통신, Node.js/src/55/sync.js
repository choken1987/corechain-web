window.onload = function() {

  var xhr = new XMLHttpRequest();

  // xhr.open('GET', '/getData.txt'); // 비동기
  // xhr.open('GET', '/getData.txt', true); // 비동기
  xhr.open('GET', '/getData.txt', false); // 동기
  xhr.onload = function() {};
  xhr.send();

}


/* server code /
setTimeout(function() {
  res.sendFile(fileName, {root: __dirname});
}, 3000);
/* */
