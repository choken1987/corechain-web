window.graph = {};

graph.initGrpah = function(){
    // svg 엘리먼트를 생성한다.
    graph.object = graph.createSVG();
    
    // 그래프 표현을 위한 기본 값 설정.
    graph.setBaseValue();

    // Y축에 선, 눈금자, 간격을 표시한다.
    graph.drawYaxis();

    // x축에 선, 눈금자, 간격을 표시한다.
    graph.drawXaxis();
}
//-------------------------------
// svg 엘리먼트를 생성한다.
graph.createSVG = function(){
    graph.data = [];

    return d3.select(document.body)
                .append('svg')
                .attr('id', 'idsvg');
}
//-------------------------------
// 그래프를 표현하기 위한 기본 값을 설정한다.
graph.setBaseValue = function(){
    // 데이터 최댓값을 100단위로 정의
    // 계산식을 사용해야 하지만 부가적인 사항이므로 값 할당
    graph.maxValue = 50;

    // width, height, top, right, bottom, left 값을 설정한다.
    graph.trbl = {top: 20, right: 20, bottom: 30, left: 50};

    graph.svgWidth = 670;
    graph.graphWidth = 600;
    graph.svgHeight = 450;
    graph.graphHeight = 400;
};
//-------------------------------
// Y축에 선, 눈금자, 금액을 표시한다.
graph.drawYaxis = function(){
    graph.yScale = d3.scale.linear()
                        .domain([0, graph.maxValue])
                        .range([graph.graphHeight, 0]);

    graph.yAxis = d3.svg.axis()
                        .scale(graph.yScale)
                        .orient("left");

    graph.object.append("g")
            .attr("transform", "translate(" + graph.trbl.left + "," + 
                            graph.trbl.top + ")")
            .append("g")
            .attr("class", "axis")
            .call(graph.yAxis);
}
//-------------------------------
// x축에 선, 눈금자, 간격을 표시한다.
graph.drawXaxis = function(){
    graph.xScale = d3.scale.linear()
                        .domain([01, 30])
                        .range([0, graph.graphWidth]);

    graph.xAxis = d3.svg.axis()
                            .scale(graph.xScale)
                            .orient("bottom");

    graph.object.append("g")
            .attr("transform", "translate(" + graph.trbl.left + "," + 
                                    (graph.svgHeight - graph.trbl.bottom) + ")")
            .attr("class", "axis")
            .call(graph.xAxis)
}
//-------------------------------
// graph를 표시한다.
graph.drawBar = function(value){
    // 존재하는 값 끝에 파라미터 value를 추가한다.    
    if (graph.data.length === 30){
        graph.data.shift();
    }
    graph.data.push(value);

    var dataNode = document.getElementById('barGroup');
    if (dataNode){
        dataNode.remove();
    }
    var acumX = -20;

    var obj = graph.object.append('g')
        .attr("class", "bar")
        .attr("id", "barGroup")
        .attr("transform", "translate(" + graph.trbl.left + ", " + graph.trbl.top  + ")")

        .selectAll('rect')
        .data(graph.data);

    obj.enter()
        .append('rect')
        .attr("x", function(obj){
            acumX = acumX + 20;
            return acumX;
        })
        .attr("width", 15)
        .attr("y", function(value){
            return graph.yScale(value);
        })
        .attr("height", function(value){
            return graph.graphHeight - graph.yScale(value);
        })

    return value;
}
