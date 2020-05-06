//
let w =1080;
let h = 900;
let yPadding = 100;
let xPadding = 80;
// let xpadding = 100;
// let ypadding = 50;
let generalviz = d3.select("#generalcontainer")
.append("svg")
  .style("width", w)
  .style("height", h)
  .attr("fill","none")

;

// let circle1 = generalviz
// .append("circle")
// .attr("fill","blue")
// .attr("r",200);
let vizGroup1=generalviz
.append("rect")
.attr("width",1480)
.attr("height",875)
;

///////////////////////////////////////////////////
let relationshipviz = d3.select("#relationshipcontainer")
  .append("svg")
    .style("width", w)
    .style("height", h)
    .attr("fill","none")

;

// let circle2 = relationshipviz
// .append("circle")
// .attr("fill","blue")
// .attr("r",200);
let vizGroup2=relationshipviz
.append("rect")
.attr("width",1480)
.attr("height",875)
;
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
.attr("fill","none")
.attr("opacity",0.8)
let text3 = fandomviz
.append("text")
.text("DataVializationPart3")
.attr("x",300)
.attr("y",100)
.attr("fill","black");


let deathviz = d3.select("#deathcontainer")
  .append("svg")
    .style("width", 1940)
    .style("height",1050)
    .attr("fill","black")

;

// let circle4 = deathviz
// .append("circle")
// .attr("fill","blue")
// .attr("r",200);
let vizGroup4=deathviz
.append("rect")
.attr("width",1940)
.attr("height",1050)
.attr("fill","none")
.attr("opacity",0.8)
// let text4 = deathviz
// .append("text")
// .text("DataVializationPart4")
// .attr("x",300)
// .attr("y",100)
// .attr("fill","white");




