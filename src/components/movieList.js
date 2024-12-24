import React from "react";

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="movie-card"
          onClick={() => onSelectMovie(movie)}
        >
          <img
            src={movie.image || "https://via.placeholder.com/200x300?text=1917"}
            alt={movie.movie}
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <h3>{movie.movie}</h3>
          <p>Rating: {movie.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
