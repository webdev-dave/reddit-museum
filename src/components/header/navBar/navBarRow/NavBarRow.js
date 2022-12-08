import React, { createRef, useMemo } from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { navCategories } from "../../../../utils/helperArrays";
import { replaceUnderscoreAndCapitalizeFirstChar } from "../../../../utils/helperFunctions";
import "./navBarRowStyles.css";
import SubMenu from "./RowSubMenu";

const NavBarRow = () => {
  const [isExpandedArr, setIsExpandedArr] = useState(
    Array(navCategories.length).fill(false)
  );
  const categoryRefs = useMemo(
    () => Array.from({ length: navCategories.length }).map(() => createRef()),
    []
  );

  const handleClickOutside = (e) => {
    //this blocks the handleClickOutside from changing anything based on the mousedown event listener (set on the document via the useEffect below) if the mousedown event occurs inside one of the optionRefs / option buttons.
    if (categoryRefs.every((ref) => ref.current.contains(e.target) === false)) {
      setIsExpandedArr(isExpandedArr.map((el) => false));
    }
  };


  useEffect(() => {
    if (isExpandedArr.includes(true)) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  });

  const handleClickInside = (index) => {
    setIsExpandedArr(
      isExpandedArr.map((el, idx) => (idx === index ? !el : false))
    );
  };

  return (
    <div className={`nav-bar-row`}>
      {navCategories.map((category, index) => (
        <div
          key={"category-" + index}
          className={`category`}
          ref={categoryRefs[index]}
        >
          <div className="category-name-container">
            <NavLink
              to={category}
              className={`category-name ${
                isExpandedArr[index] ? "expanded" : ""
              }`}
              onClick={(e) => {
                //this prevents category-nav-link selection from loading which would return a 404 error since categories without adjacent subcategories do not exist as valid selections/independent pages (i.e. there are no category homepages)
                e.preventDefault();
                handleClickInside(index);
              }}
            >
              {replaceUnderscoreAndCapitalizeFirstChar(category)}
        
            </NavLink>
            
          </div>
          <SubMenu
            category={category}
            isExpanded={isExpandedArr[index]}
          />
        </div>
      ))}
    </div>
  );
};

export default NavBarRow;