function gotData(incomingData){

function mapFunction(d,i){
  d.words = Number(d.words.replace(/,/gi, ""));
  return d;
}


  let enhancedData = incomingData.map(mapFunction);
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
        let yScale = d3.scaleLinear().domain(wordsExtent).range([h-yPadding, yPadding])
let colorScale = d3.scaleLinear().domain(timeExtent).range(["white","#abbaab"]);
// console.log(colorScale(timeParseFunction("01 Feb 2018")));

let xAxisGroup = generalviz.append("g").attr("class", 'xaxis');
let yAxisGroup = generalviz.append("g").attr("class", 'yaxis');





  /////////////////visulize generaldata
function shortAxis(enhancedData){


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

}
shortAxis();

let datagroups1 = generalviz.selectAll(".generaldatagroup").data(incomingData).enter()
   .append("g")
   .attr("class","generaldatagroups")

       ;


       function wholefiction(){
       let circles = datagroups1
          .append("circle")
          .attr("fill","white")
          .attr("r",0.8)
          ;
          function getGroupPosition(d,i){
          let x= xScale(timeParseFunction(d.time));
          let y= yScale(d.words);
            return "translate("+x+","+y+")"
          };
            datagroups1.attr("transform",getGroupPosition);

        }

// wholefiction();

// function shortViz(enhancedData){
//   function randomPosition(d,i){
//
//     if(d.words<200000){
//       let x = Math.random()*500;
//       let y=  Math.random()*700+100;
//       return "translate("+x+","+y+")"
//
//     }else if(d.words>=200000,d.words<1000000){
//       let x = Math.random()*200+600;
//       let y=  Math.random()*200+300;
//       return "translate("+x+","+y+")"
//
//     }else{
//       let x = Math.random()*25+650;
//       let y=  Math.random()*25+650;
//       return "translate("+x+","+y+")"
//     }
//   };
//   function colorh(d,i){
//
//     if(d.words<200000){
//
//       return "white";
//
//     }else if (d.words>=200000,d.words<1000000){
//
//       return "#F1F2B5";
//
//     }else{
//       return "#12fff7";
//     }
//   };
//
//
//
//       // circles.transition().duration(1000).attr("fill",colorh);
//       let textshort = generalviz
//       .append("text")
//       .text("Short Story")
//       .attr("fill","white")
//       .attr("x",550)
//       .attr("y",115)
//       ;
//       let midshort = generalviz
//       .append("text")
//       .text("Novella")
//       .attr("fill","white")
//       .attr("x",850)
//       .attr("y",515)
//       ;
//       let longshort = generalviz
//       .append("text")
//       .text("Novel")
//       .attr("fill","white")
//       .attr("x",850)
//       .attr("y",690)
//       ;
//       datagroups1.transition().duration(1000).attr("transform",randomPosition);
// };
/////////////





enterView({
	selector: '.enter',
	enter: function(el) {
		// shortViz();
    // xAxisGroup.remove();
    // yAxisGroup.remove();
	},
	exit: function(el) {
    console.log('a special element exited');
	},
	progress: function(el, progress) {
    console.log("the special element's progress is:", progress);
    // shortViz();
	},
	// offset: 0.5, // enter at middle of viewport
	once: true, // trigger just once
});
enterView({
	selector: '.smaller',
	enter: function(el) {
	},
	exit: function(el) {
    console.log('a special element exited');

	},
	progress: function(el, progress) {
    console.log("the special element's progress is:", progress);
	},
	// offset: 0.5, // enter at middle of viewport
	// once: true, // trigger just once
});



///////////////


let data ={Mm:110791,Fm:76646,Ff:14770,Gen:48063,Other:19829}
let pie= d3.pie()
.value(function(data){
  return data.value;
})
let dataready = pie(d3.entries(data));
console.log(dataready);
let piecolorScale= d3.scaleLinear()
	.domain([0,110791])
	.range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c"])

let arcGenerator=d3.arc()
.innerRadius(100)
.outerRadius(200);


let arcOver=d3.arc()
.innerRadius(125)
.outerRadius(230);
let datagroups2 = relationshipviz.selectAll(".relationdatagroup").data(dataready).enter()
   .append("g")
   .attr("class","relationdatagroups")
   .on("mouseover", function(d){
        d3.select(this).select("path")
        .transition()
        .attr("fill","#d0743c")
        .attr("d",arcOver)

        ;// console.log("hi");


        let outerArc = d3.arc()
          .innerRadius(250)
          .outerRadius(250)
        let lines = datagroups2

          .append('polyline')
            .attr("stroke", "white")
            .style("fill", "none")
            .attr("stroke-width", 1)
            .attr('points', function(d) {
              let posA = arcGenerator.centroid(d) // line insertion in the slice
              let posB = outerArc.centroid(d) // line break: we use the other arc generator that has been built only for that
              let posC = outerArc.centroid(d); // Label position = almost the same as posB
              let midangle = d.startAngle + (d.endAngle - d.startAngle) / 2 // we need the angle to see if the X position will be at the extreme right or extreme left
              posC[0] = 260 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
              return [posA, posB, posC]
            })



          let texts = datagroups2
          .append("text")
          .attr("fill","white")
          .text(function(d){return d.data.key})
          .attr('transform', function(d) {
        let pos = outerArc.centroid(d);
        let midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
        pos[0] = 270 * (midangle < Math.PI ? 1 : -1);
        return 'translate(' + pos + ')';
    })
    .style('text-anchor', function(d) {
        let midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
        return (midangle < Math.PI ? 'start' : 'end')

   })

      })

  ;



  let piechart = datagroups2
  .append("path")
  .attr("d",arcGenerator)
  .attr("fill",function(d){return piecolorScale(d.data.value)})
  .attr("stroke","grey")




;
// let outerArc = d3.arc()
//   .innerRadius(250)
//   .outerRadius(250)
// let lines = datagroups2
//
//   .append('polyline')
//     .attr("stroke", "white")
//     .style("fill", "none")
//     .attr("stroke-width", 1)
//     .attr('points', function(d) {
//       let posA = arcGenerator.centroid(d) // line insertion in the slice
//       let posB = outerArc.centroid(d) // line break: we use the other arc generator that has been built only for that
//       let posC = outerArc.centroid(d); // Label position = almost the same as posB
//       let midangle = d.startAngle + (d.endAngle - d.startAngle) / 2 // we need the angle to see if the X position will be at the extreme right or extreme left
//       posC[0] = 260 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
//       return [posA, posB, posC]
//     })


//   ;
//   let pietext = datagroups2
//   .append("text")
//   .text(function(d){return d.data.key})
//   .attr("transform",function(d){return"translate("+arcGenerator.centroid(d)+")";})
//   .style("text-anchor","middle")
//   .style("font-size",17);
datagroups2.attr("transform","translate(250,230)");







let datamm = {DracoMalfoyHarryPotter: 36227,SiriusBlackRemusLupin:14451,HarryPotterSeverusSnape:10403,HarryPotterTomRiddle:3405,other:46305}

let piemm= d3.pie()
.value(function(datamm){
  return datamm.value;
})
let datareadymm = pie(d3.entries(datamm));


let datagroupsmm2 = relationshipviz.selectAll(".relationdatammgroup").data(datareadymm).enter()
   .append("g")
   .attr("class","relationdatammgroups")
   .on("mouseover", function(d){
        d3.select(this).select("path")
        .transition()
        .attr("fill","#6b486b")
          .attr("d",arcOverfm)

        ;// console.log("hi");
   })



  ;



  let piechartmm = datagroupsmm2
  .append("path")
  .attr("d",arcGenerator)
  .attr("fill","white")
  .attr("stroke","grey")

  .attr("opacity",0.2)
  .attr("d",d3.arc()
  .innerRadius(50)
  .outerRadius(100))
  .transition()
  .duration(2000)
  .attr("opacity",0.8)

  ;
  let pietextmm = datagroupsmm2
  .append("text")
  .text(function(d){return d.data.key})
  .attr("transform",function(d){return"translate("+arcGenerator.centroid(d)+")";})
  .style("text-anchor","middle")
  .style("font-size",17);
datagroupsmm2.attr("transform","translate(250,795)");


let datafm = {DracoMalfoyHarryPotter: 36227,SiriusBlackRemusLupin:14451,HarryPotterSeverusSnape:10403,HarryPotterTomRiddle:3405,other:46305}

let piefm= d3.pie()
.value(function(datafm){
  return datafm.value;
})
let datareadyfm = pie(d3.entries(datafm));
let arcOverfm=d3.arc()
.innerRadius(75)
.outerRadius(150);

let datagroupsfm2 = relationshipviz.selectAll(".relationdatafmgroup").data(datareadyfm).enter()
   .append("g")
   .attr("class","relationdatafmgroups")
   .on("mouseover", function(d){
        d3.select(this).select("path")
        .transition()
        .attr("fill","#6b486b")
        .attr("d",arcOverfm)
        ;// console.log("hi");
   })

  ;



  let piechartfm = datagroupsfm2
  .append("path")
  .attr("d",arcGenerator)
  .attr("fill","white")
  .attr("stroke","grey")
  .attr("d",d3.arc()
  .innerRadius(50)
  .outerRadius(100))
  .attr("opacity",0.8)
  .on("mouseover", function(d){
       // d3.select(this).select("path")
       // .transition()
       // .attr("d",arcOver);
       console.log("hi");

  })

 ;

  ;
  let pietextfm = datagroupsfm2
  .append("text")
  .text(function(d){return d.data.key})
  .attr("transform",function(d){return"translate("+arcGenerator.centroid(d)+")";})
  .style("text-anchor","middle")
  .style("font-size",17);
datagroupsfm2.attr("transform","translate(750,630)");
let dataff = {DracoMalfoyHarryPotter: 36227,SiriusBlackRemusLupin:14451,HarryPotterSeverusSnape:10403,HarryPotterTomRiddle:3405,other:46305}

let pieff= d3.pie()
.value(function(dataff){
  return dataff.value;
})
let datareadyff = pie(d3.entries(dataff));


let datagroupsff2 = relationshipviz.selectAll(".relationdataffgroup").data(datareadyff).enter()
   .append("g")
   .attr("class","relationdataffgroups")
   .on("mouseover", function(d){
        d3.select(this).select("path")
        .transition()
        .attr("fill","#6b486b")
        .attr("d",arcOverfm)
        ;// console.log("hi");
   })



  ;



  let piechartff = datagroupsff2
  .append("path")
  .attr("d",arcGenerator)
  .attr("fill","white")
  .attr("stroke","grey")

  .attr("opacity",0.2)
  .attr("d",d3.arc()
  .innerRadius(50)
  .outerRadius(100))
  .transition()
  .duration(2000)
  .attr("opacity",0.8)

  ;
  let pietextff = datagroupsff2
  .append("text")
  .text(function(d){return d.data.key})
  .attr("transform",function(d){return"translate("+arcGenerator.centroid(d)+")";})
  .style("text-anchor","middle")
  .style("font-size",17);
datagroupsff2.attr("transform","translate(815,230)");



//////////////////////
function showfandom(d,i){
  console.log(d.fandom);
}
let nodes = [{name:"1",x:20,y:30},{name:"2",x:238,y:120},{name:"3",x:253,y:175},{name:"4",x:60,y:80},{name:"5",x:20,y:200},];

let circleScale =d3.scaleLinear().domain(wordsExtent).range([0.5,4])
let datagroups3 = fandomviz.selectAll(".fandomdatagroup").data(incomingData.slice(0,10000)).enter()
   .append("g")
   .attr("class","fandomdatagroups")

function drawviz(){
  let newData = incomingData.slice(0,10000)
  console.log(newData);
  let fandomcircle = datagroups3
  .append("circle")
  .attr("r",function(d){
    return circleScale(d.words);
  })
  .attr("cx",function(d,i){return 50})
  .attr("cy",function(d,i){return 50})
  .attr("fill","#eef2f3")
  .attr("class","fandomcircle")
  ;
  let simulation = d3.forceSimulation(newData)
    .force('forceX', d3.forceX(w/2))
      .force('forceY', d3.forceY(h/2))
      .force("collide",d3.forceCollide(5))

    .on('tick', stimulationRan);

  function stimulationRan() {

    fandomviz.selectAll(".fandomcircle")
    .attr("cx",function(d){return d.x})
    .attr("cy",function(d){return d.y})
    .transition()
    .attr("opacity",0.7);



  }};
  enterView({
  	selector: '.enter0',
  	enter: function(el) {
      // drawviz();
  	},
  	exit: function(el) {
      console.log('a special element exited');

  	},
  	progress: function(el, progress) {
      console.log("the special element's progress is:", progress);
  	},
  	// offset: 0.5, // enter at middle of viewport
  	// once: true, // trigger just once
  });

  // drawviz();
// document.getElementById("buttonA").addEventListener("click", drawviz);
  let fandomviz1datagroups = fandomviz.selectAll(".fandomviz1datagroup").data(incomingData.slice(0,58)).enter()
     .append("g")
     .attr("class","fandomviz1datagroups")
  function fandom1viz(){



    let newData1 = incomingData.slice(0,58);
    incomingData =incomingData.map(function(datapoint){
      datapoint.x = w/2;
      datapoint.y = h/2;
      return datapoint;
    })
    console.log(newData1);
    let fandomcircle = fandomviz1datagroups
    .append("circle")
    .attr("r",function(d){
      return circleScale(d.words);
    })
    .attr("cx",function(d,i){return 50})
    .attr("cy",function(d,i){return 50})
    .attr("fill","#748B84")
    .attr("class","fandomcircle1")
    ;

    let simulation = d3.forceSimulation(newData1)
      .force('forceX', d3.forceX(w/8))
        .force('forceY', d3.forceY(h/8))
        .force("collide",d3.forceCollide(4))

      .on('tick', stimulationRan);

    function stimulationRan() {

      fandomviz.selectAll(".fandomcircle1")
      .attr("cx",function(d){return d.x})
      .attr("cy",function(d){return d.y})
    ;



    }


}
enterView({
  selector: '.enter1',
  enter: function(el) {
    // fandom1viz();
  },
  exit: function(el) {
    console.log('a special element exited');

  },
  progress: function(el, progress) {
    console.log("the special element's progress is:", progress);
  },
  // offset: 0.5, // enter at middle of viewport
  // once: true, // trigger just once
});

// fandom1viz();
// document.getElementById("button1").addEventListener("click", fandom1viz);
let fandomviz2datagroups = fandomviz.selectAll(".fandomviz2datagroup").data(incomingData.slice(58,122)).enter()
   .append("g")
   .attr("class","fandomviz2datagroups")
function fandom2viz(){



  let newData2 = incomingData.slice(58,122)
  console.log(newData2);
  let fandomcircle = fandomviz2datagroups
  .append("circle")
  .attr("r",function(d){
    return circleScale(d.words);
  })
  .attr("cx",function(d,i){return 50})
  .attr("cy",function(d,i){return 50})
  .attr("fill","#40797C")
  .attr("class","fandomcircle2")
  ;
  let simulation = d3.forceSimulation(newData2)
    .force('forceX', d3.forceX(w*7/8))
      .force('forceY', d3.forceY(h/8))
      .force("collide",d3.forceCollide(4))

    .on('tick', stimulationRan);

  function stimulationRan() {

    fandomviz.selectAll(".fandomcircle2")
    .attr("cx",function(d){return d.x})
    .attr("cy",function(d){return d.y})



  }


}
enterView({
  selector: '.enter2',
  enter: function(el) {
    // fandom2viz();
  },
  exit: function(el) {
    console.log('a special element exited');

  },
  progress: function(el, progress) {
    console.log("the special element's progress is:", progress);
  },
  // offset: 0.5, // enter at middle of viewport
  // once: true, // trigger just once
});
// fandom2viz();
// document.getElementById("button2").addEventListener("click", fandom2viz);

let fandomviz3datagroups = fandomviz.selectAll(".fandomviz3datagroup").data(incomingData.slice(122,185)).enter()
   .append("g")
   .attr("class","fandomviz3datagroups")
function fandom3viz(){



  let newData3 = incomingData.slice(122,185)
  console.log(newData3);
  let fandomcircle = fandomviz3datagroups
  .append("circle")
  .attr("r",function(d){
    return circleScale(d.words);
  })
  .attr("cx",function(d,i){return 50})
  .attr("cy",function(d,i){return 50})
  .attr("fill","#D98F76")
  .attr("class","fandomcircle3")
  ;
  let simulation = d3.forceSimulation(newData3)
    .force('forceX', d3.forceX(w/8))
      .force('forceY', d3.forceY(h*7/8))
      .force("collide",d3.forceCollide(4))

    .on('tick', stimulationRan);

  function stimulationRan() {

    fandomviz.selectAll(".fandomcircle3")
    .attr("cx",function(d){return d.x})
    .attr("cy",function(d){return d.y})
  ;



  }


}
enterView({
  selector: '.enter3',
  enter: function(el) {
    // fandom3viz();
  },
  exit: function(el) {
    console.log('a special element exited');

  },
  progress: function(el, progress) {
    console.log("the special element's progress is:", progress);
  },
  // offset: 0.5, // enter at middle of viewport
  // once: true, // trigger just once
});
// fandom3viz();
//
// document.getElementById("button3").addEventListener("click", fandom3viz);
let fandomviz4datagroups = fandomviz.selectAll(".fandomviz4datagroup").data(incomingData.slice(185,257)).enter()
   .append("g")
   .attr("class","fandomviz4datagroups")
function fandom4viz(){



  let newData4 = incomingData.slice(185,257)
  console.log(newData4);
  let fandomcircle = fandomviz4datagroups
  .append("circle")
  .attr("r",function(d){
    return circleScale(d.words);
  })
  .attr("cx",function(d,i){return 50})
  .attr("cy",function(d,i){return 50})
  .attr("fill","#DD6944")
  .attr("class","fandomcircle3")
  ;
  let simulation = d3.forceSimulation(newData4)
    .force('forceX', d3.forceX(w*7/8))
      .force('forceY', d3.forceY(h*7/8))
      .force("collide",d3.forceCollide(4))

    .on('tick', stimulationRan);

  function stimulationRan() {

    fandomviz.selectAll(".fandomcircle4")
    .attr("cx",function(d){return d.x})
    .attr("cy",function(d){return d.y})



  }


}
enterView({
  selector: '.enter4',
  enter: function(el) {
    // fandom4viz();
  },
  exit: function(el) {
    console.log('a special element exited');

  },
  progress: function(el, progress) {
    console.log("the special element's progress is:", progress);
  },
  // offset: 0.5, // enter at middle of viewport
  // once: true, // trigger just once
});









///////////////////


// let texttime = deathviz
// .append("text")
// .text("DataVializationPart4")
// .attr("x",w/2)
// .attr("y",h/2)
// .attr("fill","white");
let datagroups4 = deathviz.selectAll(".deathdatagroup").data(incomingData).enter()
   .append("g")
   .attr("class","deathdatagroups")
function randomPosition(){
  let x = Math.random()*1940;
  let y = Math.random()*1050;
  return  "translate("+x+","+y+")"
}



// let deathcircle = datagroups4
//    .append("circle")
//
//    .attr("r",0.3)
//    .attr("opacity",0.9)
//    .attr("fill","white");
// datagroups4.attr("transform",randomPosition);
let deathData = [{name:"Hedwig",time:1997,text:"hhhh",death:"ipipi"},{name:"Dobby",time:1998,},{name:"Sirius Black",time:1996},{name:"Albus Dumbledore",time:1997},{name:"Lily Potter",time:1981},{name:"James Potter",time:1981},
{name:"Cedric Diggory",time:1995},{name:"Fred Weasley",time:1998},{name:"Remus Lupin",time:1998},{name:"Severus Snape",time:1998},{name:"Nymohadora Tonks",time:1998},{name:"Alstor Moody",time:1997},{name:"Ariana Dumbledore",time:1899},
{name:"Alastor Moody",time:1997},{name:"Ariana Dumbledore",time:1899},{name:"Lavender Brown",time:1998},{name:"Regulue Black",time:1979},{name:"Myrtle Warren",time:1943},{name:"Florean Fortescue",time:1996},{name:"Tom riddle aka Lord Voldemnory",time:1998}]
// let textname = d3.select(".textcontent")
// .append("text")
//
// .text("hkjhkjhkjhkjhkjh")
// // .attr("x",30)
// // .attr("y",30)
// .attr("fill","black")
// // .attr("x",w/2)
// // .attr("y",h/2)
//
// ;


function mouseover(enhancedData){
  d3.select(this)
  .transition()
  .attr("fill","blue")
}
function deathrandomPosition(){
  let x = Math.random()*900+1040;
  let y = Math.random()*1000+25;
  return  "translate("+x+","+y+")"
}
let datagroups5 = deathviz.selectAll(".datagroup5").data(deathData).enter()
    .append("g")
      .attr("class", "datagroup5")
      .on("mouseover",function(d,i){
        datagroups5.filter(function(deathData){
          if(deathData==d){
            return false
          }else{
            return true
          }
        })
        .select("circle")
        .transition()
        .attr("r",5)
        .attr("opacity",0.2);

        console.log("hi")
        //
        document.getElementById("textcontent").innerHTML="jytcjuytcjuycjyoaishdosifhosijoiajiooijoijoaisjdoijsd";

      })
    .on("mouseout",function(d,i){
      datagroups5.select("circle").attr("r",10).attr("opacity",1);
    })

  ;
  datagroups5.append("circle")
    .attr("r", 10)
    .attr("fill","white")
    .attr("opacity", 0.5)
  ;

datagroups5.attr("transform",deathrandomPosition)



}
d3.json("fanfiction.json").then(gotData);
