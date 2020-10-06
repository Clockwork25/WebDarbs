function mouseAnim() {
    var elem = document.getElementById("mouse-wheel");   
    var pos = 0;
    var id = setInterval(step, 50);

function step() {
        pos++; 
        elem.style.backgroundPositionY = pos + "px"; 
      }
    };

$(document).ready(function(){
  $( 'a:hidden' ).fadeIn( 2000 ).removeClass('hidden-title')
  $( 'div:hidden' ).fadeIn( 2000 ).removeClass('hidden-name')
});