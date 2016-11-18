const WIDTH = 400;
const HEIGHT = 400;
const MARGIN = 30;

var sinValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var xScale = d3.scaleLinear()
    .domain([0, 10])
    .range([0, HEIGHT - (2 * MARGIN)]);

var yScale = d3.scaleLinear()
    .domain([0, 1])
    .range([HEIGHT - (2 * MARGIN), 0]);

var translate = function (x, y) {
    return "translate(" + x + "," + y + ")";
};

var generateCircles = function (getCXValue, getCYValue, data, container) {
    container.append('g').selectAll('circle').data(data)
        .enter().append('circle')
        .attr('r', 4)
        .attr('cx', getCXValue)
        .attr('cy', getCYValue);
};

var generateLines = function (getCXValue, getCYValue, data, container) {
    var line = d3.line()
        .x(getCXValue)
        .y(getCYValue);

    container.append("path")
        .attr("d", line(data))
        .classed('line-path', true);
};

var loadChart = function () {
    var svg = d3.select('.container').append('svg')
        .attr('width', WIDTH)
        .attr('height', HEIGHT);

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

    var area = d3.area()
        .x(getCXValue)
        .y0(HEIGHT-(2*MARGIN))
        .y1(getSinCYValue);

    g.append("path")
        .attr("d", area(sinValue))
        .classed('area', true);

    generateCircles(getCXValue, getSinCYValue, sinValue, g);

};

var getCXValue = function (q) {
    return xScale(q );
};

var getSinCYValue = function (x) {
    return yScale(((3*(Math.sin(x)))+5)/10);
};
window.onload = loadChart;