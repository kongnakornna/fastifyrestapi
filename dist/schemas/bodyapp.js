"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={body:{type:"object",properties:{username:{type:"string",minLength:4,maxLength:100},password:{type:"string",minLength:8,maxLength:150},email:{type:"string",minLength:8,maxLength:500},name:{type:"string"}},required:["username","password","email"]}};