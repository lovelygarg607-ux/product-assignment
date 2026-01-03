import { useState, useEffect } from "react";
import "../Styles/searchbar.css"

const Searchbar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchText);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchText, onSearch]);

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search products..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;


