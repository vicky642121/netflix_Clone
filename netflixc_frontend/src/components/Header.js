import React from 'react'
import NetflixImages from "../images";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

const Header = () => {
  return (
    <div className='netflix_header absolute z-10 flex w-[100vw] items-center justify-between bg-gradient-to-b from-black px-6 '>
        <img className='w-32' src={NetflixImages.NetflixLogo} alt='Netflix Logo' />
        <div className='rightside flex items-center'>
          <MdOutlineArrowDropDownCircle  size={24} className='text-white'/>
          <h1 className='text-lg font-medium ml-1 text-white'>Vicky</h1>
          <div className='ml-7'>
            <button className='bg-red-800 text-white py-2 px-4 rounded-lg'>Logout</button>
            <button className='bg-red-800 text-white py-2 px-4 ml-2 rounded-lg'>Search  Movies</button>
          </div>
        </div>
    </div>
  )
}

export default Header