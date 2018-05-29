$(document).ready(

    function () {
        var xvals = [0,1,2,3];
        var yvals = [1,2,3,4];
        getData();



        function getData(){
            $.get("a", {}, function(data){
                var jsonObj = JSON.parse(data);
                var keys = [];
                for(var k in jsonObj) keys.push(k);
                xvals = keys;
                var values = [];
                values.sort();
                for(var k in jsonObj) values.push(jsonObj[k]);
                yvals = values;
                var trace1 = {
                    x: xvals,
                    y: yvals,
                    mode: 'markers'
                };
                var data1 = [trace1];
                Plotly.newPlot('myDiv', data1);
            })}


    }

);