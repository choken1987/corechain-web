(function argument(){

	// argument
	var get = function() {
		if(arguments[0] !== undefined 
			&& arguments[1] !== undefined){
			debugger;
			return arguments[0]*arguments[1];
		}
		return undefined;
	};
	js.log(get(100,7));

	// argument 오브젝트, 배열 형태
	var get = function() {
		debugger;
		var i, key, param, total = 0;
		for (i= 0; i < arguments.length; i++ ){
			param = arguments[i];
			// array
			if(Array.isArray(param)){
				param.forEach(function(value){
					total += value;
				}, this);
				js.log("total", total);
			} else if (typeof param === 'object'){
				for (key in param){
					js.log('key : ', param[key]);
				}
			}
			// object
		}

	};
	get({soccer: 11}, [1,2,3], 789);
})();