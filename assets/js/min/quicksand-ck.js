!function(t){var e=function(t){var e=t.clone(),i=t.find("canvas");if(i.length){var s=e.find("canvas");s.each(function(t){var e=this.getContext("2d");e.drawImage(i.get(t),0,0)})}return e};t.fn.quicksand=function(i,s){var a={duration:750,easing:"swing",attribute:"data-id",adjustHeight:"auto",adjustWidth:"auto",useScaling:!1,enhancement:function(t){},selector:"> *",atomic:!1,dx:0,dy:0,maxWidth:0,retainExisting:!0},o=function(){for(var t="transform WebkitTransform MozTransform OTransform msTransform".split(" "),e=document.createElement("div"),i=0;i<t.length;i++)if("undefined"!=typeof e.style[t[i]])return!0;return!1}();t.extend(a,s),o&&"undefined"!=typeof t.fn.scale||(a.useScaling=!1);var n;return"function"==typeof arguments[1]?n=arguments[1]:0||(n=arguments[2]),this.each(function(s){var o,r=[],f;f="function"==typeof a.attribute?t(i):e(t(i).filter("["+a.attribute+"]"));var l=t(this),h=t(this).css("height"),c=t(this).css("width"),p,d,u=!1,m=!1,y=t(l).offset(),g=[],v=t(this).find(a.selector),b=t(v).innerWidth();if(navigator.userAgent.match(/msie [6]/i))return void l.html("").append(f);var x=0,w=function(){if(t(this).css("margin","").css("position","").css("top","").css("left","").css("opacity",""),!x){if(x=1,!a.atomic){var e=l.find(a.selector);if(a.retainExisting){var i=t([]);S.find(a.selector).each(function(s){var o=t([]);if("function"==typeof a.attribute){var n=a.attribute(t(this));e.each(function(){return a.attribute(this)==n?(o=t(this),!1):void 0})}else o=e.filter("["+a.attribute+'="'+t(this).attr(a.attribute)+'"]');o.length>0&&(i=i.add(o),0===s?l.prepend(o):o.insertAfter(l.find(a.selector).get(s-1)))}),e.not(i).remove()}else l.prepend(S.find(a.selector)),e.remove();u&&l.css("height",p),m&&l.css("width",c)}a.enhancement(l),"function"==typeof n&&n.call(this)}!1===a.adjustHeight&&l.css("height","auto"),!1===a.adjustWidth&&l.css("width","auto")},W=l.offsetParent(),F=W.offset();"relative"==W.css("position")?"body"!=W.get(0).nodeName.toLowerCase()&&(F.top+=parseFloat(W.css("border-top-width"))||0,F.left+=parseFloat(W.css("border-left-width"))||0):(F.top-=parseFloat(W.css("border-top-width"))||0,F.left-=parseFloat(W.css("border-left-width"))||0,F.top-=parseFloat(W.css("margin-top"))||0,F.left-=parseFloat(W.css("margin-left"))||0),isNaN(F.left)&&(F.left=0),isNaN(F.top)&&(F.top=0),F.left-=a.dx,F.top-=a.dy,l.css("height",t(this).height()),l.css("width",t(this).width()),v.each(function(e){g[e]=t(this).offset()}),t(this).stop();var j=0,T=0;v.each(function(e){t(this).stop();var i=t(this).get(0);"absolute"==i.style.position?(j=-a.dx,T=-a.dy):(j=a.dx,T=a.dy),i.style.position="absolute",i.style.margin="0",a.adjustWidth||(i.style.width=b+"px"),i.style.top=g[e].top-parseFloat(i.style.marginTop)-F.top+T+"px",i.style.left=g[e].left-parseFloat(i.style.marginLeft)-F.left+j+"px",a.maxWidth>0&&g[e].left>a.maxWidth&&(i.style.display="none")});var S=e(t(l)),H=S.get(0);if(H.innerHTML="",H.setAttribute("id",""),H.style.height="auto",H.style.width=l.width()+"px",S.append(f),S.insertBefore(l),S.css("opacity",0),H.style.zIndex=-1,H.style.margin="0",H.style.position="absolute",H.style.top=y.top-F.top+"px",H.style.left=y.left-F.left+"px","dynamic"===a.adjustHeight?l.animate({height:S.height()},a.duration,a.easing):"auto"===a.adjustHeight&&(p=S.height(),parseFloat(h)<parseFloat(p)?l.css("height",p):u=!0),"dynamic"===a.adjustWidth?l.animate({width:S.width()},a.duration,a.easing):"auto"===a.adjustWidth&&(d=S.width(),parseFloat(c)<parseFloat(d)?l.css("width",d):m=!0),v.each(function(e){var i=[];"function"==typeof a.attribute?(o=a.attribute(t(this)),f.each(function(){return a.attribute(this)==o?(i=t(this),!1):void 0})):i=f.filter("["+a.attribute+'="'+t(this).attr(a.attribute)+'"]'),r.push(i.length?a.useScaling?{element:t(this),dest:i,style:{top:t(this).offset().top,left:t(this).offset().left,opacity:""},animation:{top:i.offset().top-F.top,left:i.offset().left-F.left,opacity:1,scale:"1.0"}}:{element:t(this),dest:i,style:{top:t(this).offset().top,left:t(this).offset().left,opacity:""},animation:{top:i.offset().top-F.top,left:i.offset().left-F.left,opacity:1}}:a.useScaling?{element:t(this),animation:{opacity:"0.0",style:{top:t(this).offset().top,left:t(this).offset().left,opacity:""},scale:"0.0"}}:{element:t(this),style:{top:t(this).offset().top,left:t(this).offset().left,opacity:""},animation:{opacity:"0.0"}})}),f.each(function(i){var s=[],n=[];"function"==typeof a.attribute?(o=a.attribute(t(this)),v.each(function(){return a.attribute(this)==o?(s=t(this),!1):void 0}),f.each(function(){return a.attribute(this)==o?(n=t(this),!1):void 0})):(s=v.filter("["+a.attribute+'="'+t(this).attr(a.attribute)+'"]'),n=f.filter("["+a.attribute+'="'+t(this).attr(a.attribute)+'"]'));var h;if(0===s.length&&n.length>0){h=a.useScaling?{opacity:"1.0",scale:"1.0"}:{opacity:"1.0"};var c=e(n),p=c.get(0);p.style.position="absolute",p.style.margin="0",a.adjustWidth||(p.style.width=b+"px"),p.style.top=n.offset().top-F.top+"px",p.style.left=n.offset().left-F.left+"px",c.css("opacity",0),a.useScaling&&c.scale(0),c.appendTo(l),(0===a.maxWidth||n.offset().left<a.maxWidth)&&r.push({element:t(c),dest:n,animation:h})}}),S.remove(),a.atomic){for($toDelete=l.find(a.selector),l.prepend(S.find(a.selector)),s=0;s<r.length;s++)if(r[s].dest&&r[s].style){var N=r[s].dest,A=N.offset();N.css({position:"relative",top:r[s].style.top-A.top,left:r[s].style.left-A.left}),N.animate({top:"0",left:"0"},a.duration,a.easing,w)}else r[s].element.animate(r[s].animation,a.duration,a.easing,w);$toDelete.remove()}else for(a.enhancement(l),s=0;s<r.length;s++)r[s].element.animate(r[s].animation,a.duration,a.easing,w)})}}(jQuery);