

//
let w =1480;
let h = 5000;
// let xpadding = 100;
// let ypadding = 50;
let viz = d3.select("#container")
  .append("svg")
    .style("width", w)
    .style("height", h)

;
let vizGroup1 = viz
.append("rect")
.attr("width",w)
.attr("height",875)
.attr("fill","white")
.attr("class","viz1")
.attr("opacity",0.5)
.attr("y",875)
;
let text1 = viz
.append("text")
.text("DataVializationPart1")
.attr("x",650)
.attr("y",1000)


;
let vizGroup2 = viz
.append("rect")
.attr("width",w)
.attr("height",875)
.attr("fill","black")
.attr("class","viz2")
.attr("y",1750)
.attr("opacity",0.5)

;
let text2 = viz
.append("text")
.text("DataVializationPart2")
.attr("x",650)
.attr("y",1875)
.attr("fill","white")
let vizGroup3 = viz
.append("rect")
.attr("width",w)
.attr("height",875)
.attr("fill","grey")
.attr("class","viz4")
.attr("y",2550)
.attr("opacity",0.5)

;
let text3 = viz
.append("text")
.text("DataVializationPart3")
.attr("x",650)
.attr("y",2750)
.attr("fill","white")
let vizGroup4 = viz
.append("rect")
.attr("width",w)
.attr("height",875)
.attr("fill","white")
.attr("class","viz4")
.attr("y",3425)
.attr("opacity",0.5)

;
let text4 = viz
.append("text")
.text("DataVializationPart4")
.attr("x",650)
.attr("y",3555)
.attr("fill","white")




function gotData(incomingData){

}
