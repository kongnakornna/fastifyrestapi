"use strict";var __awaiter=this&&this.__awaiter||function(e,o,c,s){return new(c=c||Promise)(function(n,t){function r(e){try{i(s.next(e))}catch(e){t(e)}}function a(e){try{i(s.throw(e))}catch(e){t(e)}}function i(e){var t;e.done?n(e.value):((t=e.value)instanceof c?t:new c(function(e){e(t)})).then(r,a)}i((s=s.apply(e,o||[])).next())})},__generator=this&&this.__generator||function(r,a){var i,o,c,s={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]},l={next:e(0),throw:e(1),return:e(2)};return"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function e(n){return function(e){var t=[n,e];if(i)throw new TypeError("Generator is already executing.");for(;s=l&&t[l=0]?0:s;)try{if(i=1,o&&(c=2&t[0]?o.return:t[0]?o.throw||((c=o.return)&&c.call(o),0):o.next)&&!(c=c.call(o,t[1])).done)return c;switch(o=0,(t=c?[2&t[0],c.value]:t)[0]){case 0:case 1:c=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,o=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(c=0<(c=s.trys).length&&c[c.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!c||t[1]>c[0]&&t[1]<c[3]))s.label=t[1];else if(6===t[0]&&s.label<c[1])s.label=c[1],c=t;else{if(!(c&&s.label<c[2])){c[2]&&s.ops.pop(),s.trys.pop();continue}s.label=c[2],s.ops.push(t)}}t=a.call(r,s)}catch(e){t=[6,e],o=0}finally{i=c=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}}},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},promisify=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.CacheData=void 0,require("util").promisify),ioRedis=require("ioredis"),RedisTimeout=require("ioredis-timeout"),moment=require("moment"),rediscluster_config_1=__importDefault(require("./rediscluster-config")),client=null,ConnectionCache=function(){client=new ioRedis.Cluster(rediscluster_config_1.default.host,rediscluster_config_1.default.option),RedisTimeout(client,rediscluster_config_1.default.option.timeout),client.on("ready",function(){console.log("2rd Cache Redis Cluster Connect is success")}),client.on("error",function(e){console.log("2rd init Cache Redis Cluster init fail : ".concat(e))})},retRet={result:!0,remark:"success",runlotime:null,data:[]},CacheData=function(){function e(){}return e.prototype.Getkey=function(n){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:return null!==client?[3,2]:[4,ConnectionCache()];case 1:e.sent(),e.label=2;case 2:return t=client.get(n),console.log("getcache resultcache",t),[2,t]}})})},e.prototype.SetCacheData=function(a){return __awaiter(this,void 0,void 0,function(){var t,n,r;return __generator(this,function(e){switch(e.label){case 0:return null!==client?[3,2]:[4,ConnectionCache()];case 1:e.sent(),e.label=2;case 2:return t=a.time,n=a.keycache,r=a.data,[4,client.setex(n,t,JSON.stringify(r))];case 3:return e.sent(),[2,n]}})})},e.prototype.GetCacheData=function(n){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:return null!==client?[3,2]:[4,ConnectionCache()];case 1:e.sent(),e.label=2;case 2:return[4,promisify(client.get).bind(client)(n)];case 3:return t=e.sent(),[2,JSON.parse(t)]}})})},e.prototype.DeleteCacheData=function(t){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return null!==client?[3,2]:[4,ConnectionCache()];case 1:e.sent(),e.label=2;case 2:return[4,promisify(client.del).bind(client)(t)];case 3:return e.sent(),[2,t]}})})},e.prototype.resetCacheById=function(t){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return null!==client?[3,2]:[4,ConnectionCache()];case 1:e.sent(),e.label=2;case 2:return[4,promisify(client.getset).bind(client)(t,0)];case 3:return e.sent(),[2,t]}})})},e.prototype.UpdateCacheData=function(i){return __awaiter(this,void 0,void 0,function(){var t,n,r,a;return __generator(this,function(e){switch(e.label){case 0:return null!==client?[3,2]:[4,ConnectionCache()];case 1:e.sent(),e.label=2;case 2:return t=i.id,n=i.time,r=i.keycache,a=i.data,console.log("setcache setData",i),""!=t?[3,4]:[4,client.getset(r,JSON.stringify(a))];case 3:return e.sent(),[3,6];case 4:return[4,client.hset(t,r,n,JSON.stringify(a))];case 5:e.sent(),e.label=6;case 6:return console.log("id cache",t),console.log("keycache",r),console.log("value_data",a),console.log("time",n),[2,r]}})})},e.prototype.gethCacheById=function(r){return __awaiter(this,void 0,void 0,function(){var t,n;return __generator(this,function(e){switch(e.label){case 0:return null!==client?[3,2]:[4,ConnectionCache()];case 1:e.sent(),e.label=2;case 2:return t=r.id,r.time,n=r.keycache,r.data,console.log("setcache setData",r),[4,promisify(client.hmget).bind(client)(t,n)];case 3:return e.sent(),console.log("id cache",t),console.log("keycache",n),[2,n]}})})},e.prototype.Test=function(t){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return null!==client?[3,2]:[4,ConnectionCache()];case 1:e.sent(),e.label=2;case 2:return t.time,[2,"Test_Cache"]}})})},e.prototype.OTP=function(e){return __awaiter(this,void 0,void 0,function(){var t,n,r,a,i,o,c,s;return __generator(this,function(e){switch(e.label){case 0:return null!==client?[3,2]:[4,ConnectionCache()];case 1:e.sent(),e.label=2;case 2:return Date.now(),t=(new Date).getTime(),t=t,n=new Date(t),r=toThaiDate(n),a=toEnDate(n),i=30,c=getRandomint(6),getRandomString(7),o="OTP_Auth_"+c,[4,client.setex(o,i,JSON.stringify(c))];case 3:return e.sent(),console.log("keycache ",o),[4,promisify(client.get).bind(client)(o)];case 4:return c=e.sent(),console.log("getOTP ",c),s=JSON.parse(c),new Date(t),new Date(t),[2,{key:o,time:i,OTP:s,dayloth:r,dayloen:a,timestamp:t,timelostart:n}]}})})},e.prototype.validateOTP=function(a){return __awaiter(this,void 0,void 0,function(){var t,n,r;return __generator(this,function(e){switch(e.label){case 0:return a.keycache,t=a.otpval,a.timestamp,n="OTP_Auth_"+t,null!==client?[3,2]:[4,ConnectionCache()];case 1:e.sent(),e.label=2;case 2:return[4,promisify(client.get).bind(client)(n)];case 3:return r=e.sent(),r=JSON.parse(r),console.log("validateOTP otp val=>",t),console.log("validateOTP rs OTP=>",r),console.log("validateOTP key=>",n),[2,t==r?1:0]}})})},e.prototype.Run=function(e){return __awaiter(this,void 0,void 0,function(){var t,n,r,a;return __generator(this,function(e){switch(e.label){case 0:return null!==client?[3,2]:[4,ConnectionCache()];case 1:e.sent(),e.label=2;case 2:return t=30,r=getRandomint(6),n=getRandomString(12),n="True_plookpanya_OTP_"+n+"_"+r,[4,client.setex(n,t,JSON.stringify(r))];case 3:return e.sent(),[4,promisify(client.get).bind(client)(n)];case 4:return r=e.sent(),a=JSON.parse(r),[2,{key:n,time:t,OTP:a}]}})})},e}();function getRandomString(e){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#",n="",r=0;r<e;r++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}function getRandomint(e){for(var t="0123456789",n="",r=0;r<e;r++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}function toThaiDate(e){var t=e.getFullYear()+543,n=["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."][e.getMonth()],r=e.getDate(),a=e.getHours().toString().padStart(2,"0"),i=e.getMinutes().toString().padStart(2,"0"),e=e.getSeconds().toString().padStart(2,"0");return"".concat(r," ").concat(n," ").concat(t," ")+"".concat(a,":").concat(i,":").concat(e," น.")}function toEnDate(e){var t=e.getFullYear()+0,n=["January","February","March.","April","May","June","July","August","September","October","November","December"][e.getMonth()],r=e.getDate(),a=e.getHours().toString().padStart(2,"0"),i=e.getMinutes().toString().padStart(2,"0"),e=e.getSeconds().toString().padStart(2,"0");return"".concat(r," ").concat(n," ").concat(t," ")+"".concat(a,":").concat(i,":").concat(e)}exports.CacheData=CacheData;