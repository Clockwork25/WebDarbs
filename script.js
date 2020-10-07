function mouseAnim() {
  var elem = document.getElementById("mouse-wheel");   
  var pos = 0;
  var id = setInterval(step, 50);
  
  function step() {
      pos++; 
      elem.style.backgroundPositionY = pos + "px"; 
    }
};




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

$(document).ready(function(){
$( 'a:hidden' ).fadeIn( 2000 ).removeClass('hidden-title')
$( 'div:hidden' ).fadeIn( 2000 ).removeClass('hidden-name')
})





let toggleNavStatus = false; //default state closed

let toggleNav = function(){
  let getSidebar = document.querySelector(".nav-sidebar");
  let getSidebarUl = document.querySelector(".nav-sidebar ul");
  let getSidebarTitle = document.querySelector(".nav-sidebar span");
  let getSidebarLinks = document.querySelectorAll(".nav-sidebar a"); //querySelectorAll to grab all elements with that path

  //open
  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "230px";
    getSidebarTitle = "0.8";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength.length; i++){
      getSidebarLinks[i].style.opacity = "1";
    
    }

    toggleNavStatus = true;
  }

  //close
  else if (toggleNavStatus === true) {
    getSidebarUl.style.visibility = "hidden";
    getSidebar.style.width = "0px";
    getSidebarTitle = "0";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength.length; i++){
      getSidebarLinks[i].style.opacity = "0";
    
    }

    toggleNavStatus = false;
  }

}