import { useEffect, useRef } from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { search, selectSearchWord, updateIsSearching } from "../../posts/postsSlice";
import "./searchBarStyles.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchWord = useSelector(selectSearchWord);
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef();
  const inputRef = useRef();

  const handleSearchButton = () => {
    setIsExpanded(!isExpanded);
    !isExpanded && inputRef.current.focus();
    dispatch(updateIsSearching({value: !isExpanded}));
  };
  const handleSearchBarInput = (e) => {
    dispatch(search({searchWord: e.target.value}));
  }



  const handleClickOutside = (e) => {
    if(!containerRef.current.contains(e.target)){
      setIsExpanded(false);
      dispatch(search({searchWord: ""}));
    }
  };
  useEffect(() => {
    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  });


  return (
    <div className="search-container" ref={containerRef}>
      <button onClick={handleSearchButton}>
        <FaSearch className="icon" />
      </button>
      
      <div className={`input-container ${isExpanded ? "expanded" : ""}`} >
          <input type="text" placeholder={isExpanded ? "Search" : ""} value={searchWord} onChange={handleSearchBarInput} ref={inputRef} />
      </div>
    </div>
  );
};

export default SearchBar;
