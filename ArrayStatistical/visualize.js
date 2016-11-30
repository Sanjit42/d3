var quantileValue, set ;
var massage = "Please Enter value";
var quantileMassage = "Please Enter quantile value";

var showUserValue =function(div, data){
    d3.select(div).html("");
    var elementDiv = d3.select(div).append('div');
    elementDiv.append('span')
        .text(data.title);

    elementDiv.append('span')
        .text(data.method);
};

var sortByMethod=function (methodName, method) {
    if( set =='' || !set){
        alert(massage)
        d3.select('.container').html("");
    }else {
        showUserValue('.container',{title:  methodName+' of numbers : ', method: method(set)});
    }
};

var sortByQuantile=function () {
    if(!quantileValue){
        alert(quantileMassage)
    }else {
        showUserValue('.container',{title: 'Quantile of number : ', method: d3.quantile(set,quantileValue)});
    }
};

var dataStore = function() {
    var inputValues = (document.getElementById('numberValue').value).split(',');
    set = inputValues.filter(function (d) { return d;});
    if (set == '') {
        alert(massage);
        d3.select('.value').html("");
    } else{
        d3.select('.value').html("");
        showUserValue('.value', {title:  'Entered numbers are :  ', method:  set});
    }
    document.getElementById("numberValue").value = '';
};

var quantile = function(){
    quantileValue = (document.getElementById('quantileValue').value).split(',')[0];
    if( quantileValue!=""){
        d3.select('.quantileValue').html("");
        showUserValue('.quantileValue', {title: 'Entered quantile value is :  ', method: quantileValue});
    }else {
        alert(quantileMassage);
        d3.select('.quantileValue').html("");
    }
    document.getElementById("quantileValue").value = '';
};

var reset = function () {
    history.go(0);
};
