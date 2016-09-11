
/* The fullscreen API */
var node = document.getElevemntById('imageID');
node.onclick = function() {
	// 크롬, 사파리, 오페라
	if(document.wekitFullscreenEnabled){
		node.webkitRequestFullscreen();
		// 이벤트 설정: 상태가 바뀔때마다 이벤트가 발생
		document.addEventListener('webkitfullscreenchange', showOnOff);

		// 추가; width, height 계산 후 할당 하면 더 명확
	}
}

function showOnOff(){
	// Fullscreen 상태이면 엘리먼트를 반환하고 아니면 null 반환
	var node = document.fullscreenElement ||
		document.webkitFullscreenElement ||
		document.msFullscreenElemnt ||
		document.mozFullScreenElement

	if(node) {
		console.log(node.id);
	}
}

/* Page Visibility */
var videoNode = document.querySelector('video');
videoNode.play();

document.addEventListener('visibilitychange', function(event) {
	if (document.hidden === true) {
		videoNode.pause();
	} else {
		videoNode.play();
	};
}, false);

videoNode.addEventListener('timeupdate', function(){
	document.title = Math.floor(videoNode.currentTime) + '초';
}, false)

/* Web Notifications */
// 사용자가 알림을 허가한 상태
if (Notification.permission === 'granted') {
	// 인스턴스 생성
	var obj = new Notification('hello noti', {body: 'new message'}); // 파라미터; json 형태
} else { 
	Notification.requestPermission(function((permission){
		if (permission === 'granted') {
			var obj = new Notification('hello noti; first');
		} else{
			window.alert('no noti');
		};
	})
}

// event
if (Notification.permission === 'granted') {

	var notification = new Notification('hi', {body: 'have a good day'});

	notification.onshow = function(event) {alert(event)};
	notification.onclick = function(event) {alert(event)};
	notification.onclose = function(event) {alert(event)};
	notification.onerror = function(event) {alert(event)};

};

// options
var options = {
	clickCnt: 1,
	body: ['홀', '짝'],
	tag: ['odd', 'even'], // tag를 2개로 처리
	image: ['img_odd', 'img_event'],
}

var buttonNode = document.querySelector('button');

buttonNode.onclick = function(event) {

	// 판단; odd, even
	var remain = options.clickCnt % 2;
	var index = (remain === 0) ? 1 : 0;

	var onj = new Notification('title', {
		body: options.body[index] + options.clickCnt,
		tag: options.tag[index],
		icon: options.image[index], // icon
	})

	options.clickCnt++;

}

/* Selection */
document.getElevemntById('selectID').onclick = function(event) {

	var outerNode = document.getElevemntById('outerID'),
		innerNode = document.getElevemntById('innerID');

	var selction 	= docuemnt.getSelection(); //
	var range		= docuemnt.createRange(); //

	range.setStart(outerNode.firstChild, 2); //
	range.setEnd(innerNodd.firstChild, 3); // 

	selection.addRange(range); //

	console.log(JSON.stringify({
		toString: selection.toString(),
		anchorNodeParentNodeId: selection.focusNode.parentNode.id,

	}))

}


/* Server-sent Events */
// IE 11미지원
