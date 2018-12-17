if (self.CavalryLogger) { CavalryLogger.start_js(["JS+Wv"]); }

__d("SUIBusinessTheme",["SUIBusinessThemeComponents","SUITheme"],(function(a,b,c,d,e,f){"use strict";a=new(b("SUITheme"))({id:"big",components:b("SUIBusinessThemeComponents")});e.exports=a}),null);
__d("CloseButton.react",["cx","fbt","CloseButtonIcon","Image.react","React","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){"use strict";__p&&__p();var a=this.props,c=a.size||"medium",d=a.appearance||"normal",e=c==="small";c=c==="huge";var f=d==="dark";d=d==="inverted";var g=a.ajaxify||null,i=a.rel||null;c="uiCloseButton"+(e?" uiCloseButtonSmall":"")+(c?" uiCloseButtonHuge":"")+(e&&f?" uiCloseButtonSmallDark":"")+(e&&d?" uiCloseButtonSmallInverted":"")+(!e&&f?" uiCloseButtonDark":"")+(!e&&d?" uiCloseButtonInverted":"");f=h._("Close");e=Object.assign({},this.props);delete e.size;delete e.appearance;delete e.ajaxify;delete e.tooltip;delete e.ariaLabel;return b("React").createElement("a",babelHelpers["extends"]({},e,{ajaxify:g,href:"#",role:"button",title:a.ariaLabel||f,"aria-label":a.ariaLabel||f,"data-hover":a.tooltip&&"tooltip","data-skipchecker":null,"data-tooltip-alignh":a.tooltip&&"center","data-tooltip-content":a.tooltip,className:b("joinClasses")(this.props.className,c),rel:i}),b("React").createElement(b("Image.react"),{className:"uiCloseButtonHighContrast",src:b("CloseButtonIcon").icon}))};function a(){"use strict";i.apply(this,arguments)}e.exports=a}),null);
__d("XUIDialogCloseButton.react",["fbt","React","XUIDialogButton.react"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";return b("React").createElement(b("XUIDialogButton.react"),babelHelpers["extends"]({},this.props,{action:"cancel",label:g._("Close")}))};function a(){"use strict";h.apply(this,arguments)}e.exports=a}),null);
__d("XUITextInput.react",["cx","AbstractTextInput.react","React","XUIError.react","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=b("React").Component;d=b("React").PropTypes;f=babelHelpers.inherits(a,c);h=f&&f.prototype;function a(a){"use strict";h.constructor.call(this,a),this.$1=function(event){this.props.onFocus&&this.props.onFocus(event),this.setState({focused:!0})}.bind(this),this.$2=function(event){this.props.onBlur&&this.props.onBlur(event),this.setState({focused:!1})}.bind(this),this.state={focused:!1}}a.prototype.render=function(){"use strict";var a="_55r1"+(this.props.height==="tall"?" _55r2":"")+(this.props.disabled?" _53a0":"")+(this.state.focused?" _1488":"");return b("React").createElement(b("XUIError.react"),this.props,b("React").createElement(b("AbstractTextInput.react"),babelHelpers["extends"]({},this.props,{onFocus:this.$1,onBlur:this.$2,ref:"textInput",className:b("joinClasses")(this.props.className,a)})))};a.prototype.focusInput=function(){"use strict";this.refs.textInput&&this.refs.textInput.focusInput()};a.prototype.blurInput=function(){"use strict";this.refs.textInput&&this.refs.textInput.blurInput()};a.prototype.selectInput=function(){"use strict";this.refs.textInput&&this.refs.textInput.selectInput()};a.prototype.getValue=function(){"use strict";return this.refs.textInput&&this.refs.textInput.getValue()};a.prototype.getTextFieldDOM=function(){"use strict";return this.refs.textInput?this.refs.textInput.getTextFieldDOM():null};a.defaultProps={height:"short"};a.propTypes=babelHelpers["extends"]({},b("AbstractTextInput.react").propTypes,b("XUIError.react").propTypes,{height:d.oneOf(["short","tall"])});e.exports=a}),null);
__d("MessengerContextualDialogReact.bs",["bs_curry","ReasonReact.bs","bs_js_null_undefined","MessengerContextualDialog.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){if(a!==void 0)switch(a){case 0:return"center";case 1:return"left";case 2:return"right"}}function a(a,c,d,e,f,h){if(c!==void 0){var i=c;c=function(){return b("bs_js_null_undefined").fromOption(b("bs_curry")._1(i,0))}}else c=function(){return void 0};return b("ReasonReact.bs").wrapJsForReason(b("MessengerContextualDialog.react"),{alignment:b("bs_js_null_undefined").fromOption(g(a)),contextRef:c,onBlur:b("bs_js_null_undefined").fromOption(d),onToggle:e,shown:b("bs_js_null_undefined").fromOption(f)},h)}f.stringOfAlignment=g;f.make=a}),null);
__d("P2PAmountUtils",[],(function(a,b,c,d,e,f){var g=1e4;a={isAmountOverLegalLimit:function(a){return parseFloat(this.sanitizeAmount(a))>=g},isAmountZero:function(a){return parseFloat(this.sanitizeAmount(a))===0},isValidSendAmount:function(a){return!this.isAmountOverLegalLimit(a)&&!this.isAmountZero(a)},sanitizeAmount:function(a){return a.replace(/[^0-9\.]+/g,"")}};e.exports=a}),null);
__d("SUICloseButton.react",["cx","fbt","React","SUIComponent","SUITheme","joinClasses","Locale","KeyStatus","VirtualCursorStatus"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=b("React").PropTypes;var j=b("Locale").isRTL,k=b("KeyStatus").isKeyDown,l=b("VirtualCursorStatus").isVirtualCursorTriggered;d={label:h._("Close"),shade:"dark",size:"small"};f=babelHelpers.inherits(a,b("SUIComponent"));i=f&&f.prototype;a.getHeightForSize=function(a,b){return a.SUICloseButton.iconSize[b]};function a(a,b){i.constructor.call(this,a,b),this.$SUICloseButton1=function(event){this.setState({showFocusRing:!1})}.bind(this),this.$SUICloseButton2=function(event){(k()||l())&&this.setState({showFocusRing:!0})}.bind(this),this.$SUICloseButton3=function(event){this.setState({showFocusRing:!1})}.bind(this),this.$SUICloseButton4=function(){this.setState({isHovering:!0})}.bind(this),this.$SUICloseButton5=function(){this.setState({isHovering:!1})}.bind(this),this.state={isHovering:!1,showFocusRing:!1}}a.prototype.render=function(){__p&&__p();var a=this.props,c=a.className_DEPRECATED,d=a.label,e=a.layerCancel,f=a.margin,g=a.size,h=a.shade,i=a.style,k=a.theme;a=babelHelpers.objectWithoutPropertiesLoose(a,["className_DEPRECATED","label","layerCancel","margin","size","shade","style","theme"]);void k;k=b("SUITheme").get(this).SUICloseButton;h=k[h][g];k=k.iconSize[g];g="-"+Math.floor(k/2)+"px";i=this.props.useLegacyPadding?babelHelpers["extends"]({},i):babelHelpers["extends"]({},i,{height:k,width:k});a=a;Object.keys(i).length>0&&(a=babelHelpers["extends"]({},a,{style:i}));a["data-tooltip-content"]?i=a["data-tooltip-content"]:i=d;return b("React").createElement("button",babelHelpers["extends"]({},a,{className:b("joinClasses")((this.state.showFocusRing?"":"_42d_")+(this.props.useLegacyPadding?" _2aq4":"")+" _32qq"+(this.props.disabled?"":" _3n5r")+(e?" layerCancel":""),c,f),onBlur:this.$SUICloseButton1,onFocus:this.$SUICloseButton2,onMouseDown:this.$SUICloseButton3,onMouseEnter:this.$SUICloseButton4,onMouseLeave:this.$SUICloseButton5,type:"button"}),b("React").createElement("span",{className:"accessible_elem"},i),b("React").createElement("span",{"aria-hidden":!0,className:"_3n5s",style:(d={},d[j()?"marginRight":"marginLeft"]=g,d.marginTop=g,d)},b("React").createElement(h,{disabled:this.props.disabled,hover:this.state.isHovering,size:k})))};a.defaultProps=d;a.propTypes={disabled:c.bool,label:c.node,layerCancel:c.bool,margin:c.string,onClick:c.func,onFocus:c.func,onMouseDown:c.func,onMouseUp:c.func,shade:c.oneOf(["dark","light"]),size:c.oneOf(["small","large"]),theme:c.instanceOf(b("SUITheme"))};e.exports=a}),null);