const WIDTH = 500;
const HEIGHT = 500;
const RADIUS = Math.min(WIDTH, HEIGHT)/2;

var data = [1,1,2,2,1,2,1];

var color = d3.scaleOrdinal().range(["#1F77B4", "#AEC7E8", "#FF7F0E", "#FFBB78", "#2CA02C", "#98DF8A", "#D62728"]);

var loadChart = function () {
    var svg = d3.select('.container').append("svg")
        .attr("width", WIDTH)
        .attr("height", HEIGHT);

    var g = svg.append("g")
        .attr("transform", "translate(" + WIDTH /2 + "," + HEIGHT/2 + ")");

    var arc = d3.arc()
        .outerRadius(RADIUS)
        .innerRadius(120);

    var pie = d3.pie()
        .sort(null)
        .value(function (d) { return d})
        .startAngle(0)
        .endAngle(Math.PI);

    g.selectAll('path')
        .data(pie(data))
        .enter()
        .append('path')
        .attr("d", arc)
        .style('fill', function (d, i) {
            return color(i)
        })
};

window.onload = loadChart;