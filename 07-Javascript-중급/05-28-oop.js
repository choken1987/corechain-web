// Object.create()
var baseball = {
	member: 1,
	setValue: function(param){
		this.member = param; //
	}
};

var sports = Object.create(baseball, {
	member: {value: 2, writable: true},
	getValue: {
		value: function() {
			return this.member; //
		}
	}
});
debugger;
js.log(sports.getValue()); // this: sports
sports.setValue(3); // ? 어느것이 바뀔 까?
js.log(sports.getValue()); // this: sports

// 프로토타입 체인 -> Object.create 이전 코드
Sports.prototype = new Baseball();
Sports.prototype.constructor = Sports;



