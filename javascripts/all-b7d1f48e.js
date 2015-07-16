window.Modernizr=function(e,t,n){function i(e){$.cssText=e}function r(e,t){return typeof e===t}function o(e,t){return!!~(""+e).indexOf(t)}function a(e,t){for(var i in e){var r=e[i];if(!o(r,"-")&&$[r]!==n)return"pfx"==t?r:!0}return!1}function s(e,t,i){for(var o in e){var a=t[e[o]];if(a!==n)return i===!1?e[o]:r(a,"function")?a.bind(i||t):a}return!1}function c(e,t,n){var i=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+b.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?a(o,t):(o=(e+" "+w.join(i+" ")+i).split(" "),s(o,t,n))}var l,u,d,f="2.6.2",h={},p=!0,m=t.documentElement,g="modernizr",v=t.createElement(g),$=v.style,y=({}.toString,"Webkit Moz O ms"),b=y.split(" "),w=y.toLowerCase().split(" "),x={},A=[],E=A.slice,T={}.hasOwnProperty;d=r(T,"undefined")||r(T.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(e,t){return T.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=E.call(arguments,1),i=function(){if(this instanceof i){var r=function(){};r.prototype=t.prototype;var o=new r,a=t.apply(o,n.concat(E.call(arguments)));return Object(a)===a?a:o}return t.apply(e,n.concat(E.call(arguments)))};return i}),x.csstransitions=function(){return c("transition")};for(var j in x)d(x,j)&&(u=j.toLowerCase(),h[u]=x[j](),A.push((h[u]?"":"no-")+u));return h.addTest=function(e,t){if("object"==typeof e)for(var i in e)d(e,i)&&h.addTest(i,e[i]);else{if(e=e.toLowerCase(),h[e]!==n)return h;t="function"==typeof t?t():t,"undefined"!=typeof p&&p&&(m.className+=" "+(t?"":"no-")+e),h[e]=t}return h},i(""),v=l=null,function(e,t){function n(e,t){var n=e.createElement("p"),i=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var e=v.elements;return"string"==typeof e?e.split(" "):e}function r(e){var t=g[e[p]];return t||(t={},m++,e[p]=m,g[m]=t),t}function o(e,n,i){if(n||(n=t),u)return n.createElement(e);i||(i=r(n));var o;return o=i.cache[e]?i.cache[e].cloneNode():h.test(e)?(i.cache[e]=i.createElem(e)).cloneNode():i.createElem(e),o.canHaveChildren&&!f.test(e)?i.frag.appendChild(o):o}function a(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||r(e);for(var o=n.frag.cloneNode(),a=0,s=i(),c=s.length;c>a;a++)o.createElement(s[a]);return o}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return v.shivMethods?o(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(v,t.frag)}function c(e){e||(e=t);var i=r(e);return v.shivCSS&&!l&&!i.hasCSS&&(i.hasCSS=!!n(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),u||s(e,i),e}var l,u,d=e.html5||{},f=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",m=0,g={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){l=!0,u=!0}}();var v={elements:d.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:d.shivCSS!==!1,supportsUnknownElements:u,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:c,createElement:o,createDocumentFragment:a};e.html5=v,c(t)}(this,t),h._version=f,h._domPrefixes=w,h._cssomPrefixes=b,h.testProp=function(e){return a([e])},h.testAllProps=c,h.prefixed=function(e,t,n){return t?c(e,t,n):c(e,"pfx")},m.className=m.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(p?" js "+A.join(" "):""),h}(this,this.document),function(e,t,n){function i(e){return"[object Function]"==g.call(e)}function r(e){return"string"==typeof e}function o(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function s(){var e=v.shift();$=1,e?e.t?p(function(){("c"==e.t?f.injectCss:f.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),s()):$=0}function c(e,n,i,r,o,c,l){function u(t){if(!h&&a(d.readyState)&&(y.r=h=1,!$&&s(),d.onload=d.onreadystatechange=null,t)){"img"!=e&&p(function(){w.removeChild(d)},50);for(var i in j[n])j[n].hasOwnProperty(i)&&j[n][i].onload()}}var l=l||f.errorTimeout,d=t.createElement(e),h=0,g=0,y={t:i,s:n,e:o,a:c,x:l};1===j[n]&&(g=1,j[n]=[]),"object"==e?d.data=n:(d.src=n,d.type=e),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){u.call(this,g)},v.splice(r,0,y),"img"!=e&&(g||2===j[n]?(w.insertBefore(d,b?null:m),p(u,l)):j[n].push(d))}function l(e,t,n,i,o){return $=0,t=t||"j",r(e)?c("c"==t?A:x,e,t,this.i++,n,i,o):(v.splice(this.i++,0,e),1==v.length&&s()),this}function u(){var e=f;return e.loader={load:l,i:0},e}var d,f,h=t.documentElement,p=e.setTimeout,m=t.getElementsByTagName("script")[0],g={}.toString,v=[],$=0,y="MozAppearance"in h.style,b=y&&!!t.createRange().compareNode,w=b?h:m.parentNode,h=e.opera&&"[object Opera]"==g.call(e.opera),h=!!t.attachEvent&&!h,x=y?"object":h?"script":"img",A=h?"script":x,E=Array.isArray||function(e){return"[object Array]"==g.call(e)},T=[],j={},S={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};f=function(e){function t(e){var t,n,i,e=e.split("!"),r=T.length,o=e.pop(),a=e.length,o={url:o,origUrl:o,prefixes:e};for(n=0;a>n;n++)i=e[n].split("="),(t=S[i.shift()])&&(o=t(o,i));for(n=0;r>n;n++)o=T[n](o);return o}function a(e,r,o,a,s){var c=t(e),l=c.autoCallback;c.url.split(".").pop().split("?").shift(),c.bypass||(r&&(r=i(r)?r:r[e]||r[a]||r[e.split("/").pop().split("?")[0]]),c.instead?c.instead(e,r,o,a,s):(j[c.url]?c.noexec=!0:j[c.url]=1,o.load(c.url,c.forceCSS||!c.forceJS&&"css"==c.url.split(".").pop().split("?").shift()?"c":n,c.noexec,c.attrs,c.timeout),(i(r)||i(l))&&o.load(function(){u(),r&&r(c.origUrl,s,a),l&&l(c.origUrl,s,a),j[c.url]=2})))}function s(e,t){function n(e,n){if(e){if(r(e))n||(d=function(){var e=[].slice.call(arguments);f.apply(this,e),h()}),a(e,d,t,0,l);else if(Object(e)===e)for(c in s=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(c)&&(!n&&!--s&&(i(d)?d=function(){var e=[].slice.call(arguments);f.apply(this,e),h()}:d[c]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),h()}}(f[c])),a(e[c],d,t,c,l))}else!n&&h()}var s,c,l=!!e.test,u=e.load||e.both,d=e.callback||o,f=d,h=e.complete||o;n(l?e.yep:e.nope,!!u),u&&n(u)}var c,l,d=this.yepnope.loader;if(r(e))a(e,0,d,0);else if(E(e))for(c=0;c<e.length;c++)l=e[c],r(l)?a(l,0,d,0):E(l)?f(l):Object(l)===l&&s(l,d);else Object(e)===e&&s(e,d)},f.addPrefix=function(e,t){S[e]=t},f.addFilter=function(e){T.push(e)},f.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",d=function(){t.removeEventListener("DOMContentLoaded",d,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=s,e.yepnope.injectJs=function(e,n,i,r,c,l){var u,d,h=t.createElement("script"),r=r||f.errorTimeout;h.src=e;for(d in i)h.setAttribute(d,i[d]);n=l?s:n||o,h.onreadystatechange=h.onload=function(){!u&&a(h.readyState)&&(u=1,n(),h.onload=h.onreadystatechange=null)},p(function(){u||(u=1,n(1))},r),c?h.onload():m.parentNode.insertBefore(h,m)},e.yepnope.injectCss=function(e,n,i,r,a,c){var l,r=t.createElement("link"),n=c?s:n||o;r.href=e,r.rel="stylesheet",r.type="text/css";for(l in i)r.setAttribute(l,i[l]);a||(m.parentNode.insertBefore(r,m),p(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},/**
 * SVGInjector v1.1.2 - Fast, caching, dynamic inline SVG DOM injection library
 * https://github.com/iconic/SVGInjector
 *
 * Copyright (c) 2014 Waybury <hello@waybury.com>
 * @license MIT
 */
!function(e,t){"use strict";function n(e){e=e.split(" ");for(var t={},n=e.length,i=[];n--;)t.hasOwnProperty(e[n])||(t[e[n]]=1,i.unshift(e[n]));return i.join(" ")}var i="file:"===e.location.protocol,r=t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"),o=Array.prototype.forEach||function(e,t){if(void 0===this||null===this||"function"!=typeof e)throw new TypeError;var n,i=this.length>>>0;for(n=0;i>n;++n)n in this&&e.call(t,this[n],n,this)},a={},s=0,c=[],l=[],u={},d=function(e){return e.cloneNode(!0)},f=function(e,t){l[e]=l[e]||[],l[e].push(t)},h=function(e){for(var t=0,n=l[e].length;n>t;t++)!function(t){setTimeout(function(){l[e][t](d(a[e]))},0)}(t)},p=function(t,n){if(void 0!==a[t])a[t]instanceof SVGSVGElement?n(d(a[t])):f(t,n);else{if(!e.XMLHttpRequest)return n("Browser does not support XMLHttpRequest"),!1;a[t]={},f(t,n);var r=new XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState){if(404===r.status||null===r.responseXML)return n("Unable to load SVG file: "+t),i&&n("Note: SVG injection ajax calls do not work locally without adjusting security setting in your browser. Or consider using a local webserver."),n(),!1;if(!(200===r.status||i&&0===r.status))return n("There was a problem injecting the SVG: "+r.status+" "+r.statusText),!1;if(r.responseXML instanceof Document)a[t]=r.responseXML.documentElement;else if(DOMParser&&DOMParser instanceof Function){var e;try{var o=new DOMParser;e=o.parseFromString(r.responseText,"text/xml")}catch(s){e=void 0}if(!e||e.getElementsByTagName("parsererror").length)return n("Unable to parse SVG file: "+t),!1;a[t]=e.documentElement}h(t)}},r.open("GET",t),r.overrideMimeType&&r.overrideMimeType("text/xml"),r.send()}},m=function(t,i,a,l){var d=t.getAttribute("data-src")||t.getAttribute("src");if(!/\.svg/i.test(d))return void l("Attempted to inject a file with a non-svg extension: "+d);if(!r){var f=t.getAttribute("data-fallback")||t.getAttribute("data-png");return void(f?(t.setAttribute("src",f),l(null)):a?(t.setAttribute("src",a+"/"+d.split("/").pop().replace(".svg",".png")),l(null)):l("This browser does not support SVG and no PNG fallback was defined."))}-1===c.indexOf(t)&&(c.push(t),t.setAttribute("src",""),p(d,function(r){if("undefined"==typeof r||"string"==typeof r)return l(r),!1;var a=t.getAttribute("id");a&&r.setAttribute("id",a);var f=t.getAttribute("title");f&&r.setAttribute("title",f);var h=[].concat(r.getAttribute("class")||[],"injected-svg",t.getAttribute("class")||[]).join(" ");r.setAttribute("class",n(h));var p=t.getAttribute("style");p&&r.setAttribute("style",p);var m=[].filter.call(t.attributes,function(e){return/^data-\w[\w\-]*$/.test(e.name)});o.call(m,function(e){e.name&&e.value&&r.setAttribute(e.name,e.value)});for(var g,v=r.querySelectorAll("defs clipPath[id]"),$=0,y=v.length;y>$;$++){g=v[$].id+"-"+s;for(var b=r.querySelectorAll('[clip-path*="'+v[$].id+'"]'),w=0,x=b.length;x>w;w++)b[w].setAttribute("clip-path","url(#"+g+")");v[$].id=g}for(var A,E=r.querySelectorAll("defs mask[id]"),T=0,j=E.length;j>T;T++){A=E[T].id+"-"+s;for(var S=r.querySelectorAll('[mask*="'+E[T].id+'"]'),k=0,C=S.length;C>k;k++)S[k].setAttribute("mask","url(#"+A+")");E[T].id=A}r.removeAttribute("xmlns:a");for(var F,M,O=r.querySelectorAll("script"),L=[],P=0,N=O.length;N>P;P++)M=O[P].getAttribute("type"),M&&"application/ecmascript"!==M&&"application/javascript"!==M||(F=O[P].innerText||O[P].textContent,L.push(F),r.removeChild(O[P]));if(L.length>0&&("always"===i||"once"===i&&!u[d])){for(var z=0,D=L.length;D>z;z++)new Function(L[z])(e);u[d]=!0}t.parentNode.replaceChild(r,t),delete c[c.indexOf(t)],t=null,s++,l(r)}))},g=function(e,t,n){t=t||{};var i=t.evalScripts||"always",r=t.pngFallback||!1,a=t.each;if(void 0!==e.length){var s=0;o.call(e,function(t){m(t,i,r,function(t){a&&"function"==typeof a&&a(t),n&&e.length===++s&&n(s)})})}else e?m(e,i,r,function(t){a&&"function"==typeof a&&a(t),n&&n(1),e=null}):n&&n(0)};"object"==typeof module&&"object"==typeof module.exports?module.exports=exports=g:"function"==typeof define&&define.amd?define(function(){return g}):"object"==typeof e&&(e.SVGInjector=g)}(window,document);var injectSVG=document.querySelectorAll("img.svg-inject"),injectorOptions={evalScripts:"once",pngFallback:"../images/png/png",each:function(){}};SVGInjector(injectSVG,injectorOptions,function(){$("img.svg-inject").css("display","block")}),$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html,body").animate({scrollTop:e.offset().top},1e3),!1}})});var $event=$.event,$special,resizeTimeout;$special=$event.special.debouncedresize={setup:function(){$(this).on("resize",$special.handler)},teardown:function(){$(this).off("resize",$special.handler)},handler:function(e,t){var n=this,i=arguments,r=function(){e.type="debouncedresize",$event.dispatch.apply(n,i)};resizeTimeout&&clearTimeout(resizeTimeout),t?r():resizeTimeout=setTimeout(r,$special.threshold)},threshold:250};var BLANK="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";$.fn.imagesLoaded=function(e){function t(){var t=$(c),n=$(l);r&&(l.length?r.reject(a,t,n):r.resolve(a)),$.isFunction(e)&&e.call(i,a,t,n)}function n(e,n){e.src!==BLANK&&-1===$.inArray(e,s)&&(s.push(e),n?l.push(e):c.push(e),$.data(e,"imagesLoaded",{isBroken:n,src:e.src}),o&&r.notifyWith($(e),[n,a,$(c),$(l)]),a.length===s.length&&(setTimeout(t),a.unbind(".imagesLoaded")))}var i=this,r=$.isFunction($.Deferred)?$.Deferred():0,o=$.isFunction(r.notify),a=i.find("img").add(i.filter("img")),s=[],c=[],l=[];return $.isPlainObject(e)&&$.each(e,function(t,n){"callback"===t?e=n:r&&r[t](n)}),a.length?a.bind("load.imagesLoaded error.imagesLoaded",function(e){n(e.target,"error"===e.type)}).each(function(e,t){var i=t.src,r=$.data(t,"imagesLoaded");return r&&r.src===i?void n(t,r.isBroken):t.complete&&void 0!==t.naturalWidth?void n(t,0===t.naturalWidth||0===t.naturalHeight):void((t.readyState||t.complete)&&(t.src=BLANK,t.src=i))}):t(),r?r.promise(i):i};var Grid=function(){function e(e){x=$.extend(!0,{},x,e),u.imagesLoaded(function(){n(!0),o(),i()})}function t(e){d=d.add(e),e.each(function(){var e=$(this);e.data({offsetTop:e.offset().top,height:e.height()})}),r(e)}function n(e){d.each(function(){var t=$(this);t.data("offsetTop",t.offset().top),e&&t.data("height",t.height())})}function i(){r(d),g.on("debouncedresize",function(){p=0,h=-1,n(),o();var e=$.data(this,"preview");"undefined"!=typeof e&&s()})}function r(e){e.on("click","span.work-close",function(){return s(),!1}).children("a").on("click",function(){var e=$(this).parent();return f===e.index()?s():a(e),!1})}function o(){l={width:g.width(),height:g.height()}}function a(e){var t=$.data(this,"preview"),n=e.data("offsetTop");if(p=0,"undefined"!=typeof t){if(h===n)return t.update(e),!1;n>h&&(p=t.height),s()}h=n,t=$.data(this,"preview",new c(e)),t.open()}function s(){f=-1;var e=$.data(this,"preview");e.close(),$.removeData(this,"preview")}function c(e){this.$item=e,this.expandedIdx=this.$item.index(),this.create(),this.update()}var l,u=$("#work-grid"),d=u.children("li"),f=-1,h=-1,p=0,m=10,g=$(window),v=$("html, body"),y={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},b=y[Modernizr.prefixed("transition")],w=Modernizr.csstransitions,x={minHeight:350,speed:500,easing:"ease"};return c.prototype={create:function(){this.$title=$("<h3></h3>"),this.$description=$("<p></p>"),this.$href=$('<a href="#" target="_blank">Visit website</a>'),this.$details=$('<div class="work-details"></div>').append(this.$title,this.$description,this.$href),this.$loading=$('<div class="work-loading"></div>'),this.$fullimage=$('<div class="work-fullimg"></div>').append(this.$loading),this.$closePreview=$('<span class="work-close"></span>'),this.$previewInner=$('<div class="work-expander-inner"></div>').append(this.$closePreview,this.$fullimage,this.$details),this.$previewEl=$('<div class="work-expander"></div>').append(this.$previewInner),this.$item.append(this.getEl()),w&&this.setTransition()},update:function(e){if(e&&(this.$item=e),-1!==f){var t=d.eq(f);t.removeClass("work-expanded"),this.$item.addClass("work-expanded"),this.positionPreview()}f=this.$item.index();var n=this.$item.children("a"),i={href:n.attr("href"),largesrc:n.data("largesrc"),title:n.data("title"),description:n.data("description")};this.$title.html(i.title),this.$description.html(i.description),this.$href.attr("href",i.href);var r=this;"undefined"!=typeof r.$largeImg&&r.$largeImg.remove(),r.$fullimage.is(":visible")&&(this.$loading.show(),$("<img/>").load(function(){var e=$(this);e.attr("src")===r.$item.children("a").data("largesrc")&&(r.$loading.hide(),r.$fullimage.find("img").remove(),r.$largeImg=e.fadeIn(350),r.$fullimage.append(r.$largeImg))}).attr("src",i.largesrc))},open:function(){setTimeout($.proxy(function(){this.setHeights(),this.positionPreview()},this),25)},close:function(){var e=this,t=function(){w&&$(this).off(b),e.$item.removeClass("work-expanded"),e.$previewEl.remove()};return setTimeout($.proxy(function(){"undefined"!=typeof this.$largeImg&&this.$largeImg.fadeOut("fast"),this.$previewEl.css("height",0);var e=d.eq(this.expandedIdx);e.css("height",e.data("height")).on(b,t),w||t.call()},this),25),!1},calcHeight:function(){var e=l.height-this.$item.data("height")-m,t=l.height;e<x.minHeight&&(e=x.minHeight,t=x.minHeight+this.$item.data("height")+m),this.height=e,this.itemHeight=t},setHeights:function(){var e=this,t=function(){w&&e.$item.off(b),e.$item.addClass("work-expanded")};this.calcHeight(),this.$previewEl.css("height",this.height),this.$item.css("height",this.itemHeight).on(b,t),w||t.call()},positionPreview:function(){var e=this.$item.data("offsetTop"),t=this.$previewEl.offset().top-p,n=this.height+this.$item.data("height")+m<=l.height?e:this.height<l.height?t-(l.height-this.height):t;v.animate({scrollTop:n},x.speed)},setTransition:function(){this.$previewEl.css("transition","height "+x.speed+"ms "+x.easing),this.$item.css("transition","height "+x.speed+"ms "+x.easing)},getEl:function(){return this.$previewEl}},{init:e,addItems:t}}();$(function(){$("#contactForm").submit(function(e){e.preventDefault(),$.ajax({url:"//formspree.io/louis@louisnovick.com",method:"POST",data:$(this).serialize(),dataType:"json",success:function(){$("#contactForm").html("<strong>Message sent.  I will get back to you soon, thank you!</strong>"),$("#contactForm").trigger("reset"),$(".formcontain p").addClass("hidden")},error:function(){$("#contactForm").append("<strong>Sorry there seems to have been an issue.  Please try again.</strong>"),$("#contactForm").trigger("reset")}})})}),!function(e){e(function(){e("li[title]").hover(function(){var t=e(this),n=e('<div class="tooltip">'),i=t.position();e("body").append(n),n.text(t.attr("title")).css({top:i.top-n.outerHeight()-5,left:i.left+.5*(t.outerWidth()-n.outerWidth())}),t.removeAttr("title").data("tooltip",n)},function(){var t=e(this);t.attr("title",t.data("tooltip").text()).data("tooltip").remove()})})}(jQuery),$(document).ready(function(){$(".sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close").on("click touchstart",function(e){$(".sliding-panel-content,.sliding-panel-fade-screen").toggleClass("is-visible").css("box-shadow","0px 0px 0px 5px #1f1f1f"),e.preventDefault()}),$(".js-menu a").click(function(){$(".sliding-panel-content,.sliding-panel-fade-screen").removeClass("is-visible"),$(".sliding-panel-content,.sliding-panel-fade-screen").css("box-shadow","0px 0px 0px 0px #1f1f1f")})});