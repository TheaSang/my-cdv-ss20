// just some console.logging at the start to make
// sure the script runs and we have data (from dataManager.js)
console.log("\n\n\nWelcome!\n\n\n");
console.log("script runs.");
console.log("do we have data?");
// check if variable exists: https://stackoverflow.com/a/519157
console.log("data:", typeof data!=='undefined'?data:"nothing here");
console.log(typeof data!=='undefined'?"seems like it ;-) it comes from the dataManager.js script.":"...damnit! let's see what is going wrong in the dataManager.js script.");
let w = 800;
let h = 500;
let padding = 50;

// put the svg onto the page:
let viz = d3.select("#container")
  .append("svg")
    .style("width", w)
    .style("height", h)
;




let allNames = data.map(function(d){return d.key});
// check it:
console.log(allNames);

let xScale = d3.scaleBand()
    .domain(allNames)
    .range([padding, w-padding])
    .paddingInner(0.1)
;
// create a visual axis corresponding to the scale.
let xAxis = d3.axisBottom(xScale)
// this is a tricky one.... by default the axis would show the scales domain (the unique keys)
// ...in our case we want emojis to show. This situation hardly comes up,
// that's why I just wrote this one-liner for you:
xAxis.tickFormat(d=>{return data.filter(dd=>dd.key==d)[0].name;});
// create a group to hold all the axis elements
let xAxisGroup = viz.append("g").classed("xAxis", true);
// tell d3 to put the axis into place
xAxisGroup.call(xAxis);
// modfy the axis label (the emoojis) size
xAxisGroup.selectAll("text").attr("font-size", 24).attr("y", 9);
// get rid of the little tick lines
xAxisGroup.selectAll("line").remove();
// bring axis to the correct y position
xAxisGroup.attr("transform", "translate(0,"+ (h-padding) +")")


// Y SCALE
// we will not show a y axis in this graph, but still need a scale
// to make sure our bars have heights that fit the window. It's
// familiar linear scale.
let yMax = d3.max(data, function(d){return d.value});
// I decided not to use the minimum value of the dataset,
// because otherwise the smallest value's bar would always be 0 pixels
// high and therefore invisible.
yDomain = [0, yMax];
// "hey d3 i need a linear scale please. yeah! I want to supply a value
// to it that is between 0 and yMax and want one back that fits between
// my graph's paddings. Cheers!"
let yScale = d3.scaleLinear().domain(yDomain).range([0, h-padding*2]);

let graphGroup = viz.append("g").classed("graphGroup", true);

let elementsForPage = graphGroup.selectAll(".datapoint").data(data);

console.log("D3's assessment of whats needed on the page:", elementsForPage);


let enteringElements = elementsForPage.enter();
let exitingElements = elementsForPage.exit();
// and again, look closely:
console.log("enteringElements", enteringElements);
console.log("exitingElements", exitingElements);
let enteringDataGroups = enteringElements.append("g").classed("datapoint", true);
// position the group along the x axis (check the inspector tool to see
// what we are doing):
enteringDataGroups.attr("transform", function(d, i){
  return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
});
// then append rectangles to them and position/size them:
enteringDataGroups
  .append("rect")
    .attr("width", function(){
      // the scaleBand we are using
      // allows us to as how thick each band is:
      return xScale.bandwidth();
    })
    .attr("height", function(d, i){
      // the idea is that we make the bar
      // as high as dictated by the value...
      return yScale(d.value);
    })
    .attr("y", function(d,i){
      // ...and then push the bar up since it
      // is drawn from top to bottom
      return -yScale(d.value);
    })
    .attr("fill", "black")
