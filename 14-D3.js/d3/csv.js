window.onload = function(){
    defineData();
    var object = createSVG();
    setBaseValue(object);
    // drawYaxis(object);
    // drawXaxis(object);
    drawPie(object);
    // showTotal(object);
    // showLegend(object);
}

function defineData(){
    window.base = {};
    base.data = [
      // 100, 300, 500, 700, 600, 400
    ];
};

function createSVG(){
    return d3.select(document.body)
                .append('svg')
                .attr('id', 'idsvg');
}

function setBaseValue(object){
    base.maxAmount = 1000;
    base.trbl = {top: 20, right: 20, bottom: 20, left: 50};
    base.svgWidth = parseInt(object.style('width'));
    base.graphWidth = base.svgWidth - base.trbl.left - base.trbl.right;
    base.svgHeight = parseInt(object.style('height')),
    base.graphHeight = base.svgHeight - base.trbl.top - base.trbl.bottom;

    base.centerX = (base.svgWidth - 150) / 2;
    base.centerY = base.graphHeight / 2 + base.trbl.top;
    base.color = d3.scale.category10();

};

function drawPie(object) {

  if (true) {

    // d3.csv('csvdata.csv', function(error, data) {
    //   for (var i = 0; i < data.length; i++) {
    //     base.data.push(data[i].qty);
    //     base.legend.push(data[i].item);
    //   }
    // })

    // d3.csv('csvdatahangeul.csv')
    //   .row(function(data, idx) {
    //     return {
    //       item: data['품명'],
    //       qty: data['수량'],
    //     }
    //   })
    //   .get(function(error, data) {
    //     for (var i = 0; i < data.length; i++) {
    //       base.data.push(data[i].qty);
    //       base.legend.push(data[i].item);
    //     }
    //   })

    d3.text('csvdatanoheader.csv', function(error, data) {
      d3.csv.parseRows(data, function(d) {
        debugger;
        base.legend.push(d[0]);
        base.data.push(d[1]);
      })
    })
  }

  renderPie(object); // 그림
  showTotal(object); // 합계
  showLegend(object); // 범례

}

function renderPie(object) {
  //
  // var pie = d3.layout.pie();
  var pie = d3.layout.pie().sort(null);
  //
  var arc = d3.svg.arc()
                    //
                    // .innerRadius(0)
                    .innerRadius(60)
                    .outerRadius(base.graphHeight/2);
  var obj = object.selectAll('g')
                    .data(pie(base.data)) //
                    .enter()
                    .append('g')
                    .attr('transform', 'translate('+base.centerX+', '+base.centerY+')')
                    ;
  obj.append('path')
  .attr('class', 'pie')
  .attr('d', arc)
  .style('fill', function(data, idx) {
    return base.color(idx);
  })
  .attr('text-anchor', 'middle')
  .text(function(data) {
    return data.value;
  })
  ;
}

function showTotal(object) {
  object.append('g')
          .attr('transform', 'translate('+base.centerX+', '+base.centerY+')')
          .append('text')
          .attr({
            "font-size": 20,
            y: 10,
            "text-anchor": "middle"
          })
          .text('합계 : ' + d3.sum(base.data))
}

function showLegend(object) {
  base.legend = [];
  // base.legend.push('노트북');
  // base.legend.push('PC');
  // base.legend.push('스마트폰');
  // base.legend.push('마우스');
  // base.legend.push('키보드');
  // base.legend.push('하드');

  var xcoord = base.svgWidth - 130,
    ycoord = 100;

  // ...

  var obj = object.append('g')
                    .selectAll('g')
                    .data(base.legend)
                    .enter()
                    .append('g')
                    ;
  obj.append('rect')
    .attr({
      x: xcoord,
      width: 20,
      height: 20,
    })
    .style('fill', function(data, idx) {
      return ycoord + (30 * idx);
    })
    ;
  obj.append('text')
      .attr('x', function(data, idx) {
        return xcoord + 30;
      })
      .attr('y', function(data, idx) {
        return ycoord + (30 * idx) + 15;
      })
      .text(function(data, idx) {
        return base.legend[idx];
      })
}
