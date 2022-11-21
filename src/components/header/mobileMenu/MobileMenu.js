import { useState } from "react";
import "./mobileMenuStyles.css";
import { FaBars } from "react-icons/fa";
import Genres from "../genres/Genres";
import { useEffect } from "react";

const MobileMenu = () => {
  const [isExpanded, setIsExpanded] = useState(false); 
  const [vh, setVh] = useState(window.innerHeight * 0.01);
  const handleResize = () => {
    setVh(window.innerHeight * 0.01)
  }

  useEffect(()=>{
    window.addEventListener("resize", handleResize);
    return () => document.removeEventListener("resize", handleResize);
  })

  const handleClick = (e) => {
    setIsExpanded(!isExpanded);
  };

  return !isExpanded ? (
    <div className="dropdown-container" >
      <button onClick={handleClick} >
        <FaBars />
      </button>
      <div className="dropdown" style={{height: `100${vh}px`}}></div>
    </div>
  ) : (
    <div className="dropdown-container">
      <button onClick={handleClick} className="expanded">
        X
      </button>
      <div className="dropdown expanded" style={{height: `100${vh}px`}}>
        <p className="art-genres">Art Genres</p>
        <Genres/>
      </div>
    </div>
  );
};

export default MobileMenu;
