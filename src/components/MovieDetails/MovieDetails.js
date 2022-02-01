import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "./MovieDetails.css";
import {
  fetchAsyncMoviesDetails,
  getAllMovieDetails,
} from "../../redux/MovieSlice";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getAllMovieDetails);
  console.log("this from details page", data);
  useEffect(() => {
    dispatch(fetchAsyncMoviesDetails(id));
  }, [dispatch, id]);
  const bigImg = `https://image.tmdb.org/t/p/original${data.backdrop_path}`;
  const unavailable_poster =
    "https://www.movienewz.com/wp-content/uploads/2014/07/poster-holder.jpg";
  const styles = {
    width: "100%",
    backgroundImage: bigImg ? `url(${bigImg})` : null,
  };
  // const genres = data.genres.map((genre) => genre.name);
  return (
    <div>
      <section style={styles} className="infoSection ">
        <div className="outer-container">
          <div className="container-box">
            <div className="infoBox">
              <div className="posterr">
                <img
                  src={
                    data.poster_path
                      ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
                      : unavailable_poster
                  }
                  alt={data.title}
                />
              </div>
              <div className="info">
                <div className="movie-name">
                  <h1>
                    {data.title}
                    {/* {data.name} */}
                  </h1>
                </div>
                <div className="overview">
                  <h2>{data.tagline}</h2>
                  <p>{data.overview}</p>
                </div>
                <div className="genres-companies">
                  {/* <h2>{data.genres[0].name}</h2> */}
                  {/* <p>{data.companies}</p> */}
                </div>
                <div className="detail-container">
                  <div className="column">
                    <div className="details">
                      <h3>Original Release</h3>
                      <h2>
                        {data.release_date}
                        {/* {data.startSeries} */}
                      </h2>
                    </div>
                    <div className="details">
                      <h3>Status</h3>
                      <h2>{data.status}</h2>
                    </div>
                  </div>
                  <div className="column">
                    <div className="details">
                      <h3>Running Time</h3>
                      <h2>
                        {data.runtime}
                        {data.episodeRuntime} min
                      </h2>
                    </div>
                    <div className="details">
                      <h3>Vote Average</h3>
                      <h2>{data.vote_average}/10</h2>
                    </div>
                    {/* <div className="links-details">
                    <div className="li">
                      <Link className="link" to="/">
                        Movies
                      </Link>
                    </div>
                    <div className="li">
                      <Link className="link" to="/TvShows">
                        Tv Shows
                      </Link>
                    </div>
                    <div className="li">
                      <a className="link" href={data.homepage} target="_blank" rel="noreferrer">
                        View More Details
                      </a>
                    </div>
                  </div> */}
                  </div>
                </div>
                <div className="links-details">
                    <div className="li">
                      <Link className="link" to="/">
                        Home
                      </Link>
                    </div>
                    
                    <div className="li">
                      <a className="link" href={data.homepage} target="_blank" rel="noreferrer">
                        View More Details
                      </a>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieDetails;
