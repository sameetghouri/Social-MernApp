const User = require('../model/userModel')
const jwt = require('jsonwebtoken')


const createToken=(_id,username)=>{
   return jwt.sign({_id,username},process.env.SECRET,{expiresIn:'5d'}) //here id is the payload it can have multiple payloads e.g name
}
//login user
const loginUser = async (req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await User.login(email,password)
        const token = createToken(user._id,user.username)
        res.status(200).json({token})
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

 
  
 

   //signup user
   const signupUser = async (req,res)=>{
    
    const {username,email,password} = req.body;
    try{
        const user = await User.signup(
            username,
            userimage = req.file.path.slice(12),
            email,
            password)
        const token = createToken(user._id,user.username)
        res.status(200).json({token})
    }catch(error){
        res.status(400).json({error:error.message})
    }
    
}

//delete user
const deleteUser= async (req,res)=>{
    const{email}=req.body
    
    const user = await User.findOneAndDelete({email})
    if(!user){
        return res.status(404).json({error:"No user Found"})
    }
    res.status(200).json({mssg:"User Deleted"})

}

module.exports={
    loginUser,
    signupUser,
    deleteUser
}