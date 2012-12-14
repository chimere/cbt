/*
jQWidgets v2.5.0 (2012-Oct-16)
Copyright (c) 2011-2012 jQWidgets.
License: http://jqwidgets.com/license/
*/

(function(a){a.jqx.jqxWidget("jqxSlider","",{});a.extend(a.jqx._jqxSlider.prototype,{defineInstance:function(){this.disabled=false;this.width=300;this.height=30;this.step=1;this.max=10;this.min=0;this.orientation="horizontal";this.showTicks=true;this.ticksPosition="both";this.ticksFrequency=2;this.showButtons=true;this.buttonsPosition="both";this.mode="default";this.showRange=true;this.rangeSlider=false;this.value=0;this.values=[0,10];this.tooltip=true;this.sliderButtonSize=14;this.tickSize=7;this._dimentions={vertical:{size:"height",oSize:"width",outerOSize:"outerWidth",outerSize:"outerHeight",dimention:"top",oDimention:"left",start:"_startY",mouse:"_mouseStartY",page:"pageY",opposite:"horizontal"},horizontal:{size:"width",oSize:"height",outerOSize:"outerHeight",outerSize:"outerWidth",dimention:"left",oDimention:"top",start:"_startX",mouse:"_mouseStartX",page:"pageX",opposite:"vertical"}};this._touchEvents={mousedown:"touchstart",click:"touchstart",mouseup:"touchend",mousemove:"touchmove",mouseenter:"mouseenter",mouseleave:"mouseleave"};this._events=["change","slide","slideEnd","slideStart","created"];this._invalidArgumentExceptions={invalidWidth:"Invalid width.",invalidHeight:"Invalid height.",invalidStep:"Invalid step.",invalidMaxValue:"Invalid maximum value.",invalidMinValue:"Invalid minimum value.",invalidTickFrequency:"Invalid tick frequency.",invalidValue:"Invalid value.",invalidValues:"Invalid values.",invalidTicksPosition:"Invalid ticksPosition",invalidButtonsPosition:"Invalid buttonsPosition"};this._lastValue=[];this._track=null;this._leftButton=null;this._rightButton=null;this._slider=null;this._rangeBar=null;this._slideEvent=null;this._capturedElement=null;this._slideStarted=false},createInstance:function(b){this.host.addClass(this.toThemeProperty("jqx-slider"));this.host.addClass(this.toThemeProperty("jqx-widget"));this._isTouchDevice=a.jqx.mobile.isTouchDevice();this.host.width(this.width);this.host.height(this.height);this._refresh();this._raiseEvent(4,{value:this.getValue()});this._addInput()},_addInput:function(){var b=this.host.attr("name");if(!b){b=this.element.id}this.input=a("<input type='hidden'/>");this.host.append(this.input);this.input.attr("name",b);if(!this.rangeSlider){this.input.val(this.value.toString())}else{if(this.values){this.input.val(this.value.rangeStart.toString()+"-"+this.value.rangeEnd.toString())}}},_getDimention:function(b){return this._dimentions[this.orientation][b]},_getEvent:function(b){if(this._isTouchDevice){return this._touchEvents[b]}else{return b}},refresh:function(b){if(!b){this._refresh()}},_refresh:function(){this._render();this._performLayout();this._removeEventHandlers();this._addEventHandlers();this._initialSettings()},_render:function(){this._addTrack();this._addSliders();this._addTickContainers();this._addContentWrapper();this._addButtons();this._addRangeBar()},_addTrack:function(){if(this._track===null||this._track.length<1){this._track=a('<div class="'+this.toThemeProperty("jqx-slider-track")+'"></div>');this.host.append(this._track)}this._track.attr("style","");this._track.removeClass(this.toThemeProperty("jqx-slider-track-"+this._getDimention("opposite")));this._track.addClass(this.toThemeProperty("jqx-slider-track-"+this.orientation));this._track.addClass(this.toThemeProperty("jqx-fill-state-normal"));this._track.addClass(this.toThemeProperty("jqx-rc-all"))},_addSliders:function(){if(this._slider===null||this._slider.length<1){this._slider={};this._slider.left=a('<div class="'+this.toThemeProperty("jqx-slider-slider")+'"></div>');this._track.append(this._slider.left);this._slider.right=a('<div class="'+this.toThemeProperty("jqx-slider-slider")+'"></div>');this._track.append(this._slider.right)}this._slider.left.removeClass(this.toThemeProperty("jqx-slider-slider-"+this._getDimention("opposite")));this._slider.left.addClass(this.toThemeProperty("jqx-slider-slider-"+this.orientation));this._slider.right.removeClass(this.toThemeProperty("jqx-slider-slider-"+this._getDimention("opposite")));this._slider.right.addClass(this.toThemeProperty("jqx-slider-slider-"+this.orientation));this._slider.right.addClass(this.toThemeProperty("jqx-fill-state-normal"));this._slider.left.addClass(this.toThemeProperty("jqx-fill-state-normal"))},_addTickContainers:function(){if(this._bottomTicks!==null||this._bottomTicks.length<1||this._topTicks!==null||this._topTicks.length<1){this._addTickContainers()}if(!this.showTicks){this._bottomTicks.css("visibility","hidden");this._topTicks.css("visibility","hidden")}else{this._bottomTicks.css("visibility","visible");this._topTicks.css("visibility","visibility")}},_addTickContainers:function(){if(typeof this._bottomTicks==="undefined"||this._bottomTicks.length<1){this._bottomTicks=a('<div class="'+this.toThemeProperty("jqx-slider-tickscontainer")+'" style=""></div>');this.host.prepend(this._bottomTicks)}if(typeof this._topTicks==="undefined"||this._topTicks.length<1){this._topTicks=a('<div class="'+this.toThemeProperty("jqx-slider-tickscontainer")+'" style=""></div>');this.host.append(this._topTicks)}},_addButtons:function(){if(this._leftButton===null||this._leftButton.length<1||this._rightButton===null||this._rightButton.length<1){this._createButtons()}if(!this.showButtons||this.rangeSlider){this._rightButton.css("display","none");this._leftButton.css("display","none")}else{this._rightButton.css("display","block");this._leftButton.css("display","block")}},_createButtons:function(){this._leftButton=a('<div class="jqx-slider-left"><div style="width: 100%; height: 100%;"></div></div>');this._rightButton=a('<div class="jqx-slider-right"><div style="width: 100%; height: 100%;"></div></div>');this.host.prepend(this._rightButton);this.host.prepend(this._leftButton);this._leftButton.jqxRepeatButton({theme:this.theme,delay:250,width:this.sliderButtonSize,height:this.sliderButtonSize});this._rightButton.jqxRepeatButton({theme:this.theme,delay:250,width:this.sliderButtonSize,height:this.sliderButtonSize})},_addContentWrapper:function(){if(this._contentWrapper===undefined||this._contentWrapper.length===0){this.host.wrapInner("<div></div>");this._contentWrapper=this.host.children(0)}if(this.orientation==="horizontal"){this._contentWrapper.css("float","left")}else{this._contentWrapper.css("float","none")}},_addTicks:function(b){if(!this.showTicks){return}var g=this.max-this.min,d=b[this._getDimention("size")](),f=Math.round(g/this.ticksFrequency),h=d/f;b.empty();this._addTick(b,0,this.min);for(var c=1;c<f;c++){var e=c*h;e=Math.floor(e);this._addTick(b,e,c)}this._addTick(b,f*h,this.max)},_addTick:function(c,b,f){var d,e=c[this._getDimention("oSize")]();if(this.orientation==="horizontal"){d=a('<div style="float: left; position:absolute; left:'+b+'px;" class="'+this.toThemeProperty("jqx-slider-tick-horizontal")+'"></div>');this._tickLayout(c,d)}else{d=a('<div style="float: none; position:absolute; top:'+b+'px;" class="'+this.toThemeProperty("jqx-slider-tick-vertical")+'"></div>');this._tickLayout(c,d)}d.addClass(this.toThemeProperty("jqx-slider-tick"));d.addClass(this.toThemeProperty("jqx-fill-state-pressed"));c.append(d);d[this._getDimention("oSize")](this.tickSize)},_tickLayout:function(b,c){var d=b[this._getDimention("oSize")]();if(b[0]===this._topTicks[0]){c.css(this._getDimention("oDimention"),"2px")}else{c.css(this._getDimention("oDimention"),d-this.tickSize-2)}},_addRangeBar:function(){if(this._rangeBar===null||this._rangeBar.length<1){this._rangeBar=a('<div class="'+this.toThemeProperty("jqx-slider-rangebar")+'"></div>');this._rangeBar.addClass(this.toThemeProperty("jqx-fill-state-pressed"));this._rangeBar.addClass(this.toThemeProperty("jqx-rc-all"));this._track.append(this._rangeBar)}if(!this.showRange){this._rangeBar.css("display","none")}else{this._rangeBar.css("display","block")}},_getLeftDisplacement:function(){if(!this.showButtons){return 0}if(this.rangeSlider){return 0}switch(this.buttonsPosition){case"left":return this._leftButton[this._getDimention("outerSize")](true)+this._rightButton[this._getDimention("outerSize")](true);case"right":return 0;default:return this._leftButton[this._getDimention("outerSize")](true)}return 0},_performLayout:function(){this.host.width(this.width);this.host.height(this.height);var b=this.host.height();if(this._getDimention("size")=="width"){b=this.host.width()}this._performButtonsLayout();this._performTrackLayout(b);this._contentWrapper[this._getDimention("size")](this._track[this._getDimention("size")]());this._contentWrapper[this._getDimention("oSize")](this[this._getDimention("oSize")]);this._performTicksLayout();this._performRangeBarLayout();if(this.rangeSlider){this._slider.left.css("visibility","visible")}else{this._slider.left.css("visibility","hidden")}this._refreshRangeBar();if(this.orientation=="vertical"){if(this.showButtons){var c=parseInt((this._leftButton.width()-this._track.width())/2);this._track.css("margin-left",-2+c+"px")}}},_performTrackLayout:function(b){this._track[this._getDimention("size")](b-((this.showButtons&&!this.rangeSlider)?this._leftButton[this._getDimention("outerSize")](true)+this._rightButton[this._getDimention("outerSize")](true):0));this._slider.left.css("left",0);this._slider.left.css("top",0);this._slider.right.css("left",0);this._slider.right.css("top",0)},_performTicksLayout:function(){this._performTicksContainerLayout();this._addTicks(this._topTicks);this._addTicks(this._bottomTicks);this._topTicks.css("visibility","hidden");this._bottomTicks.css("visibility","hidden");if((this.ticksPosition==="top"||this.ticksPosition==="both")&&this.showTicks){this._bottomTicks.css("visibility","visible")}if((this.ticksPosition==="bottom"||this.ticksPosition==="both")&&this.showTicks){this._topTicks.css("visibility","visible")}},_performTicksContainerLayout:function(){var f=this._getDimention("size");var e=this._getDimention("oSize");var b=this._getDimention("outerOSize");this._topTicks[f](this._track[f]());this._bottomTicks[f](this._track[f]());var d=-1+(this[e]-this._track[b](true))/2;this._topTicks[e](parseInt(d));var c=-1+(this[e]-this._track[b](true))/2;this._bottomTicks[e](parseInt(c));if(this.orientation==="vertical"){this._topTicks.css("float","left");this._track.css("float","left");this._bottomTicks.css("float","left")}else{this._topTicks.css("float","none");this._track.css("float","none");this._bottomTicks.css("float","none")}},_performButtonsLayout:function(){this._addButtonsStyles();this._addButtonsClasses();this._addButtonsHover();this._orderButtons();this._centerElement(this._rightButton);this._centerElement(this._leftButton);this._layoutButtons()},_addButtonsStyles:function(){this._leftButton.css("background-position","center");this._rightButton.css("background-position","center");if(this.orientation==="vertical"){this._leftButton.css("float","none");this._rightButton.css("float","none")}else{this._leftButton.css("float","left");this._rightButton.css("float","left")}},_addButtonsClasses:function(){var b={prev:"left",next:"right"};if(this.orientation==="vertical"){b={prev:"up",next:"down"}}this._leftButton.addClass(this.toThemeProperty("jqx-rc-all"));this._rightButton.addClass(this.toThemeProperty("jqx-rc-all"));this._leftButton.addClass(this.toThemeProperty("jqx-slider-button"));this._rightButton.addClass(this.toThemeProperty("jqx-slider-button"));this._leftArrow=this._leftButton.find("div");this._rightArrow=this._rightButton.find("div");this._leftArrow.removeClass(this.toThemeProperty("icon-arrow-left"));this._rightArrow.removeClass(this.toThemeProperty("icon-arrow-right"));this._leftArrow.removeClass(this.toThemeProperty("icon-arrow-up"));this._rightArrow.removeClass(this.toThemeProperty("icon-arrow-down"));this._leftArrow.addClass(this.toThemeProperty("icon-arrow-"+b.prev));this._rightArrow.addClass(this.toThemeProperty("icon-arrow-"+b.next))},_addButtonsHover:function(){var c=this,b={prev:"left",next:"right"};if(this.orientation==="vertical"){b={prev:"up",next:"down"}}this.addHandler(a(document),"mouseup.arrow"+this.element.id,function(){c._leftArrow.removeClass(c.toThemeProperty("icon-arrow-"+b.prev+"-selected"));c._rightArrow.removeClass(c.toThemeProperty("icon-arrow-"+b.next+"-selected"))});this.addHandler(this._leftButton,"mousedown",function(){if(!c.disabled){c._leftArrow.addClass(c.toThemeProperty("icon-arrow-"+b.prev+"-selected"))}});this.addHandler(this._leftButton,"mouseup",function(){if(!c.disabled){c._leftArrow.removeClass(c.toThemeProperty("icon-arrow-"+b.prev+"-selected"))}});this.addHandler(this._rightButton,"mousedown",function(){if(!c.disabled){c._rightArrow.addClass(c.toThemeProperty("icon-arrow-"+b.next+"-selected"))}});this.addHandler(this._rightButton,"mouseup",function(){if(!c.disabled){c._rightArrow.removeClass(c.toThemeProperty("icon-arrow-"+b.next+"-selected"))}});this._leftButton.hover(function(){if(!c.disabled){c._leftArrow.addClass(c.toThemeProperty("icon-arrow-"+b.prev+"-hover"))}},function(){if(!c.disabled){c._leftArrow.removeClass(c.toThemeProperty("icon-arrow-"+b.prev+"-hover"))}});this._rightButton.hover(function(){if(!c.disabled){c._rightArrow.addClass(c.toThemeProperty("icon-arrow-"+b.next+"-hover"))}},function(){if(!c.disabled){c._rightArrow.removeClass(c.toThemeProperty("icon-arrow-"+b.next+"-hover"))}})},_layoutButtons:function(){if(this.orientation==="horizontal"){this._horizontalButtonsLayout()}else{this._verticalButtonsLayout()}},_horizontalButtonsLayout:function(){var b=(2+Math.ceil(this.sliderButtonSize/2));if(this.buttonsPosition=="left"){this._leftButton.css("margin-right","0px");this._rightButton.css("margin-right",b)}else{if(this.buttonsPosition=="right"){this._leftButton.css("margin-left",2+b);this._rightButton.css("margin-right","0px")}else{this._leftButton.css("margin-right",b);this._rightButton.css("margin-left",2+b)}}},_verticalButtonsLayout:function(){var b=(2+Math.ceil(this.sliderButtonSize/2));if(this.buttonsPosition=="left"){this._leftButton.css("margin-bottom","0px");this._rightButton.css("margin-bottom",b)}else{if(this.buttonsPosition=="right"){this._leftButton.css("margin-top",2+b);this._rightButton.css("margin-bottom","0px")}else{this._leftButton.css("margin-bottom",b);this._rightButton.css("margin-top",2+b)}}},_orderButtons:function(){this._rightButton.detach();this._leftButton.detach();switch(this.buttonsPosition){case"left":this.host.prepend(this._rightButton);this.host.prepend(this._leftButton);break;case"right":this.host.append(this._leftButton);this.host.append(this._rightButton);break;case"both":this.host.prepend(this._leftButton);this.host.append(this._rightButton);break}},_performRangeBarLayout:function(){this._rangeBar[this._getDimention("oSize")](this._track[this._getDimention("oSize")]());this._rangeBar[this._getDimention("size")](this._track[this._getDimention("size")]());this._rangeBar.css("position","absolute");this._rangeBar.css("left",0);this._rangeBar.css("top",0)},_centerElement:function(c){var b=(a(c.parent())[this._getDimention("oSize")]()-c[this._getDimention("outerOSize")]())/2;c.css("margin-"+[this._getDimention("dimention")],0);c.css("margin-"+[this._getDimention("oDimention")],b);return c},_raiseEvent:function(d,b){var c=a.Event(this._events[d]);c.args=b;if(d===1){c.args.cancel=false;this._slideEvent=c}this._lastValue[d]=b.value;return this.host.trigger(c)},_initialSettings:function(){if(this.rangeSlider){if(typeof this.value!=="number"){this.setValue(this.value)}else{this.setValue(this.values)}}else{this.setValue(this.value)}if(this.disabled){this.disable()}this.element.tabIndex=0;this.host.find("DIV").css("tab-index",0)},_addEventHandlers:function(){var b=this;this.addHandler(this._slider.right,this._getEvent("mousedown"),this._startDrag,{self:this});this.addHandler(this._slider.left,this._getEvent("mousedown"),this._startDrag,{self:this});this.addHandler(a(document),this._getEvent("mouseup")+"."+this.host.attr("id"),function(){b._stopDrag(b)});if(document.referrer!=""||window.frameElement){if(window.top!=null){var c=function(e){b._stopDrag(b)};if(window.parent&&document.referrer){parentLocation=document.referrer}if(parentLocation.indexOf(document.location.host)!=-1){if(window.top.document){if(window.top.document.addEventListener){window.top.document.addEventListener("mouseup",c,false)}else{if(window.top.document.attachEvent){window.top.document.attachEvent("onmouseup",c)}}}}}}this.addHandler(a(document),this._getEvent("mousemove")+"."+this.host.attr("id"),this._performDrag,{self:this});var d=this;this.addHandler(this._slider.left,"mouseenter",function(){if(!d.disabled){b._slider.left.addClass(b.toThemeProperty("jqx-fill-state-hover"))}});this.addHandler(this._slider.right,"mouseenter",function(){if(!d.disabled){b._slider.right.addClass(b.toThemeProperty("jqx-fill-state-hover"))}});this.addHandler(this._slider.left,"mouseleave",function(){if(!d.disabled){b._slider.left.removeClass(b.toThemeProperty("jqx-fill-state-hover"))}});this.addHandler(this._slider.right,"mouseleave",function(){if(!d.disabled){b._slider.right.removeClass(b.toThemeProperty("jqx-fill-state-hover"))}});this.addHandler(this._slider.left,"mousedown",function(){if(!d.disabled){b._slider.left.addClass(b.toThemeProperty("jqx-fill-state-pressed"))}});this.addHandler(this._slider.right,"mousedown",function(){if(!d.disabled){b._slider.right.addClass(b.toThemeProperty("jqx-fill-state-pressed"))}});this.addHandler(this._slider.left,"mouseup",function(){if(!d.disabled){b._slider.left.removeClass(b.toThemeProperty("jqx-fill-state-pressed"))}});this.addHandler(this._slider.right,"mouseup",function(){if(!d.disabled){b._slider.right.removeClass(b.toThemeProperty("jqx-fill-state-pressed"))}});this.addHandler(this._leftButton,this._getEvent("click"),this._leftButtonHandler,{self:this});this.addHandler(this._rightButton,this._getEvent("click"),this._rightButtonHandler,{self:this});this.addHandler(this._track,this._getEvent("mousedown"),this._trackMouseDownHandler,{self:this});this.element.onselectstart=function(){return false};this._addMouseWheelListeners();this._addKeyboardListeners()},_addMouseWheelListeners:function(){var b=this;this.addHandler(this.host,"mousewheel",function(d){var c=d.wheelDelta;if(d.originalEvent&&d.originalEvent.wheelDelta){d.wheelDelta=d.originalEvent.wheelDelta}if(!("wheelDelta" in d)){c=d.detail*-40}if(c>0){b.incrementValue()}else{b.decrementValue()}d.preventDefault()})},_addKeyboardListeners:function(){var b=this;this.addHandler(this.host,"keydown",function(c){switch(c.keyCode){case 40:case 37:b.decrementValue();return false;case 38:case 39:b.incrementValue();return false;case 36:if(b.rangeSlider){b.setValue([b.values[0],b.max])}else{b.setValue(b.min)}return false;case 35:if(b.rangeSlider){b.setValue([b.min,b.values[1]])}else{b.setValue(b.max)}return false}})},_trackMouseDownHandler:function(g){var c=g.data.self,g=(c._isTouchDevice)?g.originalEvent.touches[0]:g,b=c._track.offset()[c._getDimention("dimention")],d=g[c._getDimention("page")]-c._slider.left[c._getDimention("size")]()/2,f=c._getClosest(d),e=parseInt(c._track[c._getDimention("size")]());var h=c._getValueByPosition(d);c._setValue(h,f);g.target=f;c._startDrag(g)},_getClosest:function(b){if(!this.rangeSlider){return this._slider.right}else{b=b-this._track.offset()[this._getDimention("dimention")]-this._slider.left[this._getDimention("size")]()/2;if(Math.abs(parseInt(this._slider.left.css(this._getDimention("dimention")),10)-b)<Math.abs(parseInt(this._slider.right.css(this._getDimention("dimention")),10)-b)){return this._slider.left}else{return this._slider.right}}},_removeEventHandlers:function(){this.removeHandler(this._slider.right,this._getEvent("mousedown"),this._startDrag);this.removeHandler(this._slider.left,this._getEvent("mousedown"),this._startDrag);this.removeHandler(a(document),this._getEvent("mouseup")+"."+this.host.attr("id"),this._stopDrag);this.removeHandler(a(document),this._getEvent("mousemove")+"."+this.host.attr("id"),this._performDrag);this.removeHandler(this._leftButton,this._getEvent("click"),this._leftButtonHandler);this.removeHandler(this._rightButton,this._getEvent("click"),this._rightButtonHandler);this.removeHandler(this._track,this._getEvent("mousedown"),this._trackMouseDownHandler);this.element.onselectstart=null;this.removeHandler(this.host,this._getEvent("mousewheel"));this.removeHandler(this.host,this._getEvent("keydown"))},_rightButtonHandler:function(c){var b=c.data.self;if(b.orientation=="horizontal"){b.incrementValue()}else{b.decrementValue()}},_leftButtonHandler:function(c){var b=c.data.self;if(b.orientation=="horizontal"){b.decrementValue()}else{b.incrementValue()}},_startDrag:function(c){var b=c.data.self;b._capturedElement=a(c.target);b._startX=a(c.target).offset().left;b._startY=a(c.target).offset().top;b._mouseStartX=(b._isTouchDevice)?c.originalEvent.touches[0].pageX:c.pageX;b._mouseStartY=(b._isTouchDevice)?c.originalEvent.touches[0].pageY:c.pageY;return false},_stopDrag:function(b){if(b._slideStarted){b._raiseEvent(2,{value:b.getValue()})}b._slider.left.removeClass(b.toThemeProperty("jqx-fill-state-pressed"));b._slider.right.removeClass(b.toThemeProperty("jqx-fill-state-pressed"));b._slideStarted=false;b._capturedElement=null},_performDrag:function(c){var b=c.data.self,c=(b._isTouchDevice)?c.originalEvent.touches[0]:c;if(b._capturedElement!==null){if(c.which===0&&a.browser.msie&&a.browser.version<9){b._stopDrag(b);return false}b._isDragged(c[b._getDimention("page")]);if(b._slideStarted){return b._dragHandler(c[b._getDimention("page")])}}},_isDragged:function(b){if(Math.abs(b-this[this._getDimention("mouse")])>2&&!this._slideStarted){this._slideStarted=true;if(this._valueChanged(3)){this._raiseEvent(3,{value:this.getValue()})}}else{if(this._capturedElement===null){this._slideStarted=false}}},_dragHandler:function(b){b=(b-this[this._getDimention("mouse")])+this[this._getDimention("start")];var c=this._getValueByPosition(b);if(this.rangeSlider){var d=this._slider.right,f=this._slider.left;var e=this._getDimention("dimention");if(this._capturedElement[0]===f[0]){if(parseFloat(b)>d.offset()[e]){b=d.offset()[e]}}else{if(parseFloat(b)<f.offset()[e]){b=f.offset()[e]}}}this._setValue(c,this._capturedElement,b);return false},_getValueByPosition:function(b){if(this.mode==="default"){return this._getFloatingValueByPosition(b)}else{return this._getFixedValueByPosition(b)}},_getFloatingValueByPosition:function(b){var c=b-this._track.offset()[this._getDimention("dimention")]+this._slider.left.width()/2,d=c/this._track[this._getDimention("size")](),e=(this.max-this.min)*d+this.min;if(this.orientation==="horizontal"){return e}else{return(this.max+this.min)-e}},_getFixedValueByPosition:function(b){var g=this.step,f=(this.max-this.min)/g,c=(this._track[this._getDimention("size")]())/f,e=this._track.offset()[this._getDimention("dimention")]-this._slider.left[this._getDimention("size")]()/2,h={number:-1,distance:Number.MAX_VALUE};for(var d=this.min;d<=this.max+this.step;d+=this.step){if(Math.abs(h.distance-b)>Math.abs(e-b)){h.distance=e;h.number=d}e+=c}if(this.orientation==="horizontal"){return h.number}else{return(this.max+this.min)-h.number}},_setValue:function(e,d,b){if(!this._slideEvent||!this._slideEvent.args.cancel){e=this._handleValue(e,d);this._setSliderPosition(e,d,b);this._fixZIndexes();if(this._valueChanged(1)){var c=this._raiseEvent(1,{value:this.getValue()})}if(this._valueChanged(0)){this._raiseEvent(0,{value:this.getValue()})}if(this.tooltip){d.attr("title",e)}if(this.input){if(!this.rangeSlider){this.input.val(this.value.toString())}else{if(this.values){this.input.val(this.value.rangeStart.toString()+"-"+this.value.rangeEnd.toString())}}}}},_valueChanged:function(c){var b=this.getValue();return(!this.rangeSlider&&this._lastValue[c]!==b)||(this.rangeSlider&&(typeof this._lastValue[c]!=="object"||Math.round(this._lastValue[c].rangeEnd)!==Math.round(b.rangeEnd)||Math.round(this._lastValue[c].rangeStart)!==Math.round(b.rangeStart)))},_handleValue:function(c,b){c=this._validateValue(c,b);if(b[0]===this._slider.left[0]){this.values[0]=c}if(b[0]===this._slider.right[0]){this.values[1]=c}if(this.rangeSlider){this.value={rangeStart:this.values[0],rangeEnd:this.values[1]}}else{this.value=c}return c},_fixZIndexes:function(){if(this.values[1]-this.values[0]<0.5&&this.max-this.values[0]<0.5){this._slider.left.css("z-index",20);this._slider.right.css("z-index",15)}else{this._slider.left.css("z-index",15);this._slider.right.css("z-index",20)}},_refreshRangeBar:function(){var b=this._slider.left.position()[this._getDimention("dimention")];if(this.orientation==="vertical"){b=this._slider.right.position()[this._getDimention("dimention")]}this._rangeBar.css(this._getDimention("dimention"),b+this._slider.left[this._getDimention("size")]()/2);this._rangeBar[this._getDimention("size")](Math.abs(this._slider.right.position()[this._getDimention("dimention")]-this._slider.left.position()[this._getDimention("dimention")]))},_validateValue:function(c,b){if(c>this.max){c=this.max}if(c<this.min){c=this.min}if(b[0]===this._slider.left[0]){if(c>=this.values[1]){c=this.values[1]}}else{if(c<=this.values[0]){c=this.values[0]}}return c},_setSliderPosition:function(f,e,b){var d=this._track[this._getDimention("size")](),c,g;if(b){b-=this._track.offset()[this._getDimention("dimention")]}if(this.orientation==="horizontal"){c=(f-this.min)/(this.max-this.min)}else{c=1-((f-this.min)/(this.max-this.min))}g=(typeof b==="undefined"||this.mode!=="default")?(d*c-this._slider.left[this._getDimention("size")]()/2):b;g=this._validateDropPosition(g,e);e.css(this._getDimention("dimention"),g);this._refreshRangeBar()},_validateDropPosition:function(e,d){var b=this._track[this._getDimention("size")](),c=d[this._getDimention("size")]();if(e<-c/2){e=-c/2}if(e>b-c/2){e=b-c/2}return Math.floor(e)},_addDisabledClasses:function(){this.host.addClass(this.toThemeProperty("jqx-fill-state-disabled"))},_removeDisabledClasses:function(){this.host.removeClass(this.toThemeProperty("jqx-fill-state-disabled"))},propertyChangedHandler:function(b,c,e,d){switch(c){case"theme":a.jqx.utilities.setTheme(e,d,b.host);b._leftButton.jqxRepeatButton({theme:d});b._rightButton.jqxRepeatButton({theme:d});break;case"disabled":if(d){b.disabled=true;b.disable()}else{b.disabled=false;b.enable()}break;case"width":b.width=parseInt(d);b._performLayout();b._initialSettings();break;case"height":b.height=parseInt(d);b._performLayout();b._initialSettings();break;case"min":b.min=parseFloat(d);if(!b.rangeSlider){b._setValue(d,b._slider.left)}b._initialSettings();break;case"step":break;case"max":b.max=parseFloat(d);if(!b.rangeSlider){b._setValue(d,b._slider.left)}b._initialSettings();break;case"showTicks":case"ticksPosition":case"ticksFrequency":case"tickSize":b._performLayout();b._initialSettings();break;case"showRange":case"showButtons":case"orientation":b._render();b._performLayout();b._initialSettings();break;case"buttonsPosition":b._refresh();break;case"mode":break;case"rangeSlider":if(!d){b.value=b.value.rangeEnd}else{b.value={rangeEnd:b.value,rangeStart:b.value}}b._render();b._performLayout();b._initialSettings();break;case"value":if(!b.rangeSlider){b.value=parseFloat(d)}b.setValue(d);break;case"values":b.setValue(d);break;case"tooltip":if(!d){b._slider.left.removeAttr("title");b._slider.right.removeAttr("title")}break;default:b._refresh()}},incrementValue:function(b){if(b==undefined||isNaN(parseFloat(b))){b=this.step}if(this.rangeSlider){if(this.values[1]<this.max){this._setValue(this.values[1]+b,this._slider.right)}}else{if(this.values[1]>=this.min&&this.values[1]<this.max){this._setValue(this.values[1]+b,this._slider.right)}}},decrementValue:function(b){if(b==undefined||isNaN(parseFloat(b))){b=this.step}if(this.rangeSlider){if(this.values[0]>this.min){this._setValue(this.values[0]-b,this._slider.left)}}else{if(this.values[1]<=this.max&&this.values[1]>this.min){this._setValue(this.values[1]-b,this._slider.right)}}},setValue:function(d){if(this.rangeSlider){var c,b;if(arguments.length<2){if(d instanceof Array){c=d[0];b=d[1]}else{if(typeof d==="object"&&typeof d.rangeStart!=="undefined"&&typeof d.rangeEnd!=="undefined"){c=d.rangeStart;b=d.rangeEnd}}}else{c=arguments[0];b=arguments[1]}this._setValue(b,this._slider.right);this._setValue(c,this._slider.left)}else{this._setValue(this.min,this._slider.left);this._setValue(d,this._slider.right)}},getValue:function(){return this.value},disable:function(){this._removeEventHandlers();this.disabled=true;this._addDisabledClasses();this._leftButton.jqxRepeatButton({disabled:this.disabled});this._rightButton.jqxRepeatButton({disabled:this.disabled})},enable:function(){this._addEventHandlers();this.disabled=false;this._removeDisabledClasses();this._leftButton.jqxRepeatButton({disabled:this.disabled});this._rightButton.jqxRepeatButton({disabled:this.disabled})}})})(jQuery);