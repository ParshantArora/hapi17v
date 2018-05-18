/*
Author : Parshant Nagpal
Description : Add items to cart by Customer
filename  : addItems.js
*/
import Joi from 'Joi';
import {addToCartByCustomer} from '../../../controllers/cart'
export default {
    method : 'POST',
    path : '/cart/addToCart',
    config : {
        auth  : 'jwt',
        validate : {
            payload : {
                _id: Joi.string()
                .required()
                .error(new Error('_id is required'))
            }
        }
    },
    handler : addToCartByCustomer 
}