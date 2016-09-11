/* DOM 스크립팅 소스 코드 */

//
window.onload = function() {
/*
	for (var i = 0; i < data.length; i++) {
		js.log(data[i]);
	};
*/
	//

	var el = document.getElementsByTagName('input');
	nodes = document.getElementsByTagName('table');
	show(nodes);
	js.log(nodes);
	js.log(nodes.length);
	
	//
	var el = document.getElementById('checkNode');
	nodes = el.getElementsByTagName('input');
	show(nodes);
	function show(nodes){
		for (var i = 0; i < nodes.length; i++) {
			nodes[i].nodeName;
		};
	}

	//
	var el = document.createElement('div');
	js.log(el.nodeName.toLowerCase());

	// createTextNode()

	// createAttribute() - data-*
	var node = document.createAttribute("menoNode");
		node.nodeValue = "생성한 노드 속성";
	var el = document.getElementById("sports");
		el.setAttribute(node);

	js.log(el.getAttribute("memoNode"));

	/* importNode() */

	// 복제 or 잘라내기
	var iframeNode = document.getElementsByTagName("iframe").item(0);

	// iframe의
	// content
	var doc = iframeNode.contentDocument ||
				iframeNode.contentWindow.document
	//
	doc.body.innerHTML = "<ul id 'formNode'><li>복제 대상 노드</li></ul>";

	//
	var formNode = doc.getElementById("formNode");
	fromNode.firstElementChild.textContent;

	var importNode = doc.importNode(fromNode, true);
	var toNode		= document.getElementById("toNode");
	toNode.appendChild(importNode);

	/* adoptNode() // 잘라내기 */


	/* node */
	var el = document.getElementById("sports");
	js.log(el.nodeName);
	js.log(el.tagName);
	js.log(el.nodeType);
	js.log(el.nodeValue);
	js.log(el.textContent);
	for (var i = 0; i < el.classList.length; i++) {
		js.log('classList : ' + el.classList[i]);
	};

	/* NamedNodeMap */
	// 속성 노드 생성 및 속성 노드 추가
	var classAttr =document.createAttribute('class');
		classAttr.value = "sportsClass";
	el.attributes.setNameItem(classAttr);
	js.log(el.attributes.getNameItem("class").value); // sportsClass

	/* child */
	var sports = document.getElementById('sports');
		sprots.childElementCount; 	// 3
		sports.childNodes.length; 	// 7
		sprots.children.length; 	// 3
}

// data
var data = (function(){
	//
	var list = [];
	// list.push('0'); // dummy

	// 1
	list.push(document.URL);
	list.push(document.documentURI || window.location.href);
	list.push(document.origin);

	list.push(document.compatMode);
	list.push(document.charcaterSet || document.charcater);
	list.push(document.contentType);
	list.push(document.documentElement.nodeName);



	document.doctype // object DocumentType

	list.push(document.implementation);

	//
	list.push(document.getElementById('sports'));
	list.push(document.getElementById('check'));

	/* return */
	debugger;
	// return list[list.length-1];
	return list;
}());