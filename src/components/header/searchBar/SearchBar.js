import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { search, selectSearchWord, updateIsSearching } from "../../posts/postsSlice";
import "./searchBarStyles.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchWord = useSelector(selectSearchWord);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearchButton = (e) => {
    setIsExpanded(!isExpanded);
    dispatch(updateIsSearching({value: !isExpanded}));
  };
  const handleSearchBarInput = (e) => {
    dispatch(search({searchWord: e.target.value}))
  }
  return (
    <div className="search-container">
      <button onClick={handleSearchButton}>
        <FaSearch className="icon" />
      </button>
      {/* <div className={`input-container ${isExpanded ? "expanded" : ""}`}>
        <input type="text" placeholder="Search" />
      </div> */}

      {isExpanded ? (
        <div className="input-container expanded">
          <input type="text" placeholder=" Search" value={searchWord} onChange={handleSearchBarInput} />
        </div>
      ) : (
        <div className="input-container">
          <input type="text" value="" readOnly />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
