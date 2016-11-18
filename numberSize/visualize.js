var scaleFont = d3.scaleLinear()
    .domain([0, 10])
    .range(['italic bold 12px/30px sans-serif', 'italic bold 120px/180px sans-serif']);

var createChart = function () {
    var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var chart = d3.select('.container').selectAll('div')
        .data(number);

    chart.enter()
        .append('div')
        .style('font', function (d) { return scaleFont(d) + 'px'})
        .text(function (d) { return d})
        .classed('block', true);
};

window.onload = createChart;