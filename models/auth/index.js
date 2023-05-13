const {insertUser} = require('./queries')
const {selectByUername}= require('./queries')


const createUser = (db)=> async (nombre,email,password)=>{
    try{

      
        await db.query(insertUser(nombre,email,password))
      
        
    
      return {
        ok:true,
      }
    }catch(error){
        return{
            ok:false,
            message: error.message,
        }
    }
}
const selectUsers = (db)=> async (email,compareFn)=>{
    try{
     const user =  await db.maybeOne(selectByUername(email))

     if(!user)return{
        ok:false,
        error_code: 'wrond_data',
     }
     const areEqual = await compareFn(user.password)
     
     if(!areEqual)return{
        ok:false,
        error_code: 'wrond_data',
     }
      
      return {
        ok:true,
        content:{
         email: user.email,
        }
      }
    }catch(error){
        return{
            ok:false,
            message: error.message,
        }
    }
}
module.exports = {
    createUser,
    selectUsers,
}