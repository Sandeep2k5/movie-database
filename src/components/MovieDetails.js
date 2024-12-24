import React from "react";

const MovieDetails = ({ movie, onBack }) => {
  return (
    <div className="movie-details">
      <button onClick={onBack} style={{ marginBottom: "20px" }}>Back</button>
      <img
        src={movie.image || "https://via.placeholder.com/200x300?text=1917"}
        alt={movie.movie}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h2>{movie.movie}</h2>
      <p><strong>Rating:</strong> {movie.rating}</p>
      <p>
        <strong>IMDb:</strong>{" "}
        <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer">
          {movie.movie} on IMDb
        </a>
      </p>
    </div>
  );
};

export default MovieDetails;
