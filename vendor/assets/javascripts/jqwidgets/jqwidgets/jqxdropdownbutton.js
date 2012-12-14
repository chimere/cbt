/*
jQWidgets v2.5.0 (2012-Oct-16)
Copyright (c) 2011-2012 jQWidgets.
License: http://jqwidgets.com/license/
*/

(function(a){a.jqx.jqxWidget("jqxDropDownButton","",{});a.extend(a.jqx._jqxDropDownButton.prototype,{defineInstance:function(){this.disabled=false;this.width=null;this.height=null;this.arrowSize=19;this.enableHover=true;if(this.openDelay==undefined){this.openDelay=350}if(this.closeDelay==undefined){this.closeDelay=400}this.animationType="default";this.enableBrowserBoundsDetection=false;this.dropDownHorizontalAlignment="left";this.dropDownZIndex=9999;this.autoOpen=false;this.events=["open","close"]},createInstance:function(h){this.isanimating=false;var c=a("<div tabIndex=0 style='background-color: transparent; -webkit-appearance: none; outline: none; width:100%; height: 100%; padding: 0px; margin: 0px; border: 0px; position: relative;'><div id='dropDownButtonWrapper' style='outline: none; background-color: transparent; border: none; float: left; width:100%; height: 100%; position: relative;'><div id='dropDownButtonContent' style='outline: none; background-color: transparent; border: none; float: left; position: relative;'/><div id='dropDownButtonArrow' style='background-color: transparent; border: none; float: right; position: relative;'><div></div></div></div></div>");this.popupContent=this.host.children();if(this.popupContent.length==0){this.popupContent=a("<div>"+this.host.text()+"</div>");this.popupContent.css("display","block");this.element.innerHTML=""}else{this.popupContent.detach()}var i=this;this.addHandler(this.host,"loadContent",function(e){i._arrange()});try{var f="dropDownButtonPopup"+this.element.id;var d=a(a.find("#"+f));if(d.length>0){d.remove()}var b=a("<div class='dropDownButton' style='background-color: transparent; border-width: 0px; overflow: hidden; border-style: solid; position: absolute;' id='dropDownButtonPopup"+this.element.id+"'></div>");b.addClass(this.toThemeProperty("jqx-widget-content"));b.addClass(this.toThemeProperty("jqx-rc-all"));b.css("z-index",this.dropDownZIndex);this.popupContent.appendTo(b);b.appendTo(document.body);this.container=b;if(this.animationType=="none"){this.container.css("visibility","hidden")}else{this.container.css("visibility","hidden")}}catch(g){}this.touch=a.jqx.mobile.isTouchDevice();this.dropDownButtonStructure=c;this.host.append(c);this.dropDownButtonWrapper=this.host.find("#dropDownButtonWrapper");this.dropDownButtonArrow=this.host.find("#dropDownButtonArrow");this.arrow=a(this.dropDownButtonArrow.children()[0]);this.dropDownButtonContent=this.host.find("#dropDownButtonContent");this.dropDownButtonContent.addClass(this.toThemeProperty("jqx-dropdownlist-content"));this.dropDownButtonWrapper.addClass(this.toThemeProperty("jqx-disableselect"));this.addHandler(this.dropDownButtonWrapper,"selectstart",function(){return false});this.dropDownButtonWrapper[0].id="dropDownButtonWrapper"+this.element.id;this.dropDownButtonArrow[0].id="dropDownButtonArrow"+this.element.id;this.dropDownButtonContent[0].id="dropDownButtonContent"+this.element.id;var k=this;this.propertyChangeMap.disabled=function(e,m,l,n){if(n){e.host.addClass(k.toThemeProperty("jqx-dropdownlist-state-disabled"));e.host.addClass(k.toThemeProperty("jqx-fill-state-disabled"));e.dropDownButtonContent.addClass(k.toThemeProperty("jqx-dropdownlist-content-disabled"))}else{e.host.removeClass(k.toThemeProperty("jqx-dropdownlist-state-disabled"));e.host.removeClass(k.toThemeProperty("jqx-fill-state-disabled"));e.dropDownButtonContent.removeClass(k.toThemeProperty("jqx-dropdownlist-content-disabled"))}};if(this.disabled){this.host.addClass(this.toThemeProperty("jqx-dropdownlist-state-disabled"));this.host.addClass(this.toThemeProperty("jqx-fill-state-disabled"));this.dropDownButtonContent.addClass(this.toThemeProperty("jqx-dropdownlist-content-disabled"))}this.host.addClass(this.toThemeProperty("jqx-widget"));this.host.addClass(this.toThemeProperty("jqx-widget-content"));this.host.addClass(this.toThemeProperty("jqx-dropdownlist-state-normal"));this.host.addClass(this.toThemeProperty("jqx-rc-all"));this.host.addClass(this.toThemeProperty("jqx-fill-state-normal"));this.arrow.addClass(this.toThemeProperty("icon-arrow-down"));this.arrow.addClass(this.toThemeProperty("icon"));this._setSize();this.render();if(a.browser.msie&&a.browser.version<8){this.container.css("display","none");if(this.host.parents(".jqx-window").length>0){var j=this.host.parents(".jqx-window").css("z-index");b.css("z-index",j+10);this.container.css("z-index",j+10)}}},setContent:function(b){this.dropDownButtonContent.children().remove();this.dropDownButtonContent[0].innerHTML="";this.dropDownButtonContent.append(b)},getContent:function(){if(this.dropDownButtonContent.children().length>0){return this.dropDownButtonContent.children()}return this.dropDownButtonContent.text()},_setSize:function(){if(this.width!=null&&this.width.toString().indexOf("px")!=-1){this.host.width(this.width)}else{if(this.width!=undefined&&!isNaN(this.width)){this.host.width(this.width)}}if(this.height!=null&&this.height.toString().indexOf("px")!=-1){this.host.height(this.height)}else{if(this.height!=undefined&&!isNaN(this.height)){this.host.height(this.height)}}var d=false;if(this.width!=null&&this.width.toString().indexOf("%")!=-1){d=true;this.host.width(this.width)}if(this.height!=null&&this.height.toString().indexOf("%")!=-1){d=true;this.host.height(this.height)}if(d){this.refresh(false);var c=this;var b=this.host.width();a(window).resize(function(){c._arrange()})}},isOpened:function(){var c=this;var b=a.data(document.body,"openedJQXButton"+this.element.id);if(b!=null&&b==c.popupContent){return true}return false},render:function(){this.removeHandlers();var b=this;var c=false;if(!this.touch){this.host.hover(function(){if(!b.disabled&&b.enableHover){c=true;b.host.addClass(b.toThemeProperty("jqx-dropdownlist-state-hover"));b.arrow.addClass(b.toThemeProperty("icon-arrow-down-hover"));b.host.addClass(b.toThemeProperty("jqx-fill-state-hover"))}},function(){if(!b.disabled&&b.enableHover){b.host.removeClass(b.toThemeProperty("jqx-dropdownlist-state-hover"));b.host.removeClass(b.toThemeProperty("jqx-fill-state-hover"));b.arrow.removeClass(b.toThemeProperty("icon-arrow-down-hover"));c=false}})}if(b.autoOpen){this.addHandler(this.host,"mouseenter",function(){var e=b.isOpened();if(!e&&b.autoOpen){b.open();b.host.focus()}});a(document).bind("mousemove."+b.element.id,function(h){var g=b.isOpened();if(g&&b.autoOpen){var l=b.host.offset();var k=l.top;var j=l.left;var i=b.container.offset();var e=i.left;var f=i.top;canClose=true;if(h.pageY>=k&&h.pageY<=k+b.host.height()){if(h.pageX>=j&&h.pageX<j+b.host.width()){canClose=false}}if(h.pageY>=f&&h.pageY<=f+b.container.height()){if(h.pageX>=e&&h.pageX<e+b.container.width()){canClose=false}}if(canClose){b.close()}}})}this.addHandler(this.dropDownButtonWrapper,"mousedown",function(f){if(!b.disabled){var e=b.container.css("visibility")=="visible";if(!b.isanimating){if(e){b.close()}else{b.open()}}}});this.addHandler(a(document),"mousedown."+this.element.id,b.closeOpenedDropDown,{me:this,popup:this.container,id:this.element.id});if(document.referrer!=""||window.frameElement){if(window.top!=null){if(window.parent&&document.referrer){parentLocation=document.referrer}if(parentLocation.indexOf(document.location.host)!=-1){var d=function(e){if(b.isOpened()){var f={me:b,popup:b.container,id:b.element.id};e.data=f}};if(window.top.document.addEventListener){window.top.document.addEventListener("mousedown",d,false)}else{if(window.top.document.attachEvent){window.top.document.attachEvent("onmousedown",d)}}}}}this.addHandler(this.host,"keydown",function(f){var e=b.container.css("visibility")=="visible";if(b.host.css("display")=="none"){return true}if(f.keyCode=="13"){if(!b.isanimating){if(e){b.close()}else{b.open()}}}if(f.keyCode==115){if(!b.isanimating){if(!b.isOpened()){b.open()}else{if(b.isOpened()){b.close()}}}return false}if(f.altKey){if(b.host.css("display")=="block"){if(f.keyCode==38){if(b.isOpened()){b.close()}}else{if(f.keyCode==40){if(!b.isOpened()){b.open()}}}}}if(f.keyCode=="27"){if(!b.ishiding){b.close();if(b.tempSelectedIndex!=undefined){b.selectIndex(b.tempSelectedIndex)}}}});this.addHandler(this.host.find("div:first"),"focus",function(){b.host.addClass(b.toThemeProperty("jqx-dropdownlist-state-focus"));b.host.addClass(b.toThemeProperty("jqx-fill-state-focus"))});this.addHandler(this.host.find("div:first"),"blur",function(){b.host.removeClass(b.toThemeProperty("jqx-dropdownlist-state-focus"));b.host.removeClass(b.toThemeProperty("jqx-fill-state-focus"))})},removeHandlers:function(){var b=this;this.removeHandler(this.dropDownButtonWrapper,"mousedown");this.removeHandler(this.host,"keydown");this.removeHandler(this.host.find("div:first"),"focus");this.removeHandler(this.host.find("div:first"),"blur");this.host.unbind("hover");this.removeHandler(this.host,"mouseenter");a(document).unbind("mousemove."+b.element.id)},_findPos:function(c){while(c&&(c.type=="hidden"||c.nodeType!=1||a.expr.filters.hidden(c))){c=c.nextSibling}var b=a(c).offset();return[b.left,b.top]},testOffset:function(h,f,c){var g=h.outerWidth();var j=h.outerHeight();var i=a(window).width()+a(window).scrollLeft();var e=a(window).height()+a(window).scrollTop();if(f.left+g>i){if(g>this.host.width()){var d=this.host.offset().left;var b=g-this.host.width();f.left=d-b+2}}if(f.left<0){f.left=parseInt(this.host.offset().left)+"px"}if(f.top+j>e){f.top-=Math.abs(j+c)}return f},open:function(){var o=this;var c=this.popupContent;var l=a(window).scrollTop();var h=a(window).scrollLeft();var j=parseInt(this._findPos(this.host[0])[1])+parseInt(this.host.outerHeight())-1+"px";var f=parseInt(this.host.offset().left)+"px";var n=a.jqx.mobile.isSafariMobileBrowser();var d=a.jqx.utilities.hasTransform(this.host);this.ishiding=false;this.tempSelectedIndex=this.selectedIndex;if(d||(n!=null&&n)){f=a.jqx.mobile.getLeftPos(this.element);j=a.jqx.mobile.getTopPos(this.element)+parseInt(this.host.outerHeight())}c.stop();this.host.addClass(this.toThemeProperty("jqx-dropdownlist-state-selected"));this.host.addClass(this.toThemeProperty("jqx-fill-state-pressed"));this.arrow.addClass(this.toThemeProperty("icon-arrow-down-selected"));var g=false;if(a.browser.msie&&a.browser.version<8){g=true}if(g){this.container.css("display","block")}this.container.css("left",f);this.container.css("top",j);var e=true;var p=false;if(this.dropDownHorizontalAlignment=="right"){var k=this.container.width();var b=Math.abs(k-this.host.width());if(k>this.host.width()){this.container.css("left",25+parseInt(f)-b+"px")}else{this.container.css("left",25+parseInt(f)+b+"px")}}if(this.enableBrowserBoundsDetection){var i=this.testOffset(c,{left:parseInt(this.container.css("left")),top:parseInt(j)},parseInt(this.host.outerHeight()));if(parseInt(this.container.css("top"))!=i.top){p=true;this.container.height(c.outerHeight());c.css("top",23);if(this.interval){clearInterval(this.interval)}this.interval=setInterval(function(){if(c.outerHeight()!=o.container.height()){var q=o.testOffset(c,{left:parseInt(o.container.css("left")),top:parseInt(j)},parseInt(o.host.outerHeight()));o.container.css("top",q.top);o.container.height(c.outerHeight())}},50)}else{c.css("top",0)}this.container.css("top",i.top);if(parseInt(this.container.css("left"))!=i.left){this.container.css("left",i.left)}}if(this.animationType=="none"){this.container.css("visibility","visible");a.data(document.body,"openedJQXButtonParent",o);a.data(document.body,"openedJQXButton"+this.element.id,c);c.css("margin-top",0);c.css("opacity",1)}else{this.container.css("visibility","visible");var m=c.outerHeight();o.isanimating=true;if(this.animationType=="fade"){c.css("margin-top",0);c.css("opacity",0);c.animate({opacity:1},this.openDelay,function(){a.data(document.body,"openedJQXButtonParent",o);a.data(document.body,"openedJQXButton"+o.element.id,c);o.ishiding=false;o.isanimating=false})}else{c.css("opacity",1);if(p){c.css("margin-top",m)}else{c.css("margin-top",-m)}c.animate({"margin-top":0},this.openDelay,function(){a.data(document.body,"openedJQXButtonParent",o);a.data(document.body,"openedJQXButton"+o.element.id,c);o.ishiding=false;o.isanimating=false})}}this._raiseEvent("0")},hide:function(){this.close()},show:function(){this.open()},close:function(){var e=this.popupContent;var d=this.container;var f=this;var c=false;if(a.browser.msie&&a.browser.version<8){c=true}a.data(document.body,"openedJQXButton"+this.element.id,null);if(this.animationType=="none"){this.container.css("visibility","hidden");if(c){this.container.css("display","none")}}else{if(!f.ishiding){f.isanimating=true;e.stop();var b=e.outerHeight();e.css("margin-top",0);var g=-b;if(parseInt(this.container.offset().top)<parseInt(this.host.offset().top)){g=b}if(this.animationType=="fade"){e.css({opacity:1});e.animate({opacity:0},this.closeDelay,function(){d.css("visibility","hidden");f.isanimating=false;f.ishiding=false;if(c){d.css("display","none")}})}else{e.animate({"margin-top":g},this.closeDelay,function(){d.css("visibility","hidden");f.isanimating=false;f.ishiding=false;if(c){d.css("display","none")}})}}}this.ishiding=true;this.host.removeClass(this.toThemeProperty("jqx-dropdownlist-state-selected"));this.host.removeClass(this.toThemeProperty("jqx-fill-state-pressed"));this.arrow.removeClass(this.toThemeProperty("icon-arrow-down-selected"));this._raiseEvent("1")},closeOpenedDropDown:function(e){var c=e.data.me;var b=a(e.target);if(a(e.target).ischildof(e.data.me.host)){return true}if(a(e.target).ischildof(e.data.me.popupContent)){return true}var f=c;var d=false;a.each(b.parents(),function(){if(this.className!="undefined"){if(this.className.indexOf("dropDownButton")!=-1||this.className.indexOf("menu")!=-1){d=true;return false}}});if(!d){c.close()}return true},refresh:function(){this._arrange()},_arrange:function(){var f=parseInt(this.host.width());var b=parseInt(this.host.height());var e=this.arrowSize;var d=this.arrowSize;var g=3;var c=f-d-2*g;if(c>0){this.dropDownButtonContent.width(c+"px")}this.dropDownButtonContent.height(b);this.dropDownButtonContent.css("left",0);this.dropDownButtonContent.css("top",0);this.dropDownButtonArrow.width(d);this.dropDownButtonArrow.height(b)},destroy:function(){this.removeHandler(this.dropDownButtonWrapper,"selectstart");this.removeHandler(this.dropDownButtonWrapper,"mousedown");this.removeHandler(this.host,"keydown");this.host.removeClass();this.removeHandler(a(document),"mousedown."+this.element.id,self.closeOpenedDropDown);this.host.remove()},_raiseEvent:function(f,c){if(c==undefined){c={owner:null}}var d=this.events[f];args=c;args.owner=this;var e=new jQuery.Event(d);e.owner=this;if(f==2||f==3||f==4){e.args=c}var b=this.host.trigger(e);return b},propertyChangedHandler:function(b,c,e,d){if(this.isInitialized==undefined||this.isInitialized==false){return}if(c=="autoOpen"){b.render()}if(c=="theme"&&d!=null){a.jqx.utilities.setTheme(e,d,b.host)}if(c=="width"||c=="height"){b._setSize();b._arrange()}}})})(jQuery);