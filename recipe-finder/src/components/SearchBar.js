import React from "react";

const SearchBar = ({ query, onQueryChange, onSearch }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for recipes..."
        value={query}
        onChange={onQueryChange}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
