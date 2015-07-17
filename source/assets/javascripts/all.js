//= require_tree .


//SVG injection
var injectSVG = document.querySelectorAll('img.svg-inject');

// Options
var injectorOptions = {
  evalScripts: 'once',
  pngFallback: '../images/png/png',
  each: function (svg) {
    //Callback after each SVG is injected
    //console.log('SVG injected: ' + svg.getAttribute('id'));
  }
};

// Trigger the injection
SVGInjector(injectSVG, injectorOptions, function (totalSVGsInjected) {
  //Callback after all SVGs are injected
  //console.log('We injected ' + totalSVGsInjected + ' SVG(s)!');
  $('img.svg-inject').css('display', 'block');
});

//smooth scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//contact form
$(function() {
    $("#contactForm").submit(function(e) {
      e.preventDefault();
      $.ajax({
        url: "//formspree.io/louis@louisnovick.com",
        method: "POST",
        data: $(this).serialize(),
        dataType: "json",
        success: function(data){
          // Success message
          $('#contactForm').html("<p class='tci tac'>Transmission sent.  I will get back to you soon, thank you!</p>");
          $( ".row--slide" ).css("height", "90px");
          $( ".row--close" ).css("display", "none");
          //clear all fields
          $('#contactForm').trigger("reset");
          $('.form input').addClass("hidden");
        },
        error: function(){
          // Fail message
          $('#contactForm').append("<p class='tci tac'>Sorry there seems to have been an issue.  Please try again.</p>");
          //clear all fields
          $('#contactForm').trigger("reset");
        }
      });
    });
});

$(function(){
    $(".typed").typed({
        strings: ['Web Developer, Designer, Student'],
        typeSpeed: 30,
        showCursor: false
    });
});

$( ".active--slide" ).click(function() {
  event.preventDefault();
  $( ".row--slide" ).slideToggle("slow");
});









