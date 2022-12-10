import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { replaceUnderscoreAndCapitalizeFirstChar } from "../../../../utils/helperFunctions";
import { navSubCategories } from "../../../../utils/helperObjects";
import RowSubSubMenu from "./RowSubSubMenu";

const RowSubMenu = ({ category, isExpanded }) => {
  //replace blank spaces in genre names with underscores
  const [subMenuWidth, setSubMenuWidth] = useState(0);
  const [subMenuHeight, setSubMenuHeight] = useState(0);
  //get submenu width
  const subMenuRef = useRef()

  useEffect(()=>{
    setSubMenuWidth(subMenuRef.current.offsetWidth);
    setSubMenuHeight(subMenuRef.current.offsetHeight);

   //eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  console.log(subMenuHeight)


  return (
    <ul ref={subMenuRef} className={`sub-menu ${isExpanded ? "expanded" : "collapsed"}`}>
      {navSubCategories[category].map((subCategory, i) => {
        //if typeof subOption = object then we can infer that this is a sub-sub-menu since all regular subOptions are strings
        return !(typeof subCategory === "object") ? (
          <li
            className={`sub-category ${i % 2 === 0 ? "grey" : ""}`}
            key={"sub-category-" + i}
          >
            <NavLink to={category + "/" + subCategory}>
              {replaceUnderscoreAndCapitalizeFirstChar(subCategory)}
            </NavLink>
          </li>
        ) : (
          <li className="sub-category sub-sub-parent" key={"sub-category-" + i}>
            <NavLink
              to={category + "/" + Object.keys(subCategory)[0]}
              onClick={(e) => e.preventDefault()}
            >
              {replaceUnderscoreAndCapitalizeFirstChar(
                Object.keys(subCategory)[0]
              )}
            </NavLink>
            <RowSubSubMenu
              subSubCategories={subCategory[Object.keys(subCategory)[0]]}
              subCategory={Object.keys(subCategory)[0]}
              category={category}
              isExpanded={true}
              subMenuWidth={subMenuWidth}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default RowSubMenu;
