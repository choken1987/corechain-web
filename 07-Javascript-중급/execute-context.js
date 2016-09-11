(function ec(){

	// ec
	var obj = {value: 123};
	obj.getValue = function() {
		var amount = this.value;
		debugger;
	};
	obj.getValue();

	// Call Stack
	var stack = function() {
		var fn1 = function() {
			fn2();
			return 1;
		};

		var fn2 = function() {
			fn3();
			return 2;
		};

		var fn3 = function() {
			return 3;
		};

	};
	debugger;
	stack();

	// global code
	var EC = {
		GE: {
			ER: {
				OBER: {
					GO: {

					}
				}

			}
		},
		ELER: {
			외부 렉시컬 환경 참조: null
		}
	}

	//
	var _EC = {

	}

	_thisBindingComponent: {
		GO: {}

	}

	

})();