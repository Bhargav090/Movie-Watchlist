// src/MovieDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './moviedet.css'

const API_KEY = "a4fa6745";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    fetchMovieDetails();
  }, [id]);

  useEffect(() => {
    const savedWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    setWatchlist(savedWatchlist);
  }, []);

  const handleAddToWatchlist = (movie) => {
    const isAlreadyInWatchlist = watchlist.some((m) => m.imdbID === movie.imdbID);
    if (isAlreadyInWatchlist) {
      alert('Movie Was Already In Watchlist');
    } else {
      const updatedWatchlist = [...watchlist, movie];
      setWatchlist(updatedWatchlist);
      localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
      alert('Movie Added To My Watchlist Successfully');
    }
  };

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-details">
      <img src={movie.Poster} alt={movie.Title} className='imgg'/>
      <div className="details">
        <h1 className='title'>{movie.Title}</h1>
        <p className='year'><strong>Year:</strong> {movie.Year}</p>
        <p className='rating'><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
        <p className='plot'><strong>Plot:</strong> {movie.Plot}</p>
        <button className='btn' onClick={(e) => {
                      e.stopPropagation();
                      handleAddToWatchlist(movie);
                    }}>Add to Watchlist</button>
      </div>
    </div>
  );
};

export default MovieDetail;
