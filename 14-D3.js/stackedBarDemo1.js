window.onload = function() {

  // d3 instance 반환; chainning

  // append
  // attr
  d3.select('.helloD3')
  .append('svg')
  .attr('id', 'helloD3')
  .attr('width', 150)
  .attr('height', 100)
  .style({
    position: 'absolute',
    top: '200px',
    left: '100px',
    border: '1px solid black',
  });

  // select id; #
  var createRect = function() {
    d3.select('#helloD3')
    .append('rect')
    .attr({
      x: 10,
      y: 10,
      width: 100,
      height: 50,
      stroke: 'blue',
      fill: 'lime',
      "stroke-width": 5,
      rx: 5,
      ry: 5,
    });
  };
  createRect();

  // select
  // selectAll
  var selectAll = function() {
    var node = document.querySelector('em');
    console.log(node.nodeName);
    var d3node = d3.select('em');
    console.log(Array.isArray(d3node));
    var d3nodes = d3.selectAll('em'); // d3nodes[0]으로 select 됨

    var el = d3node[0];
    console.log(el[0].nodeName);
    // debugger;

    // 2번째 파라미터
    // node.attr('stroke-width', function() {
    //   return 5;
    // });
  };
  // selectAll();

  // append

  // style

  // ctest1
  var ctest1 = function() {
    d3.select('#idsvg')
      .append('path')

      .attr({
        stroke: 'blue',
        fill: 'lime',
        "stroke-width": 5,
      });
  };
  // ctest1();

  // data(); selection 인스턴스에서 사용할 데이터 지정; data([12, 34, 56])
  // enter(); 데이터를 설정하고 반복 처리를 위한 환경 설정

  // data();
  var createCircle3 = function() {
    var acumY = 0, circleData = [30, 40, 50];
    var dataObj = d3.select('#d3')
                .selectAll('circle')
                // 인스턴스에 data 설정 환경 작성
                // 데이터를 설정하지 않음
                .data(circleData); //
    // data()와 enter()결과를 보기 위해 코드를 분리

    // 데이터를 설정하고 반복처리를 위한 환경 설정
    var obj = dataObj.enter(); //
    debugger;

    // circleData.length 만큼 반복 수행
    obj.append('circle')
      .attr({cx: 100, fill: 'blue'})
      .attr('cy', function(value, index) {
        acumY = acumY + value;
        if (index > 0) {
          // acumY = acumY = circleData[index+1];
          // acumY = acumY + circleData[index+1];
          acumY = acumY + circleData[index-1];
        }
        console.log(acumY);
        return acumY;
      })
      .attr('r', function(value, index) {
        console.log(value);
        return value;
      });
  };
  // createCircle3();

  // create
  var createSvg = function() {
    d3.select(document.body)
      .append('svg')
      .attr('id', 'd3')
      .attr('width', '100%')
      .attr('height', '500')
      ;
  };
  createSvg();

  var object = d3.select(document.body)
                  .append('svg')
                  .attr('id', 'd3')
                  // .attr('width', 200)
                  // .attr('height', 300)
                  .attr('width', 670)
                  .attr('height', 450)
                  ;

  // draw bar
  var drawBar = function(object) {

    var salesData = [
      900
      , 800
      , 700
      , 600
      , 500
      , 400
      , 300
      , 200
      , 100
      , 100
      , 100
      , 100
    ];

    var barWidth = 600 / salesData.length - 20;
    var posList = [];
    var obj = object.append('g')
                .attr('class', 'bar')
                .selectAll('rect')
                .data(salesData);

    // 데이터를 하나씩 읽어가면서 rect를 그린다
    obj.enter()
      .append('rect')
      // .attr('transeform', 'transelate(50, 20)') // 오타
      .attr('transform', 'translate(50, 20)')
      .attr('width', barWidth)
      .attr('height', function(value, index) {
        // 세로축 높이가 400px
            // 데이터가 700이면 280px이 된다.
        posList.push(Math.round(400 * value / 1000));
        return posList[index];
      })
      .attr('x', function(value, index) {
        // 첫번째 x 좌표는 10이며 공간을 띄운다.
        // 두 번째는 (30*1) + (20*1) + 10의 결과인 60이 된다.
        return (barWidth * index) + (20 * index) + 10;
      })
      .attr('y', function(value, index) {
        return 400 - posList[index];
      });

    //

  };
  drawBar(object);

  // draw; 축
  var drawXYLine = function(object) {
    // 가로축과 세로축 선을 긋는 좌표 값
    var axisValue = [{x: 50, y:20}, {x: 50, y:420}, {x: 650, y: 420}];
    var line = d3.svg.line()
                .x(function(value) {return value.x})
                .y(function(value) {return value.y})
                ;

    object.append('g')
      .attr('class', 'axis')
      .append('path')
      .attr('d', line(axisValue))
      ;

  };
  drawXYLine(object);

  // draw; Y축; 눈금자, 금액
  var drawYAxis = function(object) {

    var yScale = d3.scale.linear() //
                  .domain([0, 1000]) // 범위 0~1,000
                  .range([400, 0]) // 1000/400
                  ;

    var yAxis = d3.svg.axis() //
                  .scale(yScale) //
                  .orient('left') //
                  ;

    object.append('g')
            .attr('class', 'axis')
            .attr('transform', 'translate(50, 20)')
            .call(yAxis) //
            ;
  };
  drawYAxis(object);

  // draw; X축; 눈금자, 월
  var drawXAxis = function(object) {
    var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    // ...
    var xScale = d3.scale.ordinal() //
                    .rangeRoundBands([0, 600], 0) //
                    ;
    xScale.domain(data.map(function(value) {return value})); // Array.map()

    // domain()에서 설정한 data 값 만큼 반복
    var xAxis = d3.svg.axis() //
                  .scale(xScale) //
                  .orient('bottom') //
                  ;

    object.append('g')
          .attr('class', 'axis')
          .attr('transform', 'translate(50, 420)')
          .call(xAxis)
          ;

  };
  drawXAxis(object);

}
