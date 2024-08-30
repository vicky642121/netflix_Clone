import React, { useEffect } from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MainContainer } from './MainContainer';
import { MovieContainer } from './MovieContainer';
import NowPlayingMoviesHook from '../hooks/NowPlayingMoviesHook';
import PopularMovies from '../hooks/PopularMovies';
import TopRatedMovie from '../hooks/TopRatedMovie';
import UpcomingMoviesHook from '../hooks/UpcomingMoviesHook';

const Browser = () => {

  const user = useSelector((store)=>store.users.user);
  const navigate = useNavigate();

  //custom hook
  NowPlayingMoviesHook();
  PopularMovies();
  TopRatedMovie();
  UpcomingMoviesHook();

  useEffect(()=>{
    // if(!user){
    //   navigate('/');
    // }
  },[]);

  return (
    <div>
         <Header/>
         <div>
          <MainContainer/>
          <MovieContainer/>
         </div>
    </div>
  )
}

export default Browser