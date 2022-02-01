import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovies, getAllMovies } from "../../redux/MovieSlice";
import MovieCard from "../MovieCard/MovieCard";

const Product = () => {
  let dispatch = useDispatch();
  const movies = useSelector(getAllMovies);
  const searchInit = "harry potter";
  useEffect(() => {
    dispatch(fetchAsyncMovies(searchInit));
  }, [dispatch]);
  // هنا كأننا فى ال movieListing
  // const movies = useSelector(getAllMovies)
  // let renderMovies = "";
  // renderMovies = movies.Response === "True" ? (movies.Search.map((movie,index)=>(
  //   <MovieCard key={index} data={movie}/>
  // ))) : (<div><h3>{movies.Error}</h3></div>)
  return (
    <div className="movies">
      {console.log("Here is HomePage")}
      {movies.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))}
    </div>
  );
};

export default Product;

// export default MovieList
