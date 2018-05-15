/*
Author : Parshant Nagpal
Description : Account controller
filename  : account.js
*/

import { createAccount, Buyitems, addAmount } from '../services/account'
import { successAction, failAction } from '../utilities/rest';

export const createAccountUser = async (request, h) => {
    const { payload } = request;
    const { _id } = request.auth.credentials.user;
    try {
        const data = await createAccount(_id, payload);
        return successAction(data);
    } catch (error) {
        failAction(error.message);
    }
}
export const buyItemsFromList = async (request, h) => {
    const { payload } = request;
    const { _id } = request.auth.credentials.user;
    try {
        const data = await Buyitems(_id, payload._id);
        return successAction(data);
    } catch (error) {
        failAction(error.message);
    }
}



export const addAmountByUser = async (request, h) => {
    const { payload } = request;
    try {
       const data = await addAmount(payload);
        return successAction(data);
    } catch (error) {
        failAction(error.message);
    }
}

