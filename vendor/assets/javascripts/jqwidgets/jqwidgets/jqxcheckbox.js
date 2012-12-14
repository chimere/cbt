/*
jQWidgets v2.5.0 (2012-Oct-16)
Copyright (c) 2011-2012 jQWidgets.
License: http://jqwidgets.com/license/
*/

(function(a){a.jqx.jqxWidget("jqxCheckBox","",{});a.extend(a.jqx._jqxCheckBox.prototype,{defineInstance:function(){this.animationShowDelay=300,this.animationHideDelay=300,this.width=null;this.height=null;this.boxSize="13px";this.checked=false;this.hasThreeStates=false;this.disabled=false;this.enableContainerClick=true;this.locked=false;this.groupName="";this.keyboardCheck=true;this.enableHover=true;this.events=["checked","unchecked","indeterminate","change"]},createInstance:function(b){var d=this;this.setSize();this.propertyChangeMap.width=function(e,g,f,h){d.setSize()};this.propertyChangeMap.height=function(e,g,f,h){d.setSize()};this.checkbox=a("<div><div><span></span></div></div>");this.host.attr("tabIndex",0);this.host.prepend(this.checkbox);this.host.append(a('<div style="clear: both;"></div>'));this.checkMark=a(this.checkbox).find("span");this.box=a(this.checkbox).find("div");this.box.addClass(this.toThemeProperty("jqx-checkbox-default"));this.box.addClass(this.toThemeProperty("jqx-fill-state-normal"));this.box.addClass(this.toThemeProperty("jqx-rc-all"));if(this.disabled){this.disable()}this.host.addClass(this.toThemeProperty("jqx-widget"));this.host.addClass(this.toThemeProperty("jqx-checkbox"));if(this.locked){this.host.css("cursor","auto")}var c=this.element.getAttribute("checked");if(c=="checked"||c=="true"||c==true){this.checked=true}this._addInput();this._render();this._addHandlers()},_addInput:function(){var b=this.host.attr("name");if(!b){b=this.element.id}this.input=a("<input type='hidden'/>");this.host.append(this.input);this.input.attr("name",b);this.input.val(this.checked)},refresh:function(b){if(!b){this.setSize();this._render()}},setSize:function(){if(this.width!=null&&this.width.toString().indexOf("px")!=-1){this.host.width(this.width)}else{if(this.width!=undefined&&!isNaN(this.width)){this.host.width(this.width)}}if(this.height!=null&&this.height.toString().indexOf("px")!=-1){this.host.height(this.height)}else{if(this.height!=undefined&&!isNaN(this.height)){this.host.height(this.height)}}},_addHandlers:function(){var d=this;var c=a.jqx.mobile.isTouchDevice();var b="click";if(c){b="touchend"}this.addHandler(this.box,b,function(e){if(!d.disabled&&!d.enableContainerClick&&!d.locked){d.toggle();if(d.updated){e.owner=d;d.updated(e,d.checked,d.oldChecked)}e.preventDefault();return false}});this.addHandler(this.host,"keydown",function(e){if(!d.disabled&&!d.locked&&d.keyboardCheck){if(e.keyCode==32){d.toggle();e.preventDefault();return false}}});this.addHandler(this.host,b,function(e){if(!d.disabled&&d.enableContainerClick&&!d.locked){d.toggle();e.preventDefault();return false}});this.addHandler(this.host,"selectstart",function(e){if(!d.disabled&&d.enableContainerClick){e.preventDefault();return false}});this.addHandler(this.host,"mouseup",function(e){if(!d.disabled&&d.enableContainerClick){e.preventDefault()}});this.addHandler(this.host,"focus",function(e){if(!d.disabled&&!d.locked){if(d.enableHover){d.box.addClass(d.toThemeProperty("jqx-checkbox-hover"))}d.box.addClass(d.toThemeProperty("jqx-fill-state-focus"));e.preventDefault();d.hovered=true;return false}});this.addHandler(this.host,"blur",function(e){if(!d.disabled&&!d.locked){if(d.enableHover){d.box.removeClass(d.toThemeProperty("jqx-checkbox-hover"))}d.box.removeClass(d.toThemeProperty("jqx-fill-state-focus"));e.preventDefault();d.hovered=false;return false}});this.addHandler(this.host,"mouseenter",function(e){if(d.locked){d.host.css("cursor","arrow")}if(d.enableHover){if(!d.disabled&&d.enableContainerClick&&!d.locked){d.box.addClass(d.toThemeProperty("jqx-checkbox-hover"));d.box.addClass(d.toThemeProperty("jqx-fill-state-hover"));e.preventDefault();d.hovered=true;return false}}});this.addHandler(this.host,"mouseleave",function(e){if(d.enableHover){if(!d.disabled&&d.enableContainerClick&&!d.locked){d.box.removeClass(d.toThemeProperty("jqx-checkbox-hover"));d.box.removeClass(d.toThemeProperty("jqx-fill-state-hover"));e.preventDefault();d.hovered=false;return false}}});this.addHandler(this.box,"mouseenter",function(){if(d.locked){return}if(!d.disabled&&!d.enableContainerClick){d.box.addClass(d.toThemeProperty("jqx-checkbox-hover"));d.box.addClass(d.toThemeProperty("jqx-fill-state-hover"))}});this.addHandler(this.box,"mouseleave",function(){if(!d.disabled&&!d.enableContainerClick){d.box.removeClass(d.toThemeProperty("jqx-checkbox-hover"));d.box.removeClass(d.toThemeProperty("jqx-fill-state-hover"))}})},_removeHandlers:function(){var c=a.jqx.mobile.isTouchDevice();var b="click";if(c){b="touchend"}this.removeHandler(this.box,b);this.removeHandler(this.box,"mouseenter");this.removeHandler(this.box,"mouseleave");this.removeHandler(this.host,b);this.removeHandler(this.host,"mouseup");this.removeHandler(this.host,"selectstart");this.removeHandler(this.host,"mouseenter");this.removeHandler(this.host,"mouseleave");this.removeHandler(this.host,"keydown");this.removeHandler(this.host,"blur");this.removeHandler(this.host,"focus")},_render:function(){if(this.boxSize==null){this.boxSize=13}this.box.width(this.boxSize);this.box.height(this.boxSize);this.checkMark.width(this.boxSize);this.checkMark.height(this.boxSize);if(!this.disabled){if(this.enableContainerClick){this.host.css("cursor","pointer")}else{this.host.css("cursor","auto")}}else{this.disable()}this.updateStates()},_setState:function(b){if(this.checked!=b){this.checked=b;this.checkMark.removeClass();if(this.checked){this.checkMark.addClass(this.toThemeProperty("jqx-checkbox-check-checked"));this.checkMark.css("opacity",1)}else{if(this.checked==null){this.checkMark.addClass(this.toThemeProperty("jqx-checkbox-check-indeterminate"));this.checkMark.css("opacity",1)}}}},check:function(){this.checked=true;var b=this;this.checkMark.removeClass();if(a.browser.msie){this.checkMark.addClass(this.toThemeProperty("jqx-checkbox-check-checked"))}else{this.checkMark.addClass(this.toThemeProperty("jqx-checkbox-check-checked"));this.checkMark.css("opacity",0);this.checkMark.stop().animate({opacity:1},this.animationShowDelay,function(){})}var c=a.find(this.toThemeProperty(".jqx-checkbox",true));if(this.groupName!=null&&this.groupName.length>0){a.each(c,function(){var d=a(this).jqxCheckBox("groupName");if(d==b.groupName&&this!=b.element){a(this).jqxCheckBox("uncheck")}})}this._raiseEvent("0",true);this._raiseEvent("3",{checked:true});this.input.val(this.checked)},uncheck:function(){this.checked=false;var b=this;if(a.browser.msie){b.checkMark.removeClass()}else{this.checkMark.css("opacity",1);this.checkMark.stop().animate({opacity:0},this.animationHideDelay,function(){b.checkMark.removeClass()})}this._raiseEvent("1");this._raiseEvent("3",{checked:false});this.input.val(this.checked)},indeterminate:function(){this.checked=null;this.checkMark.removeClass();if(a.browser.msie){this.checkMark.addClass(this.toThemeProperty("jqx-checkbox-check-indeterminate"))}else{this.checkMark.addClass(this.toThemeProperty("jqx-checkbox-check-indeterminate"));this.checkMark.css("opacity",0);this.checkMark.stop().animate({opacity:1},this.animationShowDelay,function(){})}this._raiseEvent("2");this._raiseEvent("3",{checked:null});this.input.val(this.checked)},toggle:function(){if(this.disabled){return}if(this.locked){return}if(this.groupName!=null&&this.groupName.length>0){if(this.checked!=true){this.checked=true;this.updateStates()}return}this.oldChecked=this.checked;if(this.checked==true){this.checked=this.hasThreeStates?null:false}else{this.checked=this.checked!=null}this.updateStates();this.input.val(this.checked)},updateStates:function(){if(this.checked){this.check()}else{if(this.checked==false){this.uncheck()}else{if(this.checked==null){this.indeterminate()}}}},disable:function(){this.disabled=true;if(this.checked==true){this.checkMark.addClass(this.toThemeProperty("jqx-checkbox-check-disabled"))}else{if(this.checked==null){this.checkMark.addClass(this.toThemeProperty("jqx-checkbox-check-indeterminate-disabled"))}}this.box.addClass(this.toThemeProperty("jqx-checkbox-disabled-box"));this.host.addClass(this.toThemeProperty("jqx-checkbox-disabled"));this.host.addClass(this.toThemeProperty("jqx-fill-state-disabled"));this.box.addClass(this.toThemeProperty("jqx-checkbox-disabled"))},enable:function(){if(this.checked==true){this.checkMark.removeClass(this.toThemeProperty("jqx-checkbox-check-disabled"))}else{if(this.checked==null){this.checkMark.removeClass(this.toThemeProperty("jqx-checkbox-check-indeterminate-disabled"))}}this.box.removeClass(this.toThemeProperty("jqx-checkbox-disabled-box"));this.host.removeClass(this.toThemeProperty("jqx-checkbox-disabled"));this.host.removeClass(this.toThemeProperty("jqx-fill-state-disabled"));this.box.removeClass(this.toThemeProperty("jqx-checkbox-disabled"));this.disabled=false},destroy:function(){this._removeHandlers();this.host.removeClass();this.host.remove()},_raiseEvent:function(g,e){var c=this.events[g];var f=new jQuery.Event(c);f.owner=this;f.args=e;try{var b=this.host.trigger(f)}catch(d){}return b},propertyChangedHandler:function(b,c,e,d){if(this.isInitialized==undefined||this.isInitialized==false){return}if(c==b.enableContainerClick&&!b.disabled&&!b.locked){if(d){b.host.css("cursor","pointer")}else{b.host.css("cursor","auto")}}if(c=="theme"){a.jqx.utilities.setTheme(e,d,b.host)}if(c=="checked"){if(d!=e){switch(d){case true:b.check();break;case false:b.uncheck();break;case null:b.indeterminate();break}}}if(c=="disabled"){if(d!=e){if(d){b.disable()}else{b.enable()}}}}})})(jQuery);