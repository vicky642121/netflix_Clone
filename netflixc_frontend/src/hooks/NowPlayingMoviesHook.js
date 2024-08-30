import axios from 'axios'
import React from 'react'
import { getNewMoviePlaying } from '../redux/movieSlice'
import { useDispatch } from 'react-redux';
import { Now_playing_movie, options } from '../utils/constant';

const NowPlayingMoviesHook = async() => {

  const dispatch = useDispatch();

    try{

      const res = await axios.get(Now_playing_movie,options)
      dispatch(getNewMoviePlaying(res.data.results))
      console.log(res)
    }
    catch(e){
      console.log(e)

    }
}

export default NowPlayingMoviesHook;