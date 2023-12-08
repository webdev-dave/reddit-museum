import { useRef, useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { replaceUnderscoreAndCapitalizeFirstChar } from "../../../../utils/helperFunctions";
import { navSubCategories } from "../../../../utils/helperObjects";
import ColumnSubSubMenu from "./ColumnSubSubMenu";

const ColumnSubMenu = ({ category, isExpanded }) => {
  const subMenuRef = useRef();
  const [subMenuExpandedHeight, setSubMenuExpandedHeight] = useState(0);
  const [subSubMenuIsExpanded, setSubSubMenuIsExpanded] = useState(false);
  const subSubMenuIsExpandedClassName = subSubMenuIsExpanded ? "expanded" : "";

  useEffect(()=>{
    !isExpanded && setSubSubMenuIsExpanded(false)
  },[isExpanded])
  

  useEffect(() => {
    setSubMenuExpandedHeight(subMenuRef.current.offsetHeight);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const subMenuStyles =
    subMenuExpandedHeight > 0
      ? { maxHeight: `${isExpanded ? subMenuExpandedHeight : 0}px` }
      : {};

  return (
    <ul
      ref={subMenuRef}
      className={`sub-menu ${isExpanded ? "expanded" : "collapsed"}`}
      style={subMenuStyles}
    >
      {navSubCategories[category].map((subCategory, i) => {
        //if typeof subOption = object then we can infer that this is a sub-sub-menu since all regular subOptions are strings
        return !(typeof subCategory === "object") ? (
          <li className="sub-category" key={"sub-category-" + i}>
            <NavLink className="name" to={category + "/" + subCategory}>
              {replaceUnderscoreAndCapitalizeFirstChar(subCategory)}
            </NavLink>
          </li>
        ) : (
          <li className="sub-category sub-sub-parent" key={"sub-category-" + i}>
            <NavLink
              className={`parent-name ${subSubMenuIsExpandedClassName}`}
              to={category + "/" + Object.keys(subCategory)[0]}
              onClick={(e) => {
                e.preventDefault();
                setSubSubMenuIsExpanded(!subSubMenuIsExpanded);
              }}
            >
              {replaceUnderscoreAndCapitalizeFirstChar(
                Object.keys(subCategory)[0]
              )}
              <FaAngleRight className="angle-right icon" />
            </NavLink>
            {
              <ColumnSubSubMenu
                subSubCategories={subCategory[Object.keys(subCategory)[0]]}
                subCategory={Object.keys(subCategory)[0]}
                category={category}
                isExpanded={subSubMenuIsExpanded}
                isExpandedClassName={subSubMenuIsExpandedClassName}
              />
            }
          </li>
        );
      })}
    </ul>
  );
};

export default ColumnSubMenu;
