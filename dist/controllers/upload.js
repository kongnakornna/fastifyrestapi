"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,r,t,a){void 0===a&&(a=t);var n=Object.getOwnPropertyDescriptor(r,t);n&&("get"in n?r.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return r[t]}}),Object.defineProperty(e,a,n)}:function(e,r,t,a){e[a=void 0===a?t:a]=r[t]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&__createBinding(r,e,t);return __setModuleDefault(r,e),r},__awaiter=this&&this.__awaiter||function(e,i,l,s){return new(l=l||Promise)(function(t,r){function a(e){try{o(s.next(e))}catch(e){r(e)}}function n(e){try{o(s.throw(e))}catch(e){r(e)}}function o(e){var r;e.done?t(e.value):((r=e.value)instanceof l?r:new l(function(e){e(r)})).then(a,n)}o((s=s.apply(e,i||[])).next())})},__generator=this&&this.__generator||function(a,n){var o,i,l,s={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]},c={next:e(0),throw:e(1),return:e(2)};return"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function e(t){return function(e){var r=[t,e];if(o)throw new TypeError("Generator is already executing.");for(;s=c&&r[c=0]?0:s;)try{if(o=1,i&&(l=2&r[0]?i.return:r[0]?i.throw||((l=i.return)&&l.call(i),0):i.next)&&!(l=l.call(i,r[1])).done)return l;switch(i=0,(r=l?[2&r[0],l.value]:r)[0]){case 0:case 1:l=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,i=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(l=0<(l=s.trys).length&&l[l.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!l||r[1]>l[0]&&r[1]<l[3]))s.label=r[1];else if(6===r[0]&&s.label<l[1])s.label=l[1],l=r;else{if(!(l&&s.label<l[2])){l[2]&&s.ops.pop(),s.trys.pop();continue}s.label=l[2],s.ops.push(r)}}r=n.call(a,s)}catch(e){r=[6,e],i=0}finally{o=l=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}}},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},fastify_multer_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("fastify-multer"))),mime=require("mime-types"),path=__importStar(require("path")),fs=__importStar(require("fs")),uuid_1=require("uuid"),file_1=require("../models/file"),fileModel=new file_1.FileModel;function upload(a){return __awaiter(this,void 0,void 0,function(){var l,s,r,t=this;return __generator(this,function(e){return l=a.db,s=process.env.UPLOAD_DIR||"./upload",r=fastify_multer_1.default.diskStorage({destination:function(e,r,t){t(null,s)},filename:function(e,r,t){r=path.extname(r.originalname);t(null,(0,uuid_1.v4)()+r)}}),r=(0,fastify_multer_1.default)({storage:r,limits:{fileSize:15728640},fileFilter:function(e,r,t){if(console.log("mimetype_file=>",r),"image/jpeg"!==r.mimetype)return t(new Error("Invalid mimetype!"),!1);t(null,!0)}}),a.post("/",{preHandler:r.single("file")},function(a,n){return __awaiter(t,void 0,void 0,function(){var r,t;return __generator(this,function(e){switch(e.label){case 0:return r=a.file,console.log("request=>",a),console.log("file=>",r),(t={}).originalname=r.originalname,t.mimetype=r.mimetype,t.filesize=r.size,t.filename=r.filename,console.log("fileInfo=>",t),[4,fileModel.save(l,t)];case 1:return r=e.sent(),t=r[0],n.header("x-cache-status",0),n.header("Cache-Control","private, no-cache, no-store, must-revalidate"),n.header("Expires","-1"),n.header("Pragma","no-cache"),n.header("Access-Control-Allow-Origin","*"),n.header("Access-Control-Allow-Headers","*"),n.header("Access-Control-Allow-Credentials",!1),n.header("Access-Control-Allow-Methods","GET, POST, OPTIONS, PUT, PATCH, DELETE"),n.send({fileId:t}),[2]}})})}),a.post("/array",{preHandler:r.array("file",3)},function(o,i){return __awaiter(t,void 0,void 0,function(){var r,t,a,n;return __generator(this,function(e){switch(e.label){case 0:t=o.files,r=0,t=t,e.label=1;case 1:return r<t.length?(a=t[r],(n={}).originalname=a.originalname,n.mimetype=a.mimetype,n.filesize=a.size,n.filename=a.filename,[4,fileModel.save(l,n)]):[3,4];case 2:e.sent(),e.label=3;case 3:return r++,[3,1];case 4:return i.header("x-cache-status",0),i.header("Cache-Control","private, no-cache, no-store, must-revalidate"),i.header("Expires","-1"),i.header("Pragma","no-cache"),i.header("Access-Control-Allow-Origin","*"),i.header("Access-Control-Allow-Headers","*"),i.header("Access-Control-Allow-Credentials",!1),i.header("Access-Control-Allow-Methods","GET, POST, OPTIONS, PUT, PATCH, DELETE"),i.send({ok:!0}),[2]}})})}),a.get("/file/:fileId",function(o,i){return __awaiter(t,void 0,void 0,function(){var r,t,a,n;return __generator(this,function(e){switch(e.label){case 0:r=o.params,r=r.fileId,e.label=1;case 1:return e.trys.push([1,3,,4]),[4,fileModel.getInfo(l,r)];case 2:return 0<(a=e.sent()).length?(a=a[0],t=a.filename,a=a.mimetype,n=path.join(s,t),fs.existsSync(n)?(a=a,n=fs.readFileSync(n),i.type(a),i.send(n)):(i.header("x-cache-status",0),i.header("Cache-Control","private, no-cache, no-store, must-revalidate"),i.header("Expires","-1"),i.header("Pragma","no-cache"),i.header("Access-Control-Allow-Origin","*"),i.header("Access-Control-Allow-Headers","*"),i.header("Access-Control-Allow-Credentials",!1),i.header("Access-Control-Allow-Methods","GET, POST, OPTIONS, PUT, PATCH, DELETE"),i.code(500).send({ok:!1,error:t+" not found!"}))):(i.header("x-cache-status",0),i.header("Cache-Control","private, no-cache, no-store, must-revalidate"),i.header("Expires","-1"),i.header("Pragma","no-cache"),i.header("Access-Control-Allow-Origin","*"),i.header("Access-Control-Allow-Headers","*"),i.header("Access-Control-Allow-Credentials",!1),i.header("Access-Control-Allow-Methods","GET, POST, OPTIONS, PUT, PATCH, DELETE"),i.code(500).send({ok:!1,error:"File not found (database)"})),[3,4];case 3:return e.sent(),i.header("x-cache-status",0),i.header("Cache-Control","private, no-cache, no-store, must-revalidate"),i.header("Expires","-1"),i.header("Pragma","no-cache"),i.header("Access-Control-Allow-Origin","*"),i.header("Access-Control-Allow-Headers","*"),i.header("Access-Control-Allow-Credentials",!1),i.header("Access-Control-Allow-Methods","GET, POST, OPTIONS, PUT, PATCH, DELETE"),i.code(500).send({ok:!1,error:"error 500"}),[3,4];case 4:return[2]}})})}),[2]})})}exports.default=upload;