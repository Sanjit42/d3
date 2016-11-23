const P_QUANTILE = 0.6;

var calculateValue =function(data){
        var elementDiv = d3.select('.container').append('div');
        elementDiv.append('span').attr('class','title').text(data.title);
        elementDiv.append('span').attr('class','value').text(data.method);
};

var sortByMin=function () {
    return calculateValue({title:'Min of numbers :-', method:d3.min(set)});
};
var sortByMax=function () {
    return calculateValue({title:'Max of numbers :-', method:d3.max(set)});
};
var sortBySum=function () {
    return calculateValue({title:'Sum Of Numbers :-', method:d3.sum(set)});
};
var sortByMean=function () {
    return calculateValue({title:'Mean Of Numbers :-', method:d3.mean(set)});
};
var sortByExtent=function () {
    return calculateValue({title:'Extent of numbers :-', method:d3.extent(set)});
};
var sortByMedian=function () {
    return calculateValue({title:'Median of numbers :-', method:d3.median(set)});
};
var sortByQuantile=function () {
    return calculateValue({title:'Quantile of 6th number :-', method:d3.quantile(set,P_QUANTILE)});
};
var sortByVariance=function () {
    return calculateValue({title:'Variance of numbers :-', method:d3.variance(set)});
};
var sortByDeviation=function () {
    return calculateValue({title:'Deviation of numbers :-', method:d3.deviation(set)});
};

var dataStore = function(){
    var values = (document.getElementById('numberValue').value).split(' ');
    set = values.map((function (d) { return d}));
    calculateValue({title:'Entered numbers are :- ', method:set});
};