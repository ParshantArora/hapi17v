/*
Author : Parshant Nagpal
Description : edit item by merchant
filename  : showAllItems.js
*/
import { showAllItems } from '../../../controllers/items'
export default {
    method : 'GET',
    path : '/items/showItems',
    config :  {
        auth : 'jwt'
    },
    handler  : showAllItems
}