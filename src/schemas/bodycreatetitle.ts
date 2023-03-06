export default {
  body: {
    type: 'object',
    properties: {
      title: {
        type: 'string',
        minLength: 1,
        },
      narrator_id: {
        type: 'number',
        minLength: 1,
        }, 
      datetime_start: {
        type: 'string',
        minLength: 1,
        }, 
      datetime_end: {
        type: 'string',
        minLength: 1,
        }, 
      url: {
        type: 'string',
        minLength: 1,
        }, 
      detail: {
        type: 'string',
        minLength: 1,
        }, 
      spake_time: {
        type: 'string',
        minLength: 1,
        }, 
      location: {
        type: 'string',
        minLength: 1,
        }, 
      province: {
        type: 'string',
        minLength: 1,
        }, 
      telephone: {
        type: 'string',
        minLength: 1,
        }, 
      email: {
        type: 'string',
        minLength: 1,
      }, 
    },
    required: [
        'title', 
        'narrator_id',  
        'datetime_start', 
        'datetime_end', 
        'url', 
        'detail', 
        'spake_time', 
        'location', 
        'province', 
        'telephone', 
        'email', 
    ]
  }
}