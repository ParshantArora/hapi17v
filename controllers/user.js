/*
Author : Parshant Nagpal
Description : User controller
filename  : account.js
*/


import {register,login,logout} from '../services/user'
import {successAction, failAction} from '../utilities/rest'

export const registerUser = async (request, h) => {
    const {payload} =  request;
    //return("registerUser")
    try{
        const data = await register(payload);
        return successAction(data)
    }catch(error){
        failAction(error.message)
    }
         
        
   // 
   
}
export const logionUser = async (request,h)=>{
    const {payload} = request;
    try{
     const data = await login(payload);
     return successAction(data)
    }catch(error){
        failAction(error.message)
    }
}

export const logoutUser = async (request,h)=>{
    console.log("request.h",request.auth.credentials.token)
   try{
       const data = await logout(request.auth.credentials.user._id);
       return successAction(data)
    }catch(error){
        failAction(error.message)
    }
   }