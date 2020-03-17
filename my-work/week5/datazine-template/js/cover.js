let w = 1200;
let h = 800;

let viz = d3.select("#container")
  .append("svg")
    .attr("class", "viz")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "#e3d6c5")
;



function gotData(incomingData){
}
d3.json("data.json").then(gotData);
