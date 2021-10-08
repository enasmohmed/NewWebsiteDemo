/**
* Template Name: Arsha - v2.3.1
* Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

 
$( document ).ready(function() {
    var w = window.innerWidth;
   
    if(w > 767){
        $('#menu-jk').scrollToFixed();
    }else{
        $('#menu-jk').scrollToFixed();
    }
    
})
 



  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

 
 // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox({
        'share': false
      });
    });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });
  
  var fullHeight = function() {

    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function(){
      $('.js-fullheight').css('height', $(window).height());
    });

  };
  fullHeight();
  // Slider 
      $('.home-slider').owlCarousel({
      loop:true,
      autoplay: false,
      margin:0,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      nav:true,
      dots: true,
      slideSpeed: 700,
      mouseDrag: true,
      singleItem: true,
      autoplayHoverPause: false,
      items: 1,
      navText : ["<span class='fa fa-angle-left'></span>","<span class='fa fa-angle-right'></span>"],
      responsive:{
        0:{
          items:1
        },
        600:{
          items:1
        },
        1000:{
          items:1
        }
      }
    });

})(jQuery);


 var card12 = document.querySelector(".card--12");

    card12.addEventListener('mousemove', function (e) {

      var wh = window.innerHeight / 2,
        ww = window.innerWidth / 2;
      card12.style.setProperty('--mouseX12', (e.clientX - ww) / 25);
      card12.style.setProperty('--mouseY12', (e.clientY - wh) / 25);

    });

    card12.addEventListener('mouseleave', function (e) {

      card12.style.setProperty('--mouseX12', 0);
      card12.style.setProperty('--mouseY12', 0);

    });

    var card13 = document.querySelector(".card--13");

    card13.addEventListener('mousemove', function (e) {

      var wh = window.innerHeight / 2,
        ww = window.innerWidth / 2;
      card13.style.setProperty('--mouseX12', (e.clientX - ww) / 25);
      card13.style.setProperty('--mouseY12', (e.clientY - wh) / 25);

    });

    card13.addEventListener('mouseleave', function (e) {

      card13.style.setProperty('--mouseX12', 0);
      card13.style.setProperty('--mouseY12', 0);

    });

    var card14 = document.querySelector(".card--14");

    card14.addEventListener('mousemove', function (e) {

      var wh = window.innerHeight / 2,
        ww = window.innerWidth / 2;
      card14.style.setProperty('--mouseX12', (e.clientX - ww) / 25);
      card14.style.setProperty('--mouseY12', (e.clientY - wh) / 25);

    });

    card14.addEventListener('mouseleave', function (e) {

      card14.style.setProperty('--mouseX12', 0);
      card14.style.setProperty('--mouseY12', 0);

    });


  /**
   * Initiate glightbox 
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });




var aText = new Array(
"Dox Solutions Cloud Programs to manage all business",
"and control provisions on their resources from",
"anywhere and at any time."
);
var iSpeed = 50; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();