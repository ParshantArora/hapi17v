/*
Author : Parshant Nagpal
Description : Add items and services by merchant
filename  : addItems.js
*/
import Joi from 'Joi'
import { addItemByUser } from '../../../controllers/items';
export default {
    method: 'POST',
    path: '/items/addItems',
    config: {
        auth: 'jwt',
        validate: {
            payload: {
                ItemName: Joi.string()
                    .trim()
                    .required()
                    .error(new Error('should be a valid name.'))
                    .regex(/^([a-zA-Z_ ]){1,20}$/),
                ItemPrice: Joi.string()
                    .trim()
                    .required()
                    .error(new Error('should be a valid ItemPrice.')),
                ItemDescription: Joi.string()
                    .trim()
                    .required()
                    .label('ItemDescription'),
                ItemQuantity: Joi.string()
                    .trim()
                    .label('ItemQuantity'),
            }
        }

    },
    handler: addItemByUser
}