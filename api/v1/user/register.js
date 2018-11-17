/*
Author : Parshant Nagpal
Description :export the register route
filename  : register.js
*/

import Joi from 'Joi';
import { registerUser } from '../../../controllers/user'
export default {
    method: 'POST',
    path: '/user/register',
    config: {
        auth: false,
        description: 'Api service used to register a new user.',
        notes:
          '<br/>The request object should contain following fields in its <b>Payload/Body</b> object<br/>&bull; <b>Full Name</b>: Should carry the Full name of the user. This is a required field.<br/>&bull;<b> Email</b>: Should be a valid email.<br/>&bull;<b> Password</b>: Containing atleast one alphabet and one number, 6 - 8 characters.<br/>&bull;<b> Role</b>: Should contains user role like business,user,admin.',
        tags: ['api', 'user'],
        validate: {
            payload: {
                name: Joi.string()
                    .trim()
                    .required()
                    .error(new Error('should be a valid name.'))
                    .regex(/^([a-zA-Z_ ]){1,20}$/),
                email: Joi.string()
                    .trim()
                    .required()
                    .regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
                    .error(new Error('should be a valid email.'))
                    .label('Email'),
                phone: Joi.string()
                    .error(new Error('Phone number is required'))
                    .required(),
                password: Joi.string()
                    .min(1)
                    .max(20)
                    .error(new Error('Password is required'))
                    .required(),
                userRole: Joi.string()
                    .error(new Error('UserRole is required'))
                    .required()
            }
        }
    },
    handler: registerUser
}