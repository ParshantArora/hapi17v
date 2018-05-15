/*
Author : Parshant Nagpal
Description : delete item by merchant
filename  : deleteItem.js
*/
import Joi from 'Joi';
import { deleteItemByUser } from '../../../controllers/items';
export default {
    method: 'POST',
    path: '/items/deleteItem',
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
    handler: deleteItemByUser
}