function makeplot() {
    Plotly.d3.csv("https://raw.githubusercontent.com/hyunsy1214/plotly.js/master/owid-co2-data.csv",function(data){processData(data)});
};

function processData(allRows){

    console.log(allRows);
    var x=[], y=[];

    for (var i=8821; i<8993; i++) {
    row = allRows[i];
    x.push(row['year']);
    y.push(row['co2']);
}
console.log('X',x,'Y',y);
makePlotly(x,y);
}

function makePlotly(x,y){
var plotDiv = document.getElementById("plot");
var traces = [{
    x: x,
    y: y
}];

Plotly.newPlot('myDiv', traces, {title: 'China CO2'});
};
makeplot();