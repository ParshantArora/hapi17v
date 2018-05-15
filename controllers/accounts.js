/*
Author : Parshant Nagpal
Description : Account controller
filename  : account.js
*/

import {createAccount, Buyitems} from '../services/account'
import {successAction,failAction} from '../utilities/rest';

export const createAccountUser = async (request,h) => {
    const {payload} =  request;
    const {_id} = request.auth.credentials.user;
    try{
      const data = await createAccount(_id , payload);
      return successAction(data);
    }catch(error){
    failAction(error.message);
    }
}
export const buyItemsFromList = async (request,h) => {
    const {payload} =  request;
    const {_id} = request.auth.credentials.user;
    try{
      const data = await Buyitems(_id,payload._id);
      return successAction(data);
    }catch(error){
    failAction(error.message);
    }
}
