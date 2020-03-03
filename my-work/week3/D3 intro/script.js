console.log("js.loaded.hello");

// console.log(document.getElementById('viz-container'));

let viz = d3.select("#viz-container")
  .append("svg")
    .attr("id","viz")
    .attr("width",1000)
    .attr("height",545)
  ;

//load data

// <div id="viz-container"><svg><circle></circle></svg></div>
// viz.attr("height",400);

// let myCircle = viz.append("circle")
//     .attr("cx",250)
//     .attr("cy",200)
//     .attr("r",20)
;
// svg elemnt
// myCircle.attr("fill","white");
function positionX (myData){
  console.log(myData);
  if(myData["date"]=="2.25"){
    return 150;
  } else if(myData["date"]=="2.26"){
    return 320;
  } else if(myData["date"]=="2.27"){
    return 490;
  } else if(myData["date"]=="2.28"){
    return 660;
  }else if(myData["date"]=="2.29"){
  return 830;
  } else {
    return 1000;
  }
}

function color(myData){
  if(myData["name"]=="Da An"){
    return "#E9F7A3";
  } else if(myData["name"]=="ChuChu Wen"){
    return "white";
  } else if(myData["name"]=="Last Dance"){
    return "#6E7F15";
  } else if(myData["name"]=="Da Yu"){
    return "#485500";
  }else if(myData["name"]=="Someone Like You"){
  return "#BDCE65";
  }else if(myData["name"]=="Yu Jian"){
  return "#79A035";
  }
  else if(myData["name"]=="Womxnly"){
  return "#116420";
  }
  else if(myData["name"]=="The Longest Movie"){
  return "#0F5741";
  }
  else if(myData["name"]=="When You"){
  return "#458D77";
  }
  else if(myData["name"]=="Xiao Ban"){
  return "#49635B";
  }
  else if(myData["name"]=="Take Everything You Want"){
  return "pink";
  }
  else if(myData["name"]=="Hong Dou"){
  return "#0FE0AC";
  }
  else {
    return "lightgreen";
  }

}

function gotData(incomingData){


  function randomNumber(){
    // return Math.random()*780;
  let n1 = Math.floor(Math.random() * 750) + 20;
  Math.round(n1)*1000;
  return n1;



}




//   function chooseColor(datapoint){
//
//     return "green"
//   }
//
// viz.selectAll("text").data(incomingData).enter()
//      .append("text")
//        .style("fill", textColor)
//        .style("stroke", "white")
//        .style("font-size", 40)
//        .attr("dy", ylocation)
//        .attr("dx", xlocation)
//        .attr("text-anchor", "middle")
//        .attr("textLength", "100")
//        .text(detail)
//  ;
//  ;

//   console.log(incomingData);
  viz.selectAll("circle").data(incomingData).enter()

      .append("circle")
       // .attr("points","positionX,20 positionX,25")

       .attr("cx",positionX)
       .attr("cy",randomNumber)



       .attr("r",20)
       .attr("fill",color)

  ;
}



d3.json("data.json").then(gotData);
