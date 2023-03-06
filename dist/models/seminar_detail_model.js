"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SeminarDetailModel=void 0;var SeminarDetailModel=function(){function e(){}return e.prototype.create_data=function(e,t){return e("seminar_detail").insert(t)},e.prototype.last_id=function(e){return e("seminar_detail").select("id").orderBy("id","desc").limit(1)},e.prototype.update_by_id=function(e,t,a){return e("seminar_detail").where("id",t).update(a)},e.prototype.check_data_by_id=function(e,t){return e("seminar_detail").select("*").where("id",t)},e.prototype.remove_by_id=function(e,t){return e("seminar_detail").where("id",t).del()},e.prototype.filter_data=function(e,t){try{var a=t.keyword,r=t.id,i=t.title_id,s=(t.location,t.province,t.telephone,t.email),n=t.start,l=t.end,d=t.start_event_end,o=t.end_event_end,c=t.pages,u=t.isCount,_=t.orderBy,m=(t.limit,t.perpage||t.sizepsge),p=t.status||1,y=(0==u?(console.log("rows filter ",t),console.log("data keyword ",a),console.log("rows isCount ",u)):(console.log("data filter ",t),console.log("data keyword ",a),console.log("data isCount ",u)),e("seminar_detail as s"));return y=(y=y.innerJoin("seminar_title as t","t.id","s.seminar_title_id")).innerJoin("sd_users_narrator as u","u.narrator_id","t.narrator_id"),y=(y=1==u?y.select("s.id as idx"):(y=(y=(y=(y=(y=(y=(y=(y=(y=(y=(y=(y=y.select("s.id as idx")).select("t.title as title_name")).select("s.title as detail_name")).select("t.title as title_name")).select("t.detail as title_detail")).select("t.url as title_url")).select("s.startdate as startdate")).select("s.enddate as enddate")).select("u.firstname")).select("u.lastname")).select("u.fullname as narrator_fullname")).select("u.nickname as narrator_nickname")).select("u.email")).where("s.status",p),""==r&&0===r||(y=y.andWhere("s.id ",r)),""==i&&0===i||(y=y.andWhere("t.id",i)),""==s&&null===s||(y=y.andWhere("u.email","like","%".concat(s,"%"))),null!=a&&(y=y.andWhere("s.title","like","%".concat(a,"%"))),null!=n&&null!=l&&(y=y.andWhereBetween("s.startdate",[n,l])),y=(y=null!=d&&null!=o?y.andWhereBetween("s.enddate",[n,l]):y).groupBy("s.id"),y=(y=(y=""!=r||0!==r?y.orderBy("s.id","asc"):""!=_||null!==_?"desc"==_?y.orderBy("s.id","desc"):y.orderBy("s.id","asc"):y.orderBy("u.id","desc")).limit(m)).offset(m*(c-1)),console.log("query=>",y),y}catch(e){console.log("err=>",e),e&&process.exit(1)}},e}();exports.SeminarDetailModel=SeminarDetailModel;