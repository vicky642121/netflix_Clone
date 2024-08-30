import React from 'react'
import { MovieList } from './MovieList'
import { useSelector } from 'react-redux'

export const MovieContainer = () => {

    const movies = useSelector((store)=>store.movies)
    console.log(movies.upComingMovies,"lks;fjlksdjf");

    const movies_data = [
        {
            id:1,
            title:"Popular Movies",
            movie:movies.popularMovie
        },
        {
            id:1,
            title:"New Movies",
            movie:movies.newPlayingMovie
        },
        {
            id:1,
            title:"Top Rated Movies",
            movie:movies.topRatedMovies
        },
        {
            id:1,
            title:"Upcoming Movies",
            movie:movies.upComingMovies
        }
    ];

  return (
    <div className='bg-black'>
        <div className='-mt-52 relative z-10'>
        {
            movies_data.map((mov)=>{
            return (<MovieList title={mov.title} data={mov.movie}/>)
            })
        }
        </div>
    </div>
  )
}
