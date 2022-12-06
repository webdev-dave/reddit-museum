import { useState } from "react";
import "./mobileMenuStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect } from "react";
import { useRef } from "react";
import NavBar from "../navBar/NavBar";

const MobileMenu = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [vh, setVh] = useState(window.innerHeight * 0.01);
  const [menuWidth, setMenuWidth] = useState(0);
  const dropdownRef = useRef();
  const headerHeight = "80";
  const sideMenuRef = useRef();
  const expandedClassName = isExpanded ? "expanded" : "";

  useEffect(()=>{
    setMenuWidth(dropdownRef.current.offsetWidth);
  },[])

  useEffect(() => {
    const handleResize = () =>  setVh(window.innerHeight * 0.01);
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
        ref={dropdownRef}
          className={`dropdown ${expandedClassName}`}
          style={{ height: `calc(${100*vh}px - ${headerHeight}px)` }}
        >
          <NavBar isColumn={true} />
          {/* <div style={{ height: `calc(${150*vh}px - ${headerHeight}px)` }}>
            
          </div> */}
          
        </div>
        <div
          className={`dropdown-length-extender ${expandedClassName}`}
          style={{ height: `${200*vh}px`, width: `${menuWidth}px`,  }}
        >
          
        </div>
      </div>
  
  );
};

export default MobileMenu;
