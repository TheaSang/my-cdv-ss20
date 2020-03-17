let w = 2400;
let h = 800;

let viz = d3.select("#container")
  .append("svg")
    .attr("class", "viz")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "#e3d6c5")
;

let line2 = d3.select(".viz")
.append("line")
.attr("x1",860)
.attr("x2",860)
.attr("y1",100)
.attr("y2",700)
.attr("stroke","black");
let line3 = d3.select(".viz")
.append("line")
.attr("x1",1220)
.attr("x2",1220)
.attr("y1",100)
.attr("y2",700)
.attr("stroke","black");

let line4 = d3.select(".viz")
.append("line")
.attr("x1",1580)
.attr("x2",1580)
.attr("y1",100)
.attr("y2",700)
.attr("stroke","black");

let line5 = d3.select(".viz")
.append("line")
.attr("x1",1900)
.attr("x2",1900)
.attr("y1",100)
.attr("y2",700)
.attr("stroke","black");

let line6 = d3.select(".viz")
.append("line")
.attr("x1",2300)
.attr("x2",2300)
.attr("y1",20)
.attr("y2",770)
.attr("stroke","black");

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
    return "white"
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
  }
  else if(myData.whatAmIDoing == "Weibo"){
    return "#96887E"
  }else{
    return "darkgrey"
  }
}
function gotData(incomingData){
function getGroupPosition(d,i){
  let x=0;
  let y=(h/80)*i+25;
  return "translate("+x+","+y+")"
};
console.log(getGroupPosition)

     let datagroups = viz.selectAll(".datagroup").data(incomingData).enter()
         .append("g")
          .attr("class","datagroups")
          ;
let initialcircle = datagroups.append("circle")
.attr("r",2)
.attr("cx",500)
.attr("fill",nameColor)
;

/////////////////////////////////////////////////////

  datagroups.attr("transform",getGroupPosition);

    function getGroupPosition2(d,i){
      let x = 1580;
      if (d.audiable == "yes"){
        let y=300;
        return "translate("+x+","+y+")"
      }else if (d.audiable=="no") {
        let y = 500;
        return "translate("+x+","+y+")"
      }
  };
  let datagroups2= viz.selectAll(".datagroupsaudio").data(incomingData).enter()
      .append("g")
       .attr("class","datagroupsaudio")
       ;
  let audiocircle = datagroups2
  .append("circle")
  // .attr("cy",0)
  // .attr("cx",1580)
  .attr("fill",gotaudioColor)
  .attr("r",10);
  function getName(d,i){
  if (d.audiable == "yes"){
    return "Audiable: Yes";
  }else if (d.audiable=="no") {
    return "Audiable: No";
  }
}
  let audiotext = datagroups2
  .append("text")
  .attr("y",5)
  .attr("x",-150)
  .text(getName)
  .attr("fill",gotaudioColor);

  function audioWidth(d,i){
  if (d.audiable == "yes"){
    return 38;
  }else if (d.audiable=="no") {
    return 112;
  }
}
  let towers = datagroups2
  .append("rect")
  .attr("class","tower")
  // .attr("x",1580)
  .attr("y",5)
  .attr("height",20)
  .attr("width",audioWidth)
  .attr("fill",gotaudioColor)
;
datagroups2.attr("transform",getGroupPosition2);

/////////////////////////////////////////////////////////////////////////////

function getGroupPosition3(d,i){
  let x= 1900;
  if (d.degreeOfLight == "Bright"){
    let y=200;
    return "translate("+x+","+y+")"
  }else if (d.degreeOfLight=="Medium") {
    let y = 400;
    return "translate("+x+","+y+")"
  }else if (d.degreeOfLight=="Dark") {
    let y = 600;
    return "translate("+x+","+y+")"
  }
}
  let datagroups3= viz.selectAll(".datagroupsbright").data(incomingData).enter()
      .append("g")
       .attr("class","datagroupsbright")
       ;
  let lightcircle1 = datagroups3
  .append("circle")
  .attr("fill",gotBrightColor)
  .attr("r",10)
  ;

let brighttext = datagroups3
.append("text")
.attr("y",5)
.attr("x",-100)
.text(function(d){return d.degreeOfLight})
.attr("fill",gotBrightColor)
;

function brightWidth(d,i){
if (d.degreeOfLight == "Bright"){
  return 64;
}if (d.degreeOfLight == "Medium"){
  return 40;
}else if (d.degreeOfLight =="Dark") {
  return 46;
}
}
let towers3 = datagroups3
.append("rect")
.attr("class","tower")
.attr("y",5)
.attr("height",20)
.attr("width",brightWidth)
.attr("fill",gotBrightColor)
;
datagroups3.attr("transform",getGroupPosition3);
//////////////////////////////////////////////////////////////
  function getGroupPosition4(d,i){
     let x=2300;
      if (d.name == "ChuChu Wen"){
        let y = 40;
        return "translate("+x+","+y+")";
      }else if (d.name=="Da Yu") {
        let y = 80;
        return "translate("+x+","+y+")"
      }else if (d.name=="Da An") {
        let y = 120;
        return "translate("+x+","+y+")";
      }else if (d.name=="Last Dance") {
        let y = 160;
        return "translate("+x+","+y+")";
      }else if (d.name=="Someone Like You") {
        let y = 200;
        return "translate("+x+","+y+")";
      }else if (d.name=="Yu Jian") {
        let y = 240;
        return "translate("+x+","+y+")";
      }else if (d.name=="Womxnly") {
        let y = 280;
        return "translate("+x+","+y+")";
      }else if (d.name=="The Longest Movie") {
        let y = 320;
        return "translate("+x+","+y+")";
      }else if (d.name=="Xiao Ban") {
        let y = 360;
        return "translate("+x+","+y+")";
      }else if (d.name=="When You") {
        let y = 400;
        return "translate("+x+","+y+")";
      }else if (d.name=="Take Everything You Want") {
        let y = 440;
        return "translate("+x+","+y+")";
      }else if (d.name=="Tenderness") {
        let y = 480;
        return "translate("+x+","+y+")";
      }else if (d.name=="Hong Dou") {
        let y = 520;
        return "translate("+x+","+y+")";
      }else if (d.name=="Wuyizhijian") {
        let y = 560;
        return "translate("+x+","+y+")";
      }else if (d.name=="Lemon") {
        let y = 600;
        return "translate("+x+","+y+")";
      }else if (d.name=="Ni Feng") {
        let y = 640;
        return "translate("+x+","+y+")";
      }else if (d.name=="Say it again") {
        let y = 680;
        return "translate("+x+","+y+")";
      }else if (d.name=="Zhi Zu") {
        let y = 720;
        return "translate("+x+","+y+")";
      }else if (d.name=="Ti Mian") {
        let y = 760;
        return "translate("+x+","+y+")";
      }

};
  let datagroups4= viz.selectAll(".datagroupsname").data(incomingData).enter()
      .append("g")
       .attr("class","datagroupsname")
       ;
  let namecircle = datagroups4
  .append("circle")
  .attr("fill",nameColor)
  .attr("r",10)
  ;
let nametext = datagroups4
.append("text")
.attr("y",5)
.attr("x",-220)
.text(function(d){return d.name})
.attr("fill",nameColor)
;

function gotitsNameWidth(d,i){
if (d.name== "ChuChu Wen"){
    return 68;
  }else if (d.name=="Da Yu") {
    return 16;
  }else if (d.name=="Da An") {
    return 8;
  }else if (d.name=="Last Dance") {
    return 12;
  }else if (d.name=="Someone Like You") {
    return 12;
  }else if (d.name=="Yu Jian") {
    return 12;
  }else if (d.name=="Womxnly") {
    return 20;
  }else if (d.name=="The Longest Movie") {
    return 12;
  }else if (d.name=="Xiao Ban") {
    return 20;
  }else if (d.name=="When You") {
    return 4;
  }else if (d.name=="Take Everything You Want") {
    return 4;
  }else if (d.name=="Tenderness") {
    return 12;
  }else if (d.name=="Hong Dou") {
    return 8;
  }else if (d.name=="Wuyizhijian") {
    return 64;
  }else if (d.name=="Lemon") {
    return 4;
  }else if (d.name=="Ni Feng") {
    return 16;
  }else if (d.name=="Say it again") {
    return 4;
  }else if (d.name=="Zhi Zu") {
    return 8;

  }else if (d.name=="Ti Mian") {
    return 4;
  }
}
let towers4 = datagroups4
.append("rect")
.attr("class","tower")
.attr("y",5)
.attr("height",20)
.attr("width",gotitsNameWidth)
.attr("fill",nameColor)
;
datagroups4.attr("transform",getGroupPosition4);
//////////////////////////////////////////////
  let padding = 40
  let yScale = d3.scaleLinear().domain([7,23]).range([padding,500-padding]);
  function  getGroupPosition5(d,i){
  let time = d.time;
  let timeObject = new Date(time);
   console.log(timeObject);
   let newTime = timeObject.getHours();
  let x= yScale(newTime);
  let y=(h/80)*i+25;
  return "translate("+x+","+y+")"}

  let rScale = d3.scaleLinear().domain([4,68]).range([5,8])
  function rTime(d,i){
    if (d.name== "ChuChu Wen"){
        return rScale(68);
      }else if (d.name=="Da Yu") {
        return rScale(16);
      }else if (d.name=="Da An") {
        return rScale(8);
      }else if (d.name=="Last Dance") {
        return rScale(12);
      }else if (d.name=="Someone Like You") {
        return rScale(12);
      }else if (d.name=="Yu Jian") {
        return rScale(12);
      }else if (d.name=="Womxnly") {
        return rScale(20);
      }else if (d.name=="The Longest Movie") {
        return rScale(12);
      }else if (d.name=="Xiao Ban") {
        return rScale(20);
      }else if (d.name=="When You") {
        return rScale(4);
      }else if (d.name=="Take Everything You Want") {
        return rScale(4);
      }else if (d.name=="Tenderness") {
        return rScale(12);
      }else if (d.name=="Hong Dou") {
        return rScale(8);
      }else if (d.name=="Wuyizhijian") {
        return rScale(64);
      }else if (d.name=="Lemon") {
        return rScale(4);
      }else if (d.name=="Ni Feng") {
        return rScale(16);
      }else if (d.name=="Say it again") {
        return rScale(4);
      }else if (d.name=="Zhi Zu") {
        return rScale(8);

      }else if (d.name=="Ti Mian") {
        return rScale(4);
      }
  }

let datagroups5= viz.selectAll(".datagroupstime").data(incomingData).enter()
    .append("g")
     .attr("class","datagroupstime")
     ;
let timecircle = datagroups5
.append("circle")
.attr("fill",nameColor)
.attr("r",rTime)
// ;
datagroups5.attr("transform",getGroupPosition5);
//////////////////////////////////////////////////////////////////


    function getGroupPosition6(d,i){
      let x = 1220;
      if (d.why== "Listen frequently"){
        let y=200;
        return "translate("+x+","+y+")"
      }else if (d.why=="From my favourite band") {
        let y = 300;
        return "translate("+x+","+y+")"
      }else if (d.why=="Mentioned by friends") {
        let y = 400;
        return "translate("+x+","+y+")"
      }
      else if (d.why=="Unknow") {
        let y = 500;
        return "translate("+x+","+y+")"
      }
      else if (d.why=="Used to like") {
        let y = 600;
        return "translate("+x+","+y+")"
      }
  };
  let datagroups6= viz.selectAll(".datagroupswhy").data(incomingData).enter()
      .append("g")
       .attr("class","datagroupswhy")
       ;
  let whycircle = datagroups6
  .append("circle")
  .attr("fill",gotwhyColor)
  .attr("r",10);

  let whytext = datagroups6
  .append("text")
  .attr("y",5)
  .attr("x",-200)
  .text(function(d){return d.why})
  .attr("fill",gotwhyColor);

  function whyWidth(d,i){
    if (d.why=="Listen frequently"){

      return 111;
    }else if (d.why=="From my favourite band") {
      return 30
    }else if (d.why=="Mentioned by friends") {
      return 9
    }
    else if (d.why=="Unknow") {
      return 30
    }
    else if (d.why=="Used to like") {
      return 45
    }
}

  let whytowers = datagroups6
  .append("rect")
  .attr("class","tower")
  // .attr("x",1580)
  .attr("y",5)
  .attr("height",20)
  .attr("width",whyWidth)
  .attr("fill",gotwhyColor)
;

datagroups6.attr("transform",getGroupPosition6);

/////////////////////////////////////////////////////////////////////////////

function getGroupPosition7(d,i){
  let x=860;
  if(d.whatAmIDoing == "Study"){
    let y =50;
    return "translate("+x+","+y+")"
  }else if(d.whatAmIDoing == "Before nap"){
    let y =120;
    return "translate("+x+","+y+")"
  }else if(d.whatAmIDoing == "Break"){
    let y =190;
    return "translate("+x+","+y+")"
  }else if(d.whatAmIDoing == "Before sleep"){
    let y =260;
    return "translate("+x+","+y+")"
  }else if(d.whatAmIDoing == "Bilibili"){
    let y =330;
    return "translate("+x+","+y+")"
  }
  else if(d.whatAmIDoing == "Chat with friends"){
    let y =400;
    return "translate("+x+","+y+")"
  }else if(d.whatAmIDoing == "Grab food"){
    let y =470;
    return "translate("+x+","+y+")"
  }else if(d.whatAmIDoing == "Take exercise"){
    let y =540;
    return "translate("+x+","+y+")"
  }else if(d.whatAmIDoing == "Take shower"){
    let y =610;
    return "translate("+x+","+y+")"
  }else if(d.whatAmIDoing == "Wake up"){
    let y =680;
    return "translate("+x+","+y+")"
  }
  else{
    let y =750;
    return "translate("+x+","+y+")"
  }
}
  let datagroups7= viz.selectAll(".datagroupsdoing").data(incomingData).enter()
      .append("g")
       .attr("class","datagroupsdoing")
       ;
  let doingcircled = datagroups7
  .append("circle")
  .attr("fill",gotdoingColor)
  .attr("r",10)
  ;

let doingtext = datagroups7
.append("text")
.attr("y",5)
.attr("x",-150)
.text(function(d){return d.whatAmIDoing})
.attr("fill",gotdoingColor)
;

function doingWidth(d,i){
  if(d.whatAmIDoing == "Study"){
    return 84;
  }else if(d.whatAmIDoing == "Before nap"){
    return 48;
  }else if(d.whatAmIDoing == "Before sleep"){
    return 24;
  }else if(d.whatAmIDoing == "Break"){
    return 52;
  }else if(d.whatAmIDoing == "Bilibili"){
    return 16;
  }
  else if(d.whatAmIDoing == "Chat with friends"){
    return 12;
  }else if(d.whatAmIDoing == "Grab food"){
    return 20;
  }else if(d.whatAmIDoing == "Take exercise"){
    return 8;
  }else if(d.whatAmIDoing == "Take shower"){
    return 24;
  }else if(d.whatAmIDoing == "Wake up"){
    return 16;
  }
  else{
    return 28
  }
}
let doingtowers = datagroups7
.append("rect")
.attr("class","tower")
// .attr("x",1580)

.attr("y",5)
.attr("height",20)
.attr("width",doingWidth)
.attr("fill",gotdoingColor)
;
datagroups7.attr("transform",getGroupPosition7);
/////////////////////////////////////////////////////////////////////

let datagroups8= viz.selectAll(".datagroupscurve").data(incomingData).enter()
    .append("g")
     .attr("class","datagroupscurve")
     ;



     // function getinitialPosition1(d,i){

  //      let time = d.time;

  //      let timeObject = new Date(time);
  //     console.log(timeObject);
  //       let newTime = timeObject.getHours();
  //      let x1= yScale(newTime);
  //      let y1=(h/80)*i+25;
       // let x1= 500;
       // let y1=(h/80)*i+25;
       // if(d.whatAmIDoing == "Study"){
       //    x2=860;
       //   y2 =50;
       //   return [[x1,y1],[x2,y2]];
       // }else if(d.whatAmIDoing == "Before nap"){
       //       x2=860;
       //      y2 =120;
       //       return [[x1,y1],[x2,y2]];
       // }else if(d.whatAmIDoing == "Before sleep"){
       //      x2=860;
       //      y2 =190;
       //       return [[x1,y1],[x2,y2]];
       // }else if(d.whatAmIDoing == "Break"){
       //      x2=860;
       //      y2 =260;
       //       return [[x1,y1],[x2,y2]];
       // }else if(d.whatAmIDoing == "Bilibili"){
       //      x2=860;
       //      y2 =330;
       //       return [[x1,y1],[x2,y2]];
       // }
       // else if(d.whatAmIDoing == "Chat with friends"){
       //      x2=860;
       //      y2 =400;
       //       return [[x1,y1],[x2,y2]];
       // }else if(d.whatAmIDoing == "Grab food"){
       //   x2=860;
       //   y2 =470;
       //    return [[x1,y1],[x2,y2]];
       // }else if(d.whatAmIDoing == "Take exercise"){
       //   x2=860;
       //    y2 =540;
       //    return [[x1,y1],[x2,y2]];
       // }else if(d.whatAmIDoing == "Take shower"){
       //   x2=860;
       //    y2 =610;
       //      return [[x1,y1],[x2,y2]];
       // }else if(d.whatAmIDoing == "Wake up"){
       //      x2=860;
       //     y2 =680;
       //       return [[x1,y1],[x2,y2]];
       // }

       // else if (d.why== "Listen frequently"){
       //   let x3=1220;
       //   let y3=200;
       //
       // }else if (d.why=="From my favourite band") {
       //   let x3 = 1220;
       //   let y3 = 500;
       //
       // }else if (d.why=="Mentioned by friends") {
       //   let x = 1220;
       //   let y = 400;
       //
       // }
       // else if (d.why=="Unknow") {
       //   let x = 1220;
       //   let y = 500;
       //
       // }
       // else if (d.why=="Used to like") {
       //   let x = 1220;
       //   let y = 600;
       //
       // }

  //
  // let points =  [
  //     [x1, y1],
  //     [x2, y2],
  //     // [x3, y3],
  //   ];
  //   return points;
  // };


///////////////////////////////
  // let points =  [
  //     [100, 200],
  //     [200, 80],
  //     [600, 500],
  //   ];

/////////////////////////
// function points(d,i){
//   let points = [
//       [100, 200],
//       [200, 80],
//       [600, 500],
//     ];
//     return points;
// }
// // ////////////////////////


    // let lineGenerator = d3.line()
    //  .curve(d3.curveCardinal);
    // let  pathData = lineGenerator(getinitialPosition1());
    //
    //  let mycurve = datagroups7.append('path')
    //  .attr('d', pathData)
    //  .attr("stroke","white")
    //  .attr("fill","none")
    //  ;

}
d3.json("data.json").then(gotData);
