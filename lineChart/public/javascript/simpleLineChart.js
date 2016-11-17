const WIDTH = 400;
const HEIGHT = 400;
const MARGIN = 30;

var data = [{x: 0, y: 5}, {x: 1, y: 9}, {x: 2, y: 7}, {x: 3, y: 5}, {x: 4, y: 3}, {x: 6, y: 4}, {x: 7, y: 2}, { x: 8, y: 3}, {x: 9, y: 2}];

var translate = function (x, y) {
    return "translate(" + x + "," + y + ")";
};

var loadChart = function () {
    var svg = d3.select('.container').append('svg')
        .attr('width', WIDTH)
        .attr('height', HEIGHT);

    var xScale = d3.scaleLinear()
        .domain([0, 1])
        .range([0, HEIGHT - (2 * MARGIN)]);

    var yScale = d3.scaleLinear()
        .domain([0, 1])
        .range([HEIGHT - (2 * MARGIN), 0]);

    var xAxis = d3.axisBottom(xScale).ticks(10);
    var yAxis = d3.axisLeft(yScale).ticks(10);

    svg.append('g')
        .attr('transform', 'translate(' + MARGIN + ', ' + (HEIGHT - MARGIN) + ')')
        .call(xAxis);

    svg.append('g')
        .attr('transform', 'translate(' + (MARGIN) + ', ' + MARGIN + ')')
        .call(yAxis);

    var g = svg.append('g')
        .attr('transform', translate(MARGIN, MARGIN));

    var line = d3.line()
        .x(function (q) { return xScale(q.x/10) })
        .y(function (q) { return yScale(q.y/10) });

    var sine =  d3.line()
        .x(function (q) { return xScale(q.x/10 ) })
        .y(function (q) { return yScale(Math.sin(q.x)/10 +0.5 ) });

    g.append("path")
        .attr("d", line(data))
        .classed('line-path', true)
    ;
    g.append("path")
        .attr("d", sine(data))
        .classed('line-path', true);

};

window.onload = loadChart;