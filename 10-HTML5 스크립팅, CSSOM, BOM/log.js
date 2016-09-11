var js = {lineNumber: 1};
js.log = function(text){
    var k, node, child, lineText;

    node = document.getElementById('result');
    if (!node){
        node = document.createElement('div');
        node.id = 'result';
        document.body.appendChild(node);
    }
    child = document.createElement('div');

    lineText = js.lineNumber + '. ';
    if (Array.isArray(text)){
        lineText += '[';
        for (k = 0; k < text.length; k++){
            if (Array.isArray(text[k])){
                lineText += '[';
            }
            lineText += text[k] === '' ? '"' : text[k];
            if (Array.isArray(text[k])){
                lineText += ']';
            }
            if (k < (text.length - 1)){
                lineText += ', ';
            }
        }
        lineText += ']';
    } else {
        lineText += text;
    }

    if (arguments.length > 1){
        for (var k = 1; k < arguments.length; k++){
            lineText += arguments[k];
        }
    }
    child.innerText === undefined ? child.textContent = lineText 
                                             : child.innerText = lineText;
    node.appendChild(child);
    js.lineNumber += 1;
    return this;
};

/**
 * @method nodes
 *   파라미터로 노드 리스트를 받아 엘리먼트의 속성 값을 출력한다.
 * @param {NodeList} nodes, 출력 대상 노드 리스트
 * @param {String} text, 출력 명칭
 */
js.nodes = function(nodes, text){
    for (var k = 0; k < nodes.length; k++){
        js.log(text || '', nodes[k].id);
    }
}