import React, { useState, useEffect } from "react";
import MovieList from "./components/movieList";
import MovieDetails from "./components/MovieDetails";
import SearchBar from "./components/searchbar";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("https://dummyapi.online/api/movies");
        const data = await response.json();
        setMovies(data);
        setFilteredMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const handleSearch = (query) => {
    const results = movies.filter((movie) =>
      movie.movie.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(results);
  };

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="App">
      <h1>Movie Database</h1>
      <SearchBar onSearch={handleSearch} />
      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} onBack={() => setSelectedMovie(null)} />
      ) : (
        <MovieList movies={filteredMovies} onSelectMovie={handleMovieSelect} />
      )}
    </div>
  );
};

export default App;
