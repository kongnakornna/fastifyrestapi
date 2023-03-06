"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SeminarModels=void 0;var SeminarModels=function(){function e(){}return e.prototype.seminar_register=function(e,t){return e("seminarregister").insert(t)},e.prototype.last_id=function(e){return e("seminarregister").select("id").orderBy("id","desc").limit(1)},e.prototype.update_by_seminar_id=function(e,t,s,r){return e("seminarregister").where("seminar_title_id",t).andWhere("seminar_id",s).update(r)},e.prototype.check_data_by_id=function(e,t,s){return e("seminarregister").select("*").where("seminar_title_id",t).andWhere("seminar_id",s)},e.prototype.check_validate=function(e,t,s,r){return console.warn("db=>",e),console.warn("seminar_title_id=>",t),console.warn("seminar_id=>",s),console.warn("period_id=>",r),e("seminarregister as r").select("r.*").where("r.seminar_title_id",t).andWhere("r.seminar_id",s).andWhere("r.period_id",r)},e.prototype.remove_by_seminar_id=function(e,t,s){return e("seminar_title as r").where("r.eminar_title_id",t).andWhere("r.seminar_id",s).del()},e.prototype.remove_by_id=function(e,t){return e("seminar_title").where("id",t).del()},e.prototype.filter_title=function(e,t){try{var s=t.keyword,r=t.title_id,a=t.narrator_id,n=(t.location,t.province,t.telephone,t.email),l=t.start,i=t.end,o=t.start_event_end,d=t.end_event_end,u=t.isCount,c=t.orderBy,_=(t.limit,t.page||1),m=t.perpage||20,p=t.status||1;0==u?(console.log("rows filter ",t),console.log("data keyword ",s),console.log("rows isCount ",u)):(console.log("data filter ",t),console.log("data keyword ",s),console.log("data isCount ",u));var h=(h=e("seminar_title as s")).leftJoin("sd_users_narrator as u","u.narrator_id","s.narrator_id");return h=(h=1==u?h.select("s.id as idx"):(h=(h=(h=(h=(h=(h=(h=(h=(h=h.select("s.id as idx")).select("s.title")).select("u.firstname")).select("u.lastname")).select("u.fullname")).select("u.nickname")).select("u.date")).select("u.email")).select("s.datetime_start as start")).select("s.datetime_end as end")).where("u.status",p),null!=r&&(h=h.andWhere("s.id ",r)),null!=a&&(h=h.andWhere("u.narrator_id",a)),null!=n&&(h=h.andWhere("u.emai","like","%".concat(n,"%"))),null!=s&&(h=h.andWhere("s.title","like","%".concat(s,"%"))),null==l&&null==i||(h=h.whereBetween("s.datetime_start",[l,i])),h=(h=null==o&&null==d?h:h.whereBetween("s.datetime_end",[o,d])).groupBy("s.id"),h=(h=(h=null==r&&(null==c||"desc"==c)?h.orderBy("s.id","desc"):h.orderBy("s.id","asc")).limit(m)).offset(m*(_-1))}catch(e){console.log("err=>",e),e&&process.exit(1)}},e.prototype.seminar_detail=function(e,t){try{var s=t.title_id,r=e("seminar_detail as s");return r=(r=(r=(r=(r=(r=r.select("s.id as idx")).select("s.title as detail_name")).select("s.startdate as startdate")).select("s.enddate as enddate")).where("s.seminar_title_id",s)).orderBy("s.id","asc")}catch(e){console.log("err=>",e),e&&process.exit(1)}},e.prototype.filter_detail=function(e,t){try{var s=t.keyword,r=t.id,a=t.title_id,n=(t.location,t.province,t.telephone,t.email,t.start),l=t.end,i=t.start_event_end,o=t.end_event_end,d=t.pages,u=t.isCount,c=t.orderBy,_=(t.limit,t.perpage||500),m=t.status||1,p=(0==u?(console.log("rows filter ",t),console.log("data keyword ",s),console.log("rows isCount ",u)):(console.log("data filter ",t),console.log("data keyword ",s),console.log("data isCount ",u)),e("seminar_detail as s"));return p=(p=1==u?p.select("s.id as idx"):(p=p.select("s.id as idx")).select("s.title as detail_name")).where("s.status",m),null!=r&&(p=p.andWhere("s.id ",r)),null!=a&&(p=p.andWhere("t.id",a)),null!=s&&(p=p.andWhere("s.title","like","%".concat(s,"%"))),null==n&&null==l||(p=p.whereBetween("s.startdate",[n,l])),p=(p=null==i&&null==o?p:p.whereBetween("s.enddate",[i,o])).groupBy("s.id"),p=null==r&&(null==c||"desc"==c)?p.orderBy("s.id","desc"):p.orderBy("s.id","asc"),p=null==_&&null==d?p:(p=p.limit(_)).offset(_*(d-1))}catch(e){console.log("err=>",e),e&&process.exit(1)}},e.prototype.filter_details=function(e,t){try{var s=t.keyword,r=t.id,a=t.title_id,n=(t.location,t.province,t.telephone,t.email),l=t.start,i=t.end,o=t.start_event_end,d=t.end_event_end,u=t.pages,c=t.isCount,_=t.orderBy,m=(t.limit,t.perpage||t.sizepsge),p=t.status||1,h=(0==c?(console.log("rows filter ",t),console.log("data keyword ",s),console.log("rows isCount ",c)):(console.log("data filter ",t),console.log("data keyword ",s),console.log("data isCount ",c)),e("seminar_detail as s"));return h=(h=h.innerJoin("seminar_title as t","t.id","s.seminar_title_id")).innerJoin("sd_users_narrator as u","u.narrator_id","t.narrator_id"),h=(h=1==c?h.select("s.id as idx"):(h=(h=(h=(h=(h=(h=(h=(h=(h=(h=(h=h.select("s.id as idx")).select("t.title as title_name")).select("s.title as detail_name")).select("t.detail as title_detail")).select("t.url as title_url")).select("s.startdate as startdate")).select("s.enddate as enddate")).select("u.firstname")).select("u.lastname")).select("u.fullname as narrator_fullname")).select("u.nickname as narrator_nickname")).select("u.email")).where("s.status",p),null!=r&&(h=h.andWhere("s.id ",r)),null!=a&&(h=h.andWhere("t.id",a)),null!=n&&(h=h.andWhere("u.email","like","%".concat(n,"%"))),null!=s&&(h=h.andWhere("s.title","like","%".concat(s,"%"))),null==l&&null==i||(h=h.whereBetween("s.startdate",[l,i])),h=(h=null==o&&null==d?h:h.whereBetween("s.enddate",[o,d])).groupBy("s.id"),h=null==r&&(null==_||"desc"==_)?h.orderBy("s.id","desc"):h.orderBy("s.id","asc"),h=null==m&&null==u?h:(h=h.limit(m)).offset(m*(u-1))}catch(e){console.log("err=>",e),e&&process.exit(1)}},e.prototype.filter_title_users_seminar=function(e,t){try{var s=t.keyword||null,r=t.seminar_id||null,a=t.title_id||null,n=(t.email,t.start||null),l=t.end||null,i=t.pages||1,o=t.isCount||null,d=t.orderBy||null,u=(t.limit,t.perpage||50),c=t.status||1,_=(console.log("filter_title_users_seminar filter=>",t),e("sd_users_seminar as us"));return _=(_=(_=_.innerJoin("seminarregister as rt","rt.seminar_id","us.seminar_id")).leftJoin("seminar_title as t","t.id","rt.seminar_title_id")).leftJoin("sd_users_narrator as u","u.narrator_id","t.narrator_id"),_=(_=1==o?_.select("us.seminar_id"):(_=(_=(_=(_=(_=(_=(_=(_=(_=(_=(_=(_=(_=(_=(_=(_=(_=_.select("us.seminar_id")).select("t.id as title_id")).select("t.title as title")).select("t.location as location")).select("t.province as province")).select("t.detail as title_detail")).select("t.spake_time as spake_time")).select("t.url as title_url")).select("t.datetime_start as startdate")).select("t.datetime_end as enddate")).select("u.firstname as narrator_firstname")).select("u.lastname as narrator_lastname")).select("u.email as narrator_email")).select("us.seminar_id as seminar_id")).select("us.firstname as firstname_seminar")).select("us.lastname as lastname_seminar")).select("us.phonenumber as phonenumber_seminar")).select("us.email as email_seminar")).where("us.status",c),""!=r&&null!=r&&(_=_.andWhere("us.seminar_id",r)),null!=a&&0!=a&&(_=_.andWhere("t.id",a)),null!=s&&(_=(_=_.andWhere("us.firstname","like","%".concat(s,"%"))).orWhere("us.lastname","like","%".concat(s,"%"))),_=(_=null!=n&&null!=l?_.whereBetween("t.datetime_start",[n,l]):_).groupBy("us.seminar_id"),_=(_=(_=(null==r||0==r)&&(""==d&&null===d||"desc"==d)?_.orderBy("us.seminar_id","desc"):_.orderBy("us.seminar_id","asc")).limit(u)).offset(u*(i-1)),console.log("query=>",_),_}catch(e){console.error(e),console.log("err=>",e),e&&process.exit(1)}},e.prototype.addd_period_event_log=function(e,t){return e("seminar_period_event_log").insert(t)},e.prototype.check_data_by_seminar_period_event_log_id=function(e,t,s,r){return e("seminar_period_event_log").select("*").where("seminar_title_id",t).andWhere("seminar_id",s).andWhere("datetime",{datetime:r?"%".concat(r,"%"):"%"})},e.prototype.filter_seminar_period_event_log=function(e,t){try{var s=t.keyword,r=t.id,a=t.title_id,n=t.seminar_id,l=t.email,i=t.start||1,o=t.end,d=t.pages,u=t.isCount,c=t.orderBy,_=(t.limit,t.perpage||t.sizepsge),m=t.status||1,p=(0==u?(console.log("rows filter ",t),console.log("data keyword ",s),console.log("rows isCount ",u)):(console.log("data filter ",t),console.log("data keyword ",s),console.log("data isCount ",u)),e("seminar_period_event_log as l"));return p=(p=(p=p.innerJoin("seminar_title as t","t.id","l.seminar_title_id")).innerJoin("sd_users_seminar as us","us.seminar_id","l.seminar_id")).innerJoin("sd_users_narrator as u","u.narrator_id","t.narrator_id"),p=(p=1==u?p.select("l.id as idx"):(p=(p=(p=(p=(p=(p=(p=(p=(p=(p=(p=p.select("l.id as idx")).select("t.title as title_name")).select("t.url as title_url")).select("s.startdate as startdate")).select("s.enddate as enddate")).select("u.fullname as narrator_fullname")).select("u.nickname as narrator_nickname")).select("us.seminar_id as seminar_id")).select("us.firstname as firstname_seminar")).select("us.lastname as lastname_seminar")).select("us.phonenumber as phonenumber_seminar")).select("us.email as email_seminar")).where("u.status",m),""!=n&&null!=n&&(p=p.andWhere("us.seminar_id",n)),null!=a&&(p=p.andWhere("t.id",a)),null!=l&&(p=p.andWhere("us.email","like","%".concat(l,"%"))),null!=n&&(p=p.andWhere("us.seminar_id",n)),null!=s&&(p=p.andWhere("t.title","like","%".concat(s,"%"))),p=(p=null==i&&null==o?p:p.andWhereBetween("l.datetime",[i,o])).groupBy("l.id"),p=null==r&&(null!=c||"desc"==c)?p.orderBy("l.id","desc"):p.orderBy("l.id","asc"),p=null==_&&null==d?p:(p=p.limit(_)).offset(_*(d-1))}catch(e){console.log("err=>",e),e&&process.exit(1)}},e}();exports.SeminarModels=SeminarModels;