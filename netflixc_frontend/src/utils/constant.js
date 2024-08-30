export const API_END_POINT = "http://127.0.0.1:8000/api/v1/user/"

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmNhMjE4OGI4YTI1MTJlOGM3YjAwODFkNzUzNjZjNiIsIm5iZiI6MTcyNTAxMjM5Mi44NjA3NjYsInN1YiI6IjY2ZDE5NmE3MDIyOWM0OTQxZTc4YjYwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CtGBt1cwJLNGuxQp3auYNF6KsC0u5gfqh22gGDkr29k'
  }
};

//MOVIES URL
export const Now_playing_movie = "https://api.themoviedb.org/3/movie/now_playing";
export const Popular_Movie = "https://api.themoviedb.org/3/movie/popular";
export const Top_Rated_Movie = "https://api.themoviedb.org/3/movie/top_rated";
export const Upcoming_Movie = "https://api.themoviedb.org/3/movie/upcoming";

//