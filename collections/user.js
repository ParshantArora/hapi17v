import Mongoose from 'mongoose';
const Schema = Mongoose.Schema;

class UserClass {
    static checkEmail(email){
        return this.findOne({email})
    }
    static checkPhone(phone){
        return this.findOne({phone})
    }
    static register(payload){
        return this(payload).save();
    }
    static updateById(payload,_id){
        return this.findByIdAndUpdate(_id,payload,{new : true});
    }
    static checkToken(token){
        return this.findOne({authtoken : token});
    }
}


const UserSchema = new Schema({
    name : {type : String, required : true},
    email : {type : String, default : '',required : true},
    password : {type : String ,default : ''},
    phone : {type : String , default : ''},
    userRole :  {type: Number , required : true, default : 0}, // 0 for Merchant and 1 for Customer
    authtoken : {type : String , default : ''},
});

UserSchema.loadClass(UserClass)
export default Mongoose.model('User',UserSchema);