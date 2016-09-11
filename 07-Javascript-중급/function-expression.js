// function-expression
var outside = function inside(param){
	if(param == 102){
		return param;
	}
	js.log(param);
	return inside(param+1);
}
js.log(outside(100));

// function-order
function sports(){
	// debugger;
	// 크롬 개발자도구 Local 영역
	// 실행 단계에서 break
	// 변수 초깃값 undefined

	var player = 11;
	test = 'TEST'; //

	function soccer(){
		return player;
	}

	var swim = function(){

	}

	soccer();
}
sports();

// hoisting
function sports(){
    baseball();
    function baseball(){
    	js.log('call-baseball');
    };
};
sports();

// overriding
function sports(){
	// debugger;
	function soccer(){js.log('soccer1');}

	soccer();

	function soccer(param1){js.log('soccer2');}
}

/*
	오버라이딩이 발생하는 원인 이해
	함수 표현식과 함수 선언문 사용 이해

	함수 선언식, 함수 호출(), 함수 선언문
	함수 표현식, 함수 호출(), 함수 표현식

	함수 선언문, 함수 호출(), 함수 표현식
	함수 표현식, 함수 호출(), 함수 선언문

 */
 var overriding = function(){
 	// 11
 	var fn11 = function(){
 		debugger;
 		function a(){console.log('a');}
 		a();
 		function a(param){console.log('aa');}
 	};
 	fn11();

 	// 22
 	var fn22 = function(){
 		debugger;
 		var a = function (){console.log('a');}
 		a();
 		var a = function (param){console.log('aa');}
 	};
 	fn22();

 	// 12
 	var fn12 = function(){
 		debugger;
 		function a(){console.log('a');}
 		a();
 		var a = function (param){console.log('aa');}
 	};
 	fn12();

 	// 21
 	var fn21 = function(){
 		debugger;
 		var a = function (param){console.log('aa');}
 		a();
 		function a(){console.log('a');}
 	};
 	fn21();

 }
 overriding();