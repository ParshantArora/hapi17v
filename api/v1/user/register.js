
import Joi from 'Joi'; 
import { registerUser }  from '../../../controllers/user'
export default {
    method : 'POST',
    path : '/user/register',
    config  :{
        auth : false,
        validate : {
            payload : {
                name : Joi.string()
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
                phone : Joi.string()
                .error(new Error('Phone number is required'))
                .required(),
                password : Joi.string()
                .min(1)
                .max(20)
                .error(new Error('Password is required'))
                .required(),
                userRole : Joi.string() 
                .error(new Error('UserRole is required'))
                .required()
            }
        }
    },
    handler : registerUser
}