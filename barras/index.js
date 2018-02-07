var numbers = [300, 286, 68, 281, 30, 65];

function update() {
    var selection = d3.select("#chart")
        .selectAll(".bar").data(numbers, function(d) {
            return d;
        })

    selection.enter()
        .append("div").attr("class", "bar")
        .style("width", function (d) {
            return d + "px";
        })
        .style("margin-top", function (d) {
            return 10 + "px";
        })
        .style("height", "15px")
        .style("color", "yellow")
        .text(function(d, i) {
            return ( i+1 ) + ". $" + d
        })
        .on("click", function (e, i) {
            numbers.splice(numbers.indexOf(e), 1);
            update();
        })
        .on("mouseover", function(){
            d3.select(this).style("background", "yellow");
            d3.select(this).style("color", "red");
        })
        .on("mouseout", function(){
            d3.select(this).style("background", "steelblue");
            d3.select(this).style("color", "yellow");
        })
        .style("opacity", 0)
        .transition()
        .duration(1000)
        .style("opacity", 1);
    selection.exit().transition()
    .duration(300)
    .style("opacity", 0).remove();
};

update();

var reset = function () {
    numbers = [100, 62, 368, 81, 130, 365];
    update();
}