;
function add(){
  addDatapoints(1);
  // we add new code below:
  console.log("new data", data)
  allNames = data.map(function(d){return d.key});
  // and adjust the domain of xScale:
  xScale.domain(allNames);
  xAxis = d3.axisBottom(xScale); //we adjust this because it uses the new xScale
  xAxis.tickFormat(d=>{return data.filter(dd=>dd.key==d)[0].name;}); // we adjust this because it uses the new data
  xAxisGroup.call(xAxis).selectAll("text").attr("font-size", 18); // we adjust this to bring the new axis onto the page

  // y scale...
  yMax = d3.max(data, function(d){return d.value});
  yDomain = [0, yMax+yMax*0.1];
  yScale.domain(yDomain);
  xAxisGroup.transition().call(xAxis).selectAll("text").attr("font-size", 18);
  // we add new code below:
console.log("new data", data)
elementsForPage = graphGroup.selectAll(".datapoint").data(data);
// note, we don't need "let" because the variable elementsForPage already exists
console.log(elementsForPage);
enteringElements = elementsForPage.enter();
// and the exiting ones like so:
exitingElements = elementsForPage.exit();
elementsForPage.transition().duration(1000).attr("transform", function(d, i){
  return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
});
elementsForPage.select("rect")

 .transition()
 .delay(1000)
 .duration(200)

 .attr("width", function(){
    return xScale.bandwidth();
 })
 .attr("y", function(d,i){
   return -yScale(d.value);
 })

 .attr("height", function(d, i){
   return yScale(d.value);
 })


;
let incomingDataGroups = enteringElements
  .append("g")
    .classed("datapoint", true)
;
// position the groups:
incomingDataGroups.attr("transform", function(d, i){
  return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
});
incomingDataGroups
  .append("rect")
    .attr("y", function(d,i){
      return 0;
    })
    .attr("height", function(d, i){
      return 0;
    })
    .attr("width", function(){
      return xScale.bandwidth();
    })
    .attr("fill", "#F27294")
    .transition()
    .delay(1200)
    .duration(2000)
    .attr("y", function(d,i){
      return -yScale(d.value);
    })
    .attr("height", function(d, i){
      return yScale(d.value);
    })
    .attr("fill", "black")
 ;

}
document.getElementById("buttonA").addEventListener("click", add);

function remove(){
  removeDatapoints(1);
  allNames = data.map(function(d){return d.key});
  xScale.domain(allNames);

  xAxis = d3.axisBottom(xScale); //we adjust this because it uses the new xScale
  xAxis.tickFormat(d=>{return data.filter(dd=>dd.key==d)[0].name;}); // we adjust this because it uses the new data
  xAxisGroup.call(xAxis).selectAll("text").attr("font-size", 18);

  yMax = d3.max(data, function(d){return d.value});
  yDomain = [0, yMax+yMax*0.1];
  yScale.domain(yDomain);

  xAxisGroup.transition().delay(2000).call(xAxis).selectAll("text").attr("font-size", 18);
  elementsForPage = graphGroup.selectAll(".datapoint").data(data);
  // enteringElements = elementsForPage.enter();
  exitingElements = elementsForPage.exit();
  exitingElements
  .transition()
  .duration(1000)
  .attr("fill", "#F27294")
  .attr("height",0)
  .remove();

//   elementsForPage.attr("transform", function(d, i){
//   return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
// });
  elementsForPage.transition().duration(1500).attr("transform", function(d, i){
  return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
});
 elementsForPage.select("rect")
 .transition()
 .delay(2000)
 .duration(2000)

 .attr("width", function(){
    return xScale.bandwidth();
 })
 .attr("y", function(d,i){
   return -yScale(d.value);
 })
 .attr("height", function(d, i){
   return yScale(d.value);
 })
;

}
document.getElementById("buttonB").addEventListener("click", remove);

function removeAndAdd(){
  removeAndAddDatapoints(3,3);
  allNames = data.map(function(d){return d.key});
  xScale.domain(allNames);

  xAxis = d3.axisBottom(xScale); //we adjust this because it uses the new xScale
  xAxis.tickFormat(d=>{return data.filter(dd=>dd.key==d)[0].name;}); // we adjust this because it uses the new data
  xAxisGroup.call(xAxis).selectAll("text").attr("font-size", 18);

  yMax = d3.max(data, function(d){return d.value});
  yDomain = [0, yMax+yMax*0.1];
  yScale.domain(yDomain);

  xAxisGroup.call(xAxis).selectAll("text").attr("font-size", 18);
  elementsForPage = graphGroup.selectAll(".datapoint").data(data);
  enteringElements = elementsForPage.enter();
  exitingElements = elementsForPage.exit();

  exitingElements
  // .transition()
  // .duration(1000)
  // .attr("fill", "#F27294")
  // .attr("height",0)
  .remove();
  elementsForPage.transition().duration(200).attr("transform", function(d, i){
    return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
  });
  elementsForPage.select("rect")
   .transition()
   .delay(1000)
   .duration(800)
   .attr("width", function(){
      return xScale.bandwidth();
   })
   .attr("y", function(d,i){
     return -yScale(d.value);
   })
   .attr("height", function(d, i){
     return yScale(d.value);
   })
  ;
  let incomingDataGroups = enteringElements
    .append("g")
      .classed("datapoint", true)
  ;
  // position the groups:
  incomingDataGroups.attr("transform", function(d, i){
    return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
  });
  incomingDataGroups
    .append("rect")
      .attr("y", function(d,i){
        return 0;
      })
      .attr("height", function(d, i){
        return 0;
      })
      .attr("width", function(){
        return xScale.bandwidth();
      })
      .attr("fill", "#F27294")
      .transition()
      .delay(2000)
      .duration(2000)
      .attr("y", function(d,i){
        return -yScale(d.value);
      })
      .attr("height", function(d, i){
        return yScale(d.value);
      })
      .attr("fill", "white")
   ;




}
document.getElementById("buttonC").addEventListener("click", removeAndAdd);

