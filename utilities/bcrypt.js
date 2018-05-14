import bcrypt from 'bcrypt';
let saltRounds = 10;
export const bcryptPassword = (password)=>{
 
 let hash = bcrypt.hash(password,saltRounds).then(function(hash) {
    // Store hash in your password DB.
    return hash;
});
return hash;
  
}; 

export const comparepassword = (password,hashPassword) =>{
 
let hashres = bcrypt.compare(password,hashPassword).then((res)=>{
 return res;
})
return hashres;

}