console.log("js.loaded.hello");

// console.log(document.getElementById('viz-container'));
// let container = d3.select(".content-container")
// .append("svg")
//   .attr("id","viz")
//   .attr("width",1000)
//   .attr("height",530)
//   .attr("background-color","red")
// ;

let viz = d3.select(".viz-container")
  .append("svg")
    .attr("id","viz")
    .attr("width",1000)
    .attr("height",530)
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


function color(myData){
  if(myData["name"]=="Da An"){
    return "#E9F7A3";
  } else if(myData["name"]=="ChuChu Wen"){
    return "#0D504D";
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
  return "#444444";
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
  return "#B85F5F";
  }
  else if(myData["name"]=="Hong Dou"){
  // return "#0FE0AC";
  return "#FFCC8B";
  }
  else {
    return "grey";
  }

}

///////////////////DETERMINE X1,X2
function positionX (myData){
  let time = myData["time"]
  let timeObject = new Date(time);
   console.log(timeObject);

let newTime = timeObject.getHours();

if(myData["date"]=="2.25"){
  return newTime*14;

} else if(myData["date"]=="2.26"){
  return (newTime+3)*14;
} else if(myData["date"]=="2.27"){
  return (newTime+9)*14;
} else if(myData["date"]=="2.28"){
  return (newTime+16)*14;
}else if(myData["date"]=="2.29"){
return (newTime+24)*14;
} else {
  return (newTime+33)*14;
}

}

function positionX1 (myData){
  let time = myData["time"]
  let timeObject = new Date(time);
   console.log(timeObject);

let newTime = timeObject.getHours();

if(myData["date"]=="2.25"){
  return x1= newTime*14-6;
} else if(myData["date"]=="2.26"){
  return x1= (newTime+3)*14-6;
} else if(myData["date"]=="2.27"){
  return x1= (newTime+9)*14-6;
} else if(myData["date"]=="2.28"){
  return x1= (newTime+16)*14-6;
}else if(myData["date"]=="2.29"){
return(newTime+24)*14-6;
} else {
return   x1= (newTime+33)*14-6;
}
// console.log(positionX);
}
function positionX2 (myData){
  let time = myData["time"]
  let timeObject = new Date(time);
   console.log(timeObject);

let newTime = timeObject.getHours();

if(myData["date"]=="2.25"){
  return newTime*14+6;
} else if(myData["date"]=="2.26"){
  return (newTime+3)*14+6;
} else if(myData["date"]=="2.27"){
  return (newTime+9)*14+6;
} else if(myData["date"]=="2.28"){
  return (newTime+16)*14+6;
}else if(myData["date"]=="2.29"){
return (newTime+24)*14+6;
} else {
  return (newTime+33)*14+6;
}
}


////////////////determine y1,y2

function lineheight(myData){

    if(myData["name"]=="Da An"){
      return 40*3;
    } else if(myData["name"]=="ChuChu Wen"){
      return 260*3;;
    } else if(myData["name"]=="Last Dance"){
      return 120*3;
    } else if(myData["name"]=="Da Yu"){
      return 180*3;
    }else if(myData["name"]=="Someone Like You"){
    return 120*3;
    }else if(myData["name"]=="Yu Jian"){
    return 120*3;
    }
    else if(myData["name"]=="Womxnly"){
    return 210*3;
    }
    else if(myData["name"]=="The Longest Movie"){
    return 120*3;
    }
    else if(myData["name"]=="When You"){
    return 40*3;
    }
    else if(myData["name"]=="Xiao Ban"){
    return 120*3;
    }
    else if(myData["name"]=="Take Everything You Want"){
    return 40*3;
    }
    else if(myData["name"]=="Hong Dou"){
    return 40*3;
    }
    else {
      return 40*3;
    }


}
//////////////////////light rect color
function rectcolor (myData){


if(myData["degreeOfLight"]=="Dark"){
  return "black";
} else if(myData["degreeOfLight"]=="Medium"){
  return "#0D504D";
}  else {
   return "lightgrey";
}
}


function gotData(incomingData){
  // function rotate(myData){
  //
  //   console.log(positionX);
  //   console.log(lineheight);
  //   return "rotate(45," + positionX + ","+lineheight+")";
  //
  // }

//   function randomNumber(){
//     // return Math.random()*780;
//   let n1 = Math.floor(Math.random() * 750) + 20;
//   Math.round(n1)*1000;
//   return n1;
//
//
//
// }




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
let datagroups = viz.selectAll(".datagroup").data(incomingData).enter()
   .append("g")
     .attr("class","datagroup")
;
datagroups.append("rect")
            .attr("x",positionX)
            .attr("y",lineheight)
            .attr("width",80)
            .attr("height",60)
            .attr("stroke",color)
            .attr("stroke-width",1.5)
            .attr("fill",rectcolor)
            .attr("opacity",0.4);
datagroups.append("circle")
             .attr("cx",positionX)
             .attr("cy",lineheight)
             .attr("r",15)
             .attr("fill",color)
             ;

            // .attr("transform",rotate);
            datagroups.append("line")
                   .attr("x1",positionX)
                   .attr("y1",20)
                   .attr("x2",positionX)
                   .attr("y2",lineheight)
                   .attr("stroke",color)
                   .attr("stroke-width",3)
                   .attr("opacity",0.6);

           datagroups.append("line")
                  .attr("x1",positionX1)
                  .attr("y1",20)
                  .attr("x2",positionX)
                  .attr("y2",lineheight)
                  .attr("stroke",color)
                  .attr("stroke-width",1.5)
                  .attr("opacity",0.6)
                    ;
           datagroups.append("line")
                         .attr("x1",positionX2)
                         .attr("y1",20)
                         .attr("x2",positionX)
                         .attr("y2",lineheight)
                         .attr("stroke",color)

                         .attr("stroke-width",1.5)
                         .attr("opacity",0.6);







}
// datagroups.append("polygon")
// .attr("points",)
// .attr("fill","black")
// .attr("strok","white")
//
//
//
//
// }



d3.json("data.json").then(gotData);
