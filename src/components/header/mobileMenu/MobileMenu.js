import { useState } from "react";
import "./mobileMenuStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect } from "react";
import { useRef } from "react";
import NavBar from "../navBar/NavBar";

const MobileMenu = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [vh, setVh] = useState(window.innerHeight * 0.01);
  console.log((vh*100)-80);
  const headerHeight = "80";
  const sideMenuRef = useRef();
  const expandedClassName = isExpanded ? "expanded" : "";

  useEffect(() => {
    const handleResize = () => setVh(window.innerHeight * 0.01);
    window.addEventListener("resize", handleResize);
    return () => document.removeEventListener("resize", handleResize);
  });

  const handleClickOutside = (e) =>
    !sideMenuRef.current.contains(e.target) && setIsExpanded(false);
  useEffect(() => {
    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  });

  return (

      <div className="side-menu-container" ref={sideMenuRef}>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={expandedClassName}
        >
          {isExpanded ? <FaTimes /> : <FaBars />}
        </button>
        <div
          className={`dropdown ${expandedClassName}`}
          // style={{ height: `100${vh}px` }}
          style={{ height: `calc(${100*vh}px - ${headerHeight}px)` }}
        >
          <NavBar isColumn={true} />
        </div>
      </div>
  
  );
};

export default MobileMenu;
