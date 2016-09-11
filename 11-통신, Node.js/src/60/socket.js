window.onload = function() {

  // 소켓 오브젝트 생성
  var socket = io.connect();
  // Radio 버튼을 클릭하면 show 함수가 호출
  document.getElementById('radioID').onclick = show.bind(this);
  function show(event) {
    // buttonClick 이벤트를 발생시키면 서버에서 이벤트가 발생
    // 선택한 엘리먼트의 value 속성 값을 전송한다.
    socket.emit('buttonClick', event.target.value);
  }
  // 서버에서 값을 전송했을 때 발생
  socket.on('formServer', function(data) {
    // 서버에서 전송한 값 출력
    console.log('서버에서 전송', data);

    // 엘리먼트 속성(checked) 값 설정
    // var nodes = document.getElementsByTagName('input');
    // data == 'sports' ? nodes[0].checked = true : nodes[1].checked = true;

    var el = document.createElement('span');
    el.textContent = data;
    document.getElementById('result').appendChild(el);

  });

}
