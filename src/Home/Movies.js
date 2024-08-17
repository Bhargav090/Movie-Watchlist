import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import { useNavigate } from "react-router-dom";
const API_KEY = "a4fa6745";

const MovieSearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");
  const [avg, setAvg] = useState([]);
  const [action, setAction] = useState([]);
  const [horror, setHorror] = useState([]);
  const sortedAvg = avg.slice().sort((a, b) => b.Year - a.Year);
  const navigate = useNavigate();
  const [watchlist, setWatchlist] = useState([]);

  // Fetch data--------------------------------------------------
  useEffect(() => {
    const fetchAvengersData = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?s=avengers&apikey=${API_KEY}`
        );
        const movieDetailsPromises = response.data.Search.map((movie) =>
          axios.get(
            `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`
          )
        );
        const movieDetailsResponses = await Promise.all(movieDetailsPromises);
        setAvg(movieDetailsResponses.map((res) => res.data));
      } catch (err) {
        console.log(err);
      }
    };

    const fetchBoysData = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?s=superman&apikey=${API_KEY}`
        );
        const movieDetailsPromises = response.data.Search.map((movie) =>
          axios.get(
            `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`
          )
        );
        const movieDetailsResponses = await Promise.all(movieDetailsPromises);
        setAction(movieDetailsResponses.map((res) => res.data));
      } catch (err) {
        console.log(err);
      }
    };

    const fetchHorror = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?s=conjuring&apikey=${API_KEY}`
        );
        const movieDetailsPromises = response.data.Search.map((movie) =>
          axios.get(
            `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`
          )
        );
        const movieDetailsResponses = await Promise.all(movieDetailsPromises);
        setHorror(movieDetailsResponses.map((res) => res.data));
      } catch (err) {
        console.log(err);
      }
    };

    fetchAvengersData();
    fetchBoysData();
    fetchHorror();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
      );
      const movieDetailsPromises = response.data.Search.map((movie) =>
        axios.get(
          `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`
        )
      );
      const movieDetailsResponses = await Promise.all(movieDetailsPromises);
      setSearchResults(movieDetailsResponses.map((res) => res.data));
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };

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

  return (
    <div className="movie-search">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {searchResults.length > 0 && (
        <div className="movie-category">
          <div className="movie-list">
            {searchResults.map((movie) => (
              <div key={movie.imdbID} className="movie" onClick={() => navigate(`/movie/${movie.imdbID}`)}>
                <img src={movie.Poster} alt={movie.Title} />
                <div className="both">
                  <button 
                    className="add" 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToWatchlist(movie);
                    }}
                  >
                    Add to Watchlist
                  </button>
                  <h3 className="rating">{movie.imdbRating}</h3>
                </div>
                <h3 className="title">{movie.Title}</h3>
                <p className="year">{movie.Year}</p>
                <p className="year">Click to view Plot</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <h2 className="mtitle">SCI-FIC</h2>
      <div className="movie-list">
        {sortedAvg.slice(0, 4).map((movie) => (
          <div key={movie.imdbID} className="movie" onClick={() => navigate(`/movie/${movie.imdbID}`)}>
            <img src={movie.Poster} alt={movie.Title} />
            <div className="both">
              <button 
                className="add" 
                onClick={(e) => {
                  e.stopPropagation(); 
                  handleAddToWatchlist(movie);
                }}
              >
                Add to Watchlist
              </button>
              <h3 className="rating">{movie.imdbRating}</h3>
            </div>
            <h3 className="title">{movie.Title}</h3>
            <p className="year">{movie.Year}</p>
            <p className="year">Click to view Plot</p>
          </div>
        ))}
      </div>
      <br />
      <h2 className="mtitle">Action</h2>
      <div className="movie-list">
        {action.slice(0, 4).map((movie) => (
          <div key={movie.imdbID} className="movie" onClick={() => navigate(`/movie/${movie.imdbID}`)}>
            <img src={movie.Poster} alt={movie.Title} />
            <div className="both">
              <button 
                className="add" 
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToWatchlist(movie);
                }}
              >
                Add to Watchlist
              </button>
              <h3 className="rating">{movie.imdbRating}</h3>
            </div>
            <h3 className="title">{movie.Title}</h3>
            <p className="year">{movie.Year}</p>
            <p className="year">Click to view Plot</p>
          </div>
        ))}
      </div>
      <br></br>
      <h2 className="mtitle">Horror</h2>
      <div className="movie-list">
        {horror.slice(0, 4).map((movie) => (
          <div key={movie.imdbID} className="movie" onClick={() => navigate(`/movie/${movie.imdbID}`)}>
            <img src={movie.Poster} alt={movie.Title} />
            <div className="both">
              <button 
                className="add" 
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToWatchlist(movie);
                }}
              >
                Add to Watchlist
              </button>
              <h3 className="rating">{movie.imdbRating}</h3>
            </div>
            <h3 className="title">{movie.Title}</h3>
            <p className="year">{movie.Year}</p>
            <p className="year">Click to view Plot</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
