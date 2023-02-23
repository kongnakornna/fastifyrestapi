"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},jsonwebtoken_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.generstate=exports.verifytoken=exports.generauser=exports.generateapikey=exports.generateToken=void 0,__importDefault(require("jsonwebtoken"))),validator_helper_1=require("../../utils/helpers/validator.helper"),Validators=new validator_helper_1.Validator,generateToken=function(e){return jsonwebtoken_1.default.sign(e,"".concat(process.env.TOKEN_SECRET),{expiresIn:"1d"})},generateapikey=(exports.generateToken=generateToken,function(e){return jsonwebtoken_1.default.sign(e,"".concat(process.env.TOKEN_SECRET),{expiresIn:"1d"})}),generauser=(exports.generateapikey=generateapikey,function(e){return jsonwebtoken_1.default.sign(e,"".concat(process.env.TOKEN_SECRET),{expiresIn:"1d"})}),verifytoken=(exports.generauser=generauser,function(e){return jsonwebtoken_1.default.verify(e,"".concat(process.env.TOKEN_SECRET))}),generstate=(exports.verifytoken=verifytoken,function(e){return require("jsonwebtoken").sign(e,"".concat(process.env.TOKEN_SECRET),{expiresIn:"30s"},{algorithm:"HS256"})});exports.generstate=generstate;