if (self.CavalryLogger) { CavalryLogger.start_js(["YQ4Zs"]); }

__d("getMentionableRect",["Rect"],(function(a,b,c,d,e,f){__p&&__p();function g(a){var b=document.selection.createRange().duplicate();b.moveStart("character",-a);return b.getBoundingClientRect()}function h(b){var c=a.getSelection();if(!c.rangeCount)return null;c=c.getRangeAt(0);c=c.cloneRange();var d=c.endContainer,e=c.endOffset,f=null;e>=b&&(c.setStart(d,e-b),f=c.getBoundingClientRect());return f}function c(a,c){a=document.selection?g(a):h(a);if(!a)return null;c=new(b("Rect"))(a.top,c?a.right:a.left,a.bottom,c?a.right:a.left,"viewport");return c.convertTo("document")}e.exports=c}),null);