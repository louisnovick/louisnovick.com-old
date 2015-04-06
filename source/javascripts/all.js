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
        }, 500);
        return false;
      }
    }
  });
});

//nav fade.  Only if browser is greater than 600px onload.
$(function() {
  if(window.innerWidth >= 600) {
    $(window).scroll(function(){
      var scrollTop = $(window).scrollTop();
      if(scrollTop > 0)
        $('.navigation').stop().animate({'opacity':'0.4'},400);
      else  
        $('.navigation').stop().animate({'opacity':'1'},400);
    });
    
    $('.navigation').hover(
      function (e) {
        var scrollTop = $(window).scrollTop();
        if(scrollTop != 0){
          $('.navigation').stop().animate({'opacity':'1'},400);
        }
      },
      function (e) {
        var scrollTop = $(window).scrollTop();
        if(scrollTop != 0){
          $('.navigation').stop().animate({'opacity':'0.4'},400);
        }
      }
    );
  }
  else {
    return false;
  }
});


var $event = $.event,
$special,
resizeTimeout;

$special = $event.special.debouncedresize = {
  setup: function() {
    $( this ).on( "resize", $special.handler );
  },
  teardown: function() {
    $( this ).off( "resize", $special.handler );
  },
  handler: function( event, execAsap ) {
    // Save the context
    var context = this,
      args = arguments,
      dispatch = function() {
        // set correct event type
        event.type = "debouncedresize";
        $event.dispatch.apply( context, args );
      };

    if ( resizeTimeout ) {
      clearTimeout( resizeTimeout );
    }

    execAsap ?
      dispatch() :
      resizeTimeout = setTimeout( dispatch, $special.threshold );
  },
  threshold: 250
};

var BLANK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

$.fn.imagesLoaded = function( callback ) {
  var $this = this,
    deferred = $.isFunction($.Deferred) ? $.Deferred() : 0,
    hasNotify = $.isFunction(deferred.notify),
    $images = $this.find('img').add( $this.filter('img') ),
    loaded = [],
    proper = [],
    broken = [];

  // Register deferred callbacks
  if ($.isPlainObject(callback)) {
    $.each(callback, function (key, value) {
      if (key === 'callback') {
        callback = value;
      } else if (deferred) {
        deferred[key](value);
      }
    });
  }

  function doneLoading() {
    var $proper = $(proper),
      $broken = $(broken);

    if ( deferred ) {
      if ( broken.length ) {
        deferred.reject( $images, $proper, $broken );
      } else {
        deferred.resolve( $images );
      }
    }

    if ( $.isFunction( callback ) ) {
      callback.call( $this, $images, $proper, $broken );
    }
  }

  function imgLoaded( img, isBroken ) {
    if ( img.src === BLANK || $.inArray( img, loaded ) !== -1 ) {
      return;
    }

    loaded.push( img );

    if ( isBroken ) {
      broken.push( img );
    } else {
      proper.push( img );
    }

    $.data( img, 'imagesLoaded', { isBroken: isBroken, src: img.src } );

    if ( hasNotify ) {
      deferred.notifyWith( $(img), [ isBroken, $images, $(proper), $(broken) ] );
    }

    if ( $images.length === loaded.length ){
      setTimeout( doneLoading );
      $images.unbind( '.imagesLoaded' );
    }
  }

  if ( !$images.length ) {
    doneLoading();
  } else {
    $images.bind( 'load.imagesLoaded error.imagesLoaded', function( event ){
      imgLoaded( event.target, event.type === 'error' );
    }).each( function( i, el ) {
      var src = el.src;

      var cached = $.data( el, 'imagesLoaded' );
      if ( cached && cached.src === src ) {
        imgLoaded( el, cached.isBroken );
        return;
      }

      if ( el.complete && el.naturalWidth !== undefined ) {
        imgLoaded( el, el.naturalWidth === 0 || el.naturalHeight === 0 );
        return;
      }

      if ( el.readyState || el.complete ) {
        el.src = BLANK;
        el.src = src;
      }
    });
  }

  return deferred ? deferred.promise( $this ) : $this;
};

