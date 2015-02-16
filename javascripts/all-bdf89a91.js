window.Modernizr=function(e,t,i){function n(e){$.cssText=e}function r(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function o(e,t){for(var n in e){var r=e[n];if(!a(r,"-")&&$[r]!==i)return"pfx"==t?r:!0}return!1}function s(e,t,n){for(var a in e){var o=t[e[a]];if(o!==i)return n===!1?e[a]:r(o,"function")?o.bind(n||t):o}return!1}function c(e,t,i){var n=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+w.join(n+" ")+n).split(" ");return r(t,"string")||r(t,"undefined")?o(a,t):(a=(e+" "+b.join(n+" ")+n).split(" "),s(a,t,i))}var l,h,d,u="2.6.2",f={},p=!0,m=t.documentElement,g="modernizr",v=t.createElement(g),$=v.style,y=({}.toString,"Webkit Moz O ms"),w=y.split(" "),b=y.toLowerCase().split(" "),E={},T=[],x=T.slice,A={}.hasOwnProperty;d=r(A,"undefined")||r(A.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(e,t){return A.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var i=x.call(arguments,1),n=function(){if(this instanceof n){var r=function(){};r.prototype=t.prototype;var a=new r,o=t.apply(a,i.concat(x.call(arguments)));return Object(o)===o?o:a}return t.apply(e,i.concat(x.call(arguments)))};return n}),E.csstransitions=function(){return c("transition")};for(var k in E)d(E,k)&&(h=k.toLowerCase(),f[h]=E[k](),T.push((f[h]?"":"no-")+h));return f.addTest=function(e,t){if("object"==typeof e)for(var n in e)d(e,n)&&f.addTest(n,e[n]);else{if(e=e.toLowerCase(),f[e]!==i)return f;t="function"==typeof t?t():t,"undefined"!=typeof p&&p&&(m.className+=" "+(t?"":"no-")+e),f[e]=t}return f},n(""),v=l=null,function(e,t){function i(e,t){var i=e.createElement("p"),n=e.getElementsByTagName("head")[0]||e.documentElement;return i.innerHTML="x<style>"+t+"</style>",n.insertBefore(i.lastChild,n.firstChild)}function n(){var e=v.elements;return"string"==typeof e?e.split(" "):e}function r(e){var t=g[e[p]];return t||(t={},m++,e[p]=m,g[m]=t),t}function a(e,i,n){if(i||(i=t),h)return i.createElement(e);n||(n=r(i));var a;return a=n.cache[e]?n.cache[e].cloneNode():f.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e),a.canHaveChildren&&!u.test(e)?n.frag.appendChild(a):a}function o(e,i){if(e||(e=t),h)return e.createDocumentFragment();i=i||r(e);for(var a=i.frag.cloneNode(),o=0,s=n(),c=s.length;c>o;o++)a.createElement(s[o]);return a}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(i){return v.shivMethods?a(i,e,t):t.createElem(i)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(v,t.frag)}function c(e){e||(e=t);var n=r(e);return v.shivCSS&&!l&&!n.hasCSS&&(n.hasCSS=!!i(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),h||s(e,n),e}var l,h,d=e.html5||{},u=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",m=0,g={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,h=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(i){l=!0,h=!0}}();var v={elements:d.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:d.shivCSS!==!1,supportsUnknownElements:h,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:c,createElement:a,createDocumentFragment:o};e.html5=v,c(t)}(this,t),f._version=u,f._domPrefixes=b,f._cssomPrefixes=w,f.testProp=function(e){return o([e])},f.testAllProps=c,f.prefixed=function(e,t,i){return t?c(e,t,i):c(e,"pfx")},m.className=m.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(p?" js "+T.join(" "):""),f}(this,this.document),function(e,t,i){function n(e){return"[object Function]"==g.call(e)}function r(e){return"string"==typeof e}function a(){}function o(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function s(){var e=v.shift();$=1,e?e.t?p(function(){("c"==e.t?u.injectCss:u.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),s()):$=0}function c(e,i,n,r,a,c,l){function h(t){if(!f&&o(d.readyState)&&(y.r=f=1,!$&&s(),d.onload=d.onreadystatechange=null,t)){"img"!=e&&p(function(){b.removeChild(d)},50);for(var n in k[i])k[i].hasOwnProperty(n)&&k[i][n].onload()}}var l=l||u.errorTimeout,d=t.createElement(e),f=0,g=0,y={t:n,s:i,e:a,a:c,x:l};1===k[i]&&(g=1,k[i]=[]),"object"==e?d.data=i:(d.src=i,d.type=e),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){h.call(this,g)},v.splice(r,0,y),"img"!=e&&(g||2===k[i]?(b.insertBefore(d,w?null:m),p(h,l)):k[i].push(d))}function l(e,t,i,n,a){return $=0,t=t||"j",r(e)?c("c"==t?T:E,e,t,this.i++,i,n,a):(v.splice(this.i++,0,e),1==v.length&&s()),this}function h(){var e=u;return e.loader={load:l,i:0},e}var d,u,f=t.documentElement,p=e.setTimeout,m=t.getElementsByTagName("script")[0],g={}.toString,v=[],$=0,y="MozAppearance"in f.style,w=y&&!!t.createRange().compareNode,b=w?f:m.parentNode,f=e.opera&&"[object Opera]"==g.call(e.opera),f=!!t.attachEvent&&!f,E=y?"object":f?"script":"img",T=f?"script":E,x=Array.isArray||function(e){return"[object Array]"==g.call(e)},A=[],k={},j={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};u=function(e){function t(e){var t,i,n,e=e.split("!"),r=A.length,a=e.pop(),o=e.length,a={url:a,origUrl:a,prefixes:e};for(i=0;o>i;i++)n=e[i].split("="),(t=j[n.shift()])&&(a=t(a,n));for(i=0;r>i;i++)a=A[i](a);return a}function o(e,r,a,o,s){var c=t(e),l=c.autoCallback;c.url.split(".").pop().split("?").shift(),c.bypass||(r&&(r=n(r)?r:r[e]||r[o]||r[e.split("/").pop().split("?")[0]]),c.instead?c.instead(e,r,a,o,s):(k[c.url]?c.noexec=!0:k[c.url]=1,a.load(c.url,c.forceCSS||!c.forceJS&&"css"==c.url.split(".").pop().split("?").shift()?"c":i,c.noexec,c.attrs,c.timeout),(n(r)||n(l))&&a.load(function(){h(),r&&r(c.origUrl,s,o),l&&l(c.origUrl,s,o),k[c.url]=2})))}function s(e,t){function i(e,i){if(e){if(r(e))i||(d=function(){var e=[].slice.call(arguments);u.apply(this,e),f()}),o(e,d,t,0,l);else if(Object(e)===e)for(c in s=function(){var t,i=0;for(t in e)e.hasOwnProperty(t)&&i++;return i}(),e)e.hasOwnProperty(c)&&(!i&&!--s&&(n(d)?d=function(){var e=[].slice.call(arguments);u.apply(this,e),f()}:d[c]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),f()}}(u[c])),o(e[c],d,t,c,l))}else!i&&f()}var s,c,l=!!e.test,h=e.load||e.both,d=e.callback||a,u=d,f=e.complete||a;i(l?e.yep:e.nope,!!h),h&&i(h)}var c,l,d=this.yepnope.loader;if(r(e))o(e,0,d,0);else if(x(e))for(c=0;c<e.length;c++)l=e[c],r(l)?o(l,0,d,0):x(l)?u(l):Object(l)===l&&s(l,d);else Object(e)===e&&s(e,d)},u.addPrefix=function(e,t){j[e]=t},u.addFilter=function(e){A.push(e)},u.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",d=function(){t.removeEventListener("DOMContentLoaded",d,0),t.readyState="complete"},0)),e.yepnope=h(),e.yepnope.executeStack=s,e.yepnope.injectJs=function(e,i,n,r,c,l){var h,d,f=t.createElement("script"),r=r||u.errorTimeout;f.src=e;for(d in n)f.setAttribute(d,n[d]);i=l?s:i||a,f.onreadystatechange=f.onload=function(){!h&&o(f.readyState)&&(h=1,i(),f.onload=f.onreadystatechange=null)},p(function(){h||(h=1,i(1))},r),c?f.onload():m.parentNode.insertBefore(f,m)},e.yepnope.injectCss=function(e,i,n,r,o,c){var l,r=t.createElement("link"),i=c?s:i||a;r.href=e,r.rel="stylesheet",r.type="text/css";for(l in n)r.setAttribute(l,n[l]);o||(m.parentNode.insertBefore(r,m),p(i,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},$(document).ready(function(){var e=$("#js-mobile-menu").unbind();$("#js-navigation-menu").removeClass("show"),e.on("click",function(e){e.preventDefault(),$("#js-navigation-menu").slideToggle(function(){$("#js-navigation-menu").is(":hidden")&&$("#js-navigation-menu").removeAttr("style")})})}),$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html,body").animate({scrollTop:e.offset().top},500),!1}})});var $event=$.event,$special,resizeTimeout;$special=$event.special.debouncedresize={setup:function(){$(this).on("resize",$special.handler)},teardown:function(){$(this).off("resize",$special.handler)},handler:function(e,t){var i=this,n=arguments,r=function(){e.type="debouncedresize",$event.dispatch.apply(i,n)};resizeTimeout&&clearTimeout(resizeTimeout),t?r():resizeTimeout=setTimeout(r,$special.threshold)},threshold:250};var BLANK="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";$.fn.imagesLoaded=function(e){function t(){var t=$(c),i=$(l);r&&(l.length?r.reject(o,t,i):r.resolve(o)),$.isFunction(e)&&e.call(n,o,t,i)}function i(e,i){e.src!==BLANK&&-1===$.inArray(e,s)&&(s.push(e),i?l.push(e):c.push(e),$.data(e,"imagesLoaded",{isBroken:i,src:e.src}),a&&r.notifyWith($(e),[i,o,$(c),$(l)]),o.length===s.length&&(setTimeout(t),o.unbind(".imagesLoaded")))}var n=this,r=$.isFunction($.Deferred)?$.Deferred():0,a=$.isFunction(r.notify),o=n.find("img").add(n.filter("img")),s=[],c=[],l=[];return $.isPlainObject(e)&&$.each(e,function(t,i){"callback"===t?e=i:r&&r[t](i)}),o.length?o.bind("load.imagesLoaded error.imagesLoaded",function(e){i(e.target,"error"===e.type)}).each(function(e,t){var n=t.src,r=$.data(t,"imagesLoaded");return r&&r.src===n?void i(t,r.isBroken):t.complete&&void 0!==t.naturalWidth?void i(t,0===t.naturalWidth||0===t.naturalHeight):void((t.readyState||t.complete)&&(t.src=BLANK,t.src=n))}):t(),r?r.promise(n):n};var Grid=function(){function e(e){E=$.extend(!0,{},E,e),h.imagesLoaded(function(){i(!0),a(),n()})}function t(e){d=d.add(e),e.each(function(){var e=$(this);e.data({offsetTop:e.offset().top,height:e.height()})}),r(e)}function i(e){d.each(function(){var t=$(this);t.data("offsetTop",t.offset().top),e&&t.data("height",t.height())})}function n(){r(d),g.on("debouncedresize",function(){p=0,f=-1,i(),a();var e=$.data(this,"preview");"undefined"!=typeof e&&s()})}function r(e){e.on("click","span.work-close",function(){return s(),!1}).children("a").on("click",function(){var e=$(this).parent();return u===e.index()?s():o(e),!1})}function a(){l={width:g.width(),height:g.height()}}function o(e){var t=$.data(this,"preview"),i=e.data("offsetTop");if(p=0,"undefined"!=typeof t){if(f===i)return t.update(e),!1;i>f&&(p=t.height),s()}f=i,t=$.data(this,"preview",new c(e)),t.open()}function s(){u=-1;var e=$.data(this,"preview");e.close(),$.removeData(this,"preview")}function c(e){this.$item=e,this.expandedIdx=this.$item.index(),this.create(),this.update()}var l,h=$("#work-grid"),d=h.children("li"),u=-1,f=-1,p=0,m=10,g=$(window),v=$("html, body"),y={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},w=y[Modernizr.prefixed("transition")],b=Modernizr.csstransitions,E={minHeight:200,speed:500,easing:"ease"};return c.prototype={create:function(){this.$title=$("<h3></h3>"),this.$description=$("<p></p>"),this.$href=$('<a href="#">Visit website</a>'),this.$details=$('<div class="work-details"></div>').append(this.$title,this.$description,this.$href),this.$loading=$('<div class="work-loading"></div>'),this.$fullimage=$('<div class="work-fullimg"></div>').append(this.$loading),this.$closePreview=$('<span class="work-close"></span>'),this.$previewInner=$('<div class="work-expander-inner"></div>').append(this.$closePreview,this.$fullimage,this.$details),this.$previewEl=$('<div class="work-expander"></div>').append(this.$previewInner),this.$item.append(this.getEl()),b&&this.setTransition()},update:function(e){if(e&&(this.$item=e),-1!==u){var t=d.eq(u);t.removeClass("work-expanded"),this.$item.addClass("work-expanded"),this.positionPreview()}u=this.$item.index();var i=this.$item.children("a"),n={href:i.attr("href"),largesrc:i.data("largesrc"),title:i.data("title"),description:i.data("description")};this.$title.html(n.title),this.$description.html(n.description),this.$href.attr("href",n.href);var r=this;"undefined"!=typeof r.$largeImg&&r.$largeImg.remove(),r.$fullimage.is(":visible")&&(this.$loading.show(),$("<img/>").load(function(){var e=$(this);e.attr("src")===r.$item.children("a").data("largesrc")&&(r.$loading.hide(),r.$fullimage.find("img").remove(),r.$largeImg=e.fadeIn(350),r.$fullimage.append(r.$largeImg))}).attr("src",n.largesrc))},open:function(){setTimeout($.proxy(function(){this.setHeights(),this.positionPreview()},this),25)},close:function(){var e=this,t=function(){b&&$(this).off(w),e.$item.removeClass("work-expanded"),e.$previewEl.remove()};return setTimeout($.proxy(function(){"undefined"!=typeof this.$largeImg&&this.$largeImg.fadeOut("fast"),this.$previewEl.css("height",0);var e=d.eq(this.expandedIdx);e.css("height",e.data("height")).on(w,t),b||t.call()},this),25),!1},calcHeight:function(){var e=l.height-this.$item.data("height")-m,t=l.height;e<E.minHeight&&(e=E.minHeight,t=E.minHeight+this.$item.data("height")+m),this.height=e,this.itemHeight=t},setHeights:function(){var e=this,t=function(){b&&e.$item.off(w),e.$item.addClass("work-expanded")};this.calcHeight(),this.$previewEl.css("height",this.height),this.$item.css("height",this.itemHeight).on(w,t),b||t.call()},positionPreview:function(){var e=this.$item.data("offsetTop"),t=this.$previewEl.offset().top-p,i=this.height+this.$item.data("height")+m<=l.height?e:this.height<l.height?t-(l.height-this.height):t;v.animate({scrollTop:i},E.speed)},setTransition:function(){this.$previewEl.css("transition","height "+E.speed+"ms "+E.easing),this.$item.css("transition","height "+E.speed+"ms "+E.easing)},getEl:function(){return this.$previewEl}},{init:e,addItems:t}}();