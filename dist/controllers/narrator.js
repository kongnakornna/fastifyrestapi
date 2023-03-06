"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&("get"in n?t.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__awaiter=this&&this.__awaiter||function(e,o,i,l){return new(i=i||Promise)(function(r,t){function a(e){try{s(l.next(e))}catch(e){t(e)}}function n(e){try{s(l.throw(e))}catch(e){t(e)}}function s(e){var t;e.done?r(e.value):((t=e.value)instanceof i?t:new i(function(e){e(t)})).then(a,n)}s((l=l.apply(e,o||[])).next())})},__generator=this&&this.__generator||function(a,n){var s,o,i,l={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},u={next:e(0),throw:e(1),return:e(2)};return"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function e(r){return function(e){var t=[r,e];if(s)throw new TypeError("Generator is already executing.");for(;l=u&&t[u=0]?0:l;)try{if(s=1,o&&(i=2&t[0]?o.return:t[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,t[1])).done)return i;switch(o=0,(t=i?[2&t[0],i.value]:t)[0]){case 0:case 1:i=t;break;case 4:return l.label++,{value:t[1],done:!1};case 5:l.label++,o=t[1],t=[0];continue;case 7:t=l.ops.pop(),l.trys.pop();continue;default:if(!(i=0<(i=l.trys).length&&i[i.length-1])&&(6===t[0]||2===t[0])){l=0;continue}if(3===t[0]&&(!i||t[1]>i[0]&&t[1]<i[3]))l.label=t[1];else if(6===t[0]&&l.label<i[1])l.label=i[1],i=t;else{if(!(i&&l.label<i[2])){i[2]&&l.ops.pop(),l.trys.pop();continue}l.label=i[2],l.ops.push(t)}}t=n.call(a,l)}catch(e){t=[6,e],o=0}finally{s=i=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}}},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},path=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("path"))),crypto=__importStar(require("crypto")),user_model_1=require("../models/user_model"),file_1=require("../models/file"),sd_users_narrator_model_1=require("../models/sd_users_narrator_model"),sd_users_seminar_model_1=require("../models/sd_users_seminar_model"),seminar_detail_model_1=require("../models/seminar_detail_model"),seminar_title_model_1=require("../models/seminar_title_model"),seminar_model_1=require("../models/seminar_model"),registerSchema_1=__importDefault(require("../schemas/registerSchema")),bodyActivate_1=__importDefault(require("../schemas/bodyActivate")),functions_helper_1=require("../utils/helpers/functions.helper"),validator_helper_1=require("../utils/helpers/validator.helper"),Validator=new validator_helper_1._Validator,Functions=new functions_helper_1._publicfunctions,md5=require("md5");function narrator(v){return __awaiter(this,void 0,void 0,function(){function u(e){return function(t){if("object"==typeof(e=t)&&null!==e&&"message"in e&&"string"==typeof e.message)return t;var e;try{return new Error(JSON.stringify(t))}catch(e){return new Error(String(t))}}(e).message}var g,w,t,r=this;return __generator(this,function(e){return new user_model_1.UserModel,new file_1.FileModel,g=new sd_users_narrator_model_1.SdusersNarratorModel,new sd_users_seminar_model_1.SdusersSeminarModel,new seminar_detail_model_1.SeminarDetailModel,new seminar_title_model_1.SeminarTitleModel,new seminar_model_1.SeminarModels,w=v.db,require("fastify-multer"),t=path.join(__dirname,"../../.env"),require("dotenv").config({path:t}),t=require("../../package.json"),t.port,t=process.env,t.API_KEY,v.post("/singup",{schema:registerSchema_1.default},function(h,p){return __awaiter(r,void 0,void 0,function(){var t,r,a,n,s,o,i,l,u,c,d,_,m,f;return __generator(this,function(e){switch(e.label){case 0:return p.header("Access-Control-Allow-Origin","*"),p.header("Access-Control-Allow-Methods","POST"),h.headers,t=h.body,Functions.getRandomchar(16),r=t.firstname,a=t.lastname,n=t.fullname,s=t.phonenumber,o=t.email,i=new Date,i=Functions.timeConvertermas(i),t.status,t.date,l=t.active||0,t.activedate,u=t.password,Date.now(),Date.now(),!1===(c=Functions.isemailValid(o))?(p.code(401).send({response:{message:"Email format checker failed, Please change email!",status:0,StatusCode:"401"}}),[2]):[4,g.validation_email(w,o)];case 1:if(0<e.sent().length)return p.code(401).send({response:{message:"Email Duplicate , Please change email",status:0,StatusCode:"200"}}),[2];if(console.log("email",o),!1===Functions.passwordValidator(u))return p.code(401).send({response:{message:"Password checker failed!",status:0,StatusCode:"401"}}),[2];d=crypto.createHash("md5").update(u).digest("hex"),e.label=2;case 2:return e.trys.push([2,5,6,7]),(_={}).firstname=r,_.lastname=a,_.fullname=n,_.phonenumber=s,_.email=o,_.create=i,_.active=l,_.activedate=t.activedate,_.password=d,_.password_temp=u,[4,g.create_data(w,_)];case 3:return e.sent(),[4,g.last_id(w)];case 4:return _=e.sent(),f=_[0],console.log("luser",f),f=f.narrator_id,console.log("idx",f),(m=[]).narrator_id=f,m.email=c,m.firstname=r,m.lastname=a,m.create=i,f=v.jwt.sign({createsignin:m},{expiresIn:"1d"}),p.code(201).send({response:{message:"Register successful",status:1,token:f,StatusCode:"201"}}),[2];case 5:return e.sent(),p.code(401).send({response:{result:"Error",message:"Register Unsuccessful!",status:1,token:null,StatusCode:"401"}}),[2];case 6:return p.code(403).send({response:{result:"Error",message:"Sign up Unsuccessful ,Error System something!",status:1,token:null,StatusCode:"403"}}),[2];case 7:return[2]}})})}),v.post("/singin",function(i,l){return __awaiter(r,void 0,void 0,function(){var t,r,a,n,s,o;return __generator(this,function(e){switch(e.label){case 0:if(t=function(e){e.message},l.header("Access-Control-Allow-Origin","*"),l.header("Access-Control-Allow-Methods","POST"),i.validationError)throw console.log(i.validationError),l.code(400).send({ok:!1,error:"Error Invalid data",error_th:"ข้อมูลไม่ถูกต้อง",code:1005}),i.validationError;return[3,1];case 1:a=i.body,r=a.username,a=a.password,e.label=2;case 2:return e.trys.push([2,4,5,6]),n=crypto.createHash("md5").update(a).digest("hex"),[4,g.login(w,r,n)];case 3:if(o=e.sent(),console.log("username=>"+r),console.log("password=>"+a),console.log("encPassword=>"+n),console.log("rs=>"+o),0<o.length)return o=o[0],console.log("user=>",o),(s=[]).narrator_id=o.narrator_id,s.email=o.email,s.firstname=o.firstname,s.lastname=o.lastname,console.warn("rss=>",s),Date.now(),(new Date).getTime(),s=v.jwt.sign({user_id:o.user_id,email:o.email,firstname:o.firstname,lastname:o.lastname},{expiresIn:"1d"}),l.code(200).send({response:{message:"Create token Successful!",status:1,ok:!0,statusCode:"200",data:{user_id:o.user_id,email:o.email,rstname:o.firstname,lastname:o.lastname},token:s}}),[2];throw l.code(401).send({response:{message:"Login failed!",status:1,ok:!1,statusCode:"401",data:null,token:null}}),new Error("Login failed!");case 4:throw o=e.sent(),console.log("error toUpperCase=>",o.toUpperCase()),console.log("message=>",o.message),t({message:o.message}),console.log("reportError=>",t),l.code(500).send({response:{message:u,status:1,ok:!1,statusCode:"500",result:null,token:null,data:null}}),new Error("Error 500");case 5:return l.code(500).send({response:{message:"error",status:1,ok:!1,statusCode:"500",result:null,token:null,data:null}}),[2];case 6:throw i.body}})})}),v.post("/verifytoken",{preValidation:[v.authenticate]},function(o,i){return __awaiter(r,void 0,void 0,function(){var t,r,a,n,s;return __generator(this,function(e){return t=o.headers,o.body,t.host,t.secret_key,t=o.headers.authorization,t=t.replace("Bearer ",""),t=v.jwt.verify(t),s=t.iat,r=t.exp,Date.now(),n=(new Date).getTime(),Math.round(n/1e3),n=new Date(1e3*s),s=new Date(1e3*r),r=Functions.toEnDate(n),a=Functions.toEnDate(s),n=Functions.toThaiDate(n),s=Functions.toThaiDate(s),console.warn("start_date_en ",r),console.warn("end_date_en ",a),console.warn("start_date_thai ",n),console.warn("end_date_thai ",s),i.code(200).send({response:{message:"Authenticate verify token successful!",status:1,data:t,start_date_en:r,end_date_en:a,start_date_thai:n,end_date_thai:s,StatusCode:"200"}}),[2]})})}),v.post("/activate",{schema:bodyActivate_1.default},function(o,i){return __awaiter(r,void 0,void 0,function(){var t,r,a,n,s;return __generator(this,function(e){switch(e.label){case 0:return(i.header("Access-Control-Allow-Origin","*"),i.header("Access-Control-Allow-Methods","POST"),o.headers,n=o.body,null===(n=n.code))?(i.code(401).send({response:{message:"Please input code to activate account!",status:0,StatusCode:"401"}}),[2]):(n=v.jwt.verify(n),s=n.iat,t=n.exp,n.data,Date.now(),a=(new Date).getTime(),Math.round(a/1e3),a=new Date(1e3*s),s=new Date(1e3*t),t=Functions.toEnDate(a),r=Functions.toEnDate(s),a=Functions.toThaiDate(a),s=Functions.toThaiDate(s),console.warn("start_date_en=>",t),console.warn("end_date_en=>",r),console.warn("start_date_thai=>",a),console.warn("end_date_thai=>",s),console.warn("tokendecode=>",n),console.warn("count=> ",n.lengt),r=(t=n).createsignin.narrator_id,a=t.createsignin.email,s=new Date,n=Functions.timeConvertermas(s),s={status:1,active:1,activedate:n},console.log("inputupdate",s),[4,g.activate(w,r,s)]);case 1:e.sent();try{return i.code(200).send({response:{message:"Activate successful!",status:1,StatusCode:"200",email:a,data:t}}),[2]}catch(e){return i.code(401).send({response:{result:"Error",message:"Activate error!",status:1,token:null,StatusCode:"401"}}),[2]}finally{return i.code(403).send({response:{result:"Error",message:"Activate ,Error System something!",status:1,token:null,StatusCode:"403"}}),[2]}return[2]}})})}),[2]})})}exports.default=narrator;