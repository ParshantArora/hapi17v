
/*
Author : Parshant Nagpal
Description : export the addamount route object
filename  : addAmount.js
*/
import Joi from 'Joi';
import { addAmountByUser } from '../../../controllers/accounts'

export default {
    method: 'Post',
    path: '/accounts/addAmount',
    config: {
        auth: 'jwt',
        validate: {
            payload: {
                accountNumber: Joi.string()
                .trim()
                .required()
                .error(new Error('accountNumber is invalid')),
                amount: Joi.string()
                .trim()
                .regex(/^[0-9]*$/)   //Regular Exp Check if a string only contains numbers
                .error(new Error('should be a valid amount.'))
            }
        }
    },
    handler: addAmountByUser
}