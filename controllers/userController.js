const User=require('../models/user');

const bcrypt = require('bcrypt')


// @desc    Register a new User
// @route   POST /api/users
// @access  Public
module.exports.registerUser=async (req,res)=>{
    const {name,password,email} =req.body;
    if(!name||!password||!email){
     res.status(400).json("Please provide all details!");
    }

    const userExist=await User.findOne({email});
    if(userExist){
        res.status(400).json({message:"User already exists"})
    }

    const salt= await bcrypt.genSalt(10);
    const hashedPass=await bcrypt.hash(password,salt);
    
    const user=await User.create({name,password:hashedPass,email});
    if(user){
        res.status(200).json({
            _id:user.id,
            name:user.name,
            email:user.email
        })
    }else{
        res.status(400).json({
            message:"Invalid user"
        })
    }

}

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
module.exports.loginUser= async (req,res)=>{
    const {email,password} =req.body;

    const user= await User.findOne({email});
    if(user && ( await bcrypt.compare(password,user.password))){
        res.status(200).json({
            message:"User verified"
        })
    }else{
        res.status(400).json({
            message:"Invalid credentials"
        })
    }

}


// @desc    Get user info
// @route   GET /api/users/me
// @access  Private
module.exports.getUser=(req,res)=>{
    res.json({message:'get user detail'});
}


// @desc    Logout a User
// @route   /api/users/logout
// @access  Private
module.exports.logoutUser=(req,res)=>{
    res.json({message:'logout user'});
}