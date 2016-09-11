
//
window.onload = function() {

  var obj = window.sessionStorage; // sessionStorage
  // var obj = window.localStorage; // localStorage

  var index, count = obj.length || 0;

  for (var i = 0; i < 5; i++) {
    index = count + k;
    obj.setItem('item' + index, index + 100); // setItem
  }

  // obj.removeItem({});

}

// event
window.addEventListenr('storage', function(event) {

  var oldValue = event.oldValue;
  var newValue = event.newValue;

  if (oldValue === null && newValue !== null) {
    type = '추가';
  } else if (oldValue !== null && newValue !== null) {
    type = '변경';
  } else if (oldValue !== null && newValue == null) {
    type = '삭제';
  }

}, false);

//
/\n|\r/g // LF, CR