function sortData(){
  sortDatapoints();
  allNames = data.map(function(d){return d.key});
  xScale.domain(allNames);

  xAxis = d3.axisBottom(xScale); //we adjust this because it uses the new xScale
  xAxis.tickFormat(d=>{return data.filter(dd=>dd.key==d)[0].name;}); // we adjust this because it uses the new data
  xAxisGroup.call(xAxis).selectAll("text").attr("font-size", 18);

  yMax = d3.max(data, function(d){return d.value});
  yDomain = [0, yMax+yMax*0.1];
  yScale.domain(yDomain);

  xAxisGroup.call(xAxis).selectAll("text").attr("font-size", 18);
  elementsForPage = graphGroup.selectAll(".datapoint").data(data);

  elementsForPage.transition().duration(1000).attr("transform", function(d, i){
    return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
  });
  elementsForPage.select("rect")
   .transition()
   .delay(1000)
   .duration(200)
   .attr("width", function(){
      return xScale.bandwidth();
   })
   .attr("y", function(d,i){
     return -yScale(d.value);
   })
   .attr("height", function(d, i){
     return yScale(d.value);
   })
  ;
}
document.getElementById("buttonD").addEventListener("click", sortData);

function shuffleData(){
  shuffleDatapoints();
  allNames = data.map(function(d){return d.key});
  xScale.domain(allNames);

  xAxis = d3.axisBottom(xScale); //we adjust this because it uses the new xScale
  xAxis.tickFormat(d=>{return data.filter(dd=>dd.key==d)[0].name;}); // we adjust this because it uses the new data
  xAxisGroup.call(xAxis).selectAll("text").attr("font-size", 18);

  yMax = d3.max(data, function(d){return d.value});
  yDomain = [0, yMax+yMax*0.1];
  yScale.domain(yDomain);

  xAxisGroup.call(xAxis).selectAll("text").attr("font-size", 18);
  elementsForPage = graphGroup.selectAll(".datapoint").data(data);

  elementsForPage.transition().duration(1000).attr("transform", function(d, i){
    return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
  });
  elementsForPage.select("rect")
   .transition()
   .delay(1000)
   .duration(200)
   .attr("width", function(){
      return xScale.bandwidth();
   })
   .attr("y", function(d,i){
     return -yScale(d.value);
   })
   .attr("height", function(d, i){
     return yScale(d.value);
   })
  ;

}
document.getElementById("buttonE").addEventListener("click", shuffleData);
function changeColor(){
  sortDatapoints();
  allNames = data.map(function(d){return d.key});
  xScale.domain(allNames);

  xAxis = d3.axisBottom(xScale); //we adjust this because it uses the new xScale
  xAxis.tickFormat(d=>{return data.filter(dd=>dd.key==d)[0].name;}); // we adjust this because it uses the new data
  xAxisGroup.call(xAxis).selectAll("text").attr("font-size", 18);

  yMax = d3.max(data, function(d){return d.value});
  yMin = d3.min(data, function(d){return d.value});
  yDomain = [0, yMax+yMax*0.1];
  yScale.domain(yDomain);

  xAxisGroup.call(xAxis).selectAll("text").attr("font-size", 18);
  elementsForPage = graphGroup.selectAll(".datapoint").data(data);

  elementsForPage.transition().duration(1000).attr("transform", function(d, i){
    return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
  });

  let colorScale = d3.scaleLinear().domain([0,yMax]).range(["#F1F2B5","#135058"]);
  elementsForPage.select("rect")
  .attr("fill","black")
   .transition()

   .delay(1000)
   .duration(3000)
   .attr("width", function(){
      return xScale.bandwidth();
   })
   .attr("y", function(d,i){
     return -yScale(d.value);
   })
   .attr("height", function(d, i){
     return yScale(d.value);
   })
   .attr("fill", function(d,i){
     return colorScale(d.value);
   })
  ;


}
document.getElementById("buttonF").addEventListener("click", changeColor);
