import { User } from "../models/userModel"

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

        await User.create({
            fullname,
            email,
            password
        })

        return res.status(200).json({
            message:"Account created successfully"
        })
    } catch(error){

    }
}