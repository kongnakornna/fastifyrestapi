"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);n&&("get"in n?t.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}:function(e,t,a,r){e[r=void 0===r?a:r]=t[a]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t},__awaiter=this&&this.__awaiter||function(e,i,o,l){return new(o=o||Promise)(function(a,t){function r(e){try{s(l.next(e))}catch(e){t(e)}}function n(e){try{s(l.throw(e))}catch(e){t(e)}}function s(e){var t;e.done?a(e.value):((t=e.value)instanceof o?t:new o(function(e){e(t)})).then(r,n)}s((l=l.apply(e,i||[])).next())})},__generator=this&&this.__generator||function(r,n){var s,i,o,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},u={next:e(0),throw:e(1),return:e(2)};return"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function e(a){return function(e){var t=[a,e];if(s)throw new TypeError("Generator is already executing.");for(;l=u&&t[u=0]?0:l;)try{if(s=1,i&&(o=2&t[0]?i.return:t[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,t[1])).done)return o;switch(i=0,(t=o?[2&t[0],o.value]:t)[0]){case 0:case 1:o=t;break;case 4:return l.label++,{value:t[1],done:!1};case 5:l.label++,i=t[1],t=[0];continue;case 7:t=l.ops.pop(),l.trys.pop();continue;default:if(!(o=0<(o=l.trys).length&&o[o.length-1])&&(6===t[0]||2===t[0])){l=0;continue}if(3===t[0]&&(!o||t[1]>o[0]&&t[1]<o[3]))l.label=t[1];else if(6===t[0]&&l.label<o[1])l.label=o[1],o=t;else{if(!(o&&l.label<o[2])){o[2]&&l.ops.pop(),l.trys.pop();continue}l.label=o[2],l.ops.push(t)}}t=n.call(r,l)}catch(e){t=[6,e],i=0}finally{s=o=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}}},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},path=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("path"))),crypto=__importStar(require("crypto")),user_model_1=require("../models/user_model"),file_1=require("../models/file"),sd_users_narrator_model_1=require("../models/sd_users_narrator_model"),sd_users_seminar_model_1=require("../models/sd_users_seminar_model"),seminar_detail_model_1=require("../models/seminar_detail_model"),seminar_title_model_1=require("../models/seminar_title_model"),seminar_model_1=require("../models/seminar_model"),register2Schema_1=__importDefault(require("../schemas/register2Schema")),bodysinginseminaruser_1=__importDefault(require("../schemas/bodysinginseminaruser")),bodyActivate_1=__importDefault(require("../schemas/bodyActivate")),functions_helper_1=require("../utils/helpers/functions.helper"),validator_helper_1=require("../utils/helpers/validator.helper"),Validator=new validator_helper_1._Validator,Functions=new functions_helper_1._publicfunctions,md5=require("md5");function seminaruser($){return __awaiter(this,void 0,void 0,function(){var g,X,Z,t,a=this;return __generator(this,function(e){return new user_model_1.UserModel,new file_1.FileModel,new sd_users_narrator_model_1.SdusersNarratorModel,g=new sd_users_seminar_model_1.SdusersSeminarModel,new seminar_detail_model_1.SeminarDetailModel,new seminar_title_model_1.SeminarTitleModel,X=new seminar_model_1.SeminarModels,Z=$.db,require("fastify-multer"),t=path.join(__dirname,"../../.env"),require("dotenv").config({path:t}),t=require("../../package.json"),t.port,t=process.env,t.API_KEY,$.post("/singup",{schema:register2Schema_1.default},function(h,f){return __awaiter(a,void 0,void 0,function(){var t,a,r,n,s,i,o,l,u,d,c,_,m,p;return __generator(this,function(e){switch(e.label){case 0:return f.header("Access-Control-Allow-Origin","*"),f.header("Access-Control-Allow-Methods","POST"),h.headers,t=h.body,Functions.getRandomchar(16),a=t.firstname,r=t.lastname,n=t.fullname,s=t.phonenumber,i=t.email,o=new Date,o=Functions.timeConvertermas(o),t.status,t.date,l=t.active||0,t.activedate,u=t.password,Date.now(),Date.now(),!1===(d=Functions.isemailValid(i))?(f.code(401).send({response:{message:"Email format checker failed, Please change email!",status:0,StatusCode:"401"}}),[2]):[4,g.validation_email(Z,i)];case 1:if(0<e.sent().length)return f.code(401).send({response:{message:"Email Duplicate , Please change email",status:0,StatusCode:"200"}}),[2];if(console.log("email",i),!1===Functions.passwordValidator(u))return f.code(401).send({response:{message:"Password checker failed!",status:0,StatusCode:"401"}}),[2];c=crypto.createHash("md5").update(u).digest("hex"),e.label=2;case 2:return e.trys.push([2,5,6,7]),(_={}).firstname=a,_.lastname=r,_.fullname=n,_.phonenumber=s,_.email=i,_.create=o,_.active=l,_.activedate=t.activedate,_.password=c,_.password_temp=u,[4,g.create_data(Z,_)];case 3:return e.sent(),[4,g.last_seminar_id(Z)];case 4:return _=e.sent(),p=_[0],console.log("luser",p),p=p.seminar_id,console.log("idx",p),(m=[]).seminar_id=p,m.email=d,m.firstname=a,m.lastname=r,m.create=o,p=$.jwt.sign({createsignin:m},{expiresIn:"1d"}),f.code(201).send({response:{message:"Register successful",status:1,token:p,StatusCode:"201"}}),[2];case 5:return e.sent(),f.code(401).send({response:{result:"Error",message:"Register Unsuccessful!",status:1,token:null,StatusCode:"401"}}),[2];case 6:return f.code(403).send({response:{result:"Error",message:"Sign up Unsuccessful ,Error System something!",status:1,token:null,StatusCode:"403"}}),[2];case 7:return[2]}})})}),$.post("/singin",{schema:bodysinginseminaruser_1.default},function(i,o){return __awaiter(a,void 0,void 0,function(){var t,a,r,n,s;return __generator(this,function(e){switch(e.label){case 0:return o.header("Access-Control-Allow-Origin","*"),o.header("Access-Control-Allow-Methods","POST"),a=i.body,t=a.email,a=a.password,console.log("email=>",t),console.log("password=>",a),r=crypto.createHash("md5").update(a).digest("hex"),[4,g.login(Z,t,r)];case 1:return s=e.sent(),console.log("email=>"+t),console.log("password=>"+a),console.log("encPassword=>"+r),console.log("rs=>"+s),0<s.length?(s=s[0],console.log("user=>",s),(n=[]).seminar_id=s.seminar_id,n.email=s.email,n.firstname=s.firstname,n.lastname=s.lastname,console.warn("rss=>",n),Date.now(),(new Date).getTime(),s=$.jwt.sign({seminar_id:n.seminar_id,email:n.email,firstname:n.firstname,lastname:n.lastname},{expiresIn:"1d"}),o.code(200).send({response:{message:"Create token Successful!",status:1,ok:!0,statusCode:"200",data:{seminar_id:n.seminar_id,email:n.email,firstname:n.firstname,lastname:n.lastname},token:s}})):o.code(401).send({response:{message:"Login failed!",status:1,ok:!1,statusCode:"401",data:null,token:null}}),[2]}})})}),$.post("/verifytoken",{preValidation:[$.authenticate]},function(i,o){return __awaiter(a,void 0,void 0,function(){var t,a,r,n,s;return __generator(this,function(e){return t=i.headers,i.body,t.host,t.secret_key,t=i.headers.authorization,t=t.replace("Bearer ",""),t=$.jwt.verify(t),s=t.iat,a=t.exp,Date.now(),n=(new Date).getTime(),Math.round(n/1e3),n=new Date(1e3*s),s=new Date(1e3*a),a=Functions.toEnDate(n),r=Functions.toEnDate(s),n=Functions.toThaiDate(n),s=Functions.toThaiDate(s),console.warn("start_date_en ",a),console.warn("end_date_en ",r),console.warn("start_date_thai ",n),console.warn("end_date_thai ",s),o.code(200).send({response:{message:"Authenticate verify token successful!",status:1,data:t,start_date_en:a,end_date_en:r,start_date_thai:n,end_date_thai:s,StatusCode:"200"}}),[2]})})}),$.post("/activate",{schema:bodyActivate_1.default},function(i,o){return __awaiter(a,void 0,void 0,function(){var t,a,r,n,s;return __generator(this,function(e){switch(e.label){case 0:return(o.header("Access-Control-Allow-Origin","*"),o.header("Access-Control-Allow-Methods","POST"),i.headers,n=i.body,null===(n=n.code))?(o.code(401).send({response:{message:"Please input code to activate account!",status:0,StatusCode:"401"}}),[2]):(n=$.jwt.verify(n),s=n.iat,t=n.exp,n.data,Date.now(),r=(new Date).getTime(),Math.round(r/1e3),r=new Date(1e3*s),s=new Date(1e3*t),t=Functions.toEnDate(r),a=Functions.toEnDate(s),r=Functions.toThaiDate(r),s=Functions.toThaiDate(s),console.warn("start_date_en=>",t),console.warn("end_date_en=>",a),console.warn("start_date_thai=>",r),console.warn("end_date_thai=>",s),console.warn("tokendecode=>",n),console.warn("count=> ",n.lengt),a=(t=n).createsignin.seminar_id,r=t.createsignin.email,s=new Date,n=Functions.timeConvertermas(s),s={status:1,active:1,activedate:n},console.log("inputupdate",s),[4,g.activate(Z,a,s)]);case 1:e.sent();try{return o.code(200).send({response:{message:"Activate successful!",status:1,StatusCode:"200",email:r,data:t}}),[2]}catch(e){return o.code(401).send({response:{result:"Error",message:"Activate error!",status:1,token:null,StatusCode:"401"}}),[2]}finally{return o.code(403).send({response:{result:"Error",message:"Activate ,Error System something!",status:1,token:null,StatusCode:"403"}}),[2]}return[2]}})})}),$.get("/usersseminarlist",function(Q,W){return __awaiter(a,void 0,void 0,function(){var t,a,r,n,s,i,o,l,u,d,c,_,m,p,h,f,g,v,w,b,y,C,S,D,O,k,A,E,B,N,V,I,K,U,z,H,G,T,F,L,M,P,q,Y,J,x,j,R;return __generator(this,function(e){switch(e.label){case 0:W.header("Access-Control-Allow-Origin","*"),W.header("Access-Control-Allow-Methods","GET, POST, OPTIONS, PUT, PATCH, DELETE"),e.label=1;case 1:return e.trys.push([1,8,,9]),c=Q.query,c.active_datatime,t=c.status_active||null,a=c.period_id,r=c.keyword,n=c.seminar_id,s=c.title_id,c.email,i=c.start,o=c.end,c.isCount,l=c.orderBy||"desc",c.limit,u=c.status||1,d=Number(null==c?void 0:c.page)||1,c=Number(null==c?void 0:c.perpage)||20,(_={}).seminar_id=n||null,_.title_id=s||null,_.period_id=a||null,_.status_active=t||null,_.status=u||1,_.keyword=r||null,_.isCount=1,[4,X.filter_title_users_seminar(Z,_)];case 2:return(_=e.sent(),console.log("getCount",_),0==(m=_.length))?(W.code(200).send({response:{message:"Result,Data is null!",error:"OK",StatusCode:"200",total_page:0,total:m,page:d,perpage:c,data:null}}),[2]):(p=Math.round(m/c)||1,console.log("total_pages=",p),(w={}).seminar_id=n||null,w.title_id=s||null,w.period_id=a||null,w.status_active=t||null,w.status=u||1,w.keyword=r||null,w.start=i||null,w.end=o||null,w.order=l||null,w.pages=d||1,w.sizepsge=c||10,w.isCount=0,[4,X.filter_title_users_seminar(Z,w)]);case 3:h=e.sent(),f=[],g=0,v=Object.entries(h),e.label=4;case 4:return g<v.length?(w=v[g],T=w[0],w[1],b=h[T].seminar_id,y=h[T].title_id,C=h[T].title_name,S=h[T].title,D=h[T].location,O=h[T].province,k=h[T].spake_time,A=h[T].title_url,E=Functions.timeConvertermas(h[T].startdate),B=Functions.timeConvertermas(h[T].enddate),N=h[T].narrator_firstname,V=h[T].narrator_lastname,I=h[T].fullname_narrator,K=h[T].narrator_email,U=h[T].firstname_seminar,z=h[T].lastname_seminar,H=h[T].phonenumber_seminar,G=h[T].email_seminar,T=h[T].fullname_semina,(j={}).title_id=y||null,[4,X.seminar_detail(Z,j)]):[3,7];case 5:for(F=e.sent(),L=[],M=0,P=Object.entries(F);M<P.length;M++)q=P[M],x=q[0],q[1],q=F[x].idx,Y=F[x].detail_name,J=Functions.timeConvertermas(F[x].startdate),x=Functions.timeConvertermas(F[x].enddate),L.push({idx:q,detail_name:Y,startdate:J,enddate:x});j={seminar_id:b,title_id:y,title_name:C,title:S,location:D,province:O,spake_time:k,url:A,startdate:E,enddate:B,narrator:I,fullname_narrator:N+" "+V,narrator_email:K,fullname_seminar:z+" "+U,phonenumber_seminar:H,email_seminar:G,fullname_semina:T},f.push(j),e.label=6;case 6:return g++,[3,4];case 7:return R=f,W.code(200).send({response:{message:"Result,Data successful!",error:"OK",StatusCode:"200",total_page:p,total:m,page:d,perpage:c,data:R}}),[2];case 8:return R=e.sent(),$.log.error("err=>",R),R?$.log.error(R):W.code(500).send({response:{message:"Eror Result!",error:R,StatusCode:"500",total_page:0,total:0,page:0,perpage:0,data:null}}),[2];case 9:return[2]}})})}),$.post("/usersseminarlist",{preValidation:[$.authenticate]},function(Q,W){return __awaiter(a,void 0,void 0,function(){var t,a,r,n,s,i,o,l,u,d,c,_,m,p,h,f,g,v,w,b,y,C,S,D,O,k,A,E,B,N,V,I,K,U,z,H,G,T,F,L,M,P,q,Y,J,x,j,R;return __generator(this,function(e){switch(e.label){case 0:W.header("Access-Control-Allow-Origin","*"),W.header("Access-Control-Allow-Methods","GET, POST, OPTIONS, PUT, PATCH, DELETE"),e.label=1;case 1:return e.trys.push([1,8,,9]),a=Q.headers,c=Q.query,Q.params,u=Q.body,t=Q.headers.authorization,t=t.replace("Bearer ",""),t=$.jwt.verify(t),console.warn("token_bearer ",t),t.iat,t.exp,a.host,a.secret_key,u.active_datatime,t=u.status_active||null,a=u.period_id,r=u.keyword,n=u.seminar_id,s=u.title_id,u.email,i=u.start,o=u.end,u.isCount,l=u.orderBy||"desc",u.limit,u=u.status||1,d=Number(null==c?void 0:c.page)||1,c=Number(null==c?void 0:c.perpage)||10,(_={}).seminar_id=n||null,_.title_id=s||null,_.period_id=a||null,_.status_active=t||null,_.status=u||1,_.keyword=r||null,_.isCount=1,[4,X.filter_title_users_seminar(Z,_)];case 2:return(_=e.sent(),console.log("getCount",_),0==(m=_.length))?(W.code(200).send({response:{message:"Result,Data is null!",error:"OK",StatusCode:"200",total_page:0,total:m,page:d,perpage:c,data:null}}),[2]):(p=Math.round(m/c)||1,console.log("total_pages=",p),(w={}).seminar_id=n||null,w.title_id=s||null,w.period_id=a||null,w.status_active=t||null,w.status=u||1,w.keyword=r||null,w.start=i||null,w.end=o||null,w.order=l||null,w.pages=d||1,w.sizepsge=c||50,w.isCount=0,[4,X.filter_title_users_seminar(Z,w)]);case 3:h=e.sent(),f=[],g=0,v=Object.entries(h),e.label=4;case 4:return g<v.length?(w=v[g],T=w[0],w[1],b=h[T].seminar_id,y=h[T].title_id,C=h[T].title_name,S=h[T].title,D=h[T].location,O=h[T].province,k=h[T].spake_time,A=h[T].title_url,E=Functions.timeConvertermas(h[T].startdate),B=Functions.timeConvertermas(h[T].enddate),N=h[T].narrator_firstname,V=h[T].narrator_lastname,I=h[T].fullname_narrator,K=h[T].narrator_email,U=h[T].firstname_seminar,z=h[T].lastname_seminar,H=h[T].phonenumber_seminar,G=h[T].email_seminar,T=h[T].fullname_semina,(j={}).title_id=y||null,[4,X.seminar_detail(Z,j)]):[3,7];case 5:for(F=e.sent(),L=[],M=0,P=Object.entries(F);M<P.length;M++)q=P[M],x=q[0],q[1],q=F[x].idx,Y=F[x].detail_name,J=Functions.timeConvertermas(F[x].startdate),x=Functions.timeConvertermas(F[x].enddate),L.push({idx:q,detail_name:Y,startdate:J,enddate:x});j={seminar_id:b,title_id:y,title_name:C,title:S,location:D,province:O,spake_time:k,url:A,startdate:E,enddate:B,narrator:I,fullname_narrator:N+" "+V,narrator_email:K,fullname_seminar:z+" "+U,phonenumber_seminar:H,email_seminar:G,fullname_semina:T},f.push(j),e.label=6;case 6:return g++,[3,4];case 7:return R=f,W.code(200).send({response:{message:"Result,Data successful!",error:"OK",StatusCode:"200",total_page:p,total:m,page:d,perpage:c,data:R}}),[2];case 8:return R=e.sent(),$.log.error("err=>",R),R?$.log.error(R):W.code(500).send({response:{message:"Eror Result!",error:R,StatusCode:"500",total_page:0,total:0,page:0,perpage:0,data:null}}),[2];case 9:return[2]}})})}),[2]})})}exports.default=seminaruser;