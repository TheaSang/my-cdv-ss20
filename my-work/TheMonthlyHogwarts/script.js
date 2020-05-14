//
let w =1000;
let h = 900;
let yPadding = 180;
let xPadding = 120;
// let xpadding = 100;
// let ypadding = 50;


let covercontainer=d3.select(".covercontainer")
.append("svg")
  .style("width", 1900)
  .style("height", 875)
  .attr("fill","none")

;


let generalviz = d3.select("#generalcontainer")
.append("svg")
  .style("width", 1000)
  .style("height", h)
  .attr("x",xPadding)
  .attr("y",yPadding)
  .attr("fill","none")
  .attr("class","biggeneral")
  ;
let generalviz2 = d3.select(".biggeneral")
.append("svg")

  .style("width", 1000)
  .style("height", h)

  .attr("fill","none")

;




///////////////////////////////////////////////////
let relationshipviz = d3.select("#relationshipcontainer")
  .append("svg")
    .style("width", w+20)
    .style("height", h)
    .attr("fill","none")

;




let fandomviz = d3.select("#fandomcontainer")
  .append("svg")
    .style("width", w)
    .style("height", h)

;

let vizGroup3=fandomviz
.append("rect")
.attr("width",1480)
.attr("height",875)
.attr("fill","none")
.attr("opacity",0.8)


let deathviz = d3.select("#deathcontainer")
  .append("svg")
    .style("width", 1900)
    .style("height",1050)
    .attr("fill","black")

;


let rect = covercontainer
.append("rect")
.attr("fill","#001a1a")
.attr("x",3000)
.attr("y",-500)
.attr("width",600)
.attr("height",320)
.attr("id","rect");
let rect2 = covercontainer
.append("rect")
.attr("fill","#19010a")
.attr("x",3000)
.attr("y",-500)
.attr("width",250)
.attr("height",250)
.attr("id","rect2");

// let vizGroup4=deathviz
// .append("rect")
// .attr("width",1900)
// .attr("height",1050)
// .attr("fill","none")
// .attr("opacity",0.8)


