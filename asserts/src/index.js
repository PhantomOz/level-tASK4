// colapsible Menu
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
const body = document.querySelector("body")
let bodyColor = window.getComputedStyle(body, null).getPropertyValue("background-color");
console.log(bodyColor)
document.getElementById("blue").addEventListener("click", function(){
    if (bodyColor === "rgb(0, 0, 0, 0)") {
        document.getElementById("blue").toggle("color-act")
    } else{
        body.style.backgroundColor = "rgb(0, 0, 0, 0)";
        document.getElementById("blue").toggle("color-act")
    }
})
document.getElementById("pinkish").addEventListener("click", function(){
    if (bodyColor === "#F24BC6") {
        document.getElementById("pinkish").setAttribute("class", "color pinkish color-act");
    } else{
        body.style.background = "#F24BC6";
        document.getElementById("pinkish").setAttribute("class", "color pinkish color-act");
    }
})
document.getElementById("yellowish").addEventListener("click", function(){
    if (bodyColor === "#FBEC06") {
        document.getElementById("yellowish").setAttribute("class", "color yellowish color-act");
    } else{
        body.style.background = "#FBEC06";
        body.style.color ="#ffffff"
        document.getElementById("yellowish").setAttribute("class", "color yellowish color-act");
    }
})
document.getElementById("yellowish").addEventListener("click", function(){
    if (bodyColor === "#FBEC06") {
        document.getElementById("yellowish").setAttribute("class", "color yellowish color-act");
    } else{
        body.style.background = "#FBEC06";
        body.style.color ="#ffffff"
        document.getElementById("yellowish").setAttribute("class", "color yellowish color-act");
    }
})