import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './watchlist.css';
import Navbar from '../Navbar';
export default function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    // Load watchlist from local storage on mount
    const savedWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    setWatchlist(savedWatchlist);
  }, []);

  const handleRemoveFromWatchlist = (imdbID) => {
    // Filter out the movie to be removed
    const updatedWatchlist = watchlist.filter((movie) => movie.imdbID !== imdbID);
    alert("Movie Removed From Watchlist Successfully")
    // Update state
    setWatchlist(updatedWatchlist);
    // Update local storage
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
  };

  return (
    <div className="watchlist">
      <Navbar />
      <h1 className='watch'>My Watchlist</h1>
      <div className="movie-list">
        {watchlist.length > 0 ? (
          watchlist.map((movie) => (
            <div key={movie.imdbID} className="movie" onClick={() => navigate(`/movie/${movie.imdbID}`)}>
              <img src={movie.Poster} alt={movie.Title} />
              <div className='both'>
              <button 
                    className="add" 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveFromWatchlist(movie.imdbID);
                    }}
                  >
                    Remove
                  </button>
                  <p className="rating">{movie.imdbRating}</p>
              </div>
              
              <h3 className="title">{movie.Title}</h3>
              <p className="year">{movie.Year}</p>
              <p className="year">Click to view Plot</p>
            </div>
          ))
        ) : (
          <p className='blanktext'>No movies in your watchlist. Try Adding Movies</p>
        )}
      </div>
    </div>
  );
}
