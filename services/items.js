import Item from '../collections/items';
import Account from '../collections/account'; 
export const addItem = async (userRole,userId,payload) =>{
    console.log(userRole)
    if(userRole == 1){
        throw new Error ('You are not allowed');
    }
    let dataAccount = await Account.checkAccountExist(userId);
    if(!dataAccount){
        throw new Error ('Please create account first');
    }
    payload = {...payload,userId };
    let savedItemdata = await Item.saveItem(payload);
    if(savedItemdata){
        return(savedItemdata)
    }else{
        throw new Error('Item not saved')
    }
    
}
export const editItem = async (userRole,payload) =>{
    if(userRole == 1){
        throw new Error ('You are not allowed');
    }
    let updatedItemdata  = await Item.updateData(payload)
    console.log("updatedItemdata",updatedItemdata)
    if(updatedItemdata){
        return(updatedItemdata);
    }else{
        throw new Error('Item not Updated')
    }
}
export const deleteItem = async (userRole,payload) =>{
    if(userRole == 1){
        throw new Error ('You are not allowed');
    }
    let deleteItemdata  = await Item.deleteData(payload)
    console.log("updatedItemdata",deleteItemdata)
    if(deleteItemdata){
        return(deleteItemdata);
    }else{
        throw new Error('Item not Deleted')
    }
}

export const showAll = async () =>{
    let showAllItemdata  = await Item.showAll()
    console.log("showAllItemdata",showAllItemdata)
    if(showAllItemdata){
        return(showAllItemdata);
    }else{
        throw new Error('Item not Found')
    }
}

