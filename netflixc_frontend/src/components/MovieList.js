import React from 'react'
import { MovieCard } from './MovieCard'

export const MovieList = ({title,data}) => {
  return (
    <div className='px-8'>
        <h3 className='text-white text-3xl'>{title}</h3>
        <div className=''>
            <div className='flex items-center justify-center'>
               {
                data.length > 0?
                    data.map((datas)=>{
                            return(<MovieCard key={datas.id}/>)
                    })
                    :<h3 className=''>No Data Found</h3>
               }
            </div>
        </div>
    </div>
  )
}
