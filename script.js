function mouseAnim() {
    var elem = document.getElementById("mouse-wheel");   
    var pos = 0;
    var id = setInterval(step, 50);
    function step() {
        pos++; 
        elem.style.backgroundPositionY = pos + "px"; 
      }
}



window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}