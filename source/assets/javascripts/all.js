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
          $('#contactForm').html("<strong>Message sent.  I will get back to you soon, thank you!</strong>");
          //clear all fields
          $('#contactForm').trigger("reset");
          $('.formcontain p').addClass("hidden");
        },
        error: function(){
          // Fail message
          $('#contactForm').append("<strong>Sorry there seems to have been an issue.  Please try again.</strong>");
          //clear all fields
          $('#contactForm').trigger("reset");
        }
      });
    });
});

//tooltips
!function($){
    $(function(){
    
        $("li[title]").hover(function(e){
            var $this    = $(this),
                $tooltip = $("<div class=\"tooltip\">"),
                pos      = $this.position();
            
            $("body").append($tooltip);
            
            $tooltip.text($this.attr("title")).css({
              top: pos.top - $tooltip.outerHeight()-5,
              left: pos.left + ($this.outerWidth() - $tooltip.outerWidth())*.5
            });
            $this.removeAttr("title").data("tooltip", $tooltip);
            
        },function(e){
            var $this = $(this);
        
            $this.attr("title", $this.data("tooltip").text()).data("tooltip").remove();
        
        });
    
    });
}(jQuery);








