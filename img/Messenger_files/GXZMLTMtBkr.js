if (self.CavalryLogger) { CavalryLogger.start_js(["QeYJV"]); }

__d("FantaTypeFileUploaderFile",["immutable"],(function(a,b,c,d,e,f){"use strict";var g;c={file:{},id:"",startTime:0,type:null,uploadedID:null};g=babelHelpers.inherits(a,b("immutable").Record(c));g&&g.prototype;function a(){g.apply(this,arguments)}e.exports=a}),null);
__d("MessengerUploadFilesStore",["fbt","Dialog","FantaTypeFileUploader","FantaTypeFileUploaderFile","LogHistory","MercuryConstants","MessengerActions","MessengerStore","PhotosUploadID","immutable"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=b("LogHistory").getInstance("messenger_share_file_preview");c=babelHelpers.inherits(a,b("MessengerStore"));h=c&&c.prototype;function a(){h.constructor.call(this),this.$MessengerUploadFilesStore1=b("immutable").Map({})}a.prototype.getState=function(){return this.$MessengerUploadFilesStore1};a.prototype.__onDispatch=function(a){__p&&__p();var c,d=a.threadID,e=a.uploadID;switch(a.type){case b("MessengerActions").Types.PREPARE_FILES_FOR_SEND:i.log("Add files "+d,JSON.stringify(a));var f=a.files;this.$MessengerUploadFilesStore1=j(this.$MessengerUploadFilesStore1,d,f);this.emitChange();break;case b("MessengerActions").Types.CANCEL_FILE_UPLOAD:i.debug("Remove file "+d,JSON.stringify(a));f=this.$MessengerUploadFilesStore1.get(d);c=f.get("uploadingFiles").get(e);c?this.$MessengerUploadFilesStore1=this.$MessengerUploadFilesStore1.deleteIn([d,"uploadingFiles",e]):(c=f.get("uploadedFiles").get(e),c&&(this.$MessengerUploadFilesStore1=this.$MessengerUploadFilesStore1.deleteIn([d,"uploadedFiles",e])));this.emitChange();break;case b("MessengerActions").Types.EMPTY_FILES:i.debug("Empty files "+d,JSON.stringify(a));this.$MessengerUploadFilesStore1=this.$MessengerUploadFilesStore1.withMutations(function(a){a.get(d)&&a.set(d,new(b("FantaTypeFileUploader"))())});this.emitChange();break}};function j(a,c,d){__p&&__p();for(var e=0;e<d.length;e++){var f=d[e];if(f.size>b("MercuryConstants").AttachmentMaxSize){new(b("Dialog"))().setTitle(g._("The file you have selected is too large")).setBody(g._("The file you have selected is too large. The maximum size is 25MB.")).setButtons(b("Dialog").OK).setSemiModal(!0).show();return a}}for(var f=0;f<d.length;f++){e=d[f];var h=l();a=k(a,c,h,e)}return a}function k(a,c,d,e){return a.withMutations(function(a){a.get(c)||a.set(c,new(b("FantaTypeFileUploader"))());var f=a.get(c);a.set(c,f.setIn(["uploadedFiles",d],new(b("FantaTypeFileUploaderFile"))({file:e,id:d,startTime:Date.now()})))})}function l(){return"upload_"+b("PhotosUploadID").getNewID()}e.exports=new a()}),null);