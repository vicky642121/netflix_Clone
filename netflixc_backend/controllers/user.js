const User = require('../models/userModel');
const bicrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Login = async(req,res)=>{

    try{

        const{email,password} = req.body

        if(!email || !password){
           return res.status(401).json({
                message:"Invalid data",
                success:false
            });
        }

        const user = await User.findOne({email});
        
        if(!user){
            return res.status(401).json({
                message:"Invalid Credentials",
                success:false
            });
        }

        const isMatch = await bicrypt.compare(password , user.password);
        if(!isMatch){
            return res.status(401).json({
                message:"Invalid Credentials",
                success:false
            });
        }

        console.log('success');
        const tokenData = {
            id:user._id
        }
        const token = await jwt.sign(tokenData,'crud1234',{expiresIn:"1d"});
        return res.status(200).cookie("token",token,{httpOnly:true}).json({
            message:`Welcome back ${user.fullname}`,
            result:user,
            success:true
        })


    }
    catch (error){

    }
}

const Logout = async(req,res)=>{

    try{

        return res.status(200).cookie("token","",{expiresIn:new Date(Date.now) , httpOnly:true}).json({
            message:'User logged out successfully',
            success:true
        })

    }
    catch (error){

    }
}

const Register = async(req,res)=>{

    try{
        const{fullname,email,password} = req.body

        if(!fullname || !email || !password){

            return res.status(401).json({
                message:"Invalid data",
                success:false
            })
        }

        const user = await User.findOne({email});
        if(user){
            return res.status(401).json({
                message:"This email already exist",
                success:false
            })
        }

        const hashPassword = await bicrypt.hash(password,16);

        await User.create({
            fullname,
            email,
            password:hashPassword
        })

        return res.status(200).json({
            message:"Account created successfully",
            success:true
        })
    } catch(error){
       
    }
}

module.exports = {Register,Login,Logout}