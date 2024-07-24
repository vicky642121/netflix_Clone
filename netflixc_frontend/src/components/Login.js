import React, { useState } from 'react'
import Header from './Header'
import NetflixImages from "../images";
import axios from "axios";
import { API_END_POINT } from '../utils/constant';
import toast from 'react-hot-toast';

const Login = () => {

    const[isLogin, setIsLogin] = useState(false);
    const[slform,setSlForm] = useState({
        email:"",
        password:"",
        fullname:""
    });
    const[slformerror,setSlFormError] = useState({
        emailerr:"",
        passworderr:"",
        fullnameerr:""
    });

    const handleLogin = ()=>{

        setIsLogin(!isLogin);
        setSlFormError({        
            emailerr:"",
            passworderr:"",
            fullnameerr:""
        })
    }
    // console.log(slform);

    const handleData = async(e)=>{

        e.preventDefault()
        var iserror = false;
        let errors = {}

        if (!isLogin && slform.fullname == "") {
            iserror = true;
            errors.fullnameerr= 'Required';
            ;
          }
        
        if (slform.password == "") {
            iserror = true;
            errors.passworderr= 'Required';

        } else if (slform.password.length < 6 ) {
            iserror = true;
            errors.passworderr = 'Must be 6 characters or above';
        }
    
        if (slform.email == "") {
            iserror = true;
            errors.emailerr = 'Required';
            

        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(slform.email)) {
            iserror = true;
            errors.emailerr = 'Invalid email address';
        }
        setSlFormError(errors);


        if(!iserror){

            console.log(slform.email,slform.password,slform.fullname);
            if(!isLogin){
                console.log('register');
                const user_data =  slform ;
                //login
                try{
    
                    const response = await axios.post(`${API_END_POINT}register`,user_data);
                    if(response.data.success == true){

                        toast.success(response.data.message);
                    }
                }
                catch (error){
                    
                    console.log(error)
                    if (error.response && error.response.status === 401) {
                        toast.error(error.response.message);
                    }                    
                }
            }
            else{
                console.log('login');
    
                const user_data =  slform ;
                try{
    
                    const response = await axios.post(`${API_END_POINT}/login`,user_data);
                   console.log( response.data.success);
                    if(response.data.success == true){

                        toast.success(response.data.message);
                    }
                }
                catch (error){
                    // toast.error(error);
                    console.log(error)
                    if (error.response && error.response.status === 401) {
                        toast.error('Invalid Credentials');
                    }
                }
            }
        }
    }

  return (
    <div> {/*width:100% */}
        <Header/>
        <div className ='absolute'>
            <img className='w-[100vw] h-[100vh]' src={NetflixImages.NetflixLgBgImage} alt='Netflix Login Bg' />
        </div>

        <form className="flex flex-col w-3/12 p-12 left-0 right-0 mx-auto justify-center items-center absolute my-36 bg-black opacity-80 rounded-md" onSubmit={handleData}>
            <h1 className='text-3xl text-white font-bold mb-4'>{isLogin?"Sign In":"SignUp"}</h1>
            <div className='flex flex-col'>
                {
                 !isLogin && <input type='text' value={slform.fullname}  placeholder='Full Name' className='outline-none p-3 my-2 rounded-md bg-gray-800 text-white' onChange={(e)=>setSlForm({...slform,fullname:e.target.value})}/>
                }
                {slformerror.fullname !='' && <span className='text-red-800 font-medium' >{slformerror.fullnameerr}</span>}

                <input value={slform.email} type='email' placeholder='Email'  className='outline-none p-3 my-2 rounded-md  bg-gray-800 text-white' onChange={(e)=>setSlForm({...slform,email:e.target.value})}/>
                {slformerror.emailerr !='' && <span className='text-red-800 font-medium' >{slformerror.emailerr}</span>}

                <input value={slform.password} type='password' placeholder='Password' className='outline-none p-3 my-2 rounded-md bg-gray-800 text-white' onChange={(e)=>setSlForm({...slform,password:e.target.value})}/>
                {slformerror.passworderr !='' && <span className='text-red-800 font-medium' >{slformerror.passworderr}</span>}

                <button className='bg-red-800 mt-6 p-5  rounded-md text-white font-medium text-md'>{isLogin?"Sign in":"Sign up"}</button>
                <p className='text-white text-center mt-5 font-bold'>{isLogin?"New to Netflix?":"Already have an account?"}<span className='text-blue-700 pl-2 cursor-pointer' onClick={()=>handleLogin()}>{isLogin?"Signup":"Sign in"}</span></p>
            </div>
        </form>
    </div>
  )
}

export default Login