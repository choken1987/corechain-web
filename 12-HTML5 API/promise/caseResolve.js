
window.onload = function() {

  // new Promise()
  function check(value) {
    return new Promise(function(resolve, reject){
      if (value == 'ok') {
        resolve(value);
      } else {
        reject(value);
      }
    });
  };

  // then
  check('ok')
    .then(
      debugger;
      // 첫 번째 파라미터
      function(success) {
        debugger;
        console.log('성공', success);
      },
      // 두 번째 파라미터
      function(error) {
        debugger;
        console.log('실패', error);
      }
    );

}
