//
function Fn(value){return value;}
Fn.prototype.getValue = function(){return this.value + 100;};
var fnA = new Fn(123);
console.log(fnA.getValue());
console.log(fnA.value);
console.log(fnA.getValue());

// prototype 프로퍼티 공유
// var Fn = function() {};
var fn = function() {}; // 실무에서는 앞에 name space가 붙게 됨
Fn.prototype.member = 1; // prototype에 object, array는 할당 하지 말 것
// var fnA = new Fn();
var fnA = new fn();
fnA.prototype.getMember = funtion() {return this.member;};
debugger;
js.log(fnA.getMember());
