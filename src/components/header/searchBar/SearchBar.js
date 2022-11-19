import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchBarStyles.css";

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = (e) => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="search-container">
      <button onClick={handleClick}>
        <FaSearch className="icon" />
      </button>
      {/* <div className={`input-container ${isExpanded ? "expanded" : ""}`}>
        <input type="text" placeholder="Search" />
      </div> */}

      {isExpanded ? (
        <div className="input-container expanded">
          <input type="text" placeholder=" Search" />
        </div>
      ) : (
        <div className="input-container">
          <input type="text" placeholder="" />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
