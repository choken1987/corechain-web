
//
console.log('sports'.match(/sports/));
console.log('sports'.match(/sp/));
console.log(Array.isArray('sports'.match(/sp/)));
console.log('sports'.match(/spt/));
console.log('sports'.match(/s/));

// search vs indexOf
console.log("CD_AB_EF".search(/AB/));
console.log("CD_AB_AB".search(/AB/g));
console.log("AB_CD_CD".search(/CD$/));
console.log("AB_CD".search(/EF/g));

// regular expression
var regExp 	= {};
var list 	= [];
var target	= '';

regExp = new RegExp('^\d+[3,4]$'	, 'g'); // 숫자만
regExp = new RegExp('^[a-zA-Z]*$'	, 'g'); // 영문 대소문자만; 비교1
regExp = new RegExp('^[a-zA-Z]+$'	, 'g'); // 영문 대소문자만; 비교2
regExp = new RegExp('^[a-zA-Z]+$', 'g'); // 영문 대소문자만 + @
regExp = new RegExp('^[0-9][0-9-]*[0-9]$' ,'g');
regExp = new RegExp('[0-9\-]+' ,'g');

list.push('1234');
list.push('123');
list.push('12');
list.push('1234aa');
list.push('aa1234');
list.push('ABCD');
list.push('abcd');
list.push('ABcd');
list.push('123');
list.push('12AB');
list.push('AB12');
list.push(' ');
list.push('');
list.push('@a1b2c3');
list.push('a1b2@c3');
list.push('a1b2c@');
list.push('-1-1-1');
list.push('1-1-1-');
list.push('1-1-1');

execute();

var check = function(str) {
	var is = str + '\t:\t'+ regExp.test(str);
	console.log(is)
	return is;
};

var execute = function() {
	for ( var i = 0; i < list.length; i++ ){
		target = list[i];
		check(target);
	}
}

//
regExp = new RegExp('[0-5]', '');
check('54321');
regExp = new RegExp('[A-E]', '');
check('CDBDa');
regExp = new RegExp('[-3]', '');
check('73-21');
check('721');
check('7321');

//
var str = "1388174-135-135-1351-35-135";
if(check(str)){
	console.log(str.replace(/[-]/g, ''));
}

// HTML5 template
winow.onload = function() {
	point.data.forEach(function(obj){
		this.result.push(this.templateObj.match(obj));
	}, point);
	point.result.push("</table>");
	document.getElementById('movie').innerHTML = porint.result.join('');
}
var point = {};
point.data = [
	{place: '강남점', title:'스타워즈', point: 500},
	{place: '강남점', title:'스타워즈', point: 500},
	{place: '강남점', title:'스타워즈', point: 500}
]
/*
point.data = [
	['강남점', '스타워즈', 500],
	['강남점', '스타워즈', 500],
	['강남점', '스타워즈', 500]
]
 */
point.Tamplate = function() {
	this.template = format;
	this.tepplateExp = /\{\w+}?\}/g;
}
point.Template.prototype.match = function(data) {
	return this.template.replace(point.templateObj.templateExp, function(src, key){
		return data[key];
	})
}
point.result = ["<table><thead><tr><th>상영관<th>이름<th>포인트<tbody>"];
point.templateObj = new point.Template('<tr><td>{place}<td>{title}<td>{point}');


<div id="movie"></div>

// 콤마 삽입
// /(^[+-]?\d+)(\d{3})/
var pattern = /(^[+-]?\d+)(\d{3})/
function insertComma(value){
	var str = value.toString();
	while (pattern.test(str)){
		debugger;
		str = str.replace(pattern, '$1'+ ',' + '$2');
	}
	return str;
}

insertComma('1984750917459820364');
// 정규표현식 최적화; 일부 패턴이 모든 대상을 매치시키지 않게 함. why, 전체적으로 실패를 유도함.

// 코딩 문제
var pattern = /(^\w+)(\w{4})/;
function insertHash(value){
	var str = value.toString();
	while (pattern.test(str)){
		str = str.replace(pattern, '$1'+ '\n##' + '$2');
	}
	return str;
};

insertHash('_AD19_AD8AWDA4750ASda9174ASfAfAWasdADf9820snefnjl88f d9fef8h9h98h9ahf98 9hafAD364_');