

window.onload = function() {

  //
  var obj = Promise.resolve({
    sports: '스포츠',
    music: '음악',
  });

  //
  obj.then(function(value){
    for (var key in value) {
      if (value.hasOwnProperty(key)) {
        console.log(key, ': ', value[key]);
      }
    }
  });

  //
  new Promise(function(resolve) {
    resolve({
      sports: '스포츠',
      music: '음악',
    })
  })

  //
  var trueObj = Promise.resolve(true);

  //
  var useObj = Promise.resolve(trueObj);
  useObj.then(function(value) {
    console.log(value);
  })


}