function gotData(incomingData){





  let defs = covercontainer.append("defs");
  let filter = defs.append("filter")
      .attr("id","glow");
  filter.append("feGaussianBlur")
      .attr("stdDeviation","5")
      .attr("result","coloredBlur");
  let feMerge = filter.append("feMerge");
  feMerge.append("feMergeNode")
      .attr("in","coloredBlur");
  feMerge.append("feMergeNode")
      .attr("in","SourceGraphic");

  let button = covercontainer
  .append("circle")
  .attr("r",10)
  .attr("cx",960)
  .attr("cy",850)
  .attr("fill","white")
  .on("mouseover",function(){
    d3.select(this)
    .transition()
    .attr("r",20)
    .style("filter", "url(#glow)");
    console.log("hi")
    d3.select("#titletext").transition().delay(5000).duration(1000).style("left",350+"px");
    d3.select("#explain1").transition().delay(5000).duration(1000).style("left",350+"px");
    d3.select("#explain2").transition().delay(5000).duration(1000).style("left",350+"px");
    d3.select("#introtext").transition().delay(5000).duration(1000).style("top",220+"px");
    d3.select("#rect").transition().delay(5000).duration(1000).attr("x",1200).attr("y",500);
    d3.select("#rect2").transition().delay(5000).duration(1000).attr("x",1000).attr("y",400);

    d3.select("#blue3").transition().style("opacity",0);
    d3.select("#blue").transition().duration(8000).style("opacity",0,3).style("top","-"+480+"px").style("width",850+"px").style("left",480+"px");
    d3.select("#school1").transition().duration(800).style("opacity",0.7).transition().delay(3800).duration(1600).style("opacity",0);
    d3.select("#school2").transition().delay(1600).duration(800).style("opacity",0.7).transition().delay(2400).duration(1600).style("opacity",0);
    d3.select("#school3").transition().delay(2400).duration(800).style("opacity",0.7).transition().delay(1800).duration(1600).style("opacity",0);
    d3.select("#school4").transition().delay(3200).duration(800).style("opacity",0.7).transition().delay(1000).duration(1600).style("opacity",0);
    d3.select(this).transition().delay(5000).duration(1000).attr("cx",380).attr("cy",250).attr("fill","#001a33").attr("r",120);
})
  ;



  ////////////////////////////////////////////
  let yearData = [{year:1999,number:1},{year:2000,number:25},{year:2001,number:56},{year:2002,number:357},{year:2003,number:1303},{year:2004,number:2331},{year:2005,number:3533},{year:2006,number:4667},{year:2007,number:4954},{year:2008,number:4166},{year:2009,number:4053},{year:2010,number:5440},
  {year:2011,number:6369},{year:2012,number:11522},{year:2013,number:13545},{year:2014,number:14061},{year:2015,number:16433},{year:2016,number:23365},{year:2017,number:29091},{year:2018,number:31308},{year:2019,number:38605}]


  let xAxisGroup0 = generalviz.append("g").attr("class", 'xaxis0');
  let yAxisGroup0 = generalviz.append("g").attr("class", 'yaxis0');
  let xScale0 = d3.scaleLinear().domain([1999,2019]).range([xPadding, w-xPadding])
  let yScale0 = d3.scaleLinear().domain([1,38605]).range([h-yPadding, yPadding])

  function generalAxis(yearData){


        let xAxis0 = d3.axisBottom(xScale0);


        xAxisGroup0.attr("transform", "translate(0, "+ (h-yPadding) +")")
        .style("color","white");
        xAxisGroup0.call(xAxis0)
        // d3.selectAll(".tick").select("text").text.attr("fill","white");

        xAxisGroup0.append("g").attr('class', 'xLabel0')
      .attr("transform", "translate("+w/2+", 40)")
      .append("text")
      .attr("fill", "white")
      .text("PUBLISHED YEAR")
      .attr("font-family", "sans-serif")
      .attr("font-size", "1.7em")

    ;

  //make yAxis

   let yAxis0 = d3.axisLeft(yScale0);
   yAxisGroup0.call(yAxis0)
   yAxisGroup0.attr("transform", "translate("+xPadding+", 0)")
            .style("color","white");
   yAxisGroup0.append("g").attr('class', 'yLabel0')
      .attr("transform", "translate(-60, "+h/2+") rotate(-90)")
      .append("text")
      .attr("fill", "white")
      .text("NUMBER OF WORKS")
      .attr("font-family", "sans-serif")
      .attr("font-size", "1.7em")

    ;

  }
  // generalAxis();



let lineMaker=d3.line()
  .x(function(d,i){
    return xScale0(d.year);
  })
  .y(function(d,i){
    return yScale0(d.number);
  });
  let generallines = generalviz.selectAll(".line").data([yearData]).enter()
            .append("path")
              .attr("d", lineMaker)
              .attr("fill", "none")
              .attr("stroke", "white")
              .attr("stroke-width", 1)
              .attr("stroke","white")
              .attr("class", "line")
                .attr("opacity",0)
          ;
  let generalcirclea = generalviz.selectAll(".generalcircle").data(yearData).enter()
            .append('circle')
            .attr("r",5)
            .attr("fill","white")
            .attr('cx',function(d){return xScale0(d.year)})
            .attr('cy',function(d){return yScale0(d.number)})
              .attr("opacity",0)
  let generaltext = generalviz.selectAll(".generaltext").data(yearData).enter()
            .append('text')
            .text(function(d){return d.number})
            .attr("fill","white")
            .attr('x',function(d){return xScale0(d.year)})
            .attr('y',function(d){return yScale0(d.number)-10})
            .attr("fill","white")
            .style("font-size",12)
            .style("font-family","Loto-Light")
            .attr("opacity",0)
        ;




function mapFunction(d,i){
  d.words = Number(d.words.replace(/,/gi, ""));
  return d;
}


  let enhancedData = incomingData.map(mapFunction);
  console.log(enhancedData);
  let timeParseFunction = d3.timeParse("%d %b %Y");

  let timeFormat = d3.timeFormat("%d %b");
  console.log(timeParseFunction("01 Feb 2018"));
  console.log(timeFormat(timeParseFunction("01 Feb 2018")));
  let timeExtent=d3.extent(incomingData,function(d,i){
    return timeParseFunction(d.time);
  })
    // console.log(incomingData);

  let wordsExtent = d3.extent(incomingData, function(d, i){
    return d.words;
  });
      console.log("wordsExtent", wordsExtent);
      console.log("timeExtent", timeExtent);
        let xScale = d3.scaleTime().domain(timeExtent).range([xPadding, w-xPadding]);
        let yScale = d3.scaleLinear().domain(wordsExtent).range([h-yPadding, yPadding])
let colorScale = d3.scaleLinear().domain(timeExtent).range(["white","#abbaab"]);
let delayScale = d3.scaleLinear().domain(timeExtent).range([5000,15000]);

// console.log(colorScale(timeParseFunction("01 Feb 2018")));

let xAxisGroup = generalviz.append("g").attr("class", 'xaxis');
let yAxisGroup = generalviz.append("g").attr("class", 'yaxis');
  /////////////////visulize generaldata
function shortAxis(enhancedData){


      let xAxis = d3.axisBottom(xScale);


      xAxisGroup.attr("transform", "translate(0, "+ (h-yPadding) +")")
      .style("color","white");
      xAxisGroup.call(xAxis)
      // d3.selectAll(".tick").select("text").text.attr("fill","white");

      xAxisGroup.append("g").attr('class', 'xLabel')
    .attr("transform", "translate("+w/2+", 40)")
    .append("text")
    .attr("fill", "white")
    .text("PUBLISHED DATE")
    .attr("font-family", "sans-serif")
    .attr("font-size", "1.7em")

  ;

//make yAxis
 let yScale = d3.scaleLinear().domain(wordsExtent).range([h-yPadding, yPadding])

 let yAxis = d3.axisLeft(yScale);
 yAxisGroup.call(yAxis)
 yAxisGroup.attr("transform", "translate("+xPadding+", 0)")
          .style("color","white");
 yAxisGroup.append("g").attr('class', 'yLabel')
    .attr("transform", "translate(-60, "+h/2+") rotate(-90)")
    .append("text")
    .attr("fill", "white")
    .text("WORD COUNT")
    .attr("font-family", "sans-serif")
    .attr("font-size", "1.7em")

  ;

}


let datagroups1 = generalviz.selectAll(".generaldatagroup").data(incomingData).enter()
   .append("g")
   .attr("class","generaldatagroups")

       ;


       function wholefiction(incomingData){

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
          function getranddomGroupPosition(d,i){
          let x= Math.random()*900+80;
          let y= Math.random()*700+100;
            return "translate("+x+","+y+")"
          };
       ////////////////////////////
            datagroups1.attr("transform","translate(1000,100)")
            .transition()
            .delay(function(d,i){
                return delayScale(timeParseFunction(d.time))/3;
              })
            .duration(600)
            .attr("transform",getranddomGroupPosition)
            .attr("opacity",0.5)
            .transition()
            .delay(function(d,i){
                return delayScale(timeParseFunction(d.time))/3;
              })
            .duration(600)
            // .delay(function(i){return i})
            .attr("transform",getGroupPosition)
            .attr("opacity",1)
          ;
          // datagroups1.attr("transform",getGroupPosition)

        }


function shortViz(enhancedData){
  function randomPosition(d,i){

    if(d.words<20000){
      let x = Math.random()*500;
      let y=  Math.random()*700+100;

      return "translate("+x+","+y+")"

    }else if(d.words>=20000,d.words<100000){
      let x = Math.random()*200+600;
      let y=  Math.random()*200+300;
      return "translate("+x+","+y+")"

    }else{
      let x = Math.random()*80+650;
      let y=  Math.random()*80+650;
      return "translate("+x+","+y+")"
    }
  };
  function colorh(d,i){

    if(d.words<20000){

      return "white";

    }else if (d.words>=20000,d.words<100000){

      return "#e8ffcf";

    }else{
      return "#cfe8ff";
    }
  };



  let circles = datagroups1
     .append("circle")
     .attr("fill",colorh)
     .attr("r",0.8)
     ;
      let textshort = generalviz
      .append("text")
      .transition()
      .delay(800)
      .text("Short Story")
      .attr("fill","white")
      .attr("x",550)
      .attr("y",115)
      .attr("class","short")
      ;
      let midshort = generalviz
      .append("text")
      .transition()
      .delay(800)
      .text("Novella")
      .attr("fill","white")
      .attr("x",850)
      .attr("y",515)
        .attr("class","short2")
      ;
      let longshort = generalviz
      .append("text")
      .transition()
      .delay(800)
      .text("Novel")
      .attr("fill","white")
      .attr("x",850)
      .attr("y",690)
        .attr("class","short3")
      ;

      datagroups1.transition().delay(2000).duration(1000).attr("transform",randomPosition);
};

shortAxis();
enterView({
  selector:".April",
  enter:function(el){


    wholefiction();
    xAxisGroup0.transition().attr("opacity",1);
    yAxisGroup0.transition().attr("opacity",1);
    generalviz.transition().attr("opacity",1);
    d3.select(".questions").transition().style("opacity",1);


  },
   // trigger just once
  exit: function(el) {
      console.log('a special element exited');

  datagroups1.transition().attr("opacity",0);
  xAxisGroup.transition().attr("opacity",1);
  yAxisGroup.transition().attr("opacity",1);
  d3.select(".short").transition().attr("opacity",0);
    d3.select(".short2").transition().attr("opacity",0);
      d3.select(".short3").transition().attr("opacity",0);
generalviz.transition().attr("opacity",0);
generalviz2.transition().remove();
    d3.select(".questions").transition().style("opacity",0);


   	},


    progress: function(el, progress) {
        console.log("the special element's progress is:", progress);
    //
    // // 	},
    // offset: 0.5, // enter at middle of viewport
    // once: true, // trigger just once

     }
})
enterView({
  selector:".classfication",
  enter:function(el){

  },
  exit: function(el) {
      console.log('a special element exited');


      generallines1.transition().attr("opacity",0);

    generalcircle1.transition().attr("opacity",0);

          generaltext1.transition() .attr("opacity",0);
    xAxisGroup1.transition().attr("opacity",0);
      yAxisGroup1.transition().attr("opacity",0);


      wholefiction();
      xAxisGroup0.transition().attr("opacity",1);
      yAxisGroup0.transition().attr("opacity",1);
      generalviz.transition().attr("opacity",1);




   	},


    progress: function(el, progress) {

        console.log("the special element's progress is:", progress);
    shortViz();
    datagroups1.attr("opacity",1);
    d3.select(".short").transition().attr("opacity",1);
      d3.select(".short2").transition().attr("opacity",1);
        d3.select(".short3").transition().attr("opacity",1);
    xAxisGroup.transition().attr("opacity",0);
    yAxisGroup.transition().attr("opacity",0);

  	},
    	offset: 0.50000001, // enter at middle of viewport
    	once:true,// trigger just once


})

let historyData = [{year:2000,number:3},{year:2001,number:2},{year:2002,number:31},{year:2003,number:134},{year:2004,number:175},{year:2005,number:178},{year:2006,number:432},{year:2007,number:419},{year:2008,number:338},{year:2009,number:269},{year:2010,number:302},
{year:2011,number:471},{year:2012,number:832},{year:2013,number:1080},{year:2014,number:942},{year:2015,number:1237},{year:2016,number:1514},{year:2017,number:2208},{year:2018,number:2349},{year:2019,number:2888},{year:2020,number:6961}]


let xAxisGroup1 = generalviz2.append("g").attr("class", 'xaxis1');
let yAxisGroup1 = generalviz2.append("g").attr("class", 'yaxis1');
let xScale1 = d3.scaleLinear().domain([1999,2020]).range([xPadding, w-xPadding])
let yScale1 = d3.scaleLinear().domain([0,7000]).range([h-yPadding, yPadding])

function hisAxis(historyData){


      let xAxis1 = d3.axisBottom(xScale1);


      xAxisGroup1.attr("transform", "translate(0, "+ (h-yPadding) +")")
      .style("color","white");
      xAxisGroup1.call(xAxis1)
      // d3.selectAll(".tick").select("text").text.attr("fill","white");

      xAxisGroup1.append("g").attr('class', 'xLabel1')
    .attr("transform", "translate("+w/2+", 40)")
    .append("text")
    .attr("fill", "white")
    .text("YEAR")
    .attr("font-family", "sans-serif")
    .attr("font-size", "1.7em")

  ;

//make yAxis

 let yAxis1 = d3.axisLeft(yScale1);
 yAxisGroup1.call(yAxis1)
 yAxisGroup1.attr("transform", "translate("+xPadding+", 0)")
          .style("color","white");
 yAxisGroup1.append("g").attr('class', 'yLabel1')
    .attr("transform", "translate(-60, "+h/2+") rotate(-90)")
    .append("text")
    .attr("fill", "white")
    .text("NUMBER OF WORKS")
    .attr("font-family", "sans-serif")
    .attr("font-size", "1.7em")

  ;



}
let lineMaker1=d3.line()
  .x(function(d,i){
    return xScale1(d.year);
  })
  .y(function(d,i){
    return yScale1(d.number);
  });
let generallines1 = generalviz2.selectAll(".line1").data([historyData]).enter()
          .append("path")
            .attr("d", lineMaker1)
            .attr("fill", "none")
            .attr("stroke", "white")
            .attr("stroke-width", 1)
            .attr("stroke","white")
            .attr("class", "line")
            .attr("opacity",0)
            .attr("class","line1")


        ;
let generalcircle1 = generalviz2.selectAll(".generalcircle1").data(historyData).enter()
          .append('circle')
          .attr("r",5)
          .attr("fill","white")
          .attr('cx',function(d){return xScale1(d.year)})
          .attr('cy',function(d){return yScale1(d.number)})
          .attr("opacity",0)
          .attr("class","hiscircle1")


let generaltext1 = generalviz2.selectAll(".generaltext1").data(historyData).enter()
          .append('text')
          .text(function(d){return d.number})
          .attr("fill","white")
          .attr('x',function(d){return xScale1(d.year)})
          .attr('y',function(d){return yScale1(d.number)-10})
          .attr("fill","white")
          .style("font-size",12)
          .style("font-family","Loto-Light")
          .attr("opacity",0)
          .attr("class","histext1")


      ;


enterView({
  selector:".history",
  enter:function(el){


    // d3.select(".short").transition().attr("opacity",0);
    //       d3.select(".short2").transition().attr("opacity",0);
    //         d3.select(".short3").transition().attr("opacity",0);


    // xAxisGroup0.transition().attr("opacity",0);
    // yAxisGroup0.transition().attr("opacity",0);


  },
  exit: function(el) {
      console.log('a special element exited');



   	},


    progress: function(el, progress) {
        console.log("the special element's progress is:", progress);

        d3.select(".short").transition().attr("opacity",0);
              d3.select(".short2").transition().attr("opacity",0);
                d3.select(".short3").transition().attr("opacity",0);
    datagroups1.attr("opacity",0);
        hisAxis();

        generallines1.transition().attr("opacity",1);

      generalcircle1.transition().delay(function(d,i){return xScale1(d.year)*3})
      .duration(200).attr("opacity",1);

            generaltext1.transition()  .delay(function(d,i){return xScale1(d.year)*3})
      .duration(200).attr("opacity",1);



     },
     offset: 0.5, // enter at middle of viewport
     once: true, // trigger just once

})

///////////////

//

let data = [{type:"M/M",number:2075},{type:"F/M",number:1375},{type:"F/F", number:201},
{type:"Multi",number:291},{type:"Gen",number:786},{type:"Other",number:1873}];


let arcs = d3.pie()
    .value(function(d) { return d.number; })
    (data);

//
// console.log(arcs);
let piecolorScale= d3.scaleLinear()
	.domain([200,2500])
	.range(["grey","#001a33"])


let arcGenerator=d3.arc()
.innerRadius(75)
.outerRadius(150);


let arcOver=d3.arc()
.innerRadius(100)
.outerRadius(200);


let outerArc = d3.arc()
  .innerRadius(200)
  .outerRadius(250)
  let subouterArc = d3.arc()
    .innerRadius(80)
    .outerRadius(230)


let datagroups2 = relationshipviz.selectAll(".relationdatagroup").data(arcs).enter()
   .append("g")
   .attr("class","relationdatagroups")
   .on("mouseover", function(d){
        d3.select(this).select("path")
        .transition()
        .attr("fill","#c4863b")
        .attr("d",arcOver)

        ;// console.log("hi");
        d3.select(this).select("polyline")
        .attr("opacity",1);
        d3.select(this).select("text")
        .attr("opacity",1)
        d3.select("#textcenter").text((d.value/69.61).toFixed(2)+"%").attr("x",255)


      })
      .on("mouseout",function(d){
        d3.select(this).select("path")
        .transition()
    .attr("fill",function(d){return piecolorScale(d.value)})
        .attr("d",arcGenerator)

d3.select("#textcenter").text("Relationships").attr("x",240);
      })

  ;



  let piechart = datagroups2
  .append("path")
  .attr("d",arcGenerator)
  .attr("fill",function(d){return piecolorScale(d.value)})
  // .attr("fill","white")
  .attr("stroke","none")

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
        posC[0] = 230 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
        return [posA, posB, posC]
      })
      .attr("opacity",0)


    let texts = datagroups2
    .append("text")
    .attr("fill","white")
    .text(function(d){return d.data.type})
    .attr('transform', function(d) {
  let pos = outerArc.centroid(d);
  let midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
  pos[0] = 240 * (midangle < Math.PI ? 1 : -1);
  return 'translate(' + pos + ')';
})
.style('text-anchor', function(d) {
  let midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
  return (midangle < Math.PI ? 'start' : 'end')

})
.attr("opacity",0)
.style("font-size",12)
.style("font-family"," Lato-Light");




