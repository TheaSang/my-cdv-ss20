
function myFunction(){
  document.getElementById("show").innerHTML = "";
  // clear our the div

  var inputnumber =document.getElementById("inputNumber").value;
  var i;
  for (i = 0; i < inputnumber; i++) {
  var pop = document.createElement("span");
  // var finalpop = document.getElementById('show').appendChild(pop);
  // var finalpop =document.getElementById('show').appendChild(pop).innerHTML;
  //   document.getElementById('show').innerHTML= finalpop;
  document.getElementById('show').appendChild(pop)
}


}
