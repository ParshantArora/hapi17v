/*
Author : Parshant Nagpal
Description : edit item by merchant
filename  : editItem.js
*/
import Joi from 'Joi';
import {editItemByUser} from  '../../../controllers/items';
export default {
    method  : 'POST',
    path : '/items/editItem',
    config  :{
        auth : 'jwt',
        validate : {
            payload : {
                _id : Joi.string()
                .required()
                .error(new Error('_id is required')),
                ItemName : Joi.string()
                .trim()  
                .error(new Error('should be a valid name.'))
                .regex(/^([a-zA-Z_ ]){1,20}$/),    
                ItemPrice  : Joi.string()
                .trim()
                .regex(/^[0-9]*$/)   //Regular Exp Check if a string only contains numbers
                .error(new Error('should be a valid ItemPrice.')),    
                ItemDescription  : Joi.string()
                .trim()
                .label('ItemDescription'),
                ItemQuantity  :Joi.string()
                .trim()
                .label('ItemQuantity'),
            }
        }
    },
    handler : editItemByUser
}