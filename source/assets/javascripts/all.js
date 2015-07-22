//= require_tree .

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
          $( ".row--slide" ).css("height", "150px");
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
  event.preventDefault ? event.preventDefault() : event.returnValue = false;
  $( ".row--slide" ).slideToggle("slow");
});









