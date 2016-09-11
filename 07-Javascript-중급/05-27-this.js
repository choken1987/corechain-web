// exam 1
var sports = {
	value: 123,
	member: {
		value: 456,
		get: function() {
			js.log(this === sports.member);
			js.log(this.value);
		}
	}
}
sports.member.get();
// 456

// exam 2
var sports = {
	value: 123,
	get: function() {
		var value = 456;
		js.log(this === window); // ?
		js.log(this.value); // ?
	}
};
var comp = sports.get;
debugger;
comp(); //
// 
debugger;
sports.get(); //

// this 참조 오브젝트
function get(){
	console.log('a');
}

var sports = function() {
	function get() {
		console.log('A');
	};
	debugger;
	this.get(); // ?
	get(); // ?
}
sports();
// a
// A


// this 와 인스턴스
var sales = {};

sales.Book = function(option){
	this.option = option;
};

sales.Book.prototype = {
	getValue: function() {
		js.log(this.option)
	}
};
var obj = new sales.Book(100);
obj.getValue();

// 오브젝트 지정
get.call({base:20, rate: 30}, 50);

//
var get = function() {
	debugger;
	return this.valueOf(); // ?
}
get.call(123); // ?

//
var sports = {
	value: 1,
	soccer: {
		value: 2,
		get: function() {
			return this.value;
		}
	}
}
js.log(sports.soccer.get.call(sports));
js.log(sports.soccer.get.call(sports.soccer));

// bind - Function 오브젝트 생성, 호출
var bonus = {
	value: 1,
	get: function() {
		return this.value;
	}
};
js.log(bonus.get());

var fnObj = bonus.get.bind(); // function으로 만들어서 반환. 
js.log(typeof fnObj); //
js.log(fnObj()); // undefined

fnObj = bonus.get.bind(bonus); //
js.log(fnObj()); // 1

//
