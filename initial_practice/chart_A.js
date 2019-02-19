var data = [34, 53, 97, 133, 170, 223]; 

d3.select(".chart")
    .selectAll("div")
    .data(data)
        .enter()
        .append("div")
        .style("width", function(d) {return d * 2 + "px"; })
        .text(function(d) {return '$ ' + d;}); 
