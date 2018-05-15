/*
Author : Parshant Nagpal
Description : Item controller
filename  : items.js
*/
import {addItem, editItem , deleteItem , showAll} from '../services/items'
import {successAction,failAction} from '../utilities/rest';

export const addItemByUser = async(request,h)=>{
    const {payload} = request;
    const {_id ,userRole } = request.auth.credentials.user;
    console.log("userRole",request.auth.credentials)
    try{
        const data = await addItem(userRole,_id , payload);
        return successAction(data);
    }catch(error){
     failAction(error.message);
    }
}

export const editItemByUser = async(request,h)=>{
    const {payload} = request;
    const {userRole } = request.auth.credentials.user;
    try{
        const data = await editItem(userRole,payload);
        return successAction(data);
    }catch(error){
        failAction(error.message);
    }
}

export const deleteItemByUser = async(request,h)=>{
    const {payload} = request;
    const {userRole } = request.auth.credentials.user;
    try{
        const data = await deleteItem(userRole,payload._id);
        return successAction(data);
    }catch(error){
        failAction(error.message);
    }
}

export const showAllItems = async(request,h)=>{
    try{
        const data = await showAll();
        return successAction(data);
    }catch(error){
        failAction(error.message);
    }
}

