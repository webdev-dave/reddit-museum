import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { replaceUnderscoreAndCapitalizeFirstChar } from "../../../../utils/helperFunctions";
import { navSubCategories } from "../../../../utils/helperObjects";
import RowSubSubMenu from "./RowSubSubMenu";
import { FaAngleRight } from "react-icons/fa";

const RowSubMenu = ({ category, isExpanded }) => {
  const [subSubMenuIsExpanded, setSubSubMenuIsExpanded] = useState(false);
  const subSubMenuIsExpandedClassName = subSubMenuIsExpanded ? "expanded" : "";

  useEffect(() => {
    !isExpanded && setSubSubMenuIsExpanded(false);
  }, [isExpanded]);


  return (
    <ul
      className={`sub-menu ${isExpanded ? "expanded" : "collapsed"}`}
    >
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
          <li
            className={`sub-category sub-sub-parent ${subSubMenuIsExpandedClassName}`}
            key={"sub-category-" + i}
          >
            <NavLink
              to={category + "/" + Object.keys(subCategory)[0]}
              className={`parent-name`}
              onClick={(e) => {
                e.preventDefault();
                isExpanded && setSubSubMenuIsExpanded(!subSubMenuIsExpanded);
              }}
            >
              {replaceUnderscoreAndCapitalizeFirstChar(
                Object.keys(subCategory)[0]
              )}
              <FaAngleRight className="angle-right icon" />
            </NavLink>
            <RowSubSubMenu
              subSubCategories={subCategory[Object.keys(subCategory)[0]]}
              subCategory={Object.keys(subCategory)[0]}
              category={category}
              isExpanded={subSubMenuIsExpanded}
              isExpandedClassName={subSubMenuIsExpandedClassName}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default RowSubMenu;
