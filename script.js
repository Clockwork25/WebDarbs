function mouseAnim() {
    var elem = document.getElementById("mouse-wheel");   
    var pos = 0;
    var id = setInterval(step, 50);

function step() {
        pos++; 
        elem.style.backgroundPositionY = pos + "px"; 
      }
    }