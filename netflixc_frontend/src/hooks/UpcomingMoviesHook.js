import axios from 'axios'
import {getRatedMovies, getUpcomingMovies } from '../redux/movieSlice'
import { useDispatch } from 'react-redux';
import {options,Upcoming_Movie } from '../utils/constant';

const UpcomingMoviesHook = async() => {
 
    const dispatch = useDispatch();

    try{

      const res = await axios.get(Upcoming_Movie,options)
      dispatch(getUpcomingMovies(res.data.results))
      console.log(res)
    }
    catch(e){
      console.log(e)

    }
}

export default UpcomingMoviesHook;