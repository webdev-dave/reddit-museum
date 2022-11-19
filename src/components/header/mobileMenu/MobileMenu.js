import { useState } from "react";
import "./mobileMenuStyles.css";
import { FaBars } from "react-icons/fa";
import Genres from "../genres/Genres";

const MobileMenu = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = (e) => {
    setIsExpanded(!isExpanded);
  };

  return !isExpanded ? (
    <div className="dropdown-container">
      <button onClick={handleClick} >
        <FaBars />
      </button>
      <div className="dropdown"></div>
    </div>
  ) : (
    <div className="dropdown-container">
      <button onClick={handleClick} className="expanded">
        X
      </button>
      <div className="dropdown expanded">
        <p className="art-genres">Art Genres</p>
        <Genres/>
      </div>
    </div>
  );
};

export default MobileMenu;
