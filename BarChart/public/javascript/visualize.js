var data = [];
var generateNumbers = function () {
    for(var i=0;i<10;i++){
        data.push(Math.floor(Math.random() * 100));
    }
};
generateNumbers();

var loadChart = function () {
    var bar = d3.select('.container').selectAll('div')
        .data(data, function (d) {
            return d
        });
    var color = d3.scaleLinear().domain([-1,100]).range("");

        bar.enter()
        .append('div')
        .style('width', function (d) { return d * 5 + "px"; })
        .attr('class', 'bar-chart')
        .style('background', function (d) {return color(d) })
        .text(function (d) { return d; });

    bar.exit().remove();
};

var update = function () {
    setInterval(function () {
        data.shift();
        data.push(Math.floor(Math.random() * 100));
        loadChart();
    }, 1000)

};
window.onload = update;