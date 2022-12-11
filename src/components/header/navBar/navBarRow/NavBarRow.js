import { useRef } from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { navCategories } from "../../../../utils/helperArrays";
import { replaceUnderscoreAndCapitalizeFirstChar } from "../../../../utils/helperFunctions";
import "./navBarRowStyles.css";
import RowSubMenu from "./RowSubMenu";

const NavBarRow = () => {
  const [isExpandedArr, setIsExpandedArr] = useState(
    Array(navCategories.length).fill(false)
  );
  const navBarRef = useRef();

  const handleClickOutside = (e) => {
    //if the mousedown event occurs inside the navBar, this blocks the handleClickOutside from the isExpanded state
    if (navBarRef.current.contains(e.target) === false) {
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
    <div className={`nav-bar-row`} ref={navBarRef}>
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
              }}
            >
              {replaceUnderscoreAndCapitalizeFirstChar(category)}
        
            </NavLink>
            
          </div>
          <RowSubMenu
            category={category}
            isExpanded={isExpandedArr[index]}
          />
        </div>
      ))}
    </div>
  );
};

export default NavBarRow;
