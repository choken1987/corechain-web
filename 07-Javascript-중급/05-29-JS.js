// 재귀 함수
var sports = {
	soccer: {member:11, time: 90},
	baseball: {member:5, time: 40}
};

function showValues(sprots){
	var type, obj;
	for (type in sports){
		obj = sports[type];
		typeof obj === 'object' ? showValues(obj): js.log(type, ': ', obj);	
	}
}
showValues(sports);

// exam; 재귀함수
var sales = {
	jan: {item: "노트북", amount: 100, qrt = [1,2,3]},
	feb: {item: "노트북", amount: 100, qrt = [1,2,3]}	
}

// 즉시 실행 함수


value = function() {
	return 1;
}();

console.log(value);

value = (function() {
	return 2;
}());