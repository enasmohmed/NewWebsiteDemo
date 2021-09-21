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



$('#play-video').on('click', function(e){
  e.preventDefault();
  $('#video-overlay').addClass('open');
  $("#video-overlay").append('<iframe class="show-video" width="560" height="315" src="https://drive.google.com/file/d/1rI8O3tKUM3jSpbq1SiB9yqqNL67801yr/view?usp=sharing" frameborder="0" allowfullscreen></iframe>');
});

$('.video-overlay, .video-overlay-close').on('click', function(e){
  e.preventDefault();
  close_video();
});

$(document).keyup(function(e){
  if(e.keyCode === 27) { close_video(); }
});

function close_video() {
  $('.video-overlay.open').removeClass('open').find('iframe').remove();
};