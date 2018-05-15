/*
Author : Parshant Nagpal
Description :export the logout route
filename  : login.js
*/
import Joi from 'Joi';
import {createAccountUser} from '../../../controllers/accounts'

export default {
    method : 'Post',
    path : '/accounts/createAcoount',
    config:{
        auth : 'jwt',
        validate  : {
            payload : {
                accountNumber  :Joi.string()
                .trim()
                .required()
                .error(new Error('accountNumber is invalid'))
            }
        }
    },
    handler : createAccountUser
}