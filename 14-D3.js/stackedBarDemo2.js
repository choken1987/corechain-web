function defineData() {
  base = {};
  base.data = [
    {mon:1 , amt:950},
		{mon:2 , amt:550},
		{mon:3 , amt:450},
		{mon:4 , amt:350},
		{mon:5 , amt:250},
		{mon:6 , amt:150},
		{mon:7 , amt:180},
		{mon:8 , amt:250},
		{mon:9 , amt:350},
		{mon:10 , amt:450},
		{mon:11 , amt:550},
		{mon:12 , amt:850}
  ];

}

function createSVG() {
  return d3.select(document.body)
            .append('svg')
            .attr('id', 'stackedBar')
            ;
}

function setBaseValue(object) {
  // 데이터 최댓값을 100단위로 정의
  // 계산식을 사용해야 하지만 부가적인 사항이므로 값 할당
  base.maxAmount = 1000;

  //
  base.trbl = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 50,
  }

  //
  //
  base.svgWidth = parseInt(object.style('width'));
  base.grapgWith = base.svgWidth - base.trbl.left - base.trbl.right;

  //
  base.svgHeight = parseInt(object.style('height'));
  base.graphHeight = base.svgHeight - base.trbl.top - base.trbl.bottom;

}

function drawYaxis(object) {
  base.yScale = d3.scale.linear() //
                .domain([0, base.maxAmount]) // 범위 0~1,000
                .range([base.graphHeight, 0]) // 1000/400
                ;

  base.yAxis = d3.svg.axis() //
                .scale(base.yScale) //
                .orient('left') //
                ;

  object.append('g')
          .attr('class', 'axis')
          .attr('transform', 'translate('+base.trbl.left+', '+base.trbl.right+')')
          .call(base.yAxis) //
          ;
}

function drawXaxis(object) {
  base.xScale = d3.scale.ordinal()
                  .domain(base.data.map(function(obj){
                    return obj.mon;
                  }))
                  // .rangeRoundBands([0, base.graphWidth], 4) //
                  .rangeRoundBands([0, base.graphWidth], 0) //
                  ;

  // domain()에서 설정한 data 값 만큼 반복
  base.xAxis = d3.svg.axis() //
                .scale(base.xScale) //
                .orient('bottom') //
                ;

  object.append('g')
        .attr('class', 'axis')
        .attr('transform', 'translate('+base.trbl.left+', '+(base.svgHeight - base.trbl.bottom)+')')
        .call(base.xAxis)
        ;
}

function drawBar(obejct) {

};
