(function argument(){

	// scope
	var sale = function() {
		// debugger;
		function get() {
			function discount() {

			}
			discount();
		}
		get();
	}
	sale();

	// use strict
	'use strict';
	// debugger;
	var outside = 'global';
	var side = 'GLOBAL'
	var getValue = function() {
		inside = 'local';
		side = 'LOCAL';
		return inside || side;
	};
	getValue();

	// scope binding
	var binding = function() {
		var value = 123;
		function fn1(){
			return value;
		};

		var fn2 = function (){
			return value; // value는 이미 내부 프로퍼티 [[Scope]]안에 들어 있음
		};
		debugger;
		fn2();

	};
	binding();

	// scope binding - with
	var soccer = {player: '11명'};
	var biding = function() {
		var player = 123;
		with(soccer){
			debugger;
			js.log(player);
		}
	};
	binding();

})();