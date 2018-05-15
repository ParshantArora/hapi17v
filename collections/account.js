/*
Author : Parshant Nagpal
Description : create the account model
filename  : account.js
*/
import Mongoose from 'mongoose';
import Boom from 'boom';
const Schema = Mongoose.Schema;

class AccountClass {
    static checkAccountExist(userId){
        return this.findOne({userId})
    }
    static saveAccount(payload){
        return this(payload).save();
    }
    static setAmount(_id,price){
        return this.findByIdAndUpdate({_id},{  $inc: { "amount"  : price }},{new : true}).catch(error =>{
          
            throw  Boom.notFound("_id not Found");
        });
    }

}

const AccountSchema = new Schema({
    userId  : { type : String, required  :true},
    accountNumber  : {type :String , required  :true},
    amount : {type : Number ,  default : 0},
})
AccountSchema.loadClass(AccountClass);
export default Mongoose.model("Account",AccountSchema)