;
let textcenter = relationshipviz
.append("text")
.attr("x",240)
.attr("y",300)
.text("Relationships")
.attr("fill","white")
.attr("id","textcenter")
.style("font-size",14)
.style("font-family"," Lato-Light");
datagroups2.attr("transform","translate(280,300)");


let datamm = [{type:"Draco Malfoy/Harry Potter",number:696},{type:"Sirius Black/Remus Lupin",number:248},{type:"Harry Potter/Severus Snape", number:164},
{type:"Harry Potter/Tom Riddle",number:370},{type:"Other Paring",number:595}];

let arcsmm = d3.pie()
    .value(function(d) { return d.number; })
    (datamm);
let subarcGenerator = d3.arc()
.innerRadius(50)
.outerRadius(100);
    let subarcOver=d3.arc()
    .innerRadius(60)
    .outerRadius(120);

let subcolorScale= d3.scaleLinear()
	.domain([75,780])
	.range(["grey","#19010a"])
  let subcolorffScale= d3.scaleLinear()
  	.domain([1,120])
  	.range(["grey","#19010a"])

//
let datagroupsmm2 = relationshipviz.selectAll(".relationdatammgroup").data(arcsmm).enter()
   .append("g")
   .attr("class","relationdatammgroups")
   .on("mouseover", function(d){
        d3.select(this).select("path")
        .transition()
        .attr("fill","#aca594")
          .attr("d",subarcOver)

        ;
        d3.select(this).select("polyline")
        .attr("opacity",1);
        d3.select(this).select("text")
        .attr("opacity",1)
        d3.select("#textmmcenter").text((d.value/20.75).toFixed(2)+"%").attr("x",255)
   })
   .on("mouseout",function(d){
     d3.select(this).select("path")
     .transition()
     .attr("fill","#6b486b")
       .attr("d",subarcGenerator)
         .attr("fill",function(d){return subcolorScale(d.value)})
d3.select("#textmmcenter").text("M/M Parings").attr("x",243)
     ;
   })

  let piechartmm = datagroupsmm2
  .append("path")
  .attr("fill",function(d){return subcolorScale(d.value)})
  .attr("d",subarcGenerator)

  ;

  let linesmm = datagroupsmm2
    .append('polyline')
      .attr("stroke", "white")
      .style("fill", "none")
      .attr("stroke-width", 1)
      .attr('points', function(d) {
        let posA = subarcGenerator.centroid(d) // line insertion in the slice
        let posB = subouterArc.centroid(d) // line break: we use the other arc generator that has been built only for that
        let posC = subouterArc.centroid(d); // Label position = almost the same as posB
        let midangle = d.startAngle + (d.endAngle - d.startAngle) / 2 // we need the angle to see if the X position will be at the extreme right or extreme left
        posC[0] = 150 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
        return [posA, posB, posB]
      })
      .attr("opacity",0)

      let textsmm = datagroupsmm2
      .append("text")
      .attr("fill","white")
      .text(function(d){return d.data.type})
      .attr('transform', function(d) {
        if (d.data.number == 2877){
          let pos = subouterArc.centroid(d);
          let posx=pos[0]+180;
          let posy=pos[1];

          return 'translate(' + posx + ','+posy+')';
          }
        else{
          let pos = subouterArc.centroid(d);
          return 'translate(' + pos + ')';

        }
      })





      .style('text-anchor', function(d) {
      let midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
      return (midangle < Math.PI ? 'start' : 'end')

    })
    .style("font-size",12)
    .style("font-family"," Lato-Light")
    .attr("opacity",0);


    let textmmcenter = relationshipviz
    .append("text")
    .attr("x",243)
    .attr("y",735)
    .text("M/M Parings")
    .attr("fill","white")
    .attr("id","textmmcenter")
    .style("font-size",14)
    .style("font-family"," Lato-Light");
