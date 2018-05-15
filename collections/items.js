/*
Author : Parshant Nagpal
Description : create the items model
filename  : items.js
*/
import Boom from 'boom';
import Mongoose from 'mongoose';
const Schema = Mongoose.Schema;
class ItemClass {
   static saveItem(payload){
     return this(payload).save();
   }
   static updateData(payload){
       return this.findByIdAndUpdate({_id : payload._id},payload,{new : true}).catch(error =>{
          
           throw  Boom.notFound("_id not Found");
       });
   }
   static deleteData(_id){
       return this.findByIdAndRemove({_id}).catch(error =>{
          
        throw  Boom.notFound("_id not Found");
    });  
} 
    static showAll(){
        return  this.find({});
    }
    static showOne(_id){
        return  this.find({_id});
    }
  
    

}
const ItemSchema = new Schema({
    userId  : { type :String,required : true},
    ItemName : { type: String ,required  :true},
    ItemDescription : { type : String,default : ''},
    ItemPrice : {type : Number,required : true },
    ItemQuantity  : { type : Number,default  : 1},
    ItemSold : {type : Number, default : 0 }
});
ItemSchema.loadClass(ItemClass);
export default Mongoose.model('Item',ItemSchema);