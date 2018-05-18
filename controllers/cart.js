/*
Author : Parshant Nagpal
Description : cart controller
filename  : cart.js
*/
import { successAction, failAction } from '../utilities/rest';
import { addToCart } from '../services/cart'
/*
Item Added to cart by consumer
*/
export const addToCartByCustomer = async (request,h) => {
   
    const { _id } = request.auth.credentials.user;
    try{
        const data = await  addToCart(_id,request.payload._id);
        return successAction(data);
    }catch(error){
        failAction(error.message);
    }
}