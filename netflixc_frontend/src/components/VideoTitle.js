import React from 'react'
import { FaPlay } from "react-icons/fa";
import { HiOutlineExclamationCircle } from "react-icons/hi2";

export const VideoTitle = () => {
  return (
    <div className='w-screen aspect-video absolute pt-[18%] p-6'>
        <h1 className='text-3xl font-bold text-white'>Vicky Pandi</h1>
        <p className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        <div className='flex mt-4'>
            <button className='flex items-center gap-2 px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80'>
                <FaPlay/>
                <span>Play</span>
            </button>
            <button className='flex items-center gap-2 mx-2 px-6 py-2 bg-gray-400 text-black rounded-md hover:bg-opacity-80'>
                <HiOutlineExclamationCircle size={20}/>
                <span>Watch More</span>
            </button>
        </div>
    </div>
  )
}
