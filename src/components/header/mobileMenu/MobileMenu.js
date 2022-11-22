import { useState } from "react";
import "./mobileMenuStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Genres from "../genres/Genres";
import { useEffect } from "react";
import { useRef } from "react";

const MobileMenu = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [vh, setVh] = useState(window.innerHeight * 0.01);
  const sideMenuRef = useRef();
  const expandedClassName = isExpanded ? "expanded" : "";

  
  useEffect(() => {
    const handleResize = () => setVh(window.innerHeight * 0.01);
    window.addEventListener("resize", handleResize);
    return () => document.removeEventListener("resize", handleResize);
  });


  const handleClickOutside = (e) => (!sideMenuRef.current.contains(e.target) && setIsExpanded(false));
  useEffect(() => {
    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  });



  return (
    <div className="side-menu-container" ref={sideMenuRef}>
      <button
        onClick={()=>setIsExpanded(!isExpanded)}
        className={expandedClassName}
      >
        {isExpanded ? <FaTimes /> : <FaBars />}
      </button>
      <div
        className={`dropdown ${expandedClassName}`}
        style={{ height: `100${vh}px` }}
      >
        {isExpanded && <p className="art-genres">Art Genres</p>}
        {isExpanded && <Genres />}
      </div>
    </div>
  );
};

export default MobileMenu;
