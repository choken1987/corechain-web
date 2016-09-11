window.onload = function(){
    defineData();
    var object = createSVG();
    // setBaseValue(object);
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

function defineData() {
  window.base = {};
  base.data = {
    name:"전국",
    children:[
      {name:"서울",
        children:[
          {name:"중구" , value:150},
          {name:"종로구" , value:550},
          {name:"강남구" , value:440},
          {name:"양천구" , value:250}
        ]
      },
      {name:"수원",
        children:[
          {name:"영통구" , value:150},
          {name:"메탄구" , value:250},
          {name:"그냥구" , value:434},
          {name:"모르는구" , value:90}
        ]
      }
    ]
  }
}

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
  var pack = d3.layout.pack()
                    .size([base.graphWidth, base.graphHeight]);

  var obj = object.append('g')
                    .selectAll('circle')
                    .data(pack.nodes(base.data)); //

  obj.enter()
      .append('circle')
      .attr('cx', function(data, idx) {
        return data.cx;
      })
      .attr('cy', function(data, idx) {
        return data.cy;
      })
      .attr('r', function(data, idx) {
        return data.r;
      })
      .style('fill', function(data, idx) {
        return base.color(idx);
      })

}
