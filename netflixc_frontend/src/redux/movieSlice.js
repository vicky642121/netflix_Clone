import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newPlayingMovie: [],
    popularMovie:[],
    topRatedMovies:[],
    upComingMovies:[],
}

const movieSlice = createSlice({

    name:"New Movie",
    initialState,
    reducers:{
        //actions
        getNewMoviePlaying:(state,action)=>{
            state.newPlayingMovie = action.payload
        },
        getPopularMovies:(state,action)=>{
            state.popularMovie = action.payload
        },
        getRatedMovies:(state,action)=>{
            state.topRatedMovies = action.payload
        },
        getUpcomingMovies:(state,action)=>{
            state.upComingMovies = action.payload
        }
    }
});

export const {getNewMoviePlaying,getPopularMovies,getRatedMovies,getUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;