datagroupsmm2.attr("transform","translate(280,730)").attr("opacity",0);
enterView({
	selector: '.mm',
	enter: function(el) {
    datagroupsmm2.transition().delay(200).duration(800).attr("opacity",1);

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

//
let datafm = [{type:"Hermione Granger/Draco Malfoy",number:347},{type:"Hermione Granger/Harry Potter",number:98},{type:"Hermione Granger/Ron Weasley",number:120},{type:"James Potter/Lily Evans Potter", number:174},
{type:"Harry Potter/Ginny Weasley",number:175},{type:"Hermione Granger/Severus Snape",number:101},{type:"Other Paring",number:720}];

let arcsfm = d3.pie()
    .value(function(d) { return d.number; })
    (datafm);

//
let datagroupsfm2 = relationshipviz.selectAll(".relationdatafmgroup").data(arcsfm).enter()
   .append("g")
   .attr("class","relationdatafmgroups")
   .on("mouseover", function(d){
        d3.select(this).select("path")
        .transition()
        .attr("fill","#aca594")
          .attr("d",subarcOver)

        ;
        d3.select(this).select("polyline")
        .attr("opacity",1);
        d3.select(this).select("text")
        .attr("opacity",1)
        d3.select("#textfmcenter").text((d.value/17,35).toFixed(2)+"%").attr("x",775)
   })
   .on("mouseout",function(d){
     d3.select(this).select("path")
     .transition()
     .attr("fill","#6b486b")
       .attr("d",subarcGenerator)
         .attr("fill",function(d){return subcolorScale(d.value)})
d3.select("#textfmcenter").text("F/M Parings").attr("x",763)
     ;
   })

  let piechartfm = datagroupsfm2
  .append("path")
  .attr("fill",function(d){return subcolorScale(d.value)})
  .attr("d",subarcGenerator)

  ;

  let linesfm = datagroupsfm2
    .append('polyline')
      .attr("stroke", "white")
      .style("fill", "none")
      .attr("stroke-width", 1)
      .attr('points', function(d) {
        let posA = subarcGenerator.centroid(d) // line insertion in the slice
        let posB = subouterArc.centroid(d) // line break: we use the other arc generator that has been built only for that
        let posC = subouterArc.centroid(d); // Label position = almost the same as posB
        let midangle = d.startAngle + (d.endAngle - d.startAngle) / 2 // we need the angle to see if the X position will be at the extreme right or extreme left
        posC[0] = 150 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
        return [posA, posB, posB]
      })
      .attr("opacity",0)

      let textsfm = datagroupsfm2
      .append("text")
      .attr("fill","white")
      .text(function(d){return d.data.type})
      .attr('transform', function(d) {
        // if (d.data.number == 2877){
          let pos = subouterArc.centroid(d);

          return 'translate(' + pos + ')';
        //
        // }
      })





      .style('text-anchor', function(d) {
      let midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
      return (midangle < Math.PI ? 'start' : 'end')

    })
    .style("font-size",12)
    .style("font-family"," Lato-Light")
    .attr("opacity",0);


    let textfmcenter = relationshipviz
    .append("text")
    .attr("x",763)
    .attr("y",275)
    .text("F/M Parings")
    .attr("fill","white")
    .attr("id","textmmcenter")
    .style("font-size",14)
    .style("font-family"," Lato-Light");
datagroupsfm2.attr("transform","translate(800,280)").attr("opacity",0);
enterView({
	selector: '.fm',
	enter: function(el) {
    datagroupsfm2.transition().delay(200).duration(800).attr("opacity",1);

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




let dataff = [{type:"Luna Lovegood/Ginny Weasley",number:21},{type:"Hermione Granger/Ginny Weasley ",number:11},{type:"Hermione Granger/Pansy Parkinson ", number:16},
{type:"Hermione Granger/Bellatrix Black Lestrange ",number:38},{type:"Hermione Granger/Luna Lovegood",number:9},{type:"Other Paring",number:106}];

let arcsff = d3.pie()
    .value(function(d) { return d.number; })
    (dataff);

//
let datagroupsff2 = relationshipviz.selectAll(".relationdataffgroup").data(arcsff).enter()
   .append("g")
   .attr("class","relationdataffgroups")
   .on("mouseover", function(d){
        d3.select(this).select("path")
        .transition()
        .attr("fill","#aca594")
          .attr("d",subarcOver)

        ;
        d3.select(this).select("polyline")
        .attr("opacity",1);
        d3.select(this).select("text")
        .attr("opacity",1)
        d3.select("#textffcenter").text((d.value/2.01).toFixed(2)+"%").attr("x",775)
   })
   .on("mouseout",function(d){
     d3.select(this).select("path")
     .transition()
     .attr("fill","#6b486b")
       .attr("d",subarcGenerator)
         .attr("fill",function(d){return subcolorffScale(d.value)})
d3.select("#textffcenter").text("F/F Parings").attr("x",763)
     ;
   })

  let piechartff = datagroupsff2
  .append("path")
  .attr("fill",function(d){return subcolorffScale(d.value)})
  .attr("d",subarcGenerator)

  ;

  let linesff = datagroupsff2
    .append('polyline')
      .attr("stroke", "white")
      .style("fill", "none")
      .attr("stroke-width", 1)
      .attr('points', function(d) {
        let posA = subarcGenerator.centroid(d) // line insertion in the slice
        let posB = subouterArc.centroid(d) // line break: we use the other arc generator that has been built only for that
        let posC = subouterArc.centroid(d); // Label position = almost the same as posB
        let midangle = d.startAngle + (d.endAngle - d.startAngle) / 2 // we need the angle to see if the X position will be at the extreme right or extreme left
        posC[0] = 150 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
        return [posA, posB, posB]
      })
      .attr("opacity",0)

      let textsff = datagroupsff2
      .append("text")
      .attr("fill","white")
      .text(function(d){return d.data.type})
      .attr('transform', function(d) {
        if (d.data.number == 377){
          let pos = subouterArc.centroid(d);
          let posx=pos[0]+180;
          let posy=pos[1];

          return 'translate(' + posx + ','+posy+')';
          }
        else{
          let pos = subouterArc.centroid(d);
          return 'translate(' + pos + ')';

        }
      })





      .style('text-anchor', function(d) {
      let midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
      return (midangle < Math.PI ? 'start' : 'end')

    })
    .style("font-size",12)
    .style("font-family"," Lato-Light")
    .attr("opacity",0);


    let textffcenter = relationshipviz
    .append("text")
    .attr("x",763)
    .attr("y",735)
    .text("F/F Parings")
    .attr("fill","white")
    .attr("id","textffcenter")
    .style("font-size",14)
    .style("font-family"," Lato-Light");
datagroupsff2.attr("transform","translate(800,730)").attr("opacity",0);
enterView({
	selector: '.ff',
	enter: function(el) {
    datagroupsff2.transition().delay(200).duration(800).attr("opacity",1);

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
//



//////////////////////
// function showfandom(d,i){
//   console.log(d.fandom);
// }
let nodes = [{name:"1",x:20,y:30},{name:"2",x:238,y:120},{name:"3",x:253,y:175},{name:"4",x:60,y:80},{name:"5",x:20,y:200},];

let circleScale =d3.scaleLinear().domain(wordsExtent).range([0.5,4])
let datagroups3 = fandomviz.selectAll(".fandomdatagroup").data(incomingData.slice(0,10000)).enter()
   .append("g")
   .attr("class","fandomdatagroups")

function drawviz(){
  let newData = incomingData.slice(0,10000)
  // console.log(newData);
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
  let fandomtext = fandomviz
  .append("text")
  .text("HP Fanfictions")
  .attr("x",w/2)
  .attr('y',h/2)

  .attr('fill',"white")
  .style("font-size",15)
  .style("font-family"," Lato-Light");
  // enterView({
  // 	selector: '.enter0',
  // 	enter: function(el) {
  //     drawviz();
  // 	},
  // 	exit: function(el) {
  //     console.log('a special element exited');
  //
  // 	},
  // 	progress: function(el, progress) {
  //     console.log("the special element's progress is:", progress);
  // 	},
  // 	// offset: 0.5, // enter at middle of viewport
  // 	// once: true, // trigger just once
  // });

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
    // console.log(newData1);
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
// enterView({
//   selector: '.enter1',
//   enter: function(el) {
//     fandom1viz();
//   },
//   exit: function(el) {
//     console.log('a special element exited');
//
//   },
//   progress: function(el, progress) {
//     console.log("the special element's progress is:", progress);
//   },
//   // offset: 0.5, // enter at middle of viewport
//   // once: true, // trigger just once
// });

// fandom1viz();
// document.getElementById("button1").addEventListener("click", fandom1viz);
let fandomviz2datagroups = fandomviz.selectAll(".fandomviz2datagroup").data(incomingData.slice(58,122)).enter()
   .append("g")
   .attr("class","fandomviz2datagroups")
function fandom2viz(){



  let newData2 = incomingData.slice(58,122)
  // console.log(newData2);
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

let fandomviz3datagroups = fandomviz.selectAll(".fandomviz3datagroup").data(incomingData.slice(122,185)).enter()
   .append("g")
   .attr("class","fandomviz3datagroups")
function fandom3viz(){



  let newData3 = incomingData.slice(122,185)
  // console.log(newData3);
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
let fandomviz4datagroups = fandomviz.selectAll(".fandomviz4datagroup").data(incomingData.slice(185,257)).enter()
   .append("g")
   .attr("class","fandomviz4datagroups")
function fandom4viz(){



  let newData4 = incomingData.slice(185,257)
  // console.log(newData4);
  let fandomcircle = fandomviz4datagroups
  .append("circle")
  .attr("r",function(d){
    return circleScale(d.words);
  })
  .attr("cx",function(d,i){return 50})
  .attr("cy",function(d,i){return 50})
  .attr("fill","#DD6944")
  .attr("class","fandomcircle4")
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

let fandomtext1 = fandomviz
.append("text")
.text("Marvel Clinematic")
.attr("x",w/8+70)
.attr('y',h/8+150)
.attr('fill',"white")
.style("font-size",15)
.style("font-family"," Lato-Light");
let fandomtext2 = fandomviz
.append("text")
.text("Percy Jackson and the Olympians")
.attr("x",w/8+70)
.attr('y',h*7/8-150)
.attr('fill',"white")
.style("font-size",15)
.style("font-family"," Lato-Light");
let fandomtext3 = fandomviz
.append("text")
.text("Merlin(TV)")
.attr("x",w*7/8-140)
.attr('y',h/8+150)
.attr('fill',"white")
.style("font-size",15)
.style("font-family"," Lato-Light");
let fandomtext4 = fandomviz
.append("text")
.text("Star War")
.attr("x",w*7/8-140)
.attr('y',h*7/8-150)
.attr('fill',"white")
.style("font-size",15)
.style("font-family"," Lato-Light");
let raScale = d3.scaleLinear().domain([30,6961]).range([100,300])
let fandomc1 = fandomviz
.append("circle")
.attr("r",raScale(125))
.attr("cx",w/8+80)
.attr('cy',h/8+150)
.attr('fill',"#748B84")
.attr("opacity",0)
;
let fandomc2 = fandomviz
.append("circle")
.attr("r",raScale(68))
.attr("cx",w/8+80)
.attr('cy',h*7/8-150)
.attr('fill',"#40797C")
.attr("opacity",0)
;
let fandomc3 = fandomviz
.append("circle")
.attr("r",raScale(35))
.attr("cx",w*7/8-130)
.attr('cy',h/8+150)
.attr('fill',"#D98F76")
.attr("opacity",0)
;
let fandomc4 = fandomviz
.append("circle")
.attr("r",raScale(30))
.attr("cx",w*7/8-130)
.attr('cy',h*7/8-150)
.attr('fill',"#DD6944")
.attr("opacity",0)
;
let fandomc5 = fandomviz
.append("circle")
.attr("r",raScale(6961))
.attr("cx",w/2)
.attr('cy',h/2)
.attr('fill',"white")
.attr("opacity",0)
;


enterView({
  selector: '.enter0',
  enter: function(el) {
    drawviz()

    fandom1viz();
    fandom2viz();
    fandom3viz();
    fandom4viz();
  },
  exit: function(el) {
    console.log('a special element exited');


  },
  progress: function(el, progress) {
    console.log("the special element's progress is:", progress);
    fandomc1.transition().attr("opacity",0);
      fandomc2.transition().attr("opacity",0);
        fandomc3.transition().attr("opacity",0);
          fandomc4.transition().attr("opacity",0);
          fandomc5.transition().attr("opacity",0);
  },
  // offset: 0.5, // enter at middle of viewport
  // once: true, // trigger just once
});
enterView({
  selector: '.enter1',
  enter: function(el) {
  fandomc1.transition().attr("opacity",0.4);
    fandomc2.transition().delay(500).duration(300).attr("opacity",0.4);
      fandomc3.transition().delay(1000).duration(600).attr("opacity",0.4);
        fandomc4.transition().delay(1500).duration(900).attr("opacity",0.4);
        datagroups3.transition().attr("opacity",1);
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
enterView({
  selector: '.enter2',
  enter: function(el) {
        fandomc5.transition().delay(1200).duration(3000).attr("opacity",0.2);
fandomviz1datagroups.transition().delay(700).duration(1500).attr("opacity",0);
fandomviz2datagroups.transition().delay(700).duration(1500).attr("opacity",0);
fandomviz3datagroups.transition().delay(700).duration(1500).attr("opacity",0);
fandomviz4datagroups.transition().delay(700).duration(1500).attr("opacity",0);
datagroups3.transition().delay(1200).duration(3000).attr("opacity",0);
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


let datagroups4 = deathviz.selectAll(".deathdatagroup").data(incomingData).enter()
   .append("g")
   .attr("class","deathdatagroups")
function randomPosition(){
  let x = Math.random()*1940;
  let y = Math.random()*1050;
  return  "translate("+x+","+y+")"
}


let deathData = [{name:"Hedwig",time:"1997",reason:"Hit by a Killing Curse during the Battle of the Seven Potters.",lastline:"crying",title:" Hedwig's Great Adventure",notes:'“Harry, I’m a time-travelling owl. And I need your help to save the wizarding world.” —— Hedwig'},

{name:"Sirius Black",time:"1996",reason:"During the Battle of the Department of Mysteries. Bellatrix's curse pushed Sirius into the Veil, killing him.",lastline:' "Come on, you can do better than that!"',title:" It starts with Harry’ eyes",notes:"Harry Potter’s time travel stories to save Sirius Black"},
{name:"Albus Dumbledore",time:"June 30, 1997",reason:"During the Battle of the Astronomy Tower, under orders from Dumbledore himself so that Lord Voldemort would gain Snape's trust and then Snape would spy on him because of his love for Lily Evans.",lastline:' "Severus... please..."',title:" Dumbledore’s son",notes:"Dumbledore goes back in time after his death, and is determined to change the future."},
{name:"James Potter",time:"October 31, 1981",reason:"Killed trying to defend their son Harry when Voldemort attacked their cottage (the Fidelius Charm over which having been betrayed by its Secret-Keeper) in his first attempt to avert the prophecy of his downfall. As a result, Lily's sacrifice made the curse for Harry rebound, marking Voldemort's first defeat and her son's unexpected fame.",lastline:' "Lily, take Harry and go! It is him! I will hold him off!"',title:"The Bet",notes:"The adding stories between James Potter and Lily Potter"},
{name:"Lily Potter",time:"October 31, 1981",reason:"Killed trying to defend their son Harry when Voldemort attacked their cottage (the Fidelius Charm over which having been betrayed by its Secret-Keeper) in his first attempt to avert the prophecy of his downfall. As a result, Lily's sacrifice made the curse for Harry rebound, marking Voldemort's first defeat and her son's unexpected fame.",lastline:'"Please... have mercy...have mercy... Not Harry! Not Harry! Please — I will do anything!"',title:"When James met Lily",notes:"The adding stories between James Potter and Lily Potter"},
{name:"Cedric Diggory",time:"June 24, 1995",reason:"Accidentally Portkeyed to Little Hangleton with Harry Potter and was disposed of by Peter Pettigrew on Voldemort's orders.",lastline:' "Who are you, and what do you want?"',title:" Love at Last Sight",notes:"In which Cedric is cute but oblivious, Harry is an ugly duckling about to turn into a swan, and everyone else is sick of their pining. This story is about romance relationship between Harry Potter and Cedric Diggory"},
{name:"Fred Weasley",time:"March 2, 1998",reason:"Dead in explosion during Battle of Hogwarts",lastline:'"You actually are joking, Perce... I dont think I have heard you joke since you were–"',title:"Salve Amor",notes:"Hermione casts a soul bonding charm to save Fred's life. It's not a hard decision for her. She has loved him from afar, and can't bear the thought of life without him. But the consequences of her next decision are just as significant. She doesn't want him to know what she's done..."},
{name:"Remus Lupin",time:"March 2, 1998",reason:"Possibly killed by Killing Curse during Battle of Hogwarts",lastline:'',title:"Text Talk",notes:" Sirius is in boarding school, Remus is in hospital, and they don't know each other until Sirius texts the wrong number. The interesting is unfolding."},
{name:"Severus Snape",time:"March 2, 1998",reason:"Killed by Exsanguination during Battle of Hogwarts",lastline:'"Look... at... me..."',title:"A dealer, not a Death Eater",notes:"It should've been simple: Severus falls for Lily, Lily falls for Severus, and the pair live happily ever after. However, Voldemort is rising, and the Ministry is corrupt. With her options in the wizarding world curtailed, Lily quickly aligns herself with the Order of the Phoenix, whilst boyfriend Severus remains deliberately apolitical."},
{name:"Nymohadora Tonks",time:"March 2, 1998",reason:"Possibly killed by Killing Curse during Battle of Hogwarts",lastline:'',title:"Finding Her Patronus",notes:"After the events of Prisoner of Azkaban, Albus Dumbledore and Remus Lupin reach out to known supporters to begin planning a defense against the inevitable return of Voldemort. Among the new recruits is a colorful young witch named Nymphadora Tonks, who is paired with Lupin for her first official mission, and the two hit it off immediately."},
{name:"Alstor Moody",time:"July 27, 1997",reason:"Died after Mundungus Fletcher abandoned him during the Battle of the Seven Potters.",lastline:'',title:"Alastor Moody",notes:"Alastor Moody's time at Hogwarts. Just how did he come to be a legendary Auror, fighting on the side of the good? What led to his adoption of CONSTANT VIGILANCE as his motto/mantra? This story will answer those questions. A coming of age story - drama with a little bit of angst and mystery."},
{name:"Ariana Dumbledore",time:"1899",reason:"Caught in the crossfire and died when a three-way duel broke out. Estranged Albus and Aberforth, forced Grindelwald to flee the country.",lastline:'',title:" Memento Mori",notes:"An enchanted pocket watch sends Harry in the past. There he finds himself in a quandary, when he falls in love with Ariana Dumbledore. Can the young wizard save Dumbledore’s sister from her fate or was she destined to die?"},
{name:"Lavender Brown",time:"March 2, 1998",reason:"Werewolf Attack, later succumbed to wounds during Battle of Hogwarts",lastline:'',title:"Winter Wonderland",notes:"The story is about the romance relationship between Harry Potter and Lavender Brown, containing explicit sexual description."},
{name:"Regulue Black",time:"1979",reason:"Killed while trying to destroy the locket Horcrux. Ordered Kreacher to destroy it before death.",lastline:'',title:"Never Surrender",notes:"What if Regulus Black was sorted into Gryffindor? How much does that change? The answer, it turns out, is pretty much everything."},
{name:"Myrtle Warren",time:"June 13, 1943",reason:"Killed during Tom Riddle's first attempt to finish Salazar Slytherin's purge of Muggle-borns in the second-floor girl's lavatory that concealed the entrance to the Chamber of Secrets so that Riddle could turn his own diary into a Horcrux. Later became the ghost haunting the same bathroom.",lastline:'Crying',title:"Moaning Myrtle's Advice Column",notes:"The Hogwarts Herald is the school newspaper for the premier wizarding school in Britain. Its contributors include Staff, Students, Portraits, and of course, Ghosts.The regular ‘Agony Aunt’ column is authored by Myrtle Warren, commonly known to the students as Moaning Myrtle. Myrtle reserves the right to edit her columns to keep all persons mentioned anonymous."},
{name:"Florean Fortescue",time:"1996",reason:"Owner of Florean Fortescue's Ice Cream Parlour in Diagon Alley. Killed for not having information that the Dark Lord demanded on the Elder Wand.",lastline:'',title:"Florean Fortescue The Third",notes:"Florean Forestcue The Third or GET IT FORTESCUE BOY follows the story of the grandson of Florean Fortescue and his attempts to run his ice cream parlour in peace. When new regulars, Draco Malfoy and Harry Potter, begin to shamelessly flirt with him, Florean the third uses his grandfather's famous flavours and his own quick powers of deduction to stop both customers bothering him once and for all."},
{name:"Tom riddle aka Lord Voldemnory",time:"March 2, 1998",reason:"The destruction of his Horcruxes, Harry's mastery of the Elder Wand, and his own rebounding Killing Curse during Battle of Hogwarts",lastline:'“Avada Kedavral!”',title:"Enteral Hilarity",notes:"Harry Potter, Master of Death, was reborn fifty-one times with his soulmate Tom Riddle in various eras and universes. They finally returned to their first life after a millennia of absurdity and amusement, and Harry's ready to make the most of it."}
];
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
  let x = Math.random()*800+980;
  let y = Math.random()*800+100;
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
      var content = document.getElementById("content");
      var textcontent = document.createElement("P");
      textcontent.setAttribute("id","textcontent");
      textcontent.innerText="DEATH INFORMATION"+"\n"+d.name+"\n"+d.time+"\n"+d.reason+"\n"+d.lastline+"\n"+"\n"+"NEW STORY"+"\n"+d.title+"\n"+d.notes;
      content.innerHTML="";
      content.appendChild(textcontent);
      d3.select("#content").transition().delay(200).style("opacity",1)
      // d3.select("#top").style("opacity",0)

        // document.getElementById("textcontent").innerHTML="jytcjuytcjuycjyoaishdosifhosijoiajiooijoijoaisjdoijsd";

      })
    .on("mouseout",function(d,i){
      datagroups5.select("circle").attr("r",10).attr("opacity",0.8);
      d3.select("#content").style("opacity",0)
      d3.select("#top").style("opacity",1)
    })


  ;
  datagroups5.append("circle")
    .attr("r", 10)
    .attr("fill","white")
    .attr("opacity", 0.8)
  ;

datagroups5.attr("transform",deathrandomPosition)
enterView({
	selector: '.enter',
	enter: function(el) {
    d3.select(".questions").style("opacity",0);
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
}

d3.json("mothly.json").then(gotData);
