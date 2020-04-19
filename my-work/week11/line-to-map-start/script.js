let w = 1200;
let h = 800;
let padding = 90

// SVG
let viz = d3.select("#container").append("svg")
    .style("width", w)
    .style("height", h)
    .style("background-color", "grey")
;


// IMPORT DATA

d3.json("mainland.geojson").then(function(geoData){
   d3.csv("china-pop-2018.csv").then(function(incomingData){
     d3.json("city.json").then(function(cityData){
       let link = [{type: "LineString", coordinates: [[120.5861, 29.9958], [123.429092, 41.796768]]},
       {type: "LineString", coordinates: [[120.5861, 29.9958], [125.324501,43.886841]]},
       {type: "LineString", coordinates: [[120.5861, 29.9958], [126.642464,45.756966]]},
       {type: "LineString", coordinates: [[120.5861, 29.9958], [116.405289,39.904987]]},
       {type: "LineString", coordinates: [[120.5861, 29.9958], [117.190186,39.125595]]},
       {type: "LineString", coordinates: [[120.5861, 29.9958], [111.751990,40.841490]]},
       {type: "LineString", coordinates: [[120.5861, 29.9958], [106.232480,38.486440]]},
       {type: "LineString", coordinates: [[120.5861, 29.9958], [112.549248,37.857014]]},
       {type: "LineString", coordinates: [[120.5861, 29.9958], [114.502464,38.045475]]},
       {type: "LineString", coordinates: [[120.5861, 29.9958], [117.000923,36.675808]]},
       {type: "LineString", coordinates: [[120.5861, 29.9958], [113.665413,34.757977]]},
       {type: "LineString", coordinates: [[120.5861, 29.9958], [108.948021,34.263161]]},
       {type: "LineString", coordinates: [[120.5861, 29.9958], [114.298569,30.584354]]},
       {type: "LineString", coordinates: [[120.5861, 29.9958], [118.76741,32.041546]]},
       {type: "LineString", coordinates: [[120.5861, 29.9958], [117.283043,31.861191]]},
       {type: "LineString", coordinates: [[120.5861, 29.9958], [121.472641,31.231707]]},
       {type: "LineString", coordinates: [[120.5861, 29.9958], [112.982277,28.19409]]},
       {type: "LineString", coordinates: [[120.5861, 29.9958], [115.892151,28.676493]]},
       {type: "LineString", coordinates: [[120.5861, 29.9958], [120.15358,30.287458]]},
       {type: "LineString", coordinates: [[120.5861, 29.9958], [119.306236,26.075302]]},
       {type: "LineString", coordinates: [[120.5861, 29.9958], [113.28064,23.125177]]},
       {type: "LineString", coordinates: [[120.5861, 29.9958], [121.5200760,25.0307240]]},
       {type: "LineString", coordinates: [[120.5861, 29.9958], [110.199890,20.044220]]},
       {type: "LineString", coordinates: [[120.5861, 29.9958], [108.320007,22.82402]]},
       {type: "LineString", coordinates: [[120.5861, 29.9958], [106.504959,29.533155]]},
       {type: "LineString", coordinates: [[120.5861, 29.9958], [115.892151,28.676493]]},
       {type: "LineString", coordinates: [[120.5861, 29.9958], [102.71225,25.04060]]},
       {type: "LineString", coordinates: [[120.5861, 29.9958], [106.713478,26.578342]]},
       {type: "LineString", coordinates: [[120.5861, 29.9958], [104.065735,30.659462]]},
       {type: "LineString", coordinates: [[120.5861, 29.9958], [103.834170,36.061380]]},
       {type: "LineString", coordinates: [[120.5861, 29.9958], [101.777820,36.617290]]},
       {type: "LineString", coordinates: [[120.5861, 29.9958], [91.11450,29.644150]]},
       {type: "LineString", coordinates: [[120.5861, 29.9958], [87.616880,43.826630]]},
       {type: "LineString", coordinates: [[120.5861, 29.9958], [114.165460,22.275340]]},
       {type: "LineString", coordinates: [[120.5861, 29.9958], [113.549130,22.198750]]}

     ]


   incomingData=incomingData.map(function(d,i){
     d.population = Number(d.population)
     return d;
   })

   let minPop=d3.min(incomingData,function(d,i){
     return d.population;
   })
   // console.log(minPop);
   let maxPop=d3.max(incomingData,function(d,i){
     return d.population;
   })
   // console.log(maxPop);
   let colorScale = d3.scaleLinear().domain([minPop,maxPop]).range(["#d7d2cc","#304352"]);
   let circleScale = d3.scaleLinear().domain([minPop,maxPop]).range([2,20]);
  // PRINT DATA
  // console.log(geoData);

  // SCALES (to translate data values to pixel values)
  // let xDomain = d3.extent(incomingData, function(d){ return Number(d.year); })
  // let xScale = d3.scaleLinear().domain(xDomain).range([padding,w-padding]);
  // let yDomain = d3.extent(incomingData, function(d){ return Number(d.birthsPerThousand); })
  // let yScale = d3.scaleLinear().domain(yDomain).range([h-padding,padding]);
let projection=d3.geoEqualEarth()
.translate([w/2,h/2])
.center([103.8,34.1])
.fitExtent([[padding,padding],[w-padding,h-padding]],geoData);

  // PATH (line) MAKER - gets points, returns one of those complicated looking path strings
  // let lineMaker = d3.line()
  //     .x(function(d){
  //       return xScale(Number(d.year));
  //     })
  //     .y(function(d){
  //       return yScale(Number(d.birthsPerThousand));
  //     })
  // ;

// let pathMaker = d3.geoPath(projection);
let path = d3.geoPath()
    .projection(projection)
  // CREATE SHAPES ON THE PAGE!
  viz.selectAll(".province").data(geoData.features).enter()
    .append("path")
      .attr("class", "line")
      .attr("d", d3.geoPath()
          .projection(projection))
      .attr("fill", function(d,i){
        console.log(d.properties.name);
//see if d.properties.name is in incomingData
        let corresponeDatapoint = incomingData.find(function(datapoint){
          console.log(datapoint);
          if(datapoint.province==d.properties.name){
              return true
          }else{
            return false
          }

        })
        if(corresponeDatapoint != undefined){
          return colorScale(corresponeDatapoint.population)
        }else{
          return"white";
        }


        if(d.properties.name=="Guizhou"){
          return"red";
        }
        return "black";
      })
      .attr("stroke", "white")




   let lat = 29.9958;
   let lon = 120.5861;

   let pixelvalue = projection([lon,lat]);

   viz.append("circle")
     .attr("cx", pixelvalue[0])
     .attr("cy", pixelvalue[1])
     .attr("r", 10)
     .attr("fill", "black")

;
viz.append("text")
  .attr("x", pixelvalue[0]+20)
  .attr("y", pixelvalue[1])
  .text("ShaoXing")
  .attr("fill", "black")

;


// let citygroups =   viz.selectAll(".city").data(cityData).enter()
// .append("g")
// .attr("class","citygroups")

//
// function handleMouseOver(d, i) {
//             d3.select(this).attr({
//               fill: "orange",
//               r: radius * 2
//             });
//
//             svg.append("text").attr({
//                id: "t" + d.name + "-" + i,  //
//                 x: function() { let lat=d.latitude;
//                 let lon=d.longitude;
//                 let pixslvalue = projection([lon,lat]);
//                 return pixslvalue[0] },
//                 y: function() { let lat=d.latitude;
//                 let lon=d.longitude;
//                 let pixslvalue = projection([lon,lat]);
//                 return pixslvalue[1]}
//             })
//             .text(function() {
//               return d.name;  // Value of the text
//             });
//           }
function handleMouseOver(cityData) {  // Add interactivity

            // Use D3 to select element, change color and size
            d3.select(this)
              .transition()
              .attr('fill', '#00223E')
            .attr("r",8);


            viz.append("text")
             .attr("id",cityData.name)
             .attr("x", function(d,i){

              let lat=cityData.latitude;
              let lon=cityData.longitude;
              let pixslvalue = projection([lon,lat]);
              return pixslvalue[0]+20
            })
              .attr("y", function(d,i){
                console.log(cityData.longitude)
                let lat=cityData.latitude;
                let lon=cityData.longitude;
                let pixslvalue = projection([lon,lat]);
                return pixslvalue[1]+5
              })

            .text(function(d,i) {
              return cityData.name;  // Value of the text
            });
          




  // d3.select("text")
            //
            // .attr("fill","red")
};
function handleMouseOut(cityData) {
            // Use D3 to select element, change color back to normal
            d3.select(this)
              .transition()
              .attr('fill', '#136a8a')
              .attr("r",5);
            // Select text by id and then remove
            d3.select("#"+cityData.name).remove();  // Remove text location
          }
            console.log(handleMouseOver)

   viz.selectAll(".city").data(cityData).enter()
          .append("circle")
          .attr("cx", function(d,i){
            console.log(d.longitude)
            let lat=d.latitude;
            let lon=d.longitude;
            let pixslvalue = projection([lon,lat]);
            return pixslvalue[0]
          })
            .attr("cy", function(d,i){
              console.log(d.longitude)
              let lat=d.latitude;
              let lon=d.longitude;
              let pixslvalue = projection([lon,lat]);
              return pixslvalue[1]
            })
            .attr("r", 5)
            .attr("fill", "#136a8a")
            .on("mouseover",handleMouseOver)
            .on("mouseout",handleMouseOut)
//             .on('mouseover', function(d, i) {
//             d3.select(this)
//             .transition()
//             .attr('fill', '#00223E')
//             .attr("r",8);
//             citygroups.append("text")
//             .attr("x", function(d,i){
//                     let lat=d.latitude;
//                     let lon=d.longitude;
//                     let pixslvalue = projection([lon,lat]);
//                     return pixslvalue[0]+20
//                      })
//             .attr("y", function(d,i){
//                     let lat=d.latitude;
//                     let lon=d.longitude;
//                     let pixslvalue = projection([lon,lat]);
//                     return pixslvalue[1]+5
//                        })
//             .text(function(d){return d.name});
//
//
// })

          ;
      //     let citytext = citygroups
      //     .append("text")
      //     .attr("x", function(d,i){
      //       console.log(d.longitude)
      //       let lat=d.latitude;
      //       let lon=d.longitude;
      //       let pixslvalue = projection([lon,lat]);
      //       return pixslvalue[0]+20
      //     })
      //       .attr("y", function(d,i){
      //         console.log(d.longitude)
      //         let lat=d.latitude;
      //         let lon=d.longitude;
      //         let pixslvalue = projection([lon,lat]);
      //         return pixslvalue[1]+5
      //       })
      //     .text(function(d){return d.name})
      //     // .attr("fill","none")
      //     .attr("class","citytext")
      //
      // ;

//
// })
//           ;


    //       function randomColor(){
    //           return "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
    //         }
    //
              viz.selectAll(".cityline").data(link).enter()
              .append("path")
                .attr("d", path)
                    .attr("class", "cityline")
                .style("fill", "none")
                .style("stroke", "none")
                .style("stroke-width", 2)
                .transition()
                  .duration(10000)
                .delay(3000)

                .style("stroke", function() {
    return "hsl(" + Math.random() * 360 + ",60%,40%)";

    })
   .attr("class","cityline")

              ;



        });



});

});
