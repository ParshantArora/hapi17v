
/*
Author : Parshant Nagpal
Description : export the buyItems route
filename  : buyItems.js
*/
import Joi from 'Joi';
import { buyItemsFromList } from '../../../controllers/accounts'

export default {
    method: 'Post',
    path: '/accounts/buyItems',
    config: {
        auth: 'jwt',
        validate: {
            payload: {
                _id: Joi.string()
                    .required()
                    .error(new Error('_id is required')),
            }
        }
    },
    handler: buyItemsFromList
}