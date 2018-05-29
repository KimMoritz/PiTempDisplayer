$(document).ready(

    function () {
        var xvals = [];
        var yvals = [];
        getData();
        getLatestTemperatures()

        function getData(){
            $.get("getData", {}, function(data){
                var jsonObj = JSON.parse(data);
                var keys = [];
                for(var k in jsonObj) keys.push(k);
                xvals = keys;
                var values = [];
                for(var k in jsonObj) values.push(jsonObj[k]);
                yvals = values;
                plotData('myDiv1')
            })}


        function getLatestTemperatures(){
            $.get("getLatestTemperatures", {}, function(data){
                var jsonObj = JSON.parse(data);
                var keys = [];
                for(var k in jsonObj) keys.push(k);
                xvals = keys;
                var values = [];
                for(var k in jsonObj) values.push(jsonObj[k]);
                yvals = values;
                plotData('myDiv2')
            })}

        function plotData(div) {
            var trace1 = {
                x: xvals,
                y: yvals,
                mode: 'markers'
            };
            var data1 = [trace1];
            Plotly.newPlot(div, data1);
        }

    }

);