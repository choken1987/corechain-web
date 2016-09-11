window.onload = fucntion() {

  socket.onopen = function(event) {
    // ...

    // blob 타입 설정
    socket.binaryType = 'blob'; //

    // 서버로 파일 전송
    socket.send(event.target.file[0]); //
  }

}
