/*
Author : Parshant Nagpal
Description :export the login route
filename  : login.js
*/

import Joi from 'Joi';
import {logionUser} from '../../../controllers/user';
export default {
    method : 'POST',
    path : '/user/login',
    config  : {
        auth :  false,
        validate : {
            payload : {
                email: Joi.string()
                .trim()
                .required()
                .regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) 
                .error(new Error('should be a valid email.'))
                .label('Email'), 
                password : Joi.string()
                .min(1)
                .max(20)
                .error(new Error('Password is required'))
            }
        }
    },
    handler : logionUser
}