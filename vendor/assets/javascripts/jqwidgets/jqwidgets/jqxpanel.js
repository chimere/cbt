/*
jQWidgets v2.5.0 (2012-Oct-16)
Copyright (c) 2011-2012 jQWidgets.
License: http://jqwidgets.com/license/
*/

(function(a){a.jqx.jqxWidget("jqxPanel","",{});a.extend(a.jqx._jqxPanel.prototype,{defineInstance:function(){this.width=null;this.height=null;this.disabled=false;this.scrollBarSize=15;this.sizeMode="fixed";this.autoUpdate=false;this.autoUpdateInterval=500;this.touchMode="auto";this.horizontalScrollBarMax=null;this.verticalScrollBarMax=null;this.touchModeStyle="auto";this.events=["layout",]},createInstance:function(d){var b=this;this.host.addClass(this.toThemeProperty("jqx-panel"));this.host.addClass(this.toThemeProperty("jqx-widget"));this.host.addClass(this.toThemeProperty("jqx-widget-content"));this.host.addClass(this.toThemeProperty("jqx-rc-all"));var c=a("<div tabIndex=0 style='background-color: transparent; -webkit-appearance: none; outline: none; width:100%; height: 100%; align:left; border: 0px; padding: 0px; margin: 0px; left: 0px; top: 0px; valign:top; position: relative;'><div id='panelWrapper' tabIndex=0 style='background-color: transparent; -webkit-appearance: none; outline: none; width:100%; overflow: hidden; height: 100%; padding: 0px; margin: 0px; align:left; left: 0px; top: 0px; valign:top; position: relative;'><div id='panelContent' tabIndex=0 style='-webkit-appearance: none; outline: none; border: none; padding: 0px; margin: 0px; align:left; valign:top; left: 0px; top: 0px; position: absolute;'/><div id='verticalScrollBar' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'/><div id='horizontalScrollBar' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'/><div id='bottomRight' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'/></div></div>");var g=this.host.css("height");var i=this.host.css("width");if(this.width==null){this.width=i}if(this.height==null){this.height=g}this.host.wrapInner(c);var h=this.host.find("#verticalScrollBar");h[0].id=this.element.id+"verticalScrollBar";this.vScrollBar=h.jqxScrollBar({vertical:true,touchMode:this.touchMode,theme:this.theme});var f=this.host.find("#horizontalScrollBar");f[0].id=this.element.id+"horizontalScrollBar";this.hScrollBar=f.jqxScrollBar({vertical:false,touchMode:this.touchMode,theme:this.theme});this.wrapper=this.host.find("#panelWrapper");this.wrapper[0].id=this.wrapper[0].id+this.element.id;this.content=this.host.find("#panelContent");this.content.addClass(this.toThemeProperty("jqx-widget-content"));if(a.browser.msie){}this.content[0].id=this.content[0].id+this.element.id;this.bottomRight=this.host.find("#bottomRight").addClass(this.toThemeProperty("jqx-panel-bottomright"));this.bottomRight[0].id="bottomRight"+this.element.id;this.vScrollBar.css("visibility","visible");this.hScrollBar.css("visibility","visible");this.vScrollInstance=a.data(this.vScrollBar[0],"jqxScrollBar").instance;this.hScrollInstance=a.data(this.hScrollBar[0],"jqxScrollBar").instance;var e=this;this.propertyChangeMap.disabled=function(j,l,k,m){e.vScrollBar.jqxScrollBar({disabled:e.disabled});e.hScrollBar.jqxScrollBar({disabled:e.disabled})};this.vScrollBar.jqxScrollBar({disabled:this.disabled});this.hScrollBar.jqxScrollBar({disabled:this.disabled});this._addHandlers();this._arrange();a(window).resize(function(){b._arrange()});this.contentWidth=e.content[0].scrollWidth;this.contentHeight=e.content[0].scrollHeight;if(this.autoUpdate){e._autoUpdate()}this.propertyChangeMap.autoUpdate=function(j,l,k,m){if(e.autoUpdate){e._autoUpdate()}else{clearInterval(e.autoUpdateId);e.autoUpdateId=null}};a(window).bind("unload",function(){if(e.autoUpdateId!=null){clearInterval(e.autoUpdateId);e.autoUpdateId=null;e.destroy()}});this._updateTouchScrolling()},_updateTouchScrolling:function(){var b=this;if(this.touchMode==true){a.jqx.mobile.setMobileSimulator(this.element)}var c=this.isTouchDevice();if(c){a.jqx.mobile.touchScroll(this.element,b.vScrollInstance.max,function(f,e){if(b.vScrollBar.css("visibility")=="visible"){var d=b.vScrollInstance.value;b.vScrollInstance.setPosition(d+e)}if(b.hScrollBar.css("visibility")=="visible"){var d=b.hScrollInstance.value;b.hScrollInstance.setPosition(d+f)}},this.element.id)}this.vScrollBar.jqxScrollBar({touchMode:this.touchMode});this.hScrollBar.jqxScrollBar({touchMode:this.touchMode})},isTouchDevice:function(){var b=a.jqx.mobile.isTouchDevice();if(this.touchMode==true){b=true}else{if(this.touchMode==false){b=false}}if(b&&this.touchModeStyle!=false){this.scrollBarSize=10}return b},append:function(b){if(b!=null){this.content.append(b);this._arrange()}},setcontent:function(b){this.content[0].innerHTML=b},prepend:function(b){if(b!=null){this.content.prepend(b);this._arrange()}},clearcontent:function(){this.content.text("");this.content.children().remove();this._arrange()},remove:function(b){if(b!=null){a(b).remove();this._arrange()}},_autoUpdate:function(){var b=this;this.autoUpdateId=setInterval(function(){var d=b.content[0].scrollWidth;var c=b.content[0].scrollHeight;var e=false;if(b.contentWidth!=d){b.contentWidth=d;e=true}if(b.contentHeight!=c){b.contentHeight=c;e=true}if(e){b._arrange()}},this.autoUpdateInterval)},_addHandlers:function(){var b=this;this.addHandler(this.vScrollBar,"valuechanged",function(c){b._render(b)});this.addHandler(this.hScrollBar,"valuechanged",function(c){b._render(b)});this.addHandler(this.host,"mousewheel",function(c){b.wheel(c,b)});this.addHandler(this.content,"mouseleave",function(c){b.focused=false});this.addHandler(this.content,"focus",function(c){b.focused=true});this.addHandler(this.content,"blur",function(c){b.focused=false});this.addHandler(this.content,"mouseenter",function(c){b.focused=true})},_removeHandlers:function(){var b=this;this.removeHandler(this.vScrollBar,"valuechanged");this.removeHandler(this.hScrollBar,"valuechanged");this.removeHandler(this.host,"mousewheel");this.removeHandler(this.content,"mouseleave");this.removeHandler(this.content,"focus");this.removeHandler(this.content,"blur");this.removeHandler(this.content,"mouseenter")},wheel:function(d,c){var e=0;if(d.originalEvent&&a.browser.msie&&d.originalEvent.wheelDelta){e=d.originalEvent.wheelDelta/120}if(!d){d=window.event}if(d.wheelDelta){e=d.wheelDelta/120}else{if(d.detail){e=-d.detail/3}}if(e){var b=c._handleDelta(e);if(!b){if(d.preventDefault){d.preventDefault()}}if(!b){return b}else{return false}}if(d.preventDefault){d.preventDefault()}d.returnValue=false},scrollDown:function(){if(this.vScrollBar.css("visibility")=="hidden"){return false}var b=this.vScrollInstance;if(b.value+b.largestep<=b.max){b.setPosition(b.value+b.largestep);return true}else{if(b.value+b.largestep!=b.max){b.setPosition(b.max);return true}}return false},scrollUp:function(){if(this.vScrollBar.css("visibility")=="hidden"){return false}var b=this.vScrollInstance;if(b.value-b.largestep>=b.min){b.setPosition(b.value-b.largestep);return true}else{if(b.value-b.largestep!=b.min){b.setPosition(b.min);return true}}return false},_handleDelta:function(d){if(this.focused){var c=this.vScrollInstance.value;if(d<0){this.scrollDown()}else{this.scrollUp()}var b=this.vScrollInstance.value;if(c!=b){return false}}return true},_render:function(c){if(c==undefined){c=this}var b=c.vScrollInstance.value;var d=c.hScrollInstance.value;c.content.css({left:-d,top:-b})},scrollTo:function(c,b){if(c==undefined||b==undefined){return}this.vScrollInstance.setPosition(b);this.hScrollInstance.setPosition(c)},getScrollHeight:function(){return this.vScrollInstance.max},getVScrollPosition:function(){return this.vScrollInstance.value},getScrollWidth:function(){return this.hScrollInstance.max},getHScrollPosition:function(){return this.hScrollInstance.value},_arrange:function(){if(this.width!=null&&this.width.toString().indexOf("px")!=-1){this.host.width(this.width)}else{if(this.width!=undefined&&!isNaN(this.width)){this.host.width(this.width)}}if(this.height!=null&&this.height.toString().indexOf("px")!=-1){this.host.height(this.height)}else{if(this.height!=undefined&&!isNaN(this.height)){this.host.height(this.height)}}if(this.width!=null&&this.width.toString().indexOf("%")!=-1){this.host.width(this.width)}if(this.height!=null&&this.height.toString().indexOf("%")!=-1){this.host.height(this.height)}if(this.width!=null&&this.width.toString().indexOf("auto")!=-1){this.host.width(this.width)}if(this.height!=null&&this.height.toString().indexOf("auto")!=-1){this.host.height(this.height)}this.content.css("margin-right","0px");var o=null;var l=null;if(a.browser.msie&&a.browser.version<10){var q=parseInt(this.content.css("left"));this.content.css("left",0)}var m=parseInt(this.content[0].scrollWidth);a.each(this.content.children(),function(){m=Math.max(m,a(this).outerWidth())});if(a.browser.msie&&a.browser.version<10){this.content.css("left",q)}if(m<parseInt(this.host.width())){m=parseInt(this.host.width())}var p=parseInt(this.content[0].scrollHeight);if(this.sizeMode=="wrap"){this.host.width(m);this.host.height(p);this.vScrollBar.css("visibility","hidden");this.hScrollBar.css("visibility","hidden");return}var g=4+parseInt(this.scrollBarSize);var s=g+p-parseInt(this.host.height());var h=g+m-parseInt(this.host.width());if(this.horizontalScrollBarMax!=undefined){h=this.horizontalScrollBarMax}if(this.verticalScrollBarMax!=undefined){s=this.verticalScrollBarMax}var c=0;if(s>g){if(h<=0){s=p-parseInt(this.host.height())}this.vScrollBar.jqxScrollBar({max:s});this.vScrollBar.css("visibility","visible")}else{this.vScrollBar.jqxScrollBar("setPosition",0);this.vScrollBar.css("visibility","hidden")}if(h>g+c){if(s<=0&&this.horizontalScrollBarMax==undefined){h=m-parseInt(this.host.width())}if(a.browser.msie&&a.browser.version>=8){if(h-10<=g+c){this.hScrollBar.css("visibility","hidden");this.hScrollBar.jqxScrollBar("setPosition",0)}else{this.hScrollBar.jqxScrollBar({max:h});this.hScrollBar.css("visibility","visible")}}else{if(a.browser.msie&&a.browser.version<8){if(h-20<=g+c){this.hScrollBar.css("visibility","hidden");this.hScrollBar.jqxScrollBar("setPosition",0)}else{this.hScrollBar.jqxScrollBar({max:h});this.hScrollBar.css("visibility","visible")}}else{this.hScrollBar.jqxScrollBar({max:h});this.hScrollBar.css("visibility","visible")}}}else{this.hScrollBar.css("visibility","hidden");this.hScrollBar.jqxScrollBar("setPosition",0);if(this.vScrollBar.css("visibility")=="visible"){var r=this;r.content.css("margin-right",g)}}if(this.width!=null&&this.width.toString().indexOf("px")!=-1){o=this.width}else{if(this.width!=undefined&&!isNaN(this.width)){o=this.width}}if(this.height!=null&&this.height.toString().indexOf("px")!=-1){l=this.height}else{if(this.height!=undefined&&!isNaN(this.height)){l=this.height}}if(this.width!=null&&this.width.toString().indexOf("%")!=-1){o=this.host.width()}if(this.height!=null&&this.height.toString().indexOf("%")!=-1){l=this.host.height()}var d=this.host.css("border-width");if(d==null){d=0}if(o!=null){o=parseInt(o);this.host.width(this.width)}if(l!=null){l=parseInt(l);this.host.height(this.height)}var b=this.scrollBarSize;if(isNaN(b)){b=parseInt(b);if(isNaN(b)){b="17px"}else{b=b+"px"}}b=parseInt(b);var j=4;var e=2;var f=0;if(this.vScrollBar.css("visibility")=="visible"){f=b+j}if(this.hScrollBar.css("visibility")=="visible"){e=b+j}this.hScrollBar.height(b);this.hScrollBar.css({top:l-j-b+"px",left:"0px"});this.hScrollBar.width(o-b-j+"px");if(f==0){this.hScrollBar.width(o-2)}if(this.vScrollBar.css("visibility")!="hidden"){this.vScrollBar.width(b)}else{this.vScrollBar.width(0)}this.vScrollBar.height(parseInt(l)-e+"px");this.vScrollBar.css({left:parseInt(o)-parseInt(b)-j+"px",top:"0px"});var i=this.vScrollInstance;i.disabled=this.disabled;i.refresh();var n=this.hScrollInstance;n.disabled=this.disabled;n.refresh();if((this.vScrollBar.css("visibility")=="visible")&&(this.hScrollBar.css("visibility")=="visible")){this.bottomRight.css("visibility","visible");this.bottomRight.css({left:1+parseInt(this.vScrollBar.css("left")),top:1+parseInt(this.hScrollBar.css("top"))});this.bottomRight.width(parseInt(b)+3);this.bottomRight.height(parseInt(b)+3)}else{this.bottomRight.css("visibility","hidden")}this._raiseevent(0);var k=this;if(this.sizeMode=="horizontalwrap"){this.host.width(m);this.vScrollBar.css({left:this.host.width()-parseInt(b)-j+"px",top:"0px"});this.hScrollBar.css("visibility","hidden")}else{if(this.sizeMode=="verticalwrap"){this.host.height(p);if(this.hScrollBar.css("visibility")=="visible"){p+=20;this.host.height(p)}this.hScrollBar.css({top:p-j-b+"px",left:"0px"});this.vScrollBar.css("visibility","hidden")}}if(this.sizeMode=="overflowy"){this.hScrollBar.css("visibility","hidden");this.content.width(this.host.width()-f)}},destroy:function(){this._removeHandlers();a(window).unbind("unload")},_raiseevent:function(g,d,f){if(this.isInitialized!=undefined&&this.isInitialized==true){var c=this.events[g];var e=new jQuery.Event(c);e.previousValue=d;e.currentValue=f;e.owner=this;var b=this.host.trigger(e);return b}},beginUpdateLayout:function(){this.updating=true},resumeUpdateLayout:function(){this.updating=false;this.vScrollInstance.value=0;this.hScrollInstance.value=0;this._arrange();this._render()},propertyChangedHandler:function(c,d,b,e){if(!c.isInitialized){return}if(!c.updating){if(d=="scrollBarSize"||d=="width"||d=="height"){c._arrange()}}if(d=="touchMode"){if(e!="auto"){c._updateTouchScrolling()}}if(d=="theme"){c.host.removeClass();c.host.addClass(this.toThemeProperty("jqx-panel"));c.host.addClass(this.toThemeProperty("jqx-widget"));c.host.addClass(this.toThemeProperty("jqx-widget-content"));c.host.addClass(this.toThemeProperty("jqx-rc-all"));c.vScrollBar.jqxScrollBar({theme:this.theme});c.hScrollBar.jqxScrollBar({theme:this.theme});c.bottomRight.removeClass();c.bottomRight.addClass(this.toThemeProperty("jqx-panel-bottomright"));c.content.removeClass();c.content.addClass(this.toThemeProperty("jqx-widget-content"))}},refresh:function(){}})})(jQuery);