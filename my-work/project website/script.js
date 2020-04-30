

//
let w =1480;
let h = 875;
let yPadding = 50;
let xPadding = 130;
// let xpadding = 100;
// let ypadding = 50;
let generalviz = d3.select("#generalcontainer")
.append("svg")
  .style("width", w)
  .style("height", h)

;

// let circle1 = generalviz
// .append("circle")
// .attr("fill","blue")
// .attr("r",200);
let vizGroup1=generalviz
.append("rect")
.attr("width",1480)
.attr("height",875)
.attr("fill","none");
// .attr("fill","darkblue")
// .attr("opacity",0.4);

// let text1 = generalviz
// .append("text")
// .text("DataVializationPart1:the background color is only used for distinguish")
// .attr("x",300)
// .attr("y",100)
// .attr("fill","white")


///////////////////////////////////////////////////
let relationshipviz = d3.select("#relationshipcontainer")
  .append("svg")
    .style("width", w)
    .style("height", h)

;

let circle2 = relationshipviz
.append("circle")
.attr("fill","blue")
.attr("r",200);
let vizGroup2=relationshipviz
.append("rect")
.attr("width",1480)
.attr("height",875)
.attr("fill","black")
.attr("opacity",0.8)
let text2 = relationshipviz
.append("text")
.text("DataVializationPart2")
.attr("x",300)
.attr("y",100)
.attr("fill","white");




let fandomviz = d3.select("#fandomcontainer")
  .append("svg")
    .style("width", w)
    .style("height", h)

;

let circle3 = fandomviz
.append("circle")
.attr("fill","blue")
.attr("r",200);
let vizGroup3=fandomviz
.append("rect")
.attr("width",1480)
.attr("height",875)
.attr("fill","#304352")
.attr("opacity",0.8)
let text3 = fandomviz
.append("text")
.text("DataVializationPart3")
.attr("x",300)
.attr("y",100)
.attr("fill","black");


let deathviz = d3.select("#deathcontainer")
  .append("svg")
    .style("width", w)
    .style("height", h)

;

let circle4 = deathviz
.append("circle")
.attr("fill","blue")
.attr("r",200);
let vizGroup4=deathviz
.append("rect")
.attr("width",1480)
.attr("height",875)
.attr("fill","black")
.attr("opacity",0.8)
let text4 = deathviz
.append("text")
.text("DataVializationPart4")
.attr("x",300)
.attr("y",100)
.attr("fill","white");




function gotData(incomingData){

function mapFunction(d,i){
  d.words = Number(d.words.replace(/,/gi, ""));
  return d;
}

function filterFunction(d,i){
  let str = d.words;
  let res = Number(str.replace(/,/gi, ""));
  if( res < 300000 ){
    return true;
  }else{
    return false;
  }
}
  //get filter and map data
  let enhancedData = incomingData.filter(filterFunction).map(mapFunction);
  //make xAxis
  let timeParseFunction = d3.timeParse("%d %b %Y");
  console.log(timeParseFunction("01 Feb 2018"));
  let timeExtent=d3.extent(incomingData,function(d,i){
    return timeParseFunction(d.time);
  })
    console.log(incomingData);

  let wordsExtent = d3.extent(incomingData, function(d, i){
    return d.words;
  });
      console.log("wordsExtent", wordsExtent);
      console.log("timeExtent", timeExtent);
        let xScale = d3.scaleLinear().domain(timeExtent).range([xPadding, w-xPadding]);

      let xAxisGroup = generalviz.append("g").attr("class", 'xaxis');
      let xAxis = d3.axisBottom(xScale);
      xAxisGroup.call(xAxis)
      xAxisGroup.attr("transform", "translate(0, "+ (h-yPadding) +")")
      .style("color","white");
      xAxisGroup.append("g").attr('class', 'xLabel')
    .attr("transform", "translate("+w/2+", 40)")
    .append("text")
    .attr("fill", "white")
    .text("PUBLISHED YEAR")
    .attr("font-family", "sans-serif")
    .attr("font-size", "1.7em")

  ;
//make yAxis
 let yScale = d3.scaleLinear().domain(wordsExtent).range([h-yPadding, yPadding])
 let yAxisGroup = generalviz.append("g").attr("class", 'yaxis');
 let yAxis = d3.axisLeft(yScale);
 yAxisGroup.call(yAxis)
 yAxisGroup.attr("transform", "translate("+xPadding+", 0)")
          .style("color","white");
          yAxisGroup.append("g").attr('class', 'xLabel')
    .attr("transform", "translate(-60, "+h/2+") rotate(-90)")
    .append("text")
    .attr("fill", "white")
    .text("WORDS COUNT")
    .attr("font-family", "sans-serif")
    .attr("font-size", "1.7em")

  ;
let colorScale = d3.scaleLinear().domain(timeExtent).range(["white","#abbaab"]);
console.log(colorScale(timeParseFunction("01 Feb 2018")));



  /////////////////visulize generaldata


    function getGroupPosition(d,i){
    let x= xScale(timeParseFunction(d.time));
    let y= yScale(d.words);
      return "translate("+x+","+y+")"
    };
   let datagroups1 = generalviz.selectAll(".generaldatagroup").data(incomingData).enter()
      .append("g")
      .attr("class","generaldatagroups")
          ;
   let circles = datagroups1
      .append("circle")
      .attr("fill",function(d,i){
      return colorScale(timeParseFunction(d.time));
      })
      .attr("r",0.8)
      ;
      datagroups1.attr("transform",getGroupPosition);





}
d3.json("fanfiction.json").then(gotData);
