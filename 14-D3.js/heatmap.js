window.onload = function(){
    defineData();
    var object = createSVG();
    setBaseValue(object);
    showColor(object);
}

function defineData(){
    window.base = {};
    base.data = [
      100, 300, 500, 700, 600, 400
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

function showColor(object) {
  // var rgbColor = d3.interpolate('red', 'blue');
  var rgbColor = d3.interpolateRgb('red', 'blue');
  base.data = [];
  for (var i = 0; i < 1; i+=0.1) {
    // base.data.push(rgbColor[i]);
    base.data.push(rgbColor(i));
  }
  var obj = object.append('g')
                    .selectAll('rect')
                    .data(base.data)
                    .enter()
                    ;
  obj.append('rect')
      .attr('x', function(data, idx) {
        return idx * 70;
      })
      .attr('y', base.trbl.top)
      .attr('width', 70)
      .attr('height', 50)
      .attr('fill', function(data) {
        var rgb = d3.rgb(data);
        return ['rgb(', rgb.r, ', ', rgb.b, ', ', rgb.b, ')'].join('');
      })

  // object.append('g')
  //         .append('text')
  //         .attr('y', base.trbl.top *3)



}
