/*
Author : Parshant Nagpal
Description : create the cart model
filename  : cart.js
*/
import Mongoose from 'mongoose';
const Schema = Mongoose.Schema;

class CartClass{
  static saveToCart(userId,payload){
 
   return this.findOneAndUpdate({userId},
    {
     $push : {
        ItemIds : {
            productid: payload,
        } 
      }
    },{ upsert: true, new: true, setDefaultsOnInsert: true },);
  }
}



const CartSchema = new Schema({
    userId : { type : String,ref: 'User' , required : true},
    ItemIds  : [ {
        productid : { type: 'String', ref: 'Item' }
      }],
    
});
CartSchema.loadClass(CartClass);
export default Mongoose.model('Cart',CartSchema);
