/*
Author : Parshant Nagpal
Description : Constains all services related account 
filename  : account.js
*/
import Account from '../collections/account';
import Item from '../collections/items';

export const createAccount = async (userId, payload) => {
    let dataAccount = await Account.checkAccountExist(userId);
    if (dataAccount) {
        throw new Error('user account already created')
    }
    payload = { ...payload, userId }
    let savedData = await Account.saveAccount(payload);
    if (savedData) {
        return (savedData);
    } else {
        throw new Error("Account save error")
    }

}

export const Buyitems = async (userId, payload) => {
    let dataconsumer = await Account.checkAccountExist(userId);
    if (!dataconsumer) {
        throw new Error('Please create user account')
    }
    let itemData = await Item.showOne(payload)
    if (!itemData) {
        throw new Error('Item deleted or removed')
    }
    let dataMerchant = await Account.checkAccountExist(itemData[0].userId);
    if (!dataMerchant) {
        throw new Error('merchant id not found')
    }

    if (itemData[0].ItemPrice > dataconsumer.amount) {
        throw new Error("Insufficient Balance")
    }

    let savedMerchantData = await Account.setAmount(dataMerchant._id, itemData[0].ItemPrice);
    if (!savedMerchantData) {
        throw new Error("Account error")
    }
    let savedConsumerData = await Account.setAmount(dataconsumer._id, -itemData[0].ItemPrice);
    if (savedConsumerData) {
        return ({ Message: "Tranaction Successfull  and your balance is " + savedConsumerData.amount })
    } else {
        throw new Error("Account error")
    }

}

export const addAmount = async (payload) => {
    let savedMerchantData = await Account.addAmount(payload.accountNumber, payload.amount);
    if (savedMerchantData) {
        return ({ Message: "Tranaction Successfull  and your balance is " + savedMerchantData.amount }) 
    }else{
        throw new Error("Account error")
    }
    
}

