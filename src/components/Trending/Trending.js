import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMoviesTrending, getTrending } from "../../redux/MovieSlice";
import MovieCard from "../MovieCard/MovieCard";

const Trending = () => {
  let dispatch = useDispatch();
  const moviesTrend = useSelector(getTrending);
  console.log('bb',moviesTrend);
  //   const searchInit = "harry potter"
  useEffect(() => {
    dispatch(fetchAsyncMoviesTrending());
  }, [dispatch]);
  console.log('cc',moviesTrend);
  return (
    <div className="movies">
      
      {console.log("Here is trend" , moviesTrend)}
      {moviesTrend.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))}
    </div>
  );
};

export default Trending;
