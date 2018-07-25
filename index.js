// from: https://scrimba.com/p/pb4WsX/cN8NmSm
// Percent change between 2010 and 2011 or 2017. The final column.

// javascript
// var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];
var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

var dataset2 = [

Alamance County	North Carolina,6.93388180379455
Brunswick County	North Carolina,17.92707243099536
Buncombe County	North Carolina,7.487762366705875
Cabarrus County	North Carolina,13.951138868479063
Chatham County	North Carolina,11.147022610252966
Currituck County	North Carolina,10.57308875469979
Dare County	North Carolina,6.036178287487193
Durham County	North Carolina,14.135861891926583
Forsyth County	North Carolina,6.816007653061229
Franklin County	North Carolina,8.38622899286664
Gaston County	North Carolina,6.401976546675026
Guilford County	North Carolina,7.315073640343639
Harnett County	North Carolina,13.616162224867045
Henderson County	North Carolina,7.750544474020815
Hoke County	North Carolina,13.238228989577937
Iredell County	North Carolina,9.261799204375365
Jackson County	North Carolina,6.287669001466034
Johnston County	North Carolina,14.14787400614108
Mecklenburg County	North Carolina,14.599145460269291
Moore County	North Carolina,9.270644842901799
New Hanover County	North Carolina,10.797190116110178
Onslow County	North Carolina,8.314379580490272
Orange County	North Carolina,7.689070412429455
Pender County	North Carolina,14.3393812132944
Pitt County	North Carolina,6.0846058466728525
Union County	North Carolina,12.99845266806704
Wake County	North Carolina,15.968058287469821
Watauga County	North Carolina,7.332958400609568


var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = svgWidth / dataset.length;
var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);
    
var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function(d) {
         return svgHeight - d 
    })
    .attr("height", function(d) { 
        return d; 
    })
    .attr("width", barWidth - barPadding)
    .attr("class", "bar")
    .attr("transform", function (d, i) {
        var translate = [barWidth * i, 0]; 
        return "translate("+ translate +")";
    });

var text = svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d) {
        return d;
    })
    .attr("y", function(d, i) {
        return svgHeight - d - 2;
    })
    .attr("x", function(d, i) {
        return barWidth * i;
    })
    .attr("fill", "#A64C38");
