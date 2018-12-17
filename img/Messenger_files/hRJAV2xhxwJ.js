if (self.CavalryLogger) { CavalryLogger.start_js(["uNc3X"]); }

__d("AsyncProfilerBuffer",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=0,h=1,i=2,j=3,k=4,l=j+1;function a(a){this.$1=a||new SharedArrayBuffer(l*k),this.$2=new Int32Array(this.$1,0,j),this.$3=new Float32Array(this.$1,j*k,1)}a.prototype.sampleRequested=function(){return this.$2[g]===1};a.prototype.setSampleRequested=function(a){this.$2[g]=a?1:0};a.prototype.instrumentationHit=function(){return this.$2[i]===1};a.prototype.setInstrumentationHit=function(a){this.$2[i]=a?1:0};a.prototype.executionActive=function(){return this.$2[h]===1};a.prototype.setExecutionActive=function(a){this.$2[h]=a?1:0};a.prototype.sliceStartTime=function(){return this.$3[0]};a.prototype.setSliceStartTime=function(a){this.$3[0]=a};a.prototype.buffer=function(){return this.$1};a.prototype.flagArray=function(){return this.$2};e.exports=a}),null);
__d("BlobFactory",["emptyFunction"],(function(a,b,c,d,e,f){__p&&__p();var g;function h(){try{new a.Blob(),g=!0}catch(a){g=!1}}var i=a.BlobBuilder||a.WebKitBlobBuilder||a.MozBlobBuilder||a.MSBlobBuilder;a.Blob?c={getBlob:function(b,c){__p&&__p();b=b||[];c=c||{};g===void 0&&h();if(g)return new a.Blob(b,c);else{var d=new i();for(var e=0;e<b.length;e++)d.append(b[e]);return d.getBlob(c.type)}},isSupported:b("emptyFunction").thatReturnsTrue}:c={getBlob:function(){},isSupported:b("emptyFunction").thatReturnsFalse};e.exports=c}),null);
__d("WebWorker",["invariant","BlobFactory","Bootloader","EventListener","SubscriptionsHandler","URI","WebWorkerConfig","XHRRequest","areSameOrigin","destroyOnUnload","emptyFunction","filterObject","getCrossOriginTransport","memoize","performanceNow"],(function(a,b,c,d,e,f,g){__p&&__p();var h=a.URL||a.webkitURL;function i(a){"use strict";this.$1=!1,this.$2=null,this.$3=a,this.__worker=null,this.$4=b("emptyFunction"),this.$5=b("emptyFunction"),this.$6=[],this.$7=[],this.$8=!1,this.$9=new(b("SubscriptionsHandler"))(),this.$10=b("destroyOnUnload")(function(){this.$8||this.terminate()}.bind(this)),this.$11("constructed")}i.prototype.setMessageHandler=function(a){"use strict";this.$4=a||b("emptyFunction");return this};i.prototype.setErrorHandler=function(a){"use strict";this.$5=a||b("emptyFunction");return this};i.prototype.postMessage=function(a,b){"use strict";__p&&__p();this.isCurrentState("constructed")&&g(0,5977);this.isCurrentState("terminated")&&g(0,5978);if(this.isCurrentState("preparing")){this.$6.push(this.postMessage.bind(this,a,b));return this}a={type:"message",message:a};b?this.getInterfaceableWorker().postMessage(a,b):this.getInterfaceableWorker().postMessage(a);return this};i.prototype.$12=function(){"use strict";this.isCurrentState("terminated")||(this.$11("terminated"),this.__worker=null,this.$13(),this.$6=[],this.$7=[],this.$10&&this.$10.remove&&this.$10.remove())};i.prototype.terminate=function(){"use strict";this.isCurrentState("executing")&&this.__worker.terminate();this.$12();return this};i.prototype.execute=function(){"use strict";this.isCurrentState("terminated")&&g(0,5979);if(["preparing","executing"].some(this.isCurrentState,this))return this;this.$11("preparing");i.prepareResource(this.$3,this.$14.bind(this));return this};i.prototype.setAllowCrossPageTransition=function(a){"use strict";this.$8=a;return this};i.prototype.isCurrentState=function(a){"use strict";i.states.includes(a)||g(0,5980,a);return a===this.$2};i.prototype.$14=function(){"use strict";__p&&__p();this.isCurrentState("executing")&&g(0,5981);if(this.isCurrentState("terminated"))return;this.$3.sameOriginURL||this.$3.source||g(0,5982);this.$3.sameOriginURL?this.__worker=this.constructWorker(this.$3.sameOriginURL):(this.__worker=this.constructWorker(i.evalWorkerURL),this.getInterfaceableWorker().postMessage(this.$3.source));this.$15("ping",Date.now());if(this.$3.dynamicModules)try{this.$15("defineModules",this.$3.dynamicModules)}catch(a){this.terminate();this.$16("define_error",{message:a.message});throw a}this.$17();this.$11("executing");this.$6.forEach(function(a){return a()});this.$6=null;this.$7.forEach(function(a){return a()});this.$7=null};i.prototype.$13=function(){"use strict";this.$9.release()};i.prototype.$15=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];this.getInterfaceableWorker().postMessage({type:a,args:c})};i.prototype.$16=function(event,a){"use strict";i.$16(event,this.$3.name,babelHelpers["extends"]({},a,{cross_page_transition:!!this.$8,state:this.$2}))};i.$18=function(){"use strict";return Object.keys(b("filterObject")({object_url:i.$19(),eval_url:n(),data_url:i.$20(),worker:i.isSupported(),transferables:i.areTransferablesSupported()},function(a){return!!a}))};i.prototype.$17=function(){"use strict";this.$9.addSubscriptions(b("EventListener").listen(this.getInterfaceableWorker(),"message",this.$21.bind(this)),b("EventListener").listen(this.__worker,"error",this.$22.bind(this)))};i.prototype.$22=function(a){"use strict";var b=this.$5(a);!b&&!a.defaultPrevented&&this.$16("exception",{message:a.message})};i.prototype.$21=function(event){"use strict";__p&&__p();var b=event.data;switch(b.type){case"message":this.$4(b.message);break;case"pong":this.$1=!0;this.$16("executed",{dt:Math.floor(b.args[1]-b.args[0]),bytes:this.$3.source?this.$3.source.length:-1});break;case"terminate":this.terminate();break;case"haste-error":this.terminate();this.$16("haste_error",{message:b.message});break;case"console":var c=b.args.shift();["log","error","info","debug","warn"].includes(c)||g(0,5983,c);a.console[c].apply(a.console,b.args);break}};i.prototype.$11=function(a){"use strict";i.states.includes(a)||g(0,5984,a),this.$16("transition",{next_state:a}),this.$2=a};i.prepareResource=function(c,d){"use strict";__p&&__p();d=d||b("emptyFunction");c.sameOriginURL||c.url||c.source||g(0,5985);!i.isSupported()&&g(0,5986);if(c.sameOriginURL)d();else if(c.url&&b("areSameOrigin")(new(b("URI"))(c.url),new(b("URI"))(a.location.href)))c.sameOriginURL=c.url,d();else if(c.source)i.$23()&&(c.sameOriginURL=i.$24(c.source)),d();else if(!c.loading){var e=b("performanceNow")();c.loading=[d];i.$25(c.url,function(a){a?(c.source=a,i.$23()&&(c.sameOriginURL=i.$24(a)),i.$16("prepared",c.name,{dt:Math.floor(b("performanceNow")()-e),bytes:a.length})):i.$16("failed",c.name,{dt:Math.floor(b("performanceNow")()-e),bytes:0}),c.loading.forEach(function(a){return a()}),c.loading=!1})}else c.loading.push(d);return c};i.releaseResource=function(a){"use strict";a.sameOriginURL.indexOf("blob:")===0&&(h.revokeObjectURL&&h.revokeObjectURL(a.sameOriginURL),a.sameOriginURL=null);return a};i.isSupported=function(){"use strict";return m&&(i.$23()||n())};i.isMessageChannelSupported=function(){"use strict";return i.areTransferablesSupported()&&!!a.MessageChannel};i.areTransferablesSupported=function(){"use strict";return i.isSupported()&&o()};i.$25=function(a,c){"use strict";new(b("XHRRequest"))(a).setTransportBuilder(b("getCrossOriginTransport")).setMethod("GET").setResponseHandler(function(a){c(a)}).setErrorHandler(c.bind(null,null)).send()};i.$24=function(a){"use strict";i.$23()||g(0,5987);if(i.$19()){var c=b("BlobFactory").getBlob([a],{type:"application/javascript"});return h.createObjectURL(c)}if(i.$20())return"data:application/javascript,"+encodeURIComponent(a)};i.$19=function(){"use strict";return b("BlobFactory").isSupported()&&k()};i.$20=function(){"use strict";return l()};i.$23=function(){"use strict";return i.$19()||i.$20()};i.$16=function(event,a,c){"use strict";if(!b("WebWorkerConfig").logging.enabled)return;b("Bootloader").loadModules(["BanzaiLogger"],function(d){d.log(b("WebWorkerConfig").logging.config,babelHelpers["extends"]({},c,{features_array:i.$18(),event:event,resource:a}))},"WebWorker")};i.prototype.constructWorker=function(a){"use strict";return j(a)};i.prototype.$26=function(a,b){"use strict";if(this.isCurrentState("preparing")){this.$7.push(this.$26.bind(this,a,b));return}this.getInterfaceableWorker().postMessage({type:"port",message:a},b)};i.prototype.createMessageChannel=function(a,b){"use strict";var c=new MessageChannel();this.$26(a,[c.port2].concat(b||[]));c.port1.start();return c.port1};i.prototype.getInterfaceableWorker=function(){"use strict";return this.__worker};function j(b){return new a.Worker(b)}var k=b("memoize")(function(){__p&&__p();var a;if(!h||!h.createObjectURL)return!1;try{a=h.createObjectURL(b("BlobFactory").getBlob([""],{type:"application/javascript"}));var c=j(a);c.terminate();c=!0}catch(a){c=!1}finally{h.revokeObjectURL&&h.revokeObjectURL(a)}return c}),l=b("memoize")(function(){try{var a=j("data:application/javascript,");a.terminate();a=!0}catch(b){a=!1}return a}),m=!!a.Worker,n=b("memoize")(function(){try{var a=j(i.evalWorkerURL);a.terminate();a=!0}catch(b){a=!1}return a}),o=b("memoize")(function(){try{var a=j(i.evalWorkerURL),b=new ArrayBuffer(0);a.postMessage({buffer:b},[b]);a.terminate();b=!0}catch(a){b=!1}return b});i.states=["constructed","preparing","executing","terminated"];i.evalWorkerURL=b("WebWorkerConfig").evalWorkerURL;e.exports=i}),null);
__d("AsyncProfiler",["invariant","AsyncProfilerBuffer","AsyncProfilerWorkerResource","ExecutionContextObservers","TimeSlice","WebWorker"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=!1,i,j,k=0,l=[],m=[];function n(a){a.action=="log"||g(0,4251);var b=l[a.recorderID];b||g(0,4252);delete l[a.recorderID];b({trace:a.trace,stats:a.stats})}var o={init:function(a){__p&&__p();h&&g(0,4253);if(!o.isSupported())return;i=new(b("AsyncProfilerBuffer"))();j=new(b("WebWorker"))(b("AsyncProfilerWorkerResource")).setMessageHandler(n).setAllowCrossPageTransition(!0).execute().postMessage({action:"init",buffer:i.buffer(),samplePeriodMs:a,initTime:Date.now(),numProfilerFrames:2});h=!0;window.__p=o.checkTakeSample;for(var a=0;a<m.length;a++){var c=m[a];j.postMessage({action:"record",recorderID:c})}m=[]},isSupported:function(){return window&&window.Promise&&window.SharedArrayBuffer&&b("WebWorker").isSupported()},enabled:function(){return h},flagArray:function(){return i.flagArray()},checkTakeSample:function(){if(i.instrumentationHit())return;i.setInstrumentationHit(!0);i.sampleRequested()&&o.takeSample()},takeSample:function(){var a=Error.stackTraceLimit;Error.stackTraceLimit=Infinity;var b=new Error().stack;j.postMessage({action:"sample",stack:b,startTime:i.sliceStartTime()});Error.stackTraceLimit=a},terminate:function(){j.terminate(),h=!1,window.__p=void 0},startRecording:function(){o.isSupported()||g(0,4254);var a=k++;h?j.postMessage({action:"record",recorderID:a}):m.push(a);return a},stopRecording:function(b){__p&&__p();o.isSupported()||g(0,4254);var c=a.Promise;if(h){j.postMessage({action:"stop",recorderID:b});return new c(function(a,c){l[b]=a})}else{var d=m.indexOf(b);d!==-1&&m.splice(d,1);return c.resolve(null)}}};b("TimeSlice").registerExecutionContextObserver({onNewContextCreated:function(a,b,c){return null},onContextCanceled:function(a,b){},onBeforeContextStarted:function(a,b,c){return null},onAfterContextStarted:function(a,b,c,d){h&&i.setExecutionActive(!0);return null},onAfterContextEnded:function(a,b,c,d){h&&i.setExecutionActive(!1)},getBeforeID:function(){return b("ExecutionContextObservers").beforeIDs.ASYNC_PROFILER},getAfterID:function(){return b("ExecutionContextObservers").afterIDs.ASYNC_PROFILER}});e.exports=o}),null);