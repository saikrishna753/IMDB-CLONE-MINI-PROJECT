import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input 
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;