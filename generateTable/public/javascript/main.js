// var appendRow =function (scale, value) {
//     var row = d3.select('tbody').append('tr')
//     row.append('td').text(value);
//     row.selectAll('td').data(headingRow, function (d) {
//         return d;
//     }).enter().append('td').text(function (d) {
//         return scale(d);
//     })
// }

// var createTable = function () {
//     var table = d3.select('body').append('table')
//     var tbody = table.append('tbody')
//     var log = function log (d) {
//         return d3.scaleLog().toFixed(2)


//     }
//     appendRow((d3.scaleLinear(), 'title'))
//     appendRow((d3.scaleLinear(), 'n'))
//     appendRow((d3.scaleLinear().exponent(2), 'squire'))
//     appendRow(log, 'log(n)')
//     appendRow((d3.scaleLinear().rangeRound([0, 2]), 'rounded log(n)'))
// }

// window.onload = createTable;


