import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAsyncMoviesDetails, getAllMovieDetails, getWatchList } from "../../redux/MovieSlice";
import MovieCard from "../MovieCard/MovieCard";
import MovieCardRemove from "../MovieCard/MovieCardRemove";

// renderMovies = movies.Response === "True" ? (movies.Search.map((movie,index)=>(
//     <MovieCard key={index} data={movie}/>
//     ))) : (<div><h3>{movies.Error}</h3></div>)

function WatchList ()  {
    // const { id } = useParams();
    const dispatch = useDispatch();
    const dataW = useSelector(getWatchList);
  console.log(dataW);
  useEffect(() => {
    dispatch(fetchAsyncMoviesDetails());
  }, [dispatch]);
  return (
    <div>
      <div className='movies'>
          {dataW.map((data,index) => (
              // <MovieCard key={index} data={data}/>
              <MovieCardRemove key={index} data={data}/>
          ))}
      </div>
    </div>
  );
};

export default WatchList;