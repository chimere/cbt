/*
jQWidgets v2.5.0 (2012-Oct-16)
Copyright (c) 2011-2012 jQWidgets.
License: http://jqwidgets.com/license/
*/

(function(a){a.extend(a.jqx._jqxGrid.prototype,{_calculateaggregate:function(g,j,h,c){var f=g.aggregates;if(!f){f=j}if(f){var e=new Array();for(var d=0;d<f.length;d++){if(f[d]=="count"){continue}e[e.length]=g.cellsformat}if(this.source&&this.source.getAggregatedData){if(c==undefined){c=this.source.records}if(h==undefined||h==true){var b=this.source.getAggregatedData([{name:g.datafield,aggregates:f,formatStrings:e}],this.gridlocalization,c);return b}else{var b=this.source.getAggregatedData([{name:g.datafield,aggregates:f}],this.gridlocalization,c);return b}}}return null},getcolumnaggregateddata:function(e,h,c,d){var f=this.getcolumn(e);var g=(c==undefined||c==false)?false:c;if(h==null){return""}var b=this._calculateaggregate(f,h,g,d)[e];return b},refreshaggregates:function(){this._updatecolumnsaggregates()},renderaggregates:function(){this._updateaggregates()},_updatecolumnaggregates:function(d,f,b){var e=this;if(!f){b.children().remove();b.html("");if(d.aggregatesrenderer){var c=d.aggregatesrenderer(d,b);b.html(c)}return}b.children().remove();b.html("");if(d.aggregatesrenderer){if(f){var c=d.aggregatesrenderer(f[d.datafield],d,b,this.getcolumnaggregateddata(d.datafield,f[d.datafield]));b.html(c)}}else{a.each(f,function(){var h=this;for(obj in h){var i=a('<div style="position: relative; margin: 4px; overflow: hidden;"></div>');var g=obj;g=e._getaggregatename(g);i.html(g+":"+h[obj]);b.append(i)}})}},_getaggregatetype:function(c){switch(c){case"min":case"max":case"count":case"avg":case"product":case"var":case"varp":case"stdev":case"stdevp":case"sum":return c}var b=c;for(var d in c){b=d;break}return b},_getaggregatename:function(c){var b=c;switch(c){case"min":b="Min";break;case"max":b="Max";break;case"count":b="Count";break;case"avg":b="Avg";break;case"product":b="Product";break;case"var":b="Var";break;case"stdevp":b="StDevP";break;case"stdev":b="StDev";break;case"varp":b="VarP";case"sum":b="Sum";break}if(c===b&&typeof(b)!="string"){for(var d in c){b=d;break}}return b},_updatecolumnsaggregates:function(){var f=this.getrows();var b=this.columns.records.length;for(var e=0;e<b;e++){var g=a(this.statusbar[0].cells[e]);var d=this.columns.records[e];var c=this._calculateaggregate(d,null,true,f);this._updatecolumnaggregates(d,c,g)}},_updateaggregates:function(){var b=a('<div style="position: relative;" id="row0'+this.element.id+'"></div>');var d=0;var k=this.columns.records.length;var i=this.toThemeProperty("jqx-grid-cell");i+=" "+this.toThemeProperty("jqx-grid-cell-pinned");var l=k+10;var m=new Array();this.statusbar[0].cells=m;for(var f=0;f<k;f++){var e=this.columns.records[f];var g=this._calculateaggregate(e);var c=e.width;if(c<e.minwidth){c=e.minwidth}if(c>e.maxwidth){c=e.maxwidth}var h=a('<div style="overflow: hidden; position: absolute; height: 100%;" class="'+i+'"></div>');b.append(h);h.css("left",d);h.css("z-index",l--);h.width(c);h[0].left=d;if(!(e.hidden&&e.hideable)){d+=c}else{h.css("display","none")}m[m.length]=h[0];this._updatecolumnaggregates(e,g,h)}if(a.browser.msie&&a.browser.version<8){b.css("z-index",l--)}b.width(parseInt(d)+2);b.height(this.statusbarheight);this.statusbar.children().remove();this.statusbar.append(b);this.statusbar.removeClass(this.toThemeProperty("jqx-widget-header"));this.statusbar.addClass(i);this.statusbar.css("border-bottom-color","transparent");this.statusbar.css("border-top-width","1px")}})})(jQuery);