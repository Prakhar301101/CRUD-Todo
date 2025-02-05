const jwt=require('jsonwebtoken');
const User=require('../models/user');


const verifyAuth= async (req,res,next)=>{
    let token;
    if(req.headers.authorization&&req.headers.authorization.startsWith('Bearer')){
      try{
          token=req.headers.authorization.split(' ')[1];
          const decoded= jwt.verify(token,process.env.SECRET);
          req.user= await User.findById(decoded.id);
          next();
      }catch(err){
        console.log(err);
        res.status(401).json({message:"Not authorized"})
      }
    }
    if(!token){
        res.status(401).json({message:"Not authorized,no token"});
    }
}

module.exports=verifyAuth;