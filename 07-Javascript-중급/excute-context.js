(function ec(){

	// scope
	var obj = {value: 123};
	obj.getValue = function() {
		var amount = this.value;
		debugger;
	};
	obj.getValue();

})();