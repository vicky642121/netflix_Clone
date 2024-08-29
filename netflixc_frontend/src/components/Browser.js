import React, { useEffect } from 'react'
import Header from './Header'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Browser = () => {

  const user = useSelector((store)=>store.users.user);
  const navigate = useNavigate();

  useEffect(()=>{
    if(!user){
      navigate('/');
    }
  },[]);

  return (
    <div>
         <Header/>
    </div>
  )
}

export default Browser