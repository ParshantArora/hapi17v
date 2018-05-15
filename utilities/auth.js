/*
Author : Parshant Nagpal
Description : all function releated to jwt token
filename  : auth.js
*/

import jwt from 'jsonwebtoken';
let jwtKey = "DemoNodeHapi";
import Messages from './messages';
import Boom from "boom";
let expiresInTime = 60 * 60;
let algorithmUsed = 'HS512';
import config from "../config/default.json";
import User from '../collections/user';
export const tokenCreate = (payload) => {
  let token = jwt.sign(payload, jwtKey, { algorithm: algorithmUsed })
  return token;
}





export const authorization = async (request, h) => {
  if (!request.headers['authorization']) {
    return Boom.unauthorized("Please provide Auth token");
  }
  const token = request.headers['authorization'];
  let decoded = {};
  /*try {
     
    decoded = jwt.verify(token, jwtKey,{ algorithms: [algorithmUsed] });
  } catch (err) {
    console.log("eeerrr",err)
    throw Boom.unauthorized(Messages.tokenExpired);
  }*/

  jwt.verify(token, jwtKey, { algorithms: [algorithmUsed] }, function (err, decoded) {

    if (err) {

      throw Boom.unauthorized(Messages.tokenExpired);
    }
    console.log("decoded", decoded)
  });
  console.log("authorization", decoded)
  const user = await User.checkToken(token);
  if (user) {
    //updating user last login in auth middleware

    return h.authenticated({ credentials: { user, token } });
  } else {
    throw Boom.unauthorized(Messages.unauthorizedUser);
  }
};








