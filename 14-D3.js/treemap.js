window.onload = function(){
    defineData();
    var object = createSVG();
    setBaseValue(object);
    showColor(object);
}

function defineData(){
    window.base = {};
    base.data = {
      name: '전국',
      children: [
        {
          name: '서울',
          clidren: [
            {name: 'a', value: 100},
            {name: 'b', value: 200},
            {name: 'c', value: 300},
            {name: 'd', value: 400},
          ]
        },
        {
          name: '부산',
          clidren: [
            {name: 'AA', value: 10},
            {name: 'BB', value: 600},
            {name: 'CC', value: 30},
            {name: 'DD', value: 800},
          ]
        },
      ]
    }
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

function showColor(object) {
  base.color = d3.scale.category20();
  var treemap = d3.layout.treemap()
                    .size([base.graphWidth, base.graphHeight]);

  var obj = object.append('g')
                    .selectAll('rect')
                    .data(treemap.nodes(base.data)); //

  obj.enter()
      .append('rect')
      .attr('x', function(data, idx) {
        return data.x;
      })
      .attr('y', function(data, idx) {
        return data.y;
      })
      .attr('dx', function(data, idx) {
        return data.dx;
      })
      .attr('dy', function(data, idx) {
        return data.dy;
      })
      .style('fill', function(data, idx) {
        return base.color(idx);
      })
      // text
      .attr('transform', function(data, idx) {
        return ['translate(', (data.x+data.dx/2), ', ', (data.y+data.dy/2), ')'].join('');
      })
      .text(function(data, idx) {
        if ((data.depth == 0) || data.children) {
          return null;
        }
        return data.name;
      })

}
