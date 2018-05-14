import Mongoose from 'mongoose';
const Schema = Mongoose.Schema;

const AccountSchema = new Schema({
    userId  : { type : String, required  :true},
    accountNumber  : {type :String , required  :true},
    acoountMoney : {type : Number ,  default : 0},
})
export default Mongoose.model("Account",AccountSchema)