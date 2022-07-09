//const fs = require("fs");
//var files = fs.readdirSync("slideshow");
files = ["Slide1.png","Slide2.png"];
images = [];
for (file in files) {
  var div = document.getElementById("container");
  var mySlides = document.createElement("div");
  mySlides.className = "mySlides fade";
  div.appendChild(mySlides);
  var numbertext = document.createElement("div");
  numbertext.className = "numbertext";
  mySlides.appendChild(numbertext);
  index = parseInt(file) + 1;
  var text = document.createTextNode(index + "/" + files.length);
  numbertext.appendChild(text);
  var img = document.createElement("img");
  img.src = "slideshow/"+files[file];
  img.style = "width:100%"
  mySlides.appendChild(img);
}
//block.setAttribute("style", "text-align:center");