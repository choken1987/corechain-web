window.onload = function(){
    defineData();
    var object = createSVG();
    setBaseValue(object);
    // drawYaxis(object);
    // drawXaxis(object);
    drawHistogram(object);
}

function defineData(){
    window.base = {};
    base.data = [
      1, 3, 5, 7, 9,
      11, 20,
      21, 30,
      21, 30,
      31, 40,
      31, 35,
      41, 50
    ];
};

function createSVG(){
    return d3.select(document.body)
                .append('svg')
                .attr('id', 'idsvg');
}

function setBaseValue(object){
    base.maxAmount = 1000;
    base.trbl = {top: 20, right: 20, bottom: 30, left: 50};
    base.svgWidth = parseInt(object.style('width'));
    base.graphWidth = base.svgWidth - base.trbl.left - base.trbl.right;
    base.svgHeight = parseInt(object.style('height')),
    base.graphHeight = base.svgHeight - base.trbl.top - base.trbl.bottom;
};

function drawYaxis(object){
    base.yScale = d3.scale.linear()
                        .domain([0, 300]) //
                        .range([base.graphHeight, 0]);

    base.yAxis = d3.svg.axis()
                        .scale(base.yScale)
                        .orient("left");

    object.append("g")
            .attr("transform", "translate(" + base.trbl.left + "," +
                                                      base.trbl.top + ")")
            .append("g")
            .attr("class", "axis")
            .call(base.yAxis);
}

function drawXaxis(object){
    base.xScale = d3.scale.ordinal()
                         .domain([0, 500]) //
                         .rangeRoundBands([0, base.graphWidth]);

    base.xAxis = d3.svg.axis()
                            .scale(base.xScale)
                            .orient("bottom");

    object.append("g")
            .attr("transform", "translate(" + base.trbl.left + "," +
                                    (base.svgHeight - base.trbl.bottom) + ")")
            .attr("class", "axis")
            .call(base.xAxis)
}

function drawScatter(object){
    base.color = d3.scale.category20();
    var obj = object.append('g')
                      .selectAll('circle')
                      .data(base.data)
                      .enter()
    obj.append('circle')
        .attr('cx', function(data) {
          return data[0] + base.trbl.left;
        })
        .attr('cy', function(data) {
          return base.graphHeight - data[1] + base.trbl.top;
        })
        .attr('r', 10)
        .style('fill', function(data, idx) {
          return base.color(idx)
        })
}

function drawGrid(object) {
  var rangeX = d3.range(0, 500, 50); //
  var rangeY = d3.range(0, 300, 50); //

  object.append('g')
          .selectAll('.gridx') //
          .data(rangeX) //
          .enter()
          .append('line')
          .attr('class', 'gridx')
          .attr('x1', function(data, idx) {
            return data + base.trbl.left + 50;
          })
          .attr('y1', base.trbl.top) //
          .attr('x2', function(data, idx) {
            return data + base.trbl.left + 50;
          })
          .attr('y2', base.graphHeight + base.trbl.top) //
          ;

  // TODO
  // object.append('g')
  //         .selectAll('.gridy')
  //         .data(rangeY)
  //         .enter()
  //         .append('path')
  //         .attr('d', 'M 100 100 L 200 200')
  //         .attr('stroke', 'black')
  //         ;
}

function drawHistogram(object) {
  base.color = d3.scale.category10();
  var histogram = d3.layout.histogram()
                            .range([1, 50])
                            .bins(5)
                            ;
  var max = d3.max(histogram(base.data), function(data,idx) {
    return data.y;
  })
  base.yScale = d3.scale.linear()
                          .domain([0, max])
                          .range([base.graphHeight, 0])
  base.xScale = d3.scale.linear()
                          .domain([0, 50])
                          .range([0, base.graphWidth])
  var obj = object.append('g')
                    .selectAll('rect')
                    .data(histogram(base.data)) //
                    .enter()

  obj.append('rect')
    .attr('x', function(data, idx) {
      return base.xScale(data.dx) * idx + base.trbl.left;
    })
    .attr('y', function(data, idx) {
      return base.yScale(data.y) + base.trbl.top;
    })
    .attr('width', function(data, idx) {
      return base.xScale(data.dx) - 2;
    })
    .attr('height', function(data, idx) {
      return base.graphHeight - base.yScale(data.y);
    })
    .style('fill', function(data, idx) {
      return base.color(idx);
    })

}
