import React from 'react'
import NetflixImages from "../images";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { API_END_POINT } from '../utils/constant';
import { Navigate, useNavigate } from 'react-router-dom';
import { setUser } from '../redux/userSlice';
import toast from 'react-hot-toast';

const Header = React.memo(() => { //cover the Header component using React memo because prevent rerender because i used header all over component so that

  const user = useSelector((store)=>store.users.user);
  console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = async()=>{

    try{
      const response = await axios.get(`${API_END_POINT}logout`);
      if(response.data.message == 'User logged out successfully'){

        dispatch(setUser(null));
        toast.success(response.data.message);
        navigate('/');

      }  
    }
    catch(error){
      console.log(error);
    }
  }

  return (
    <div className='netflix_header absolute z-10 flex w-[100vw] items-center justify-between bg-gradient-to-b from-black px-6 '>
        <img className='w-32' src={NetflixImages.NetflixLogo} alt='Netflix Logo' />
        {
          user &&
          <div className='rightside flex items-center'>
            <MdOutlineArrowDropDownCircle  size={24} className='text-white'/>
            <h1 className='text-lg font-medium ml-1 text-white'>{user.fullname}</h1>
            <div className='ml-7'>
              <button className='bg-red-800 text-white py-2 px-4 rounded-lg' onClick={()=>handleLogOut()}>Logout</button>
              <button className='bg-red-800 text-white py-2 px-4 ml-2 rounded-lg'>Search  Movies</button>
            </div>
          </div>
        }
    </div>
  )
});

export default Header