import axios from 'axios'
import React from 'react'
import {getPopularMovies } from '../redux/movieSlice'
import { useDispatch } from 'react-redux';
import {options, Popular_Movie } from '../utils/constant';

const PopularMovies = async() => {

  const dispatch = useDispatch();

    try{

      const res = await axios.get(Popular_Movie,options)
      dispatch(getPopularMovies(res.data.results))
      console.log(res)
    }
    catch(e){
      console.log(e)

    }
}

export default PopularMovies;