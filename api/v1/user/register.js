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
                    .min(2)
                    .max(20)
                    // .error(new Error('should be a valid name.')),
                    .label('Full Name')
                    .regex(/^([a-zA-Z_ ]){1,20}$/),
                email: Joi.string()
                    .trim()
                    .required()
                    .regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
                    // .error(new Error('should be a valid email.'))
                    .label('Email'),
                phone: Joi.string()
                    .trim()
                    .min(10)
                    .max(12)
                    .label('PhoneNumber')
                    // .error(new Error('Phone number is required'))
                    .required(),
                password: Joi.string()
                    .min(6)
                    .max(12)
                    // .error(new Error('Password is required'))
                    .trim()
                    .regex(/^([a-zA-Z0-9_-]){6,12}$/)
                    .options({
                      language: {
                        string: {
                          regex: {
                            base: 'must be alphanumeric with 6 and 8 as min & max characters respectively'
                          }
                        }
                      }
                    })
                    .required()
                    .label('Password'),
                userRole: Joi.string()
                    .trim()
                    .label('Role')
                    .required()
                    .valid('0','1')
            }
        }
    },
    handler: registerUser
}