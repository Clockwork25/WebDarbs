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

$(document).ready(function() {
    
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
  
      /* Check the location of each desired element */
      $('.skills-logo').each( function(i){
          
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object ){
              
              $(this).animate({'opacity':'1'},1000);
                  
          }
          
      }); 
  
  });
  
});