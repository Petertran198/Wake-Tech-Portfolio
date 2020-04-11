 
  //Sliding Navbar 
  (function($) {
    "use strict"; // Start use strict to make it accurate 
  
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 56)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 100
    });
  
  })(jQuery); // end strict
  
  
// smooth scrolling effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });




//Sorting imported for jqueryui
  $( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );

// Selecting the portfolio items and add styling to it 
$portfolioList = $('#sortable div, #sortable a')
$selectedPortfolio = {
  border: "8px solid #25292d",
  backgroundColor: "#eef1f3"

}
 $portfolioList.on("mouseover", function(){
    $(this).css('border', "8px solid #343a40");
  })
 
  $portfolioList.on("mousedown", function(){
    $(this).css($selectedPortfolio);
  })
  $portfolioList.on("mouseup", function(){
    $(this).css('background', "#f8f9fa");
  })


