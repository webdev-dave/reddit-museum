import React, { createRef, useMemo } from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { navCategories } from "../../../utils/helperArrays";
import { capitalizeFirstCharacter } from "../../../utils/helperFunctions";
import "./navBarStyles.css";
import SubMenu from "./SubMenu";

const NavBar = ({isColumn}) => {
  const [isExpanded, setIsExpanded] = useState(
    Array(navCategories.length).fill(false)
  );
  const optionRefs = useMemo(
    () => Array.from({ length: navCategories.length }).map(() => createRef()),
    []
  );

  const handleClickOutside = (e) => {
    //this blocks the handleClickOutside from changing anything based on the mousedown event listener (set on the document via the useEffect below) if the mousedown event occurs inside one of the optionRefs / option buttons.
    if (optionRefs.every((ref) => ref.current.contains(e.target) === false)) {
      setIsExpanded(isExpanded.map((el) => false));
    }
  };

  useEffect(() => {
    if (isExpanded.includes(true)) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  });

  const handleClickInside = (index) => {
    setIsExpanded(isExpanded.map((el, idx) => (idx === index ? !el : false)));
  };

  return (
    <div className={`nav-bar ${isColumn ? "column" : "row"}`}>
      {navCategories.map((category, index) => (
        <div
          key={"category-" + index}
          className={`category`}
          ref={optionRefs[index]}
        >
          <NavLink
            to={category}
            
            className={`category-link ${isExpanded[index] ? "expanded" : ""}`}
            onClick={(e) => {
              //this prevents category-nav-link selection from loading which would return a 404 error since categories without adjacent subcategories do not exist as valid selections/independent pages (i.e. there are no category homepages)
              e.preventDefault()
              handleClickInside(index);
            }}
          >
            {capitalizeFirstCharacter(category)}
          </NavLink>

          <SubMenu category={category} isExpanded={isExpanded} index={index} />
        </div>
      ))}
    </div>
  );
};

export default NavBar;
