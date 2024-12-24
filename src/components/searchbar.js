import React from "react";

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search movies by title..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
