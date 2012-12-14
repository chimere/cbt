/*
jQWidgets v2.5.0 (2012-Oct-16)
Copyright (c) 2011-2012 jQWidgets.
License: http://jqwidgets.com/license/
*/

(function(a){
    a.jqx.jqxWidget("jqxTree","",{});
    a.extend(a.jqx._jqxTree.prototype,
        {defineInstance:function(){
            this.items=new Array();
            this.width=null;
            this.height=null;
            this.easing="easeInOutCirc";
            this.animationShowDuration="fast";
            this.animationHideDuration="fast";
            this.treeElements=new Array();
            this.disabled=false;
            this.enableHover=true;
            this.keyboardNavigation=true;
            this.enableKeyboardNavigation=true;
            this.toggleMode="dblclick";
            this.source=null;
            this.checkboxes=false;
            this.checkSize=13;
            this.toggleIndicatorSize=16;
            this.hasThreeStates=false;
            this.selectedItem=null;
            this.touchMode="auto";
            this.allowDrag=true;
            this.allowDrop=true;
            this.animationHideDelay=0;
            this.dropAction="default";
            this.events=["expand","collapse","select","initialized","added","removed","checkChange","dragEnd","dragStart"]
            },
        createInstance:function(c){
            var b=this;
            this.propertyChangeMap.disabled=function(f,h,g,j){
                if(b.disabled){
                    b.host.addClass(b.toThemeProperty("jqx-tree-disabled"))
                }else{
                    b.host.removeClass(b.toThemeProperty("jqx-tree-disabled"))}};
                    if(this.width!=null&&this.width.toString().indexOf("px")!=-1){
                        this.host.width(this.width)
                    }else{
                        if(this.width!=undefined&&!isNaN(this.width)){
                            this.host.width(this.width)
                        }
                    }
                    if(this.height!=null&&this.height.toString().indexOf("px")!=-1){
                        this.host.height(this.height)
                    }else{
                        if(this.height!=undefined&&!isNaN(this.height)){
                            this.host.height(this.height)
                        }
                    }
                    if(this.width!=null&&this.width.toString().indexOf("%")!=-1){
                        this.host.width(this.width)
                    }
                    if(this.height!=null&&this.height.toString().indexOf("%")!=-1){
                        this.host.height(this.height)
                    }
                    this.host.attr("tabIndex",1);
                    if(this.disabled){
                        this.host.addClass(this.toThemeProperty("jqx-tree-disabled"))
                    }
                    if(this.host.jqxDragDrop){
                        jqxTreeDragDrop()
                    }
                    this.originalInnerHTML=this.element.innerHTML;
                    this.createdTree=false;
                    if(this.element.innerHTML.indexOf("UL")){
                        var e=this.host.find("ul:first");
                        if(e.length>0){
                            this.createTree(e[0]);
                            this.createdTree=true
                        }
                    }
                    if(this.source!=null){
                        var d=this.loadItems(this.source);
                        this.element.innerHTML=d;
                        var e=this.host.find("ul:first");
                        if(e.length>0){
                            this.createTree(e[0]);
                            this.createdTree=true
                        }
                    }
                    this._itemslength=this.items.length;
                    if(!this.createdTree){
                        if(this.host.find("ul").length==0){
                            this.host.append(a("<ul></ul>"));
                            var e=this.host.find("ul:first");
                            if(e.length>0){
                                this.createTree(e[0]);
                                this.createdTree=true
                            }
                            this.createdTree=true
                        }
                    }
                    if(this.createdTree==true){
                        this._render();
                        this._handleKeys()
                    }
                    this._updateCheckLayout(0)
        },
        checkItems:function(f,h){
            var e=this;
            if(f!=null){
                var d=0;
                var g=false;
                var b=0;
                var j=a(f.element).find("li");
                b=j.length;
                a.each(j,function(k){
                    var l=e.itemMapping["id"+this.id].item;
                    if(l.checked!=false){
                        if(l.checked==null){
                            g=true}d++
                        }
                });
                if(f!=h){
                    if(d==b){
                        this.checkItem(f.element,true)
                    }else{
                        if(d>0){
                            this.checkItem(f.element,null)
                        }else{
                            this.checkItem(f.element,false)
                        }
                    }
                }else{
                    var c=h.checked;
                    var j=a(h.element).find("li");
                    a.each(j,function(){
                        var k=e.itemMapping["id"+this.id].item;
                        e.checkItem(this,c)
                    })
                }
                this.checkItems(this._parentItem(f),h)
            }else{
                var c=h.checked;
                var j=a(h.element).find("li");
                a.each(j,function(){
                    var k=e.itemMapping["id"+this.id].item;
                    e.checkItem(this,c)
                })
            }
        }
        ,_handleKeys:function(){
            var b=this;
            this.addHandler(this.host,"keydown",function(j){
                var g=j.keyCode;
                if(b.keyboardNavigation||b.enableKeyboardNavigation){
                    if(b.selectedItem!=null){
                        var f=b.selectedItem.element;
                        switch(g){
                            case 32:
                            if(b.checkboxes){
                                b.fromKey=true;
                                var h=a(b.selectedItem.checkBoxElement).jqxCheckBox("checked");
                                b.checkItem(b.selectedItem.element,!h);
                                if(b.hasThreeStates){
                                    b.checkItems(b.selectedItem,b.selectedItem)
                                }
                            }
                            return false;
                            case 33:
                            var e=b._getItemsOnPage();
                            var d=b.selectedItem;
                            for(i=0;i<e;i++){
                                d=b._prevVisibleItem(d)
                            }
                            if(d!=null){
                                b.selectItem(d.element);
                                b.ensureVisible(d.element)
                            }else{
                                b.selectItem(b._firstItem().element);
                                b.ensureVisible(b._firstItem().element)
                            }
                            return false;
                            case 34:
                            var e=b._getItemsOnPage();
                            var c=b.selectedItem;
                            for(i=0;i<e;i++){
                                c=b._nextVisibleItem(c)
                            }
                            if(c!=null){
                                b.selectItem(c.element);
                                b.ensureVisible(c.element)
                            }else{
                                b.selectItem(b._lastItem().element);
                                b.ensureVisible(b._lastItem().element)
                            }
                            return false;
                            case 37:
                            if(b.selectedItem.hasItems){
                                b.collapseItem(f)
                            }
                            return false;
                            case 39:
                            if(b.selectedItem.hasItems){
                                b.expandItem(f)
                            }
                            return false;
                            case 13:
                            if(b.selectedItem.hasItems){
                                if(b.selectedItem.isExpanded){
                                    b.collapseItem(f)
                                }else{
                                    b.expandItem(f)
                                }
                            }
                            return false;
                            case 36:
                            b.selectItem(b._firstItem().element);
                            b.ensureVisible(b._firstItem().element);
                            return false;
                            case 35:
                            b.selectItem(b._lastItem().element);
                            b.ensureVisible(b._lastItem().element);
                            return false;
                            case 38:
                            var d=b._prevVisibleItem(b.selectedItem);
                            if(d!=null){
                                b.selectItem(d.element);
                                b.ensureVisible(d.element)
                            }
                            return false;
                            case 40:
                            var c=b._nextVisibleItem(b.selectedItem);
                            if(c!=null){
                                b.selectItem(c.element);
                                b.ensureVisible(c.element)
                            }
                            return false
                        }
                    }
                }
            })
        }
        ,_firstItem:function(){
            var d=null;var c=this;
            var f=this.host.find("ul:first");
            var e=a(f).find("li");
            for(i=0;i<=e.length-1;i++){
                var b=e[i];
                d=this.itemMapping["id"+b.id].item;
                if(c._isVisible(d)){
                    return d
                }
            }
            return null
        }
        ,_lastItem:function(){
            var d=null;
            var c=this;
            var f=this.host.find("ul:first");
            var e=a(f).find("li");
            for(i=e.length-1;i>=0;i--){
                var b=e[i];
                d=this.itemMapping["id"+b.id].item;
                if(c._isVisible(d)){
                    return d
                }
            }
            return null
        }
        ,_parentItem:function(d){
            if(d==null||d==undefined){
                return null
            }
            var c=d.parentElement;
            var b=null;
            a.each(this.items,function(){
                if(this.element==c){
                    b=this;return false
                }
            });
            return b
        }
        ,_nextVisibleItem:function(c){
            if(c==null||c==undefined){
                return null
            }
            var b=c;
            while(b!=null){
                b=b.nextItem;
                if(this._isVisible(b)&&!b.disabled){
                    return b
                }
            }
            return null
        }
        ,_prevVisibleItem:function(c){
            if(c==null||c==undefined){
                return null
            }
            var b=c;
            while(b!=null){
                b=b.prevItem;
                if(this._isVisible(b)&&!b.disabled){
                    return b
                }
            }
            return null
        }
        ,_isVisible:function(c){
            if(c==null||c==undefined){
                return false
            }
            if(!this._isElementVisible(c.element)){
                return false
            }
            var b=this._parentItem(c);
            if(b==null){
                return true
            }
            if(b!=null){
                if(!this._isElementVisible(b.element)){
                    return false
                }
                if(b.isExpanded){
                    while(b!=null){
                        b=this._parentItem(b);
                        if(b!=null&&!this._isElementVisible(b.element)){
                            return false
                        }
                        if(b!=null&&!b.isExpanded){
                            return false
                        }
                    }
                }else{
                    return false
                }
            }
            return true
        }
        ,_getItemsOnPage:function(){
            var d=0;
            var c=this.panel.jqxPanel("getVScrollPosition");
            var b=parseInt(this.host.height());
            var f=0;var e=this._firstItem();
            if(parseInt(a(e.element).height())>0){
                while(f<=b){
                    f+=parseInt(a(e.element).outerHeight());
                    d++
                }
            }
            return d
        }
        ,_isElementVisible:function(b){
            if(b==null){return false}
            if(a(b).css("display")!="none"&&a(b).css("visibility")!="hidden"){return true}
            return false
        }
        ,refresh:function(){
            if(this.width!=null&&this.width.toString().indexOf("px")!=-1){
                this.host.width(this.width)
            }else{
                if(this.width!=undefined&&!isNaN(this.width)){
                    this.host.width(this.width)
                }
            }
            if(this.height!=null&&this.height.toString().indexOf("px")!=-1){
                this.host.height(this.height)
            }else{
                if(this.height!=undefined&&!isNaN(this.height)){
                    this.host.height(this.height)
                }
            }
            if(this.panel){
                if(this.width!=null&&this.width.toString().indexOf("%")!=-1){
                    var b=this;this.panel.jqxPanel("width","100%");
                    a(window).resize(function(){b._calculateWidth()})
                }else{
                    this.panel.jqxPanel("width",this.host.width())
                }
                this.panel.jqxPanel("height",this.height);
                this.panel.jqxPanel("_arrange")
            }
            this._calculateWidth()
        }
        ,loadItems:function(c){
            if(c==null){return}
            var b=this;
            this.items=new Array();
            var d="<ul>";
            a.map(c,function(e){
                if(e==undefined){
                    return null
                }
                d+=b._parseItem(e)
            });
            d+="</ul>";return d
        }
        ,_parseItem:function(l){
            var f="";
            if(l==undefined){
                return null
            }
            var j=l.label;
            if(!l.label&&l.html){
                j=l.html
            }
            if(!j){j="Item"}
            if(typeof l==="string"){j=l}
            var g=false;
            if(l.expanded!=undefined&&l.expanded){
                g=true
            }
            var e=false;
            if(l.locked!=undefined&&l.locked){
                e=true
            }
            var c=false;
            if(l.selected!=undefined&&l.selected){
                c=true
            }
            var d=false;
            if(l.disabled!=undefined&&l.disabled){d=true}
            var k=false;
            if(l.checked!=undefined&&l.checked){
                k=true
            }
            var h=l.icon;
            var b=l.iconsize;
            f+="<li";
            if(g){
                f+=' item-expanded="true" '
            }
            if(e){
                f+=' item-locked="true" '
            }
            if(d){
                f+=' item-disabled="true" '
            }
            if(c){
                f+=' item-selected="true" '
            }
            if(b){
                f+=' item-iconsize="'+l.iconsize+'" '
            }
            if(h!=null&&h!=undefined){
                f+=' item-icon="'+h+'" '
            }
            if(l.label&&!l.html){
                f+=' item-label="'+j+'" '
            }
            if(l.value!=null){
                f+=' item-value="'+l.value+'" '
            }
            if(l.checked!=undefined){
                f+=' item-checked="'+k+'" '
            }
            if(l.id!=undefined){
                f+=' id="'+l.id+'" '
            }else{
                f+=' id="'+this.createID()+'" '
            }
            f+=">"+j;
            if(l.items){
                f+=this.loadItems(l.items)
            }
            f+="</li>";
            return f
        }
        ,ensureVisible:function(d){
            if(d==null||d==undefined){return}
            var c=this.panel.jqxPanel("getVScrollPosition");
            var e=this.panel.jqxPanel("getHScrollPosition");
            var b=parseInt(this.host.height());
            var f=a(d).position().top;
            if(f<=c||f>=b+c){
                this.panel.jqxPanel("scrollTo",e,f-b+a(d).outerHeight())
            }
        }
        ,hitTest:function(g,f){
            var d=this;
            var b=this;var e=null;
            if(b._visibleItems){
                var c=parseInt(b.host.offset().left);
                var h=b.host.outerWidth();
                a.each(b._visibleItems,function(k){
                    if(g>=c&&g<c+h){
                        if(this.top+5<f&&f<this.top+this.height){
                            var j=a(this.element).parents("li:first");
                            if(j.length>0){
                                e=b.getItem(j[0]);
                                if(e!=null){e.height=this.height;e.top=this.top;return false}
                            }
                        }
                    }
                })
            }
            return e
        }
        ,addTo:function(n,p,m){
            var k=this;var l=new Array();
            if(!a.isArray(n)){l[0]=n}
            else{l=n}
            var g="";
            var o=this;
            a.each(l,function(){g+=o._parseItem(this)});
            var b=a("<div>"+g+"</div>");
            if(k.element.innerHTML.indexOf("UL")){
                var h=k.host.find("ul:first")
            }
            if(p==undefined&&p==null){h.append(b)}
            else{
                p=a(p);var d=p.find("ul:first");
                if(d.length==0){
                    ulElement=a("<ul></ul>");a(p).append(ulElement);
                    d=p.find("ul:first");
                    var q=k.itemMapping["id"+p[0].id].item;q.subtreeElement=d[0];
                    q.hasItems=true;
                    d.addClass(k.toThemeProperty("jqx-tree-dropdown"));
                    d.append(b);
                    var f=d.find("li:first");
                    q.parentElement=f
                }else{d.append(b)}
            }
            var c=a(b).find("li");
            for(var j=0;j<c.length;j++){
                this._createItem(c[j])
            }
            var e=function(r){
                o._refreshMapping(false);
                o._updateItemsNavigation();
                if(r&&this.allowDrag&&this._enableDragDrop){
                    this._enableDragDrop()
                }
                if(o.selectedItem!=null){
                    a(o.selectedItem.titleElement).addClass(o.toThemeProperty("jqx-fill-state-pressed"));
                    a(o.selectedItem.titleElement).addClass(o.toThemeProperty("jqx-tree-item-selected"))
                }
            };
            if(m==false){
                e(true);
                this._raiseEvent("4",{items:this.getItems()});
                return
            }
            e(false);
            o._render();
            this._raiseEvent("4",{items:this.getItems()});
            if(this.allowDrag&&this._enableDragDrop){
                this._enableDragDrop()
            }
        }
        ,removeItem:function(b,c){
            if(b==undefined||b==null){return}
            var d=this;
            var e=b.id;
            if(this.host.find("#"+b.id).length>0){
                a(b).remove()
            }
            if(c==false){
                this._raiseEvent("5");return
            }
            d._updateItemsNavigation();
            d._render();
            if(d.selectedItem!=null){
                if(d.selectedItem.element==b){
                    a(d.selectedItem.titleElement).removeClass(d.toThemeProperty("jqx-fill-state-pressed"));
                    a(d.selectedItem.titleElement).removeClass(d.toThemeProperty("jqx-tree-item-selected"));
                    d.selectedItem=null
                }
            }
            this._raiseEvent("5");
            if(this.allowDrag&&this._enableDragDrop){this._enableDragDrop()}
        }
        ,clear:function(){
            this.items=new Array();
            this.itemMapping=new Array();
            var b=this.host.find("ul:first");
            if(b.length>0){
                b[0].innerHTML=""
            }
            this.selectedItem=null
        }
        ,disableItem:function(b){
            if(b==null){
                return false
            }
            var c=this;
            a.each(c.items,function(){
                var d=this;
                if(d.element==b){
                    d.disabled=true;
                    a(d.titleElement).addClass(c.toThemeProperty("jqx-fill-state-disabled"));
                    a(d.titleElement).addClass(c.toThemeProperty("jqx-tree-item-disabled"));
                    if(c.checkboxes&&d.checkBoxElement){
                        a(d.checkBoxElement).jqxCheckBox({disabled:true})
                    }
                    return false
                }
            })
        }
        ,checkItem:function(c,e){
            if(c==null){return false}
            var d=this;
            var b=false;
            a.each(d.items,function(){
                var f=this;
                if(f.element==c&&!f.disabled){
                    b=true;
                    f.checked=e;
                    a(f.checkBoxElement).jqxCheckBox({checked:e});
                    return false
                }
            });
            if(b){
                this._raiseEvent("6",{element:c,checked:e})
            }
        }
        ,enableItem:function(b){
            if(b==null){
                return false
            }
            var c=this;
            a.each(c.items,function(){
                var d=this;
                if(d.element==b){
                    d.disabled=false;
                    a(d.titleElement).removeClass(c.toThemeProperty("jqx-fill-state-disabled"));
                    a(d.titleElement).removeClass(c.toThemeProperty("jqx-tree-item-disabled"));
                    if(c.checkboxes&&d.checkBoxElement){
                        a(d.checkBoxElement).jqxCheckBox({disabled:false})
                    }
                    return false
                }
            })
        }
        ,enableAll:function(){
            var b=this;
            a.each(b.items,function(){
                var c=this;
                c.disabled=false;
                a(c.titleElement).removeClass(b.toThemeProperty("jqx-tree-item-disabled"));
                a(c.titleElement).removeClass(b.toThemeProperty("jqx-fill-state-disabled"));
                if(b.checkboxes&&c.checkBoxElement){
                    a(c.checkBoxElement).jqxCheckBox({disabled:false})
                }
            })
        }
        ,lockItem:function(b){
            if(b==null){return false}
            var c=this;a.each(c.items,function(){
                var d=this;
                if(d.element==b){
                    d.locked=true;return false
                }
            })
        }
        ,unlockItem:function(b){
            if(b==null){return false}
            var c=this;
            a.each(c.items,function(){
                var d=this;
                if(d.element==b){
                    d.locked=false;
                    return false
                }
            })
        }
        ,getItems:function(){
            return this.items
        }
        ,getItem:function(b){
            if(b==null||b==undefined){return null}
            if(this.itemMapping["id"+b.id]){
                var c=this.itemMapping["id"+b.id].item;
                return c
            }
            return null
        }
        ,isExpanded:function(b){
            if(b==null||b==undefined){return false}
            var c=this.itemMapping["id"+b.id].item;
            if(c!=null){return c.isExpanded}
            return false
        }
        ,isSelected:function(b){
            if(b==null||b==undefined){return false}
            var c=this.itemMapping["id"+b.id].item;
            if(c!=null){
                return c==this.selectedItem
            }
            return false
        }
        ,getPrevItem:function(c){
            var d=this.getItem(c);
            var b=this._prevVisibleItem(d);
            return b
        }
        ,getNextItem:function(c){
            var d=this.getItem(c);
            var b=this._nextVisibleItem(d);
            return b
        }
        ,getSelectedItem:function(b){
            return this.selectedItem
        }
        ,selectItem:function(b){
            if(this.disabled){return}
            var c=this;
            if(b==null||b==undefined){
                if(c.selectedItem!=null){
                    a(c.selectedItem.titleElement).removeClass(c.toThemeProperty("jqx-fill-state-pressed"));
                    a(c.selectedItem.titleElement).removeClass(c.toThemeProperty("jqx-tree-item-selected"));
                    c.selectedItem=null
                }
                return
            }
            if(this.selectedItem!=null&&this.selectedItem.element==b){return}
            var d=this.selectedItem!=null?this.selectedItem.element:null;
            a.each(c.items,function(){
                var e=this;if(!e.disabled){
                    if(e.element==b){
                        if(c.selectedItem==null||(c.selectedItem!=null&&c.selectedItem.titleElement!=e.titleElement)){
                            if(c.selectedItem!=null){
                                a(c.selectedItem.titleElement).removeClass(c.toThemeProperty("jqx-fill-state-pressed"));
                                a(c.selectedItem.titleElement).removeClass(c.toThemeProperty("jqx-tree-item-selected"))
                            }
                            a(e.titleElement).addClass(c.toThemeProperty("jqx-fill-state-pressed"));
                            a(e.titleElement).addClass(c.toThemeProperty("jqx-tree-item-selected"));
                            c.selectedItem=e
                        }
                    }
                }
            });
            this._raiseEvent("2",{element:b,prevElement:d})
        }
        ,collapseAll:function(){
            var c=this;
            var b=c.items;
            a.each(b,function(){
                var d=this;
                if(d.isExpanded==true){
                    c._collapseItem(c,d)
                }
            })
        }
        ,expandAll:function(){
            var b=this;
            a.each(this.items,function(){
                var c=this;
                if(c.hasItems){
                    b._expandItem(b,c)
                }
            })
        }
        ,collapseItem:function(b){
            if(b==null){return false}
            var c=this;
            a.each(this.items,function(){
                var d=this;
                if(d.isExpanded==true&&d.element==b){
                    c._collapseItem(c,d);
                    return false
                }
            });
            return true
        }
        ,expandItem:function(b){
            if(b==null){return false}
            var c=this;a.each(c.items,function(){
                var d=this;
                if(d.isExpanded==false&&d.element==b&&!d.disabled&&!d.locked){
                    c._expandItem(c,d);
                    if(d.parentElement){
                        c.expandItem(d.parentElement)
                    }
                }
            });
            return true
        }
        ,_getClosedSubtreeOffset:function(c){
            var b=a(c.subtreeElement);
            var e=-b.outerHeight();
            var d=-b.outerWidth();
            d=0;
            return{left:d,top:e}
        }
        ,_collapseItem:function(g,k,d,b){
            if(g==null||k==null){return false}
            if(k.disabled){return false}
            if(g.disabled){return false}
            if(g.locked){return false}
            var e=a(k.subtreeElement);
            var l=this._getClosedSubtreeOffset(k);
            var h=l.top;
            var c=l.left;
            $treeElement=a(k.element);
            var f=g.animationHideDelay;f=0;
            if(e.data("timer").show!=null){
                clearTimeout(e.data("timer").show);
                e.data("timer").show=null}var j=function(){k.isExpanded=false;
                if(g.checkboxes){
                    var m=e.find(".chkbox");
                    m.stop();m.css("opacity",1);
                    e.find(".chkbox").animate({opacity:0},50)
                }
                e.slideUp(g.animationHideDuration,function(){
                    k.isCollapsing=false;g._calculateWidth();
                    var n=a(k.arrow);
                    if(n.length>0){
                        n.removeClass();
                        n.addClass(g.toThemeProperty("jqx-tree-item-arrow-collapse"))
                    }
                    e.hide();
                    g._raiseEvent("1",{element:k.element})
                })
            };
            if(f>0){
                e.data("timer").hide=setTimeout(function(){j()},f)
            }else{
                j()
            }
        }
        ,_expandItem:function(g,k){
            if(g==null||k==null){return false}
            if(k.isExpanded){return false}
            if(k.locked){return false}
            if(k.disabled){return false}
            if(g.disabled){return false}
            var e=a(k.subtreeElement);
            if((e.data("timer"))!=null&&e.data("timer").hide!=null){
                clearTimeout(e.data("timer").hide)
            }
            var j=a(k.element);
            var h=0;var d=0;
            if(parseInt(e.css("top"))==h){
                k.isExpanded=true;return
            }
            var c=a(k.arrow);
            if(c.length>0){
                c.removeClass();
                c.addClass(g.toThemeProperty("jqx-tree-item-arrow-expand"))
            }
            if(g.checkboxes){
                var f=e.find(".chkbox");f.stop();f.css("opacity",0);
                f.animate({opacity:1},g.animationShowDuration)
            }
            e.slideDown(g.animationShowDuration,g.easing,function(){
                k.isExpanded=true;
                k.isExpanding=false;
                g._raiseEvent("0",{element:k.element});
                g._calculateWidth()
            });
            if(g.checkboxes){
                g._updateCheckItemLayout(k);
                if(k.subtreeElement){
                    var b=a(k.subtreeElement).find("li");
                    a.each(b,function(){
                        var l=g.getItem(this);
                        if(l!=null){g._updateCheckItemLayout(l)}
                    })
                }
            }
        }
        ,_calculateWidth:function(){
            var d=this;
            var e=this.checkboxes?20:0;var c=0;
            a.each(this.items,function(){
                var f=a(this.element).height();
                if(f!=0){
                    var j=this.titleElement.outerWidth()+20+e+(1+this.level)*25;c=Math.max(c,j);
                    if(this.hasItems){
                        var g=parseInt(a(this.titleElement).css("padding-top"));
                        if(isNaN(g)){g=0}
                        g=g*2;
                        g+=2;
                        var h=(g+a(this.titleElement).height())/2-17/2;
                        if(a.browser.msie&&a.browser.version<9){
                            a(this.arrow).css("margin-top","3px")
                        }else{if(parseInt(h)>=0){
                            a(this.arrow).css("margin-top",parseInt(h)+"px")
                        }
                    }
                }
            }});
            if(this.toggleIndicatorSize>16){
                c=c+this.toggleIndicatorSize-16
            }
            if(c>this.host.width()){
                var b=c-this.host.width();
                d.panel.jqxPanel({horizontalScrollBarMax:b})
            }else{
                d.panel.jqxPanel({horizontalScrollBarMax:null})
            }
            d.panel.jqxPanel("_arrange")
        }
        ,_initialize:function(e,b){
            var d=this;var c=0;
            this.host.removeClass();
            this.host.addClass(d.toThemeProperty("jqx-widget"));
            this.host.addClass(d.toThemeProperty("jqx-widget-content"));
            this.host.addClass(d.toThemeProperty("jqx-tree"));
            this._updateDisabledState();
            a.each(this.items,function(){
                var l=this;
                $element=a(l.element);
                var j=null;
                var h=a(l.arrow);
                if(h.length>0){
                    h.unbind("hover");
                    h.remove()
                }
                j=a('<span style="height: 17px; border: none; background-color: transparent;" id="arrow'+$element[0].id+'"></span>');
                j.prependTo($element);j.css("float","left");
                j.width(d.toggleIndicatorSize);
                if(!l.isExpanded){
                    j.addClass(d.toThemeProperty("jqx-tree-item-arrow-collapse"))
                }else{
                    j.addClass(d.toThemeProperty("jqx-tree-item-arrow-expand"))
                }
                var k=parseInt(a(this.titleElement).css("padding-top"));
                if(isNaN(k)){
                    k=0
                }
                k=k*2;k+=2;
                var m=(k+a(this.titleElement).height())/2-17/2;
                if(a.browser.msie&&a.browser.version<9){
                    j.css("margin-top","3px")
                }else{
                    if(parseInt(m)>=0){
                        j.css("margin-top",parseInt(m)+"px")
                    }
                }
                $element.addClass(d.toThemeProperty("jqx-disableselect"));
                j.addClass(d.toThemeProperty("jqx-disableselect"));
                var f="click";
                var g=d.isTouchDevice();
                if(g){f="touchend"}
                j.bind(f,function(){
                    if(!l.isExpanded){d._expandItem(d,l)}
                    else{d._collapseItem(d,l)}
                    return false
                });
                d.addHandler(j,"selectstart",function(){return false});
                d.addHandler(j,"mouseup",function(){if(!g){return false}});
                j.hover(function(){
                    j.removeClass();
                    if(l.isExpanded){
                        j.addClass(d.toThemeProperty("jqx-tree-item-arrow-expand-hover"))
                    }else{
                        j.addClass(d.toThemeProperty("jqx-tree-item-arrow-collapse-hover"))
                    }
                },function(){
                    j.removeClass();
                    if(l.isExpanded){
                        j.addClass(d.toThemeProperty("jqx-tree-item-arrow-expand"))
                    }else{
                        j.addClass(d.toThemeProperty("jqx-tree-item-arrow-collapse"))
                    }
                });
                l.hasItems=a(l.element).find("li").length>0;
                l.arrow=j[0];
                if(!l.hasItems){
                    j.css("visibility","hidden")
                }
                $element.css("float","none")
            }
        )}
        ,_getOffset:function(b){
            var f=a(window).scrollTop();
            var h=a(window).scrollLeft();
            var c=a.jqx.mobile.isSafariMobileBrowser();
            var g=a(b).offset();
            var e=g.top;
            var d=g.left;
            if(c!=null&&c){return{left:d-h,top:e-f}
            }else{return a(b).offset()}
        }
        ,_renderHover:function(c,e,b){
            var d=this;
            if(!b){
                a(e.titleElement).unbind("hover");
                a(e.titleElement).hover(function(){
                    if(!e.disabled&&d.enableHover&&!d.disabled){
                        a(e.titleElement).addClass(d.toThemeProperty("jqx-fill-state-hover"));
                        a(e.titleElement).addClass(d.toThemeProperty("jqx-tree-item-hover"))
                    }
                },function(){
                    if(!e.disabled&&d.enableHover&&!d.disabled){
                        a(e.titleElement).removeClass(d.toThemeProperty("jqx-fill-state-hover"));
                        a(e.titleElement).removeClass(d.toThemeProperty("jqx-tree-item-hover"))
                    }
                })
            }
        }
        ,_updateDisabledState:function(){
            if(this.disabled){
                this.host.addClass(this.toThemeProperty("jqx-fill-state-disabled"))
            }else{
                this.host.removeClass(this.toThemeProperty("jqx-fill-state-disabled"))
            }
        }
        ,render:function(){
            this._updateItemsNavigation();
            this._render()
        }
        ,_render:function(e){
            if(a.browser.msie&&a.browser.version<8){
                var f=this;a.each(this.items,function(){
                    var m=a(this.element);
                    var o=m.parent();
                    var l=parseInt(this.titleElement.css("margin-left"))+this.titleElement[0].scrollWidth+13;m.css("min-width",l);
                    var n=parseInt(o.css("min-width"));if(isNaN(n)){n=0}var k=m.css("min-width");
                    if(n<parseInt(m.css("min-width"))){
                        o.css("min-width",k)
                    }
                    this.titleElement[0].style.width=null
                })
            }
            var j=1000;
            var c=[5,5];
            var f=this;
            a.data(f.element,"animationHideDelay",f.animationHideDelay);
            a.data(document.body,"treeel",this);this._initialize();
            var d=this.isTouchDevice();
            if(d&&this.toggleMode=="dblclick"){
                this.toggleMode="click"
            }
            if(e==undefined||e==true){
                a.each(this.items,function(){
                    f._updateItemEvents(f,this)
                })
            }
            if(this.host.jqxPanel){
                if(this.host.find("#panel"+this.element.id).length>0){
                    this.panel.jqxPanel({touchMode:this.touchMode});
                    return
                }
                this.host.find("ul:first").wrap('<div style="background-color: transparent; overflow: hidden; width: 100%; height: 100%;" id="panel'+this.element.id+'"></div>');
                var b=this.host.find("div:first");
                var g="fixed";
                if(this.height==null||this.height=="auto"){
                    g="verticalwrap"
                }
                if(this.width==null||this.width=="auto"){
                    if(g=="fixed"){
                        g="horizontalwrap"
                    }else{
                        g="wrap"
                    }
                }
                b.jqxPanel({theme:this.theme,width:this.width,height:this.height,autoUpdateInterval:30,touchMode:this.touchMode,autoUpdate:true,sizeMode:g});
                if(this.height==null||(this.height!=null&&this.height.toString().indexOf("%")!=-1)){
                    if(this.isTouchDevice()){
                        b.unbind("touchend.touchScroll touchcancel.touchScroll");
                        b.unbind("touchmove.touchScroll");
                        b.unbind("touchstart.touchScroll")
                    }
                }
                var h=a.data(b[0],"jqxPanel").instance;
                if(h!=null){
                    this.vScrollInstance=h.vScrollInstance;
                    this.hScrollInstance=h.hScrollInstance
                }
                this.panelInstance=h;
                if(a.browser.msie&&a.browser.version<8){
                    this.host.attr("hideFocus",true);
                    this.host.find("div").attr("hideFocus",true);
                    this.host.find("ul").attr("hideFocus",true)
                }
                b[0].className="";
                this.panel=b
            }
            this._raiseEvent("3",this)
        }
        ,_updateItemEvents:function(g,f){
            var c=this.isTouchDevice();
            if(c){
                this.toggleMode="touchend"
            }
            var e=a(f.element);
            if(g.enableRoundedCorners){
                e.addClass(g.toThemeProperty("jqx-rc-all"))
            }
            var b=!c?"click":"touchend";
            g.removeHandler(a(f.checkBoxElement),b);
            g.addHandler(a(f.checkBoxElement),b,function(j){
                this.treeItem.checked=!this.treeItem.checked;
                g.checkItem(this.treeItem.element,this.treeItem.checked);
                if(g.hasThreeStates){
                    g.checkItems(this.treeItem,this.treeItem)
                }
                return false
            });
            g.removeHandler(e,"mousedown");
            g.removeHandler(e,"mouseenter");
            g.removeHandler(e,"mouseleave");
            g.removeHandler(e,"mousedown");
            g.removeHandler(e,"mouseup");
            g.removeHandler(e,"selectstart");
            g._renderHover(e,f,c);
            var d=a(f.subtreeElement);
            if(d.length>0){
                var h=f.isExpanded?"block":"none";
                d.css({overflow:"hidden",display:h});
                d.data("timer",{})
            }
            g.removeHandler(a(f.titleElement),"dblclick");
            g.removeHandler(a(f.titleElement),"click");
            g.addHandler(a(f.titleElement),"selectstart",function(j){return false});
            if(a.browser.opera){
                g.removeHandler(a(f.titleElement),"mousedown");
                g.addHandler(a(f.titleElement),"mousedown",function(j){
                    return false
                })
            }
            if(g.toggleMode!="click"){
                g.addHandler(a(f.titleElement),"click",function(j){
                    g.selectItem(f.element);
                    if(g.panel!=null){
                        g.panel.jqxPanel({focused:true})
                    }
                    g.host.focus()
                })
            }
            g.removeHandler(a(f.titleElement),g.toggleMode);
            g.addHandler(a(f.titleElement),g.toggleMode,function(j){
                if(d.length>0){
                    clearTimeout(d.data("timer").hide)
                }
                if(g.panel!=null){
                    g.panel.jqxPanel({focused:true})
                }
                g.selectItem(f.element);
                if(f.isExpanding==undefined){
                    f.isExpanding=false
                }
                if(f.isCollapsing==undefined){
                    f.isCollapsing=false
                }
                g.panel.jqxPanel({autoUpdate:false});
                if(d.length>0){
                    if(!f.isExpanded){
                        if(false==f.isExpanding){
                            f.isExpanding=true;g._expandItem(g,f)
                        }
                    }
                    else{
                        if(false==f.isCollapsing){
                            f.isCollapsing=true;
                            g._collapseItem(g,f,true)
                        }
                    }
                }
                g.panel.jqxPanel({autoUpdate:true})
            })
        }
        ,isTouchDevice:function(){
            if(this._isTouchDevice!=undefined){
                return this._isTouchDevice
            }
            var b=a.jqx.mobile.isTouchDevice();
            if(this.touchMode==true){
                b=true
            }else{
                if(this.touchMode==false){
                    b=false
                }
            }
            this._isTouchDevice=b;return b
        }
        ,createID:function(){
            var b=Math.random()+"";
            b=b.replace(".","");
            b="99"+b;
            b=b/1;
            while(this.items[b]){
                b=Math.random()+"";
                b=b.replace(".","");
                b=b/1
            }
            return"treeItem"+b
        }
        ,createTree:function(b){
            if(b==null){return}
            var d=this;
            var f=a(b).find("li");
            var c=0;this.items=new Array();
            this.itemMapping=new Array();
            a(b).addClass(d.toThemeProperty("jqx-tree-dropdown-root"));
            for(var e=0;e<f.length;e++){
                this._createItem(f[e])
            }
            this._updateItemsNavigation();
            this._updateCheckStates();
            if(this.allowDrag&&this._enableDragDrop){
                this._enableDragDrop()
            }
        }
        ,_updateCheckLayout:function(c){
            var b=this;a.each(this.items,function(){
                if(this.level==c||c==undefined){
                    b._updateCheckItemLayout(this)
                }
            })
        }
        ,_updateCheckItemLayout:function(b){
            if(this.checkboxes){
                if(a(b.titleElement).css("display")!="none"){
                    var c=a(b.checkBoxElement);
                    var d=a(b.titleElement).outerHeight()/2-1-parseInt(this.checkSize)/2;
                    c.css("margin-top",d);
                    if(a.browser.msie&&a.browser.version<8){
                        b.titleElement.css("margin-left",parseInt(this.checkSize)+25)
                    }else{
                        c.css("margin-left",this.toggleIndicatorSize)
                    }
                }
            }
        }
        ,_updateCheckStates:function(){
            var b=this;
            if(b.hasThreeStates){
                a.each(this.items,function(){
                    b._updateCheckState(this)
                })
            }else{
                a.each(this.items,function(){
                    if(this.checked==null){
                        b.checkItem(this.element,false)
                    }
                })
            }
        }
        ,_updateCheckState:function(e){
            if(e==null||e==undefined){return}
            var d=this;
            var c=0;
            var f=false;
            var b=0;
            var g=a(e.element).find("li");
            b=g.length;
            if(e.checked&&b>0){
                a.each(g,function(h){
                    var k=d.itemMapping["id"+this.id].item;
                    var j=k.element.getAttribute("item-checked");
                    if(j==undefined||j==null||j=="true"||j==true){
                        d.checkItem(k.element,true)
                    }
                })
            }
            a.each(g,function(h){
                var j=d.itemMapping["id"+this.id].item;
                if(j.checked!=false){
                    if(j.checked==null){
                        f=true
                    }
                    c++
                }
            });
            if(b>0){
                if(c==b){
                    this.checkItem(e.element,true)
                }
                else{
                    if(c>0){
                        this.checkItem(e.element,null)
                    }else{
                        this.checkItem(e.element,false)
                    }
                }
            }
        }
        ,_updateItemsNavigation:function(){
            var f=this.host.find("ul:first");
            var e=a(f).find("li");
            var c=0;
            for(i=0;i<e.length;i++){
                var b=e[i];
                if(this.itemMapping["id"+b.id]){
                    var d=this.itemMapping["id"+b.id].item;
                    if(!d){continue}
                    d.prevItem=null;
                    d.nextItem=null;
                    if(i>0){
                        if(this.itemMapping["id"+e[i-1].id]){
                            d.prevItem=this.itemMapping["id"+e[i-1].id].item
                        }
                    }
                    if(i<e.length-1){
                        if(this.itemMapping["id"+e[i+1].id]){
                            d.nextItem=this.itemMapping["id"+e[i+1].id].item
                        }
                    }
                }
            }
        }
        ,_applyTheme:function(e,h){
            var f=this;this.host.removeClass("jqx-tree-"+e);
            this.host.removeClass("jqx-widget-"+e);
            this.host.removeClass("jqx-widget-content-"+e);
            this.host.addClass(f.toThemeProperty("jqx-tree"));
            this.host.addClass(f.toThemeProperty("jqx-widget"));
            var b=this.host.find("ul:first");
            a(b).removeClass(f.toThemeProperty("jqx-tree-dropdown-root-"+e));
            a(b).addClass(f.toThemeProperty("jqx-tree-dropdown-root"));
            var g=a(b).find("li");
            for(var d=0;d<g.length;d++){
                var c=g[d];
                a(c).children().each(function(){
                    if(this.tagName=="ul"||this.tagName=="UL"){
                        a(this).removeClass(f.toThemeProperty("jqx-tree-dropdown-"+e));
                        a(this).addClass(f.toThemeProperty("jqx-tree-dropdown"));
                        return false
                    }
                })
            }
            a.each(this.items,function(){
                var l=this;var k=a(l.element);
                k.removeClass(f.toThemeProperty("jqx-tree-item-li-"+e));
                k.addClass(f.toThemeProperty("jqx-tree-item-li"));
                a(l.titleElement).removeClass(f.toThemeProperty("jqx-tree-item-"+e));
                a(l.titleElement).addClass(f.toThemeProperty("jqx-tree-item"));
                a(l.titleElement).removeClass("jqx-item-"+e);
                a(l.titleElement).addClass(f.toThemeProperty("jqx-item"));
                var j=a(l.arrow);
                if(!l.isExpanded){
                    j.addClass(f.toThemeProperty("jqx-tree-item-arrow-collapse"))
                }else{
                    j.addClass(f.toThemeProperty("jqx-tree-item-arrow-expand"))
                }
                if(l.checkBoxElement){
                    a(l.checkBoxElement).jqxCheckBox({theme:h})
                }
                if(f.enableRoundedCorners){
                    k.removeClass("jqx-rc-all-"+e);
                    k.addClass(f.toThemeProperty("jqx-rc-all"))
                }
            });
            if(this.host.jqxPanel){
                this.panel.jqxPanel({theme:h})
            }
        }
        ,_refreshMapping:function(d){
            var c=this.host.find("li");
            var b=new Array();
            var m=new Array();
            var f=a.data(document.body,"treeItemsStorage");
            var h=this;
            for(var g=0;g<c.length;g++){
                var j=c[g];
                var l=f[j.id];
                m[m.length]=l;
                if(d==undefined||d==true){
                    this._updateItemEvents(this,l)
                }
                l.level=a(j).parents("li").length;
                l.treeInstance=this;
                var k=null;
                var e=null;
                a(l.titleElement).removeClass(h.toThemeProperty("jqx-fill-state-pressed"));
                a(l.titleElement).removeClass(h.toThemeProperty("jqx-tree-item-selected"));
                a(j).children().each(function(){
                    if(this.tagName=="ul"||this.tagName=="UL"){
                        l.subtreeElement=this;a(this).addClass(h.toThemeProperty("jqx-tree-dropdown"));
                        return false
                    }
                });
                a(j).parents().each(function(){
                    if((this.tagName=="li"||this.tagName=="LI")){
                        e=this.id;
                        k=this;
                        return false
                    }
                });
                l.parentElement=k;
                l.parentId=e;
                l.hasItems=a(l.element).find("li").length>0;
                if(l!=null){
                    b[g]={element:j,item:l};b["id"+j.id]=b[g]
                }
            }
            this.itemMapping=b;this.items=m
        }
        ,_createItem:function(c){
            if(c==null||c==undefined){return}
            var q=c.id;
            if(!q){q=this.createID()}
            var C=c;
            var m=a(c);
            C.id=q;
            var g=a.data(document.body,"treeItemsStorage");
            if(g==undefined){g=new Array()}
            var v=this.items.length;
            this.items[v]=new a.jqx._jqxTree.jqxTreeItem();
            this.treeElements[q]=this.items[v];
            g[C.id]=this.items[v];
            a.data(document.body,"treeItemsStorage",g);
            v=this.items.length;
            var x=0;
            var E=this;
            var e=null;
            a(C).children().each(function(){
                if(this.tagName=="ul"||this.tagName=="UL"){
                    E.items[v-1].subtreeElement=this;
                    a(this).addClass(E.toThemeProperty("jqx-tree-dropdown"));
                    return false
                }
            });
            a(C).parents().each(function(){
                if((this.tagName=="li"||this.tagName=="LI")){
                    x=this.id;e=this;return false
                }
            });
            var u=c.getAttribute("item-expanded");
            if(u==null||u==undefined||(u!="true"&&u!=true)){u=false}
            else{u=true}
            m.removeAttr("item-expanded");
            var D=c.getAttribute("item-locked");
            if(D==null||D==undefined||(D!="true"&&D!=true)){D=false}
            else{D=true}
            m.removeAttr("item-locked");
            var r=c.getAttribute("item-selected");
            if(r==null||r==undefined||(r!="true"&&r!=true)){r=false}
            else{r=true}
            m.removeAttr("item-selected");
            var d=c.getAttribute("item-disabled");
            if(d==null||d==undefined||(d!="true"&&d!=true)){
                d=false
            }else{
                d=true
            }
            m.removeAttr("item-disabled");
            var j=c.getAttribute("item-checked");
            if(j==null||j==undefined||(j!="true"&&j!=true)){
                j=false
            }else{j=true}
            var F=c.getAttribute("item-title");
            if(F==null||F==undefined||(F!="true"&&F!=true)){
                F=false
            }
            m.removeAttr("item-title");
            var A=c.getAttribute("item-icon");
            var s=c.getAttribute("item-iconsize");
            var l=c.getAttribute("item-label");
            var t=c.getAttribute("item-value");
            m.removeAttr("item-icon");
            m.removeAttr("item-iconsize");
            m.removeAttr("item-label");
            m.removeAttr("item-value");
            var z=this.items[v-1];
            A=A||z.icon;
            z.id=q;
            z.value=t;
            z.icon=A;
            z.iconsize=s;
            z.parentId=x;
            z.disabled=d;
            z.parentElement=e;
            z.element=c;
            z.locked=D;
            z.selected=r;
            z.checked=j;
            z.isExpanded=u;
            z.treeInstance=this;
            this.itemMapping[v-1]={element:C,item:z};
            this.itemMapping["id"+C.id]=this.itemMapping[v-1];
            var h=false;
            var B=false;
            h=false;
            if(!h||!B){
                if(a(C.firstChild).length>0){
                    if(z.icon){
                        var s=z.iconsize;
                        if(!s){s=16}
                        var A=a('<img width="'+s+'" height="'+s+'" style="float: left;" class="itemicon" src="'+z.icon+'"/>');
                        a(C).prepend(A);
                        A.css("margin-right","4px")
                        
                    }
                    var b=C.innerHTML.indexOf("<ul");
                    if(b==-1){
                        b=C.innerHTML.indexOf("<UL")
                    }
                    if(b==-1){
                        z.originalTitle=C.innerHTML;
                        a(C).wrapInner('<div style="display: inline-block;"/>');
                        z.titleElement=a(a(C)[0].firstChild)
                    }else{
                        var y=C.innerHTML.substring(0,b);
                        y=a.trim(y);
                        z.originalTitle=y;
                        y=a('<div style="display: inline-block;">'+y+"</div>");
                        var n=a(C).find("ul:first");
                        n.remove();
                        C.innerHTML="";
                        a(C).prepend(y);
                        a(C).append(n);
                        z.titleElement=y
                    }
                    if(a.browser.msie&&a.browser.version<8){
                        a(a(C)[0].firstChild).css("display","inline-block")
                    }
                }else{
                    z.originalTitle="Item";a(C).append(a("<span>Item</span>"));
                    a(C.firstChild).wrap("<span/>");
                    z.titleElement=a(C)[0].firstChild;
                    if(a.browser.msie&&a.browser.version<8){
                        a(C.firstChild).css("display","inline-block")
                    }
                }
            }
            var w=a(z.titleElement);
            var p=this.toThemeProperty("jqx-rc-all");
            if(this.allowDrag){
                w.addClass("draggable")
            }
            if(l==null||l==undefined){
                l=z.titleElement;
                z.label=a.trim(w.text())
            }
            else{z.label=l}
            a(C).addClass(this.toThemeProperty("jqx-tree-item-li"));
            p+=" "+this.toThemeProperty("jqx-tree-item")+" "+this.toThemeProperty("jqx-item");
            w[0].className=w[0].className+" "+p;
            z.level=a(c).parents("li").length;
            if(this.checkboxes){
                if(this.host.jqxCheckBox){
                    var o=a('<div style="position: absolute; width: 18px; height: 18px;" tabIndex=0 class="chkbox"/>');
                    o.width(parseInt(this.checkSize));
                    o.height(parseInt(this.checkSize));
                    a(C).prepend(o);
                    o.jqxCheckBox({checked:z.checked,boxSize:this.checkSize,animationShowDelay:0,animationHideDelay:0,disabled:d,theme:this.theme});
                    w.css("margin-left",parseInt(this.checkSize)+6);
                    z.checkBoxElement=o[0];
                    o[0].treeItem=z;
                    var f=w.outerHeight()/2-1-parseInt(this.checkSize)/2;
                    o.css("margin-top",f);
                    if(a.browser.msie&&a.browser.version<8){
                        w.css("width","1%");
                        w.css("margin-left",parseInt(this.checkSize)+25)
                    }else{
                        o.css("margin-left",this.toggleIndicatorSize)
                    }
                }else{
                    alert("jqxcheckbox.js is not loaded.")
                }
            }else{
                if(a.browser.msie&&a.browser.version<8){
                    w.css("width","1%")
                }
            }
            if(d){
                this.disableItem(z.element)
            }
            if(r){
                this.selectItem(z.element)
            }
            if(a.browser.msie&&a.browser.version<8){
                a(C).css("margin","0px");
                a(C).css("padding","0px")
            }
            z.hasItems=a(c).find("li").length>0
        }
        ,destroy:function(){
            this.host.removeClass();
            this.host.remove()
        }
        ,_raiseEvent:function(f,c){
            if(c==undefined){
                c={owner:null}
            }
            var d=this.events[f];
            args=c;args.owner=this;
            var e=new jQuery.Event(d);
            e.owner=this;
            e.args=args;
            var b=this.host.trigger(e);
            return b
        }
        ,propertyChangedHandler:function(d,l,b,j){
            if(this.isInitialized==undefined||this.isInitialized==false){return}
            if(l=="disabled"){
                d._updateDisabledState()
            }
            if(l=="theme"){d._applyTheme(b,j)}
            if(l=="keyboardNavigation"){d.enableKeyboardNavigation=j}
            if(l=="width"||l=="height"){
                d.refresh();
                d._initialize();
                d._calculateWidth();
                if(d.host.jqxPanel){
                    var k="fixed";
                    if(this.height==null||this.height=="auto"){
                        k="verticalwrap"
                    }
                    if(this.width==null||this.width=="auto"){
                        if(k=="fixed"){
                            k="horizontalwrap"
                        }else{k="wrap"}
                    }
                    this.panel.jqxPanel({sizeMode:k})
                }
            }
            if(l=="touchMode"){
                d._isTouchDevice=null;
                if(j){
                    d.enableHover=false
                }
                d._render()
            }
            if(l=="source"){
                if(this.source!=null){
                    var m=[];
                    a.each(d.items,function(){
                        if(this.isExpanded){
                            m[m.length]={label:this.label,level:this.level}
                        }
                    });
                    var f=d.loadItems(d.source);
                    if(!d.host.jqxPanel){d.element.innerHTML=f}
                    else{
                        d.panel.jqxPanel("setcontent",f);
                        d.host.css("border","none")
                    }
                    var e=d.disabled;
                    var g=d.host.find("ul:first");
                    if(g.length>0){
                        d.createTree(g[0]);
                        d._render()
                    }
                    var h=d;
                    var c=h.animationShowDuration;
                    h.animationShowDuration=0;
                    d.disabled=false;
                    if(m.length>0){
                        a.each(d.items,function(){
                            for(var n=0;n<m.length;n++){
                                if(m[n].label==this.label&&m[n].level==this.level){
                                    var o=h.getItem(this.element);h._expandItem(h,o)
                                }
                            }
                        })
                    }
                    d.disabled=e;
                    h.animationShowDuration=c
                }
            }
            if(l=="hasThreeStates"){
                d._render();
                d._updateCheckStates()
            }
            if(l=="toggleIndicatorSize"){
                d._updateCheckLayout();d._render()
            }
        }
    })
})(jQuery);
(function(a){
    a.jqx._jqxTree.jqxTreeItem=function(e,d,b){
        var c={
            label:null,
            id:e,
            parentId:d,
            parentElement:null,
            parentItem:null,
            disabled:false,
            selected:false,
            locked:false,
            checked:false,
            level:0,
            isExpanded:false,
            hasItems:false,
            element:null,
            subtreeElement:null,
            checkBoxElement:null,
            titleElement:null,
            arrow:null,
            prevItem:null,
            nextItem:null,
            icon:null,
            leaf:false
        };
        return c
    }
})(jQuery);