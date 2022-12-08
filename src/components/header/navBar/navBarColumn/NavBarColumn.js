import React, { createRef, useMemo } from "react";
import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { navCategories } from "../../../../utils/helperArrays";
import { replaceUnderscoreAndCapitalizeFirstChar } from "../../../../utils/helperFunctions";
import "./navBarColumnStyles.css";
import ColumnSubMenu from "./ColumnSubMenu";


const NavBarColumn = () => {
  const [isExpandedArr, setIsExpandedArr] = useState(Array(navCategories.length).fill(false));
  //const [subMenuHeightArr, setSubMenuHeightArr] = useState(Array(navCategories.length).fill(0));
  const categoryRefs = useMemo(
    () => Array.from({ length: navCategories.length }).map(() => createRef()),
    []
  );
  
  // useEffect(()=>{
  //   const updatedArray = subMenuHeightArr.map((subMenuHeight, idx) => {
  //     const clientHeight = categoryRefs[idx].current.getElementsByClassName("sub-menu")[0].clientHeight;
  //     console.log(categoryRefs[idx].current.getElementsByClassName("sub-menu")[0].clientHeight);
  //     return clientHeight;
  //   })
  //   setSubMenuHeightArr(updatedArray);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[])


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
    <div className={`nav-bar-column`}>
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
              <FaAngleRight className="icon" />
            </NavLink>
            
          </div>
          <ColumnSubMenu
            // subMenuHeight={subMenuHeightArr[index]}
            category={category}
            isExpanded={isExpandedArr[index]}
          />
        </div>
      ))}
    </div>
  );
};

export default NavBarColumn;