var Grid = (function() {

  var $grid = $( '#work-grid' ),
    $items = $grid.children( 'li' ),
    current = -1,

    previewPos = -1,
    scrollExtra = 0,
    marginExpanded = 10,
    $window = $( window ), winsize,
    $body = $( 'html, body' ),
    transEndEventNames = {
      'WebkitTransition' : 'webkitTransitionEnd',
      'MozTransition' : 'transitionend',
      'OTransition' : 'oTransitionEnd',
      'msTransition' : 'MSTransitionEnd',
      'transition' : 'transitionend'
    },
    transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
    support = Modernizr.csstransitions,
    settings = {
      minHeight : 350,
      speed : 500,
      easing : 'ease'
    };

  function init( config ) {
    
    settings = $.extend( true, {}, settings, config );

    $grid.imagesLoaded( function() {

      saveItemInfo( true );
      getWinSize();
      initEvents();

    } );

  }

  function addItems( $newitems ) {

    $items = $items.add( $newitems );

    $newitems.each( function() {
      var $item = $( this );
      $item.data( {
        offsetTop : $item.offset().top,
        height : $item.height()
      } );
    } );

    initItemsEvents( $newitems );

  }

  function saveItemInfo( saveheight ) {
    $items.each( function() {
      var $item = $( this );
      $item.data( 'offsetTop', $item.offset().top );
      if( saveheight ) {
        $item.data( 'height', $item.height() );
      }
    } );
  }

  function initEvents() {

    initItemsEvents( $items );
    
    $window.on( 'debouncedresize', function() {
      
      scrollExtra = 0;
      previewPos = -1;
      saveItemInfo();
      getWinSize();
      var preview = $.data( this, 'preview' );
      if( typeof preview != 'undefined' ) {
        hidePreview();
      }

    } );

  }

  function initItemsEvents( $items ) {
    $items.on( 'click', 'span.work-close', function() {
      hidePreview();
      return false;
    } ).children( 'a' ).on( 'click', function(e) {

      var $item = $( this ).parent();
      // check if item already opened
      current === $item.index() ? hidePreview() : showPreview( $item );
      return false;

    } );
  }

  function getWinSize() {
    winsize = { width : $window.width(), height : $window.height() };
  }

  function showPreview( $item ) {

    var preview = $.data( this, 'preview' ),
      position = $item.data( 'offsetTop' );

    scrollExtra = 0;

    if( typeof preview != 'undefined' ) {

      if( previewPos !== position ) {
        if( position > previewPos ) {
          scrollExtra = preview.height;
        }
        hidePreview();
      }
      // same row
      else {
        preview.update( $item );
        return false;
      }
      
    }

    // update previewPos
    previewPos = position;
    // initialize new preview for the clicked item
    preview = $.data( this, 'preview', new Preview( $item ) );
    // expand preview overlay
    preview.open();

  }

  function hidePreview() {
    current = -1;
    var preview = $.data( this, 'preview' );
    preview.close();
    $.removeData( this, 'preview' );
  }

  // the preview obj / overlay
  function Preview( $item ) {
    this.$item = $item;
    this.expandedIdx = this.$item.index();
    this.create();
    this.update();
  }

  Preview.prototype = {
    create : function() {
      // create Preview structure:
      this.$title = $( '<h3></h3>' );
      this.$description = $( '<p></p>' );
      this.$href = $( '<a href="#" target="_blank">Visit website</a>' );
      this.$details = $( '<div class="work-details"></div>' ).append( this.$title, this.$description, this.$href );
      this.$loading = $( '<div class="work-loading"></div>' );
      this.$fullimage = $( '<div class="work-fullimg"></div>' ).append( this.$loading );
      this.$closePreview = $( '<span class="work-close"></span>' );
      this.$previewInner = $( '<div class="work-expander-inner"></div>' ).append( this.$closePreview, this.$fullimage, this.$details );
      this.$previewEl = $( '<div class="work-expander"></div>' ).append( this.$previewInner );
      // append preview element to the item
      this.$item.append( this.getEl() );
      // set the transitions for the preview and the item
      if( support ) {
        this.setTransition();
      }
    },
    update : function( $item ) {

      if( $item ) {
        this.$item = $item;
      }
      
      if( current !== -1 ) {
        var $currentItem = $items.eq( current );
        $currentItem.removeClass( 'work-expanded' );
        this.$item.addClass( 'work-expanded' );
        // position the preview correctly
        this.positionPreview();
      }

      // update current value
      current = this.$item.index();

      // update preview´s content
      var $itemEl = this.$item.children( 'a' ),
        eldata = {
          href : $itemEl.attr( 'href' ),
          largesrc : $itemEl.data( 'largesrc' ),
          title : $itemEl.data( 'title' ),
          description : $itemEl.data( 'description' )
        };

      this.$title.html( eldata.title );
      this.$description.html( eldata.description );
      this.$href.attr( 'href', eldata.href );

      var self = this;
      
      // remove the current image in the preview
      if( typeof self.$largeImg != 'undefined' ) {
        self.$largeImg.remove();
      }

      if( self.$fullimage.is( ':visible' ) ) {
        this.$loading.show();
        $( '<img/>' ).load( function() {
          var $img = $( this );
          if( $img.attr( 'src' ) === self.$item.children('a').data( 'largesrc' ) ) {
            self.$loading.hide();
            self.$fullimage.find( 'img' ).remove();
            self.$largeImg = $img.fadeIn( 350 );
            self.$fullimage.append( self.$largeImg );
          }
        } ).attr( 'src', eldata.largesrc ); 
      }

    },
    open : function() {

      setTimeout( $.proxy( function() { 
        // set the height for the preview and the item
        this.setHeights();
        // scroll to position the preview in the right place
        this.positionPreview();
      }, this ), 25 );

    },
    close : function() {

      var self = this,
        onEndFn = function() {
          if( support ) {
            $( this ).off( transEndEventName );
          }
          self.$item.removeClass( 'work-expanded' );
          self.$previewEl.remove();
        };

      setTimeout( $.proxy( function() {

        if( typeof this.$largeImg !== 'undefined' ) {
          this.$largeImg.fadeOut( 'fast' );
        }
        this.$previewEl.css( 'height', 0 );
        // the current expanded item (might be different from this.$item)
        var $expandedItem = $items.eq( this.expandedIdx );
        $expandedItem.css( 'height', $expandedItem.data( 'height' ) ).on( transEndEventName, onEndFn );

        if( !support ) {
          onEndFn.call();
        }

      }, this ), 25 );
      
      return false;

    },
    calcHeight : function() {

      var heightPreview = winsize.height - this.$item.data( 'height' ) - marginExpanded,
        itemHeight = winsize.height;

      if( heightPreview < settings.minHeight ) {
        heightPreview = settings.minHeight;
        itemHeight = settings.minHeight + this.$item.data( 'height' ) + marginExpanded;
      }

      this.height = heightPreview;
      this.itemHeight = itemHeight;

    },
    setHeights : function() {

      var self = this,
        onEndFn = function() {
          if( support ) {
            self.$item.off( transEndEventName );
          }
          self.$item.addClass( 'work-expanded' );
        };

      this.calcHeight();
      this.$previewEl.css( 'height', this.height );
      this.$item.css( 'height', this.itemHeight ).on( transEndEventName, onEndFn );

      if( !support ) {
        onEndFn.call();
      }

    },
    positionPreview : function() {

      // scroll page
      // case 1 : preview height + item height fits in window´s height
      // case 2 : preview height + item height does not fit in window´s height and preview height is smaller than window´s height
      // case 3 : preview height + item height does not fit in window´s height and preview height is bigger than window´s height
      var position = this.$item.data( 'offsetTop' ),
        previewOffsetT = this.$previewEl.offset().top - scrollExtra,
        scrollVal = this.height + this.$item.data( 'height' ) + marginExpanded <= winsize.height ? position : this.height < winsize.height ? previewOffsetT - ( winsize.height - this.height ) : previewOffsetT;
      
      $body.animate( { scrollTop : scrollVal }, settings.speed );

    },
    setTransition  : function() {
      this.$previewEl.css( 'transition', 'height ' + settings.speed + 'ms ' + settings.easing );
      this.$item.css( 'transition', 'height ' + settings.speed + 'ms ' + settings.easing );
    },
    getEl : function() {
      return this.$previewEl;
    }
  }

  return { 
    init : init,
    addItems : addItems
  };

})();

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




