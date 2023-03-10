"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var s=Object.getOwnPropertyDescriptor(t,r);s&&("get"in s?t.__esModule:!s.writable&&!s.configurable)||(s={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,s)}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__awaiter=this&&this.__awaiter||function(e,o,i,u){return new(i=i||Promise)(function(r,t){function a(e){try{n(u.next(e))}catch(e){t(e)}}function s(e){try{n(u.throw(e))}catch(e){t(e)}}function n(e){var t;e.done?r(e.value):((t=e.value)instanceof i?t:new i(function(e){e(t)})).then(a,s)}n((u=u.apply(e,o||[])).next())})},__generator=this&&this.__generator||function(a,s){var n,o,i,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},l={next:e(0),throw:e(1),return:e(2)};return"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function e(r){return function(e){var t=[r,e];if(n)throw new TypeError("Generator is already executing.");for(;u=l&&t[l=0]?0:u;)try{if(n=1,o&&(i=2&t[0]?o.return:t[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,t[1])).done)return i;switch(o=0,(t=i?[2&t[0],i.value]:t)[0]){case 0:case 1:i=t;break;case 4:return u.label++,{value:t[1],done:!1};case 5:u.label++,o=t[1],t=[0];continue;case 7:t=u.ops.pop(),u.trys.pop();continue;default:if(!(i=0<(i=u.trys).length&&i[i.length-1])&&(6===t[0]||2===t[0])){u=0;continue}if(3===t[0]&&(!i||t[1]>i[0]&&t[1]<i[3]))u.label=t[1];else if(6===t[0]&&u.label<i[1])u.label=i[1],i=t;else{if(!(i&&u.label<i[2])){i[2]&&u.ops.pop(),u.trys.pop();continue}u.label=i[2],u.ops.push(t)}}t=s.call(a,u)}catch(e){t=[6,e],o=0}finally{n=i=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}}},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},path=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("path"))),crypto=__importStar(require("crypto")),user_model_1=require("../models/user_model"),registerSchema_1=__importDefault(require("../schemas/registerSchema")),bodyActivate_1=__importDefault(require("../schemas/bodyActivate")),md5=require("md5");function user(I){return __awaiter(this,void 0,void 0,function(){function l(e){return function(t){if("object"==typeof(e=t)&&null!==e&&"message"in e&&"string"==typeof e.message)return t;var e;try{return new Error(JSON.stringify(t))}catch(e){return new Error(String(t))}}(e).message}function u(e){var t=e.getFullYear()+543,r=["???.???.","???.???.","??????.???.","??????.???.","???.???.","??????.???.","???.???.","???.???.","???.???.","???.???.","???.???.","???.???."][e.getMonth()],a=e.getDate(),s=e.getHours().toString().padStart(2,"0"),n=e.getMinutes().toString().padStart(2,"0"),e=e.getSeconds().toString().padStart(2,"0");return"".concat(a," ").concat(r," ").concat(t," ")+"".concat(s,":").concat(n,":").concat(e," ???.")}function c(e){var t=e.getFullYear()+0,r=["January","February","March.","April","May","June","July","August","September","October","November","December"][e.getMonth()],a=e.getDate(),s=e.getHours().toString().padStart(2,"0"),n=e.getMinutes().toString().padStart(2,"0"),e=e.getSeconds().toString().padStart(2,"0");return"".concat(a," ").concat(r," ").concat(t," ")+"".concat(s,":").concat(n,":").concat(e)}function q(e){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r="",a=0;a<e;a++)r+=t.charAt(Math.floor(Math.random()*t.length));return r}var z,U,t,n,H,d=this;return __generator(this,function(e){return z=new user_model_1.UserModel,U=I.db,require("fastify-multer"),t=path.join(__dirname,"../../.env"),require("dotenv").config({path:t}),t=require("../../package.json"),t.port,t=process.env,n=t.API_KEY,I.post("/singin",function(i,u){return __awaiter(d,void 0,void 0,function(){var t,r,a,s,n,o;return __generator(this,function(e){switch(e.label){case 0:if(t=function(e){e.message},u.header("Access-Control-Allow-Origin","*"),u.header("Access-Control-Allow-Methods","POST"),i.validationError)throw console.log(i.validationError),u.code(400).send({ok:!1,error:"Error Invalid data",error_th:"????????????????????????????????????????????????",code:1005}),i.validationError;return[3,1];case 1:a=i.body,r=a.username,a=a.password,e.label=2;case 2:return e.trys.push([2,4,5,6]),s=crypto.createHash("md5").update(a).digest("hex"),[4,z.login(U,r,s)];case 3:if(0<(s=e.sent()).length)return o=s[0],console.log("user=>",o),(n=[]).user_id=o.user_id,n.username=o.username,n.firstname=o.firstname,n.lastname=o.lastname,console.warn("rss=>",n),Date.now(),(new Date).getTime(),n=I.jwt.sign({user_id:o.user_id,username:o.username},{expiresIn:"1d"}),u.code(200).send({response:{message:"Create token Successful!",status:1,ok:!0,statusCode:"200",data:{user_id:o.user_id,username:o.username,rstname:o.firstname,lastname:o.lastname,eemail:o.eemail},token:n}}),[2];throw u.code(401).send({response:{message:"Login failed!",status:1,ok:!1,statusCode:"401",data:null,token:null}}),new Error("Login failed!");case 4:throw o=e.sent(),console.log("error toUpperCase=>",o.toUpperCase()),console.log("message=>",o.message),t({message:o.message}),console.log("reportError=>",t),u.code(500).send({response:{message:l,status:1,ok:!1,statusCode:"500",result:null,token:null,data:null}}),new Error("Error 500");case 5:return u.code(500).send({response:{message:"error",status:1,ok:!1,statusCode:"500",result:null,token:null,data:null}}),[2];case 6:throw i.body}})})}),I.post("/singup",{schema:registerSchema_1.default},function(j,x){return __awaiter(d,void 0,void 0,function(){var r,a,s,n,o,i,u,l,c,d,_,p,h,g,f,m,w,v,y,k,S,b,A,C,D,E,O,M,P,T;return __generator(this,function(e){switch(e.label){case 0:return x.header("Access-Control-Allow-Origin","*"),x.header("Access-Control-Allow-Methods","POST"),j.headers,r=j.body,q(16),a=r.firstname,s=r.lastname,n=r.fullname,o=r.nickname,i=r.idcard,r.date,u=r.username,l=r.password,c=r.email,E=new Date,d=E.getFullYear()+"-"+(E.getMonth()+1)+"-"+E.getDate(),E=E.getHours()+":"+E.getMinutes()+":"+E.getSeconds(),d=d+" "+E,Date.now(),Date.now(),!1==(!!(t=c)&&!(254<t.length||!H.test(t)||64<(t=t.split("@"))[0].length||t[1].split(".").some(function(e){return 63<e.length})))?(x.code(401).send({response:{message:"Email format checker failed, Please change email!",status:0,StatusCode:"401"}}),[2]):[4,z.validation_email(U,c)];case 1:return 0<e.sent().length?(x.code(401).send({response:{message:"Email Duplicate , Please change email",status:0,StatusCode:"200"}}),[2]):(console.log("email",c),[4,z.validation_username(U,u)]);case 2:if(0<e.sent().length)return x.code(401).send({response:{message:"Username Duplicate , Please change Username",status:0,StatusCode:"200"}}),[2];if(!1==((t=l).match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})")?(console.log("Your validate password  Correct, try another...:"+t),!0):(console.log("You validate password Wrong...:"+t),!1)))return x.code(401).send({response:{message:"Password checker failed!",status:0,StatusCode:"401"}}),[2];_=r.level||0,p=r.status||0,r.network_id,h=r.avatar,g=r.remark,f=r.infomation_agree_status||0,m=r.gender,w=r.birthday,v=r.last_sign_in,y=r.online_status||0,k=r.mesage,r.password,S=r.profile_id||0,b=r.network_type_id||0,A=r.public||0,C=r.isActive||0,D=r.isActive||3,crypto.createHash("md5").update(l).digest("hex"),e.label=3;case 3:return e.trys.push([3,7,8,9]),(E={}).firstname=a,E.lastname=s,E.fullname=n,E.nickname=o,E.idcard=i,E.date=d,E.username=u,E.password=l,E.email=c,E.level=_,E.status=p,E.network_id=r.network_id,E.avatar=h,E.remark=g,E.infomation_agree_status=f,E.gender=m,E.birthday=w,E.last_sign_in=v,E.online_status=y,E.mesage=k,E.password_temp=l,E.profile_id=S,E.last_sign_in=d,[4,z.create(U,E)];case 4:return e.sent(),[4,z.lastidread(U)];case 5:return O=e.sent(),O=O[0],console.log("luser",O),O=O.user_id,console.log("idx",O),M=md5(O),P={profile_id:M,network_type_id:b,public:A,isActive:C,status:p,permission_type_id:D},console.log("idx",O),console.log("inputupdate",P),[4,z.updateuid(U,O,P)];case 6:return e.sent(),(P={}).user_id=O,P.username=u,P.firstname=a||u,P.status=p,P.profile_id=M,P.date=d,T=I.jwt.sign({createsignin:P},{expiresIn:"365d"}),x.code(200).send({response:{message:"Sign up  successful",status:1,token:T,StatusCode:"200"}}),[2];case 7:return e.sent(),x.code(401).send({response:{result:"Error",message:"Sign up Unsuccessful!",status:1,token:null,StatusCode:"401"}}),[2];case 8:return x.code(403).send({response:{result:"Error",message:"Sign up Unsuccessful ,Error System something!",status:1,token:null,StatusCode:"403"}}),[2];case 9:return[2]}var t})})}),I.post("/createtoken",function(a,s){return __awaiter(d,void 0,void 0,function(){var t,r;return __generator(this,function(e){if(s.header("Access-Control-Allow-Origin","*"),s.header("Access-Control-Allow-Methods","POST"),r=a.headers||null,a.query,a.body,a.params,a.headers.apikey,t=q(16),null==r.apikey)s.code(401).send({response:{result:"api key is null",message:"Error api key is null",status:1,token:null,StatusCode:"401"}});else{if(r.apikey!==n)return s.code(401).send({response:{result:"Error",message:"api key wrong, please check!",status:1,token:null,StatusCode:"401"}}),[2];r=I.jwt.sign({getchar:t},{expiresIn:"365d"}),s.code(200).send({response:{message:"create token successful",status:1,token:r,StatusCode:"200"}})}return[2]})})}),I.post("/createtokens",function(a,s){return __awaiter(d,void 0,void 0,function(){var t,r;return __generator(this,function(e){if(s.header("Access-Control-Allow-Origin","*"),s.header("Access-Control-Allow-Methods","POST"),r=a.headers||null,a.query,a.body,a.params,a.headers.apikey,t=q(16),null==r.apikey)s.code(401).send({response:{result:"api key is null",message:"Error api key is null",status:1,token:null,StatusCode:"401"}});else{if(r.apikey!==n)return s.code(401).send({response:{result:"Error",message:"api key wrong, please check!",status:1,token:null,StatusCode:"401"}}),[2];r=I.jwt.sign({getchar:t}),s.code(200).send({response:{message:"create token successful",status:1,token:r,StatusCode:"200"}})}return[2]})})}),I.post("/verifytoken",{preValidation:[I.authenticate]},function(o,i){return __awaiter(d,void 0,void 0,function(){var t,r,a,s,n;return __generator(this,function(e){return t=o.headers,o.body,t.host,t.secret_key,t=o.headers.authorization,t=t.replace("Bearer ",""),t=I.jwt.verify(t),n=t.iat,r=t.exp,Date.now(),s=(new Date).getTime(),Math.round(s/1e3),s=new Date(1e3*n),n=new Date(1e3*r),r=c(s),a=c(n),s=u(s),n=u(n),console.warn("start_date_en ",r),console.warn("end_date_en ",a),console.warn("start_date_thai ",s),console.warn("end_date_thai ",n),i.code(200).send({response:{message:"Authenticate verify token successful!",status:1,data:t,start_date_en:r,end_date_en:a,start_date_thai:s,end_date_thai:n,StatusCode:"200"}}),[2]})})}),I.get("/private",{preValidation:[I.authenticate]},function(r,a){return __awaiter(d,void 0,void 0,function(){var t;return __generator(this,function(e){return t=r.headers,r.query,r.params,t.authorization,t.host,t.secret_key,a.header("Access-Control-Allow-Origin","*"),a.header("Access-Control-Allow-Methods","GET, POST, OPTIONS, PUT, PATCH, DELETE"),a.header("statusCode",200),a.header("status",!0),a.code(200).send({response:{result:"Authenticate Verify token successful !",message:"Protected area!!",status:1,data:null,StatusCode:"200"}}),[2]})})}),I.post("/private",{preValidation:[I.authenticate]},function(r,a){return __awaiter(d,void 0,void 0,function(){var t;return __generator(this,function(e){return t=r.headers,r.body,t.authorization,t.host,t.secret_key,a.header("Access-Control-Allow-Origin","*"),a.header("Access-Control-Allow-Methods","GET, POST, OPTIONS, PUT, PATCH, DELETE"),a.header("statusCode",200),a.header("status",!0),a.code(200).send({response:{result:"Authenticate Verify token successful!",message:"Protected area!",status:1,data:null,StatusCode:"200"}}),[2]})})}),I.post("/activate",{schema:bodyActivate_1.default},function(o,i){return __awaiter(d,void 0,void 0,function(){var t,r,a,s,n;return __generator(this,function(e){return n=o.headers,t=o.body,n.host,n.secret_key,n=o.headers.authorization,n.replace("Bearer ",""),null===(n=t.code)?i.code(401).send({response:{message:"Please input code to activate account!",status:0,StatusCode:"401"}}):(t=I.jwt.verify(n),n=t.iat,r=t.exp,Date.now(),s=(new Date).getTime(),Math.round(s/1e3),s=new Date(1e3*n),n=new Date(1e3*r),r=c(s),a=c(n),s=u(s),n=u(n),console.warn("start_date_en ",r),console.warn("end_date_en ",a),console.warn("start_date_thai ",s),console.warn("end_date_thai ",n),i.code(200).send({response:{message:"Activate successful!",status:1,StatusCode:"200",data:t}})),[2]})})}),H=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/,[2]})})}exports.default=user;