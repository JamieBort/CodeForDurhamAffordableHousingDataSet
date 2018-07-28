// from: https://scrimba.com/p/pb4WsX/cN8NmSm
// Percent change between 2010 and 2011 or 2017. The final column.

// javascript
// var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

// From: https://github.com/d3/d3-dsv#installing
// var string = "go away"

// var data = d3.csvParse(string);

// from: https://github.com/d3/d3-fetch
d3.text("./SourceFiles/nccountiespopprcchng1017.csv").then(function (text) {
    // console.log("hello!")
    // console.log(text); // Hello, world!
    var psv = d3.dsvFormat("|");
    var myData = psv.parse(text)
    // console.log(psv.parse(text)[0].Geography);
    // console.log(psv.parse("foo|bar\n1|2")); // [{foo: "1", bar: "2"}, columns: ["foo", "bar"]]
    // console.log(psv.parse(text[0].Geography));
    // console.log(myData[0].prcchng1516);
    console.log(myData);
    console.log(myData.length);





    // From: https://github.com/d3/d3-fetch
    // d3.csv("./SourceFiles/nccountiespopprcchng1017.csv").then(function(data) {

    //     // The below is no longer needed because I am spinning up a server with 'npm install -g http-server'.
    // // d3.csv("https://crossorigin.me./SourceFiles/nccountiespopprcchng1017.csv").then(function(data) {

    //     console.log("hello");
    // //  console.log(data); // [{"Hello": "world"}, …]
    // });


    var svgWidth = 1200, svgHeight = 300, barPadding = 2;
    // var svgWidth = 1200, svgHeight = 300, barPadding = 5;
    // var barWidth = svgWidth / data.length;
    // var barWidth = svgWidth/20;
    var barWidth = svgWidth / myData.length;
    var svg = d3.select('svg')
        .attr("width", svgWidth)
        .attr("height", svgHeight+25); // The '+25' extends the svgHeight below the bars.

    var yScale = d3.scaleLinear()
        .domain([0, d3.max(myData, function (d) { return +d.prcchng1617; })])
        // .domain([0, d3.max(dataset)])
        .range([0, svgHeight]);

    // var max = d3.max(data, function(d) { return +d.field_goal_attempts;} );

    var barChart = svg.selectAll("rect")
        // .data(data)
        .data(myData)
        .enter()
        .append("rect")
        .attr("y", function (d) {
            // console.log(svgHeight - d.prcchng1617);
            // console.log(svgHeight - yScale(d.prcchng1617));
            // return svgHeight - d.prcchng1617;
            return svgHeight - yScale(d.prcchng1617) + 25; // the '+25" shifts the bars down.
        })
        .attr("height", function (d) {
            //  console.log(d.prcchng1617);
            // return d.prcchng1617;
            return yScale(d.prcchng1617);
        })
        .attr("width", barWidth - barPadding)
        .attr("class", "bar")
        .attr("transform", function (d, i) {
            var translate = [barWidth * i, 0];
            return "translate(" + translate + ")";
        });

    var text = svg.selectAll("text")
        // .data(data)
        .data(myData)
        .enter()
        .append("text")
        // .text(function (d) {
        //     // console.log(d.prcchng1617.toFixed(2));
        //     // console.log(d.prcchng1617);
        //     return d.prcchng1617;
        //     // return d;
        // })



        // trying to round down to two decimal places.
        // .text(function toFixed(d, fixed) {
        //     var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
        //     console.log(d.prcchng1617.toString().match(re)[0]);
        //     return d.prcchng1617.toString().match(re)[0];
        // })



        // trying to round down to two decimal places.
        .text(function roundTo(d, digits) {
            var negative = false;
            if (digits === undefined) {
                digits = 0;
            }
            if (d.prcchng1617 < 0) {
                negative = true;
                d.prcchng1617 = d.prcchng1617 * -1;
            }
            var multiplicator = Math.pow(10, digits);
            d.prcchng1617 = parseFloat((d.prcchng1617 * multiplicator).toFixed(11));
            d.prcchng1617 = (Math.round(d.prcchng1617) / multiplicator).toFixed(2);
            if (negative) {
                d.prcchng1617 = (d.prcchng1617 * -1).toFixed(2);
            }
            return d.prcchng1617;
        })



        .attr("y", function (d, i) {
            // console.log(svgHeight - d.prcchng1617 - 2);
            // return svgHeight - d.prcchng1617;
            return svgHeight - d.prcchng1617 - 280; // Shifts the numbers up/down.
        })
        .attr("x", function (d, i) {
            return barWidth * i;
        })
        .attr("fill", "#A64C38");

});
