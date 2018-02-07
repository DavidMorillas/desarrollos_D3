var number1 = [10, 20, 30, 40, 50, 60, 70, 80]
var c10 = d3.scaleOrdinal(d3.schemeCategory10);
var c20 = d3.scaleOrdinal(d3.schemeCategory20c);

function drawCircle(){
    var circles = d3.select("#test")
    .attr("width", 800)
    .attr("height", 800)
    .select("#circles")
    .selectAll("circle")
    .data(number1);
    circles.enter()
    .append("circle")
    .attr("cx", function(d){
        return d * 4;
    })
    .attr("cy", function(d){
        return d * 4;
    })
    .attr("r", function(d){
        return d;
    })
    // .style("fill", function(d, i){
    //     return i % 2 ? "blue" : "grey";
    // })
    .style("fill", c20)
    .on("mouseover", function(d, i){
        d3.select(this).style("opacity", 0.3);
    })
    .on("click", function(d, i){
        alert("Circulo #: " + (i + 1))
    })
    .on("mouseout", function(d, i){
        d3.select(this).style("opacity", 1);
    })
    .text(function(d){
        return d;
    })
    .attr("stroke", "black")
    .attr("stroke-width", "3");
    
    circles.exit().remove();
}
function drawRects(){
    var rects = d3.select("#test")
    .attr("width", 800)
    .attr("height", 800)
    .select("#rects")
    .selectAll("rect")
    .data(number1);
    rects.enter()
    .append("rect")
    .attr("width", function(d) {
        return d * 2;
    })
    .attr("height", function(d) {
        return d * 2;
    })
    .attr("y", function(d){
        return 500 - (d * 4);
    })
    .attr("x", function(d){
        return d * 4;
    })
    // .style("fill", function(d, i){
    //     return i % 2 ? "yellow" : "red";
    // })
    .style("fill", c10)
    .attr("stroke", "black")
    .attr("stroke-width", "3")
    .on("click", function(d, i){
        alert("Rectangulo #: " + (i + 1))
    })
    .on("mouseover", function(d, i){
        d3.select(this).style("opacity", 0.3);
    })
    .on("mouseout", function(d, i){
        d3.select(this).style("opacity", 1);
    });
    rects.exit().remove();
}

d3.select("body").append("button")
.attr("onclick", "addCircle()")
.text("Agregar Figuras")
d3.select("body")
.append("button")
.attr("onclick", "removeCircle()")
.text("Quitar Figuras")


drawCircle();
drawRects();

var addCircle = function() {
    number1.push( number1[number1.length-1] + 10);
    drawCircle();
    drawRects();
}
var removeCircle = function() {
    number1.splice(number1.length - 1, 1)
    drawCircle();
    drawRects();
}