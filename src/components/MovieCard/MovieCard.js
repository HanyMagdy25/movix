import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToWatchlist } from '../../redux/MovieSlice';
import "./MovieCard.css"

const MovieCard = (props) => {
  const dispatch = useDispatch()
    const {data} = props
    const handleAddTowatch =(data)=>{
      dispatch(addToWatchlist(data))
    }
    // const handleRemoveFromwatch =(data)=>{
      
    //   dispatch(removeFromWatchlist(data));
    // }
    const unavailable_poster ="https://www.movienewz.com/wp-content/uploads/2014/07/poster-holder.jpg";
  
  return <div className='media-container'>
        <div className='media'>
            <img className='poster' src={data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` :unavailable_poster} alt={data.title}/>
            <p className='title'>{data.title} ({data.release_date? data.release_date.substring(0, 4): "-"})</p>
            <div className='buttons-card'>
              <button><Link className='info-btn' to={`/movie/${data.id}`}>Info</Link></button>
              <button onClick={()=> handleAddTowatch(data)}>Add To Watchlist </button>
            </div>  
        </div>
  </div>;
};
export default MovieCard;