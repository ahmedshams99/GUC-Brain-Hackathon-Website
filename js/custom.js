(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
          } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
          }
    });


    // PARALLAX EFFECT
    $.stellar({
      horizontalScrolling: false,
    }); 


    // ABOUT SLIDER
    $('.owl-carousel').owlCarousel({
      animateOut: 'fadeOut',
      items: 1,
      loop: true,
      autoplayHoverPause: false,
      autoplay: true,
      smartSpeed: 1000,
    });


    // SMOOTHSCROLL
    $(function() {
      $('.custom-navbar a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
            event.preventDefault();
      });
    });  

})(jQuery);


function hide(dots,showText,showButton) {
  var dots = document.getElementById(dots);
  var moreText = document.getElementById(showText);
  var btnText = document.getElementById(showButton);
  console.log(moreText);
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

