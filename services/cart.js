/*
Author : Parshant Nagpal
Description : Constains all cart related services 
filename  : cart.js
*/
import Cart from '../collections/cart';


export const addToCart = async(userId,payload)=>{
    let addToCartSaved = await Cart.saveToCart(userId,payload);
    console.log()
    if(addToCartSaved){
        return (addToCartSaved);
    }else{
        throw new Error("Cart not Saved");
    }
}