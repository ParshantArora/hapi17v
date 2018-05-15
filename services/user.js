/*
Author : Parshant Nagpal
Description : Constains all services related user
filename  : account.js
*/



import User from '../collections/user'
import { bcryptPassword, comparepassword }  from '../utilities/bcrypt';
import { tokenCreate } from '../utilities/auth';

export const register = async payload => {
    let emailCheck =  await  User.checkEmail(payload.email);
    if(emailCheck){
        throw new Error("email alredy registered")
    }
    let phonecheck =  await  User.checkPhone(payload.phone);
    if(phonecheck){
        throw new Error("Phone number already registered")
    }
     let passwordHashedData = await bcryptPassword(payload.password);
     console.log("passwordHashedData",passwordHashedData)
     payload  =  {...payload,password : passwordHashedData };
   
    let saveddata = await User.register(payload)
    if(saveddata){
        return(saveddata)
    }else{
        throw new Error("User not saved")
    }
};

export const login = async payload => {
   let dataCheck = await User.checkEmail(payload.email);
   if(!dataCheck){  
       throw new Error("No user with this emailid")
   }
  let isPasswordVerify = await comparepassword(payload.password,dataCheck.password);
  console.log("isPasswordVerify",isPasswordVerify)
  if(!isPasswordVerify){
    throw new Error("password is incorrect")
  }
  let tokendata =  await tokenCreate(payload);
  console.log("tokendata",tokendata)
  let updateData =   await  User.updateById({authtoken : tokendata},dataCheck._id)
if(updateData){
    return({auth : tokendata})
}else{
    throw new Error("User not saved")
}

}

export const logout = async payload =>{
    let logoutdata = await User.updateById({authtoken : ''},payload);
    if(logoutdata){
        return({message : "User is successfully logout"})
    }else{
        throw new Error("User not saved")
    }
}