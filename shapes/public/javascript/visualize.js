var createChart = function () {

    var svg = d3.select('body').append('svg')
        .attr('width', 600)
        .attr('height', 100)
        .attr("class", "svg")

    svg.append('line')
        .attr('x1', 10)
        .attr('y1', 100)
        .attr('x2', 110)
        .attr('y2', 0)
        .attr('class', 'line');

    svg.append('circle')
        .attr('cx', 210)
        .attr('cy', 50)
        .attr('r', 50)
        .attr('class', 'circle');

    svg.append('rect')
        .attr('x', 310)
        .attr('y', 0)
        .attr('width', 100)
        .attr('height', 100)
        .attr('class', 'rect');

    svg.append('polygon')
        .attr('points','460,100 510,0 560,100')
        .attr('class', 'triangle');
};

window.onload = createChart;
