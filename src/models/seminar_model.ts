import * as knex from 'knex';
/**************************************************/    
export class SeminarModels {
    seminar_register(db: knex, data: any) {
        return db('seminarregister')
        .insert(data)
    }
    last_id(db: knex) {
        return db('seminarregister')
        .select('id')
        .orderBy('id','desc')
        .limit(1)
    }
    update_by_seminar_id(db: knex,seminar_title_id: any, seminar_id: any, data: any) {
        return db('seminarregister')
        .where('seminar_title_id', seminar_title_id)
        .andWhere('seminar_id', seminar_id) 
        .update(data)
    }
    check_data_by_id(db: knex, seminar_title_id: any, seminar_id: any) {
        return db('seminarregister')
            .select('*')
            .where('seminar_title_id', seminar_title_id)
            .andWhere('seminar_id', seminar_id) 
    }
    check_validate(db: knex, seminar_title_id: any, seminar_id: any, period_id: any) {
        return db('seminar_period_event_log')
            .select('*')
            .where('seminar_title_id', seminar_title_id)
            .andWhere('seminar_id', seminar_id) 
            .andWhere('period_id', period_id)
    }
    remove_by_seminar_id(db: knex, seminar_title_id: any, seminar_id: any) {
            return db('seminar_title')
            .where('seminar_title_id', seminar_title_id)
            .andWhere('seminar_id', seminar_id) 
            .del()
    }
    remove_by_id(db: knex, id: any) {
            return db('seminar_title')
            .where('id', id)
            .del()
    }
    filter_title(db: knex,filter: any) {
                const keyword = filter.keyword; 
                const id= filter.id; 
                const narrator_id = filter.narrator_id; 
                const location= filter.location; 
                const province= filter.province; 
                const telephone= filter.telephone;
                const email= filter.email;
                const start= filter.start;
                const end = filter.end;  
                const start_event_end = filter.start_event_end;  
                const end_event_end = filter.end_event_end;  
                const page= filter.pages; 
                const isCount = filter.isCount;
                const orderBy = filter.orderBy;
                const limit = filter.limit; 
                const perpage = filter.perpage || filter.sizepsge; 
                const status = filter.status || 1; 
                if (isCount == 0) {
                    console.log(`rows filter `, filter); 
                    console.log(`data keyword `, keyword);
                    console.log(`rows isCount `, isCount); 
                } else {
                    console.log(`data filter `, filter); 
                    console.log(`data keyword `, keyword);
                    console.log(`data isCount `, isCount); 
                }
                let query = db('seminar_title as s');
                    query = query.innerJoin('sd_users_narrator as u', 'u.narrator_id', 's.narrator_id');  
                    query = query.leftJoin('seminarregister as r', 'r.seminar_id', 's.id'); 
                    query = query.leftJoin('sd_users_seminar as us', 'us.seminar_id', 'r.seminar_id');  
                    if(isCount==1){
                        query = query.select('s.id as idx');
                    }else{ 
                        query = query.select('s.id as idx');   
                        query = query.select('u.firstname');   
                        query = query.select('u.lastname');  
                        query = query.select("CONCAT(u.firstname,' ',u.lastname) AS narrator_name");
                        query = query.select('u.fullname');   
                        query = query.select('u.nickname');    
                        query = query.select('u.date');   
                        // query = query.select('u.username');   
                        // query = query.select('u.password');   
                        query = query.select('u.email');     
                    
                    } 
                    query = query.where('1=1');
                    query = query.andWhere('s.status', status);   
                    if (id!="" || id!==0) {  
                    query = query.andWhere('s.id ', id );   
                    }  
                    if (narrator_id!="" || narrator_id!==0) {  
                    query = query.andWhere('u.narrator_id', narrator_id);   
                    }  
                    if (email!="" || email!==null) {  
                    query.andWhere("u.email", { keyword: email ? `%${email}%` : "%" });   
                    } 
                    if (keyword!=null) { 
                        query.andWhere("s.title", { keyword: keyword ? `%${keyword}%` : "%" }); 
                    } 
                    if (start!=null && end!=null) { 
                        query.andWhere("t.datetime_start BETWEEN '" + start + "' AND '" + end + "'"); 
                    }  
                    if (start_event_end!=null && end_event_end!=null) { 
                        query.andWhere("t.datetime_end BETWEEN '" + start_event_end + "' AND '" + end_event_end + "'"); 
                    }  
                    if (id!="" || id!==0) {  
                            query = query.orderBy('s.id', 'asc');
                    }else{
                            if (orderBy!="" || orderBy!==null) {  
                                    if (orderBy== 'desc') {  
                                    query = query.orderBy('s.id', 'desc');
                                    }else{
                                    query = query.orderBy('s.id', 'asc');
                                    }
                            }else{
                                    query = query.orderBy('s.id', 'desc');
                            } 
    
                    }
                    if (perpage!="" && page!="") {   
                        query = query.limit(perpage);
                        query = query.offset(page);
                    }else{
                        if (limit!="" || limit!==0) {  
                            query = query.limit(limit);  
                        } 
                    } 
                    if(isCount==1){ 
                        console.log(`query `, query);
                        return query;
                    }else{ 
                        console.log(`query `, query);
                        return  query;   
                    }  
    } 
    filter_detail(db: knex,filter: any) {
                const keyword = filter.keyword; 
                const id= filter.id; 
                const title_id = filter.title_id; 
                const location= filter.location; 
                const province= filter.province; 
                const telephone= filter.telephone;
                const email= filter.email;
                const start= filter.start;
                const end = filter.end;  
                const start_event_end = filter.start_event_end;  
                const end_event_end = filter.end_event_end;  
                const page= filter.pages; 
                const isCount = filter.isCount;
                const orderBy = filter.orderBy;
                const limit = filter.limit; 
                const perpage = filter.perpage || filter.sizepsge; 
                const status = filter.status || 1; 
                if (isCount == 0) {
                    console.log(`rows filter `, filter); 
                    console.log(`data keyword `, keyword);
                    console.log(`rows isCount `, isCount); 
                } else {
                    console.log(`data filter `, filter); 
                    console.log(`data keyword `, keyword);
                    console.log(`data isCount `, isCount); 
                }
                let query = db('seminar_detail as s');
                    query = query.innerJoin('seminar_title as t', 't.id', 's.seminar_title_id'); 
                    query = query.innerJoin('sd_users_narrator as u', 'u.narrator_id', 't.narrator_id');  
                    if(isCount==1){
                        query = query.select('s.id as idx');
                    }else{ 
                        query = query.select('s.id as idx');   
                        query = query.select('t.title as title_name');  
                        query = query.select('s.title as detail_name');    
                        query = query.select('t.detail as title_detail');  
                        query = query.select('t.url as title_url');  
                        query = query.select('s.startdate as startdate'); 
                        query = query.select('s.enddate as enddate'); 
                        query = query.select('u.firstname');   
                        query = query.select('u.lastname');  
                        query = query.select("CONCAT(u.firstname,' ',u.lastname) as narrator_name");
                        query = query.select('u.fullname as narrator_fullname');   
                        query = query.select('u.nickname as narrator_nickname');     
                        query = query.select('u.email');    
                    } 
                    query = query.where('1=1');
                    query = query.andWhere('s.status', status);   
                    if (id!="" || id!==0) {  
                    query = query.andWhere('s.id ', id );   
                    }  
                    if (title_id!="" || title_id!==0) {  
                    query = query.andWhere('t.id', title_id);   
                    }  
                    if (email!="" || email!==null) {  
                    query.andWhere("u.email", { keyword: email ? `%${email}%` : "%" });   
                    } 
                    if (keyword!=null) { 
                        query.andWhere("s.title", { keyword: keyword ? `%${keyword}%` : "%" }); 
                    } 
                    if (start!=null && end!=null) { 
                        query.andWhere("s.startdate BETWEEN '" + start + "' AND '" + end + "'"); 
                    }  
                    if (start_event_end!=null && end_event_end!=null) { 
                        query.andWhere("s.enddate BETWEEN '" + start_event_end + "' AND '" + end_event_end + "'"); 
                    }  
                    if (id!="" || id!==0) {  
                            query = query.orderBy('s.id', 'asc');
                    }else{
                            if (orderBy!="" || orderBy!==null) {  
                                    if (orderBy== 'desc') {  
                                    query = query.orderBy('s.id', 'desc');
                                    }else{
                                    query = query.orderBy('s.id', 'asc');
                                    }
                            }else{
                                    query = query.orderBy('u.id', 'desc');
                            } 
    
                    }
                    if (perpage!="" && page!="") {   
                        query = query.limit(perpage);
                        query = query.offset(page);
                    }else{
                        if (limit!="" || limit!==0) {  
                            query = query.limit(limit);  
                        } 
                    } 
                    if(isCount==1){ 
                        console.log(`query `, query);
                        return query;
                    }else{ 
                        console.log(`query `, query);
                        return  query;   
                    }  
    }    
    filter_title_users_seminar(db: knex,filter: any) {
                const keyword = filter.keyword; 
                const seminar_id= filter.seminar_id; 
                const title_id = filter.title_id; 
                const email= filter.email;
                const start= filter.start;
                const end = filter.end;   
                const page= filter.pages; 
                const isCount = filter.isCount;
                const orderBy = filter.orderBy;
                const limit = filter.limit; 
                const perpage = filter.perpage || filter.sizepsge; 
                const status = filter.status || 1; 
                if (isCount == 0) {
                    console.log(`rows filter `, filter); 
                    console.log(`data keyword `, keyword);
                    console.log(`rows isCount `, isCount); 
                } else {
                    console.log(`data filter `, filter); 
                    console.log(`data keyword `, keyword);
                    console.log(`data isCount `, isCount); 
                }
                let query = db('sd_users_seminar AS us');  
                    query = query.innerJoin('seminarregister AS rt', 'rt.seminar_id', 'us.seminar_id'); 
                    query = query.innerJoin('seminar_title AS t', 't.id', 'rt.seminar_title_id'); 
                    query = query.innerJoin('sd_users_narrator AS u', 'u.narrator_id', 't.narrator_id');  
                    if(isCount==1){
                        query = query.select('u.seminar_id');
                    }else{ 
                        query = query.select('u.seminar_id');  
                        query = query.select('u.seminar_id'); 
                        query = query.select('t.id as title_id');   
                        query = query.select('t.detail as title_detail');  
                        query = query.select('t.spake_time as spake_time');  
                        query = query.select('t.url as title_url');  
                        query = query.select('t.datetime_start as startdate'); 
                        query = query.select('t.datetime_end as enddate');  
                        query = query.select("CONCAT(u.firstname,' ',u.lastname) as fullname_narrator");   
                        query = query.select('u.email as narrator_email');    
                        query = query.select('us.seminar_id as seminar_id'); 
                        query = query.select('us.firstname as firstname_seminar'); 
                        query = query.select('us.lastname as lastname_seminar'); 
                        query = query.select('us.phonenumber as phonenumber_seminar'); 
                        query = query.select('us.email as email_seminar'); 
                        query = query.select("CONCAT(us.firstname,' ',us.lastname) as fullname_semina");   
                    } 
                    query = query.where('1=1');
                    query = query.andWhere('s.status', status);   
                    if (seminar_id!="" || seminar_id!==0) {  
                    query = query.andWhere('us.seminar_id ', seminar_id );   
                    }  
                    if (title_id!="" || title_id!==0) {  
                    query = query.andWhere('t.id', title_id);   
                    }  
                    if (email!="" || email!==null) {  
                    query.andWhere("us.email", { keyword: email ? `%${email}%` : "%" });   
                    } 
                    if (keyword!=null) { 
                        query.andWhere("s.title", { keyword: keyword ? `%${keyword}%` : "%" }); 
                    } 
                    if (start!=null && end!=null) { 
                        query.andWhere("rt.datetime BETWEEN '" + start + "' AND '" + end + "'"); 
                    }   
                    if (seminar_id!="" || seminar_id!==0) {  
                            query = query.orderBy('us.seminar_id', 'asc');
                    }else{
                            if (orderBy!="" || orderBy!==null) {  
                                    if (orderBy== 'desc') {  
                                    query = query.orderBy('us.seminar_id', 'desc');
                                    }else{
                                    query = query.orderBy('us.seminar_id', 'asc');
                                    }
                            }else{
                                    query = query.orderBy('us.seminar_id', 'desc');
                            } 
    
                    }
                    if (perpage!="" && page!="") {   
                        query = query.limit(perpage);
                        query = query.offset(page);
                    }else{
                        if (limit!="" || limit!==0) {  
                            query = query.limit(limit);  
                        } 
                    } 
                    if(isCount==1){ 
                        console.log(`query `, query);
                        return query;
                    }else{ 
                        console.log(`query `, query);
                        return  query;   
                    }  
    }
    addd_period_event_log(db: knex, data: any) {
        return db('seminar_period_event_log')
        .insert(data)
    }
    check_data_by_seminar_period_event_log_id(db: knex, seminar_title_id: any, seminar_id: any, datetime: any) {
        return db('seminar_period_event_log')
            .select('*')
            .where('seminar_title_id', seminar_title_id)
            .andWhere('seminar_id', seminar_id) 
            .andWhere("datetime", { datetime: datetime ? `%${datetime}%` : "%" }); 
    }
    filter_seminar_period_event_log(db: knex,filter: any) {
                const keyword = filter.keyword; 
                const id= filter.id; 
                const title_id = filter.title_id; 
                const seminar_id= filter.seminar_id; 
                const email= filter.email;
                const start= filter.start;
                const end = filter.end;   
                const page= filter.pages; 
                const isCount = filter.isCount;
                const orderBy = filter.orderBy;
                const limit = filter.limit; 
                const perpage = filter.perpage || filter.sizepsge; 
                const status = filter.status || 1; 
                if (isCount == 0) {
                    console.log(`rows filter `, filter); 
                    console.log(`data keyword `, keyword);
                    console.log(`rows isCount `, isCount); 
                } else {
                    console.log(`data filter `, filter); 
                    console.log(`data keyword `, keyword);
                    console.log(`data isCount `, isCount); 
                }
                let query = db('seminar_period_event_log as l');
                    query = query.innerJoin('seminar_title as t', 't.id', 'l.seminar_title_id'); 
                    query = query.innerJoin('sd_users_seminar as us', 'us.seminar_id', 'l.seminar_id'); 
                    query = query.innerJoin('sd_users_narrator as u', 'u.narrator_id', 't.narrator_id');  
                    
                    if(isCount==1){
                        query = query.select('l.id as idx');
                    }else{ 
                        query = query.select('l.id as idx');   
                        query = query.select('t.title as title_name');  
                        //query = query.select('s.title as detail_name');  
                        //query = query.select('t.detail as title_detail');  
                        query = query.select('t.url as title_url');  
                        query = query.select('s.startdate as startdate'); 
                        query = query.select('s.enddate as enddate');  
                        query = query.select("CONCAT(u.firstname,' ',u.lastname) as narrator_name");
                        query = query.select('u.fullname as narrator_fullname');   
                        query = query.select('u.nickname as narrator_nickname');     
                        query = query.select('us.seminar_id as seminar_id'); 
                        query = query.select('us.firstname as firstname_seminar'); 
                        query = query.select('us.lastname as lastname_seminar'); 
                        query = query.select('us.phonenumber as phonenumber_seminar'); 
                        query = query.select('us.email as email_seminar'); 
                        query = query.select("CONCAT(us.firstname,' ',us.lastname) as fullname_semina");    
                    } 
                    query = query.where('1=1');   
                    if (title_id!="" || title_id!==0) {  
                        query = query.andWhere('t.id', title_id);   
                    }  
                    if (email!="" || email!==null) {  
                        query.andWhere("us.email", { keyword: email ? `%${email}%` : "%" });   
                    } 
                    if (seminar_id!="" || seminar_id!==0) {  
                        query = query.andWhere('us.seminar_id', seminar_id);   
                    }  
                    if (keyword!=null) { 
                        query.andWhere("t.title", { keyword: keyword ? `%${keyword}%` : "%" }); 
                    } 
                    if (start!=null && end!=null) { 
                        query.andWhere("l.datetime BETWEEN '" + start + "' AND '" + end + "'"); 
                    }   
                    if (id!="" || id!==0) {  
                            query = query.orderBy('l.id', 'asc');
                    }else{
                            if (orderBy!="" || orderBy!==null) {  
                                    if (orderBy== 'desc') {  
                                    query = query.orderBy('l.id', 'desc');
                                    }else{
                                    query = query.orderBy('l.id', 'asc');
                                    }
                            }else{
                                    query = query.orderBy('l.id', 'desc');
                            } 
    
                    }
                    if (perpage!="" && page!="") {   
                        query = query.limit(perpage);
                        query = query.offset(page);
                    }else{
                        if (limit!="" || limit!==0) {  
                            query = query.limit(limit);  
                        } 
                    } 
                    if(isCount==1){ 
                        console.log(`query `, query);
                        return query;
                    }else{ 
                        console.log(`query `, query);
                        return  query;   
                    }  
    }
}