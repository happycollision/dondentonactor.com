!function(a,b,c){"use strict";var d=function(){var a=c.body||c.documentElement;return a=a.style,""===a.WebkitTransition?"-webkit-":""===a.MozTransition?"-moz-":""===a.OTransition?"-o-":""===a.transition?"":!1},e=d()===!1?!1:!0,f=function(a,b,c){var e={},f=d();e[f+"transform"]="translateX("+b+")",e[f+"transition"]=f+"transform "+c+"s linear",a.css(e)},g="ontouchstart"in b,h=b.navigator.pointerEnabled||b.navigator.msPointerEnabled,i=function(a){if(g)return!0;if(!h||"undefined"==typeof a||"undefined"==typeof a.pointerType)return!1;if("undefined"!=typeof a.MSPOINTER_TYPE_MOUSE){if(a.MSPOINTER_TYPE_MOUSE!=a.pointerType)return!0}else if("mouse"!=a.pointerType)return!0;return!1};a.fn.imagelightbox=function(d){d=a.extend({selector:'id="imagelightbox"',allowedTypes:"png|jpg|jpeg|gif",animationSpeed:250,preloadNext:!0,enableKeyboard:!0,quitOnEnd:!1,quitOnImgClick:!1,quitOnDocClick:!0,onStart:!1,onEnd:!1,onLoadStart:!1,onLoadEnd:!1},d);var j=a([]),k=a(),l=a(),m=0,n=0,o=0,p=!1,q=function(b){return"a"==a(b).prop("tagName").toLowerCase()&&new RegExp("\\.("+d.allowedTypes+")$","i").test(a(b).attr("href"))},r=function(){if(!l.length)return!1;var c=.8*a(b).width(),d=.9*a(b).height(),e=new Image;e.src=l.attr("src"),e.onload=function(){if(m=e.width,n=e.height,m>c||n>d){var f=m/n>c/d?m/c:n/d;m/=f,n/=f}l.css({width:m+"px",height:n+"px",top:(a(b).height()-n)/2+"px",left:(a(b).width()-m)/2+"px"})}},s=function(b){if(p)return!1;if(b="undefined"==typeof b?!1:"left"==b?1:-1,l.length){if(b!==!1&&(j.length<2||d.quitOnEnd===!0&&(-1===b&&0===j.index(k)||1===b&&j.index(k)===j.length-1)))return A(),!1;var c={opacity:0};e?f(l,100*b-o+"px",d.animationSpeed/1e3):c.left=parseInt(l.css("left"),100)+100*b+"px",l.animate(c,d.animationSpeed,function(){t()}),o=0}return k.attr("href")?(p=!0,d.onLoadStart!==!1&&d.onLoadStart(),void setTimeout(function(){l=a("<img "+d.selector+" />").attr("src",k.attr("href")).load(function(){l.appendTo("body"),y(),w(),u(),r();var c={opacity:1};if(l.css("opacity",0),e)f(l,-100*b+"px",0),setTimeout(function(){f(l,"0px",d.animationSpeed/1e3)},50);else{var g=parseInt(l.css("left"),10);c.left=g+"px",l.css("left",g-100*b+"px")}if(l.animate(c,d.animationSpeed,function(){p=!1,d.onLoadEnd!==!1&&d.onLoadEnd()}),d.preloadNext){var h=j.eq(j.index(k)+1);h.length||(h=j.eq(0)),a("<img />").attr("src",h.attr("href")).load()}}).error(function(){d.onLoadEnd!==!1&&d.onLoadEnd()});var c=0,g=0,n=0;l.on(h?"pointerup MSPointerUp":"click",function(a){if(a.preventDefault(),d.quitOnImgClick)return A(),!1;if(i(a.originalEvent))return!0;var b=(a.pageX||a.originalEvent.pageX)-a.target.offsetLeft;k=j.eq(j.index(k)-(m/2>b?1:-1)),k.length||(k=j.eq(m/2>b?j.length:0)),s(m/2>b?"left":"right")}).on("touchstart pointerdown MSPointerDown",function(a){return!i(a.originalEvent)||d.quitOnImgClick?!0:(e&&(n=parseInt(l.css("left"),10)),void(c=a.originalEvent.pageX||a.originalEvent.touches[0].pageX))}).on("touchmove pointermove MSPointerMove",function(a){return!i(a.originalEvent)||d.quitOnImgClick?!0:(a.preventDefault(),g=a.originalEvent.pageX||a.originalEvent.touches[0].pageX,o=c-g,void(e?f(l,-o+"px",0):l.css("left",n-o+"px")))}).on("touchend touchcancel pointerup pointercancel MSPointerUp MSPointerCancel",function(a){return!i(a.originalEvent)||d.quitOnImgClick?!0:void(Math.abs(o)>50?(k=j.eq(j.index(k)-(0>o?1:-1)),k.length||(k=j.eq(0>o?j.length:0)),s(o>0?"right":"left")):e?f(l,"0px",d.animationSpeed/1e3):l.animate({left:n+"px"},d.animationSpeed/2))})},d.animationSpeed+100)):(A(),!1)},t=function(){return l.length?(l.remove(),void(l=a())):!1},u=function(){var b=a("#imagelightboxprev"),c=a("#imagelightboxnext");b.length>0?b.show():a("<a/>").attr({id:"imagelightboxprev",href:"#"}).addClass("imagelightboxcontrol").on("click",function(a){a.preventDefault(),a.stopPropagation(),k=j.eq(j.index(k)-1),s("left")}).appendTo("body"),c.length>0?c.show():a("<a/>").attr({id:"imagelightboxnext",href:"#"}).addClass("imagelightboxcontrol").on("click",function(a){a.preventDefault(),a.stopPropagation(),k=j.eq(j.index(k)+1),s("right")}).appendTo("body")},v=function(){a("#imagelightboxprev, #imagelightboxnext").remove()},w=function(){var b=a("#imagelightboxclose");b.length>0?b.show():a("<a/>").attr({id:"imagelightboxclose",href:"#"}).addClass("imagelightboxcontrol").html("&times;").on("click",function(a){a.preventDefault(),A()}).appendTo("body")},x=function(){a("#imagelightboxclose").remove()},y=function(){var b=a("#imagelightboxmask");b.length>0?b.show():a("<div/>").attr("id","imagelightboxmask").appendTo("body")},z=function(){a("#imagelightboxmask").remove()},A=function(){return l.length?(l.animate({opacity:0},d.animationSpeed,function(){t(),p=!1,d.onEnd!==!1&&d.onEnd()}),v(),x(),void z()):(v(),x(),z(),!1)};return a(b).on("resize",r),d.quitOnDocClick&&a(c).on(g?"touchend":"click",function(b){l.length&&!a(b.target).is(l)&&A()}),d.enableKeyboard&&a(c).on("keyup",function(a){return l.length?(a.preventDefault(),27==a.keyCode&&A(),void((37==a.keyCode||39==a.keyCode)&&(k=j.eq(j.index(k)-(37==a.keyCode?1:-1)),k.length||(k=j.eq(37==a.keyCode?j.length:0)),s(37==a.keyCode?"left":"right")))):!0}),a(c).on("click",this.selector,function(b){return q(this)?(b.preventDefault(),p?!1:(p=!1,d.onStart!==!1&&d.onStart(),k=a(this),void s())):!0}),this.each(function(){return q(this)?void(j=j.add(a(this))):!0}),this.switchImageLightbox=function(a){var b=j.eq(a);if(b.length){var c=j.index(k);k=b,s(c>a?"left":"right")}return this},this.quitImageLightbox=function(){return A(),this},this}}(jQuery,window,document),function(a){"use strict";a.fn.fitVids=function(b){var c={customSelector:null};if(!document.getElementById("fit-vids-style")){var d=document.head||document.getElementsByTagName("head")[0],e=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",f=document.createElement("div");f.innerHTML='<p>x</p><style id="fit-vids-style">'+e+"</style>",d.appendChild(f.childNodes[1])}return b&&a.extend(c,b),this.each(function(){var b=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];c.customSelector&&b.push(c.customSelector);var d=a(this).find(b.join(","));d=d.not("object object"),d.each(function(){var b=a(this);if(!("embed"===this.tagName.toLowerCase()&&b.parent("object").length||b.parent(".fluid-width-video-wrapper").length)){var c="object"===this.tagName.toLowerCase()||b.attr("height")&&!isNaN(parseInt(b.attr("height"),10))?parseInt(b.attr("height"),10):b.height(),d=isNaN(parseInt(b.attr("width"),10))?b.width():parseInt(b.attr("width"),10),e=c/d;if(!b.attr("id")){var f="fitvid"+Math.floor(999999*Math.random());b.attr("id",f)}b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*e+"%"),b.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto),function(){for(var a,b=function(){},c=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],d=c.length,e=window.console=window.console||{};d--;)a=c[d],e[a]||(e[a]=b)}(),function(a){a.fn.getFiles=function(b){"string"==typeof b&&(b={dir:b});var c=a.extend({dir:null,extension:".jpg"},b);if(null===c.dir)throw new Error('$.getFiles(): missing "dir" option');"/"!==c.dir.charAt(c.dir.length-1)&&(c.dir=c.dir+"/");var d=a.Deferred(),e=[];return a.ajax({url:c.dir,success:function(b){a(b).find("a:contains("+c.extension+")").each(function(){var a=this.href;e.push(a)}),d.resolve(e)}}),d}}(jQuery),function(a){a.fn.shuffle=function(){var b=this.get(),c=function(a){return Math.floor(Math.random()*a)},d=a.map(b,function(){var d=c(b.length),e=a(b[d]).clone(!0)[0];return b.splice(d,1),e});return this.each(function(b){a(this).replaceWith(a(d[b]))}),a(d)}}(jQuery),$(".menu-icon").bind("click",function(){$(this).hasClass("active")?($(this).removeClass("active"),$(".site-nav").addClass("js-hide")):($(this).addClass("active"),$(".site-nav").removeClass("js-hide"))});