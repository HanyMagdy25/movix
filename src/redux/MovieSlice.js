import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async (search) => {
  // let query = "batman";
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=974253bce4d1b963fbb17879f0e9414c&language=en-US&page=1&include_adult=false&query=${search}`);
    const data = await response.json();
      
    console.log(data.results);
    console.log(data);
    return data.results;
})

export const fetchAsyncMoviesDetails = createAsyncThunk("movies/fetchAsyncMoviesDetails", async (id) => {
  // let query = "batman";
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=974253bce4d1b963fbb17879f0e9414c&append_to_response=credits`);
    const data = await response.json();
      //${api}/${page}/${movieId}?api_key=${apiKey}&append_to_response=credits
      //https://api.themoviedb.org/3/movie/tt0096895?api_key=974253bce4d1b963fbb17879f0e9414c&append_to_response=credits

    console.log("this console from fetchAsyncMoviesDetails",data);
    return data;
})
////https://api.themoviedb.org/3/movie/now_playing?api_key=974253bce4d1b963fbb17879f0e9414c
export const fetchAsyncMoviesTrending = createAsyncThunk("fetchAsyncMoviesTrending", async () => {
  // let query = "batman";
  const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=974253bce4d1b963fbb17879f0e9414c`);
    const data = await response.json();
      
    console.log(data.results);
    console.log("this is data",data);
    return data.results;
})

const initialState = {
    movies:[],
    watchList:[],
    trending:[],
    selectedMovie:{}
  }

  export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
      addMovie: (state,{payload}) => {
        state.movies = payload
      },
      addToWatchlist: (state,action) => {
        state.watchList.push(action.payload);
      },
      removeFromWatchlist: (state,action) => {
        state.watchList = state.watchList.filter(
          (item) => item.id !== action.payload.id
        );
        // state.watchList = nextWatchList
      },
      addMovieTrend: (state,payload) => {
        state.trending = payload
      },
      
    },
    extraReducers:{
      [fetchAsyncMovies.pending]:()=>{
        console.log("pending")
      },
      [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
        console.log("fulfilled");
        return{...state, movies:payload}
      },
      [fetchAsyncMovies.rejected]:()=>{
        console.log("rejected");
        
      },
      [fetchAsyncMoviesDetails.fulfilled]:(state,{payload})=>{
        console.log("MoviesDetails fulfilled success");
        return{...state, selectedMovie:payload} //this for init state
      },
      [fetchAsyncMoviesTrending.fulfilled]:(state,{payload})=>{
        console.log("fulfilled");
        return{...state, trending:payload}
      },
      [fetchAsyncMoviesTrending.rejected]:()=>{
        console.log("trendig rejected");
        
      },
    }
  })

  // Action creators are generated for each case reducer function
export const { addMovie,addToWatchlist ,removeFromWatchlist , addMovieTrend} = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies;
export const getAllMovieDetails = (state) => state.movies.selectedMovie;
export const getWatchList = (state) => state.movies.watchList;
export const getTrending = (state) => state.movies.trending;
// export const removeFromWatchlist = (state) => state.movies.watchList;
export default movieSlice.reducer