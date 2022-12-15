import "./navBarColumnStyles.css";
import { useState, useRef } from "react";
import { FaAngleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { navCategories } from "../../../../utils/helperArrays";
import { replaceUnderscoreAndCapitalizeFirstChar } from "../../../../utils/helperFunctions";
import ColumnSubMenu from "./ColumnSubMenu";



const NavBarColumn = () => {
  const [isExpandedArr, setIsExpandedArr] = useState(Array(navCategories.length).fill(false));
  // const categoryRefs = useMemo(
  //   () => Array.from({ length: navCategories.length }).map(() => createRef()),
  //   []
  // );
  const navBarRef = useRef();
    const handleClickInside = (index) => {
    setIsExpandedArr(
      isExpandedArr.map((el, idx) => (idx === index ? !el : el))
    );
  };



  return (
    <div className={`nav-bar-column`} ref={navBarRef}>
      {navCategories.map((category, index) => (
        <div
          key={"category-" + index}
          className={`category`}
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
                //clear all current images and wait to load new ones
              }}
            >
              {replaceUnderscoreAndCapitalizeFirstChar(category)}
              <FaAngleRight className="icon" />
            </NavLink>
            
          </div>
          <ColumnSubMenu
            category={category}
            isExpanded={isExpandedArr[index]}
          />
        </div>
      ))}
    </div>
  );
};

export default NavBarColumn;
