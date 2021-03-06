let w = 1200;
let h = 800;

let viz = d3.select("#container")
  .append("svg")
    .attr("class", "viz")
    .attr("width", w)
    .attr("height", h)
    // .style("background-color", "#e3d6c5")
;

 function gotaudioColor(myData){
   if (myData["audiable"] == "yes"){
     return "#849d97";
   }else if (myData["audiable"]=="no") {
     return "#bac4b9";
   }

 }


 function gotBrightColor(myData){
   if (myData["degreeOfLight"] == "Bright"){
     return "darkgrey";
   }else if (myData["degreeOfLight"]=="Medium") {
     return "grey";
   }else{
     return "#0c1825";
   }

 }
 function nameColor(myData){
   if (myData["name"] == "ChuChu Wen"){
     return "#64B7D1";
   }else if (myData["name"]=="Da Yu") {
     return "white";
   }else if (myData["name"]=="Da An") {
     return "#7DCE82";
   }else if (myData["name"]=="Last Dance") {
     return "#FF8360";
   }else if (myData["name"]=="Someone Like You") {
     return "#DA7E1D";
   }else if (myData["name"]=="Yu Jian") {
     return "#93B5C6";
   }else if (myData["name"]=="Womxnly") {
     return "#E57167";
   }else if (myData["name"]=="The Longest Movie") {
     return "#F0CF65";
   }else if (myData["name"]=="Xiao Ban") {
     return "#F5853F";
   }else if (myData["name"]=="When You") {
     return "#BD4F6C";
   }else if (myData["name"]=="Take Everything You Want") {
     return "#5A3117";
   }else if (myData["name"]=="Tenderness") {
     return "#43535A";
   }else if (myData["name"]=="Hong Dou") {
     return "grey";
   }else if (myData["name"]=="Wuyizhijian") {
     return "#CA907E";
   }else if (myData["name"]=="Lemon") {
     return "#629FBA";
   }else if (myData["name"]=="Ni Feng") {
     return "#5C415D";
   }else if (myData["name"]=="Say it again") {
     return "#73956F";
   }else if (myData["name"]=="Zhi Zu") {
     return "#28666E";

   }else if (myData["name"]=="Ti Mian") {
     return "#604D53";
   }


 }

 function gotwhyColor(myData){
   if (myData["why"]=="Listen frequently"){
     return "#91BBC1"
   }else if (myData["why"]=="From my favourite band") {

     return "#ADC1C9"
   }else if (myData["why"]=="Mentioned by friends") {

     return "#526161"
   }
   else if (myData["why"]=="Unknow") {

     return "#BC828A"
   }
   else if (myData["why"]=="Used to like") {

     return "grey"
   }


 };


 function gotdoingColor(myData){
   if(myData.whatAmIDoing == "Study"){
     return "#D2AC87";
   }else if(myData.whatAmIDoing == "Before nap"){
     return "#FDFEFD";
   }else if(myData.whatAmIDoing == "Before sleep"){
     return "#CBB9AB";
   }else if(myData.whatAmIDoing == "Bilibili"){
     return "#F7C8A6";
   }
   else if(myData.whatAmIDoing == "Chat with friends"){
     return "#515A4C";
   }else if(myData.whatAmIDoing == "Grab food"){
     return "#D19285";
   }else if(myData.whatAmIDoing == "Take exercise"){
     return "grey";
   }else if(myData.whatAmIDoing == "Take shower"){
     return "#F7E6AF";
   }else if(myData.whatAmIDoing == "Wake up"){
     return "#82917A";
   } else if(myData.whatAmIDoing == "Weibo"){
     return "#96887E";
   }else{
       return "darkgrey"}
 }


