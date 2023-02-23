export default {
  body: {
    type: 'object',
    properties: {
      code: {
        type: 'string', 
      }, 
    },
    required: [
      'code', 
    ]
  }
}