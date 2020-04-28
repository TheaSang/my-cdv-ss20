

//
let w =1480;
let h = 875;
// let xpadding = 100;
// let ypadding = 50;
let generalviz = d3.select("#generalcontainer")
.append("svg")
  .style("width", w)
  .style("height", h)

;

let circle1 = generalviz
.append("circle")
.attr("fill","blue")
.attr("r",200);
let vizGroup1=generalviz
.append("rect")
.attr("width",1480)
.attr("height",875)
.attr("fill","darkblue")
.attr("opacity",0.4)
let text1 = generalviz
.append("text")
.text("DataVializationPart1:the background color is only used for distinguish")
.attr("x",300)
.attr("y",100)
.attr("fill","white")

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

}