function gotData(incomingData){
  function namePosition(d,i){
    let x=950;

    if (d.name == "ChuChu Wen"){
      let y = 200;
      return "translate("+x+","+y+")";
    }else if (d.name=="Da Yu") {
      let y = 225;
      return "translate("+x+","+y+")"
    }else if (d.name=="Da An") {
      let y = 250;
      return "translate("+x+","+y+")";
    }else if (d.name=="Last Dance") {
      let y = 275;
      return "translate("+x+","+y+")";
    }else if (d.name=="Someone Like You") {
      let y = 300;
      return "translate("+x+","+y+")";
    }else if (d.name=="Yu Jian") {
      let y = 325;
      return "translate("+x+","+y+")";
    }else if (d.name=="Womxnly") {
      let y = 350;
      return "translate("+x+","+y+")";
    }else if (d.name=="The Longest Movie") {
      let y = 375;
      return "translate("+x+","+y+")";
    }else if (d.name=="Xiao Ban") {
      let y = 400;
      return "translate("+x+","+y+")";
    }else if (d.name=="When You") {
      let y = 425;
      return "translate("+x+","+y+")";
    }else if (d.name=="Take Everything You Want") {
      let y = 450;
      return "translate("+x+","+y+")";
    }else if (d.name=="Tenderness") {
      let y = 475;
      return "translate("+x+","+y+")";
    }else if (d.name=="Hong Dou") {
      let y = 500;
      return "translate("+x+","+y+")";
    }else if (d.name=="Wuyizhijian") {
      let y = 525;
      return "translate("+x+","+y+")";
    }else if (d.name=="Lemon") {
      let y = 550;
      return "translate("+x+","+y+")";
    }else if (d.name=="Ni Feng") {
      let y = 575;
      return "translate("+x+","+y+")";
    }else if (d.name=="Say it again") {
      let y = 600;
      return "translate("+x+","+y+")";
    }else if (d.name=="Zhi Zu") {
      let y = 625;
      return "translate("+x+","+y+")";

    }else if (d.name=="Ti Mian") {
      let y = 650;
      return "translate("+x+","+y+")";
    }

  }
  let namedatagroups = viz.selectAll(".datagroupname").data(incomingData).enter()
      .append("g")
       .attr("class","namegroups")
       ;
  let namecircle = namedatagroups
  .append("circle")
  .attr("r",8)
  .attr("fill",nameColor);
  let nametext = namedatagroups
  .append("text")
  .text(function(d){return(d.name)})
  .attr("fill",nameColor)
  .attr("y",4)
  .attr("x",20)
;

namedatagroups.attr("transform",namePosition);

//////////////////////////////////////

function whyPosition(d,i){
  let x=450;
  if (d.why== "Listen frequently"){
    let y=350;
    return "translate("+x+","+y+")"
  }else if (d.why=="From my favourite band") {
    let y = 375;
    return "translate("+x+","+y+")"
  }else if (d.why=="Mentioned by friends") {
    let y = 400;
    return "translate("+x+","+y+")"
  }
  else if (d.why=="Unknow") {
    let y = 425;
    return "translate("+x+","+y+")"
  }
  else if (d.why=="Used to like") {
    let y = 450;
    return "translate("+x+","+y+")"
  }
}
let whydatagroups = viz.selectAll(".datagroupwhy").data(incomingData).enter()
    .append("g")
     .attr("class","whygroups")
     ;
     function getimagePosition6(d,i){
       let x1=-75;
       let y1 =-26;
         return "translate("+x1+","+y1+") scale(0.30)"

     }

     let shape6 = ' <polygon  points="219,110 206,70 240,46 274,70 261,110 "/>'
   let whyShape=whydatagroups.append("g").attr("class","customShape").html(shape6);
   whyShape.attr("transform",getimagePosition6);
   whyShape.attr("stroke",gotdoingColor).attr("fill",gotwhyColor).attr("stroke","none");
// let whycircle = whydatagroups
// .append("circle")
// .attr("r",8)
// .attr("fill",gotwhyColor);
let whytext = whydatagroups
.append("text")
.text(function(d){return(d.why)})
.attr("fill",gotwhyColor)
.attr("y",4)
.attr("x",20)
;

whydatagroups.attr("transform",whyPosition);
////////////////////////////////////

function audioPosition(d,i){
  let x=700;
  if (d.audiable== "yes"){
    let y=200;
    return "translate("+x+","+y+")"
  }else if (d.audiable=="no") {
    let y = 225;
    return "translate("+x+","+y+")"
  }

}
let audiodatagroups = viz.selectAll(".datagroupaudio").data(incomingData).enter()
    .append("g")
     .attr("class","audiogroups")
     ;
// let audiocircle = audiodatagroups
// .append("circle")
// .attr("r",8)
// .attr("fill",gotaudioColor);
function getimagePosition2(d,i){
  let x1=-10;
  let y1 =-10;
    return "translate("+x1+","+y1+") scale(0.40)"

}

let shape2 = ' <polygon points="0,20 20,45 40,20 20,-5 "/>'
let audioShape=audiodatagroups.append("g").attr("class","customShape").html(shape2);
audioShape.attr("transform",getimagePosition2);
audioShape.attr("fill",gotaudioColor).attr("stroke","none");

let audiotext = audiodatagroups
.append("text")
.text(function(d){return(d.audiable)})
.attr("fill",gotaudioColor)
.attr("y",4)
.attr("x",20)
;

audiodatagroups.attr("transform",audioPosition);

/////////////////////////////////////////////////////
function doingPosition(d,i){
  let x=700;
  if(d.whatAmIDoing == "Study"){
    let y =325;
    return "translate("+x+","+y+")"
  }else if(d.whatAmIDoing == "Before nap"){
    let y =350;
    return "translate("+x+","+y+")"
  }else if(d.whatAmIDoing == "Break"){
    let y =375;
    return "translate("+x+","+y+")"
  }else if(d.whatAmIDoing == "Before sleep"){
    let y =400;
    return "translate("+x+","+y+")"
  }else if(d.whatAmIDoing == "Bilibili"){
    let y =425;
    return "translate("+x+","+y+")"
  }
  else if(d.whatAmIDoing == "Chat with friends"){
    let y =450;
    return "translate("+x+","+y+")"
  }else if(d.whatAmIDoing == "Grab food"){
    let y =475;
    return "translate("+x+","+y+")"
  }else if(d.whatAmIDoing == "Take exercise"){
    let y =500;
    return "translate("+x+","+y+")"
  }else if(d.whatAmIDoing == "Take shower"){;
    let y =525;
    return "translate("+x+","+y+")"
  }else if(d.whatAmIDoing == "Wake up"){;
    let y =550;
    return "translate("+x+","+y+")"
  }
  else{
    let y =575;
    return "translate("+x+","+y+")"
  }
}
let doingdatagroups = viz.selectAll(".datagroupdoing").data(incomingData).enter()
    .append("g")
     .attr("class","doinggroups")
     ;
// let doingcircle = doingdatagroups
// .append("circle")
// .attr("r",8)
// .attr("fill",gotdoingColor);
function getimagePosition7(d,i){
  let x1=-13;
  let y1 =-10;
    return "translate("+x1+","+y1+") scale(0.10)"

}

  let shape7 = '  <polygon points="100,0 160,180 10,60 190,60 40,180" style="stroke-width:1;"/>'
let doingShape=doingdatagroups.append("g").attr("class","customShape").html(shape7);
doingShape.attr("transform",getimagePosition7);
doingShape.attr("stroke",gotdoingColor).attr("fill",gotdoingColor);
let doingtext = doingdatagroups
.append("text")
.text(function(d){return(d.whatAmIDoing)})
.attr("fill",gotdoingColor)
.attr("y",4)
.attr("x",20)
;
doingdatagroups.attr("transform",doingPosition);
/////////////////////////////////////
function brightPosition(d,i){
  let x=450;
  if (d.degreeOfLight== "Bright"){
    let y=200;
    return "translate("+x+","+y+")"
  }else if (d.degreeOfLight=="Medium") {
    let y = 225;
    return "translate("+x+","+y+")"
  }else{
    let y=250;
    return "translate("+x+","+y+")"
  }

}
let brightdatagroups = viz.selectAll(".datagroupbright").data(incomingData).enter()
    .append("g")
     .attr("class","brightgroups")
     ;
// let brightcircle = brightdatagroups
// .append("circle")
// .attr("r",8)
// .attr("fill",gotBrightColor);
function getimagePosition3(d,i){
  let x1=-14;
  let y1 =-15;
    return "translate("+x1+","+y1+") scale(0.09)"

}

let shape3 = ' <polygon points="10,10 10,200 200,200 "/>'
let lightShape=brightdatagroups.append("g").attr("class","customShape").html(shape3);
lightShape.attr("transform",getimagePosition3);
lightShape.attr("stroke",gotdoingColor).attr("fill",gotBrightColor).attr("stroke","none");

let brighttext = brightdatagroups
.append("text")
.text(function(d){return(d.degreeOfLight)})
.attr("fill",gotBrightColor)
.attr("y",4)
.attr("x",20)
;

brightdatagroups.attr("transform",brightPosition);



}
d3.json("data.json").then(gotData);
