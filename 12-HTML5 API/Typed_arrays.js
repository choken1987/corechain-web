/* TypedArray */

// 배열 엘리먼트를 갖지 않은 인스턴스 생성
var int32view = new int32Array();

// 3개의 배열 엘리먼트를 가진 인스턴스 생성
// 각 엘리먼트 크기는 Int32
int32view = new Int32Array(3);
int32view[0] = 123;

// 3개의 배열 엘리먼트를 가진 인스턴스 생성
// 각 엘리먼트 타입은 배열이 아닌 Int32
int32view = new Int32Array([12, 34, 56]);

// 3개의 배열 엘리먼트를 가진 인스턴스 생성
// 각 엘리먼트 타입은 배열이 아닌 Int32
var int32obj = new Int32Array([7, 8, 9]);

int32view = new Int32Array(int32obj);


/* ArrayBuffer */
var buffer = new ArrayBuffer(32);

var typed42 = new Int32Array(buffer, 4, 2);
setValue(typed42, 10);
show(typed42);

var typed142 = new Int32Array(buffer, 12, 4); // 파라미터 있는 경우
setValue(typed142, 50);
show(typed142);

var typedend = new Int32Array(buffer); // 파라미터 없는 경우
show(typedend);

function setValue(typed, base) {
	for (var i = 0; i < typed.length; i++) {
		typed[i] = (i +1) * base;
	};
}

function show(typed) {
	for (var i = 0; i < typed.length; i++) {
		console.log(typed[i]);
	};
}

/* DataView */
// Endianness
var buffer = new ArrayBuffer(32);
var view = new DataView(buffer);

view = new DataView(buffer, 4, 8); // ArrayBuffer와 차이점; Endianness 설정 유무

// setInt16
var buffer = new ArrayBuffer(8);
var view = new DataView(buffer);

view.setInt16(2, 123);
view.getInt16(2); // 123
view.getInt16(4); // 0
view.getInt16(2, true); // Little 을 Big 으로 출력

// setInt8
// Int8은 3번째 파라미터가 없음