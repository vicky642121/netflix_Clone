import axios from 'axios'
import {getRatedMovies } from '../redux/movieSlice'
import { useDispatch } from 'react-redux';
import {options,Top_Rated_Movie } from '../utils/constant';

const TopRatedMovie = async() => {
 
    const dispatch = useDispatch();

    try{

      const res = await axios.get(Top_Rated_Movie,options)
      dispatch(getRatedMovies(res.data.results))
      console.log(res)
    }
    catch(e){
      console.log(e)

    }
}

export default TopRatedMovie;