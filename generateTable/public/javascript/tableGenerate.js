var data = [];

var generateData = function () {
    var valueOfN = ['n'];
    var logNValue = ['log n'];
    var valueOfNSquare = ['n Square'];
    var logNRoundedValue = ['rounded value of log n'];
    for (var i = 1 ; i<=10; i++){
        logNRoundedValue.push(Math.round(Math.log(i)));
        logNValue.push(Math.log(i));
        valueOfN.push(i);
        valueOfNSquare.push(i*i);
    }
    data.push(valueOfN, valueOfNSquare, logNValue,  logNRoundedValue)
};
generateData();

var columns = ['Title', 1,2,3,4,5,6,7,8,9,10];
var rows = [ 'n', 'n Square', 'log n', 'rounded value of log'];

var createRows = function () {
    d3.select('.container').selectAll('div')
        .data(rows)
        .enter()
        .append('div')
        .text(function (d) { return d});
};

var createTable = function () {

    var table = d3.select("body").append("table").attr("title", "Table");
    var thead = table.append("thead");
    var tbody = table.append("tbody");

    thead.append("tr")
        .selectAll("th")
        .data(columns)
        .enter()
        .append("th")
        .text(function ( d ) { return d; });

    var rows = tbody.selectAll("tr")
        .data(data)
        .enter()
        .append("tr").attr("title", function( d ){  return d[0]; });

    rows.selectAll("td")
        .data(function ( d ) { return d; })
        .enter()
        .append("td")
        .attr("class","bar")
        .text(function( d ) { return d; })
};

var onLoad = function () {
    createTable();
    // createRows();
}

window.onload = onLoad;