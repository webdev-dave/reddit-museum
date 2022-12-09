import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { replaceUnderscoreAndCapitalizeFirstChar } from "../../../../utils/helperFunctions";
import { navSubCategories } from "../../../../utils/helperObjects";
import ColumnSubSubMenu from "./ColumnSubSubMenu";

const ColumnSubMenu = ({ category, isExpanded }) => {
  const subMenuRef = useRef();
  const [subMenuExpandedHeight, setSubMenuExpandedHeight] = useState(0);

  useEffect(() => {
    //console.log("use effect ran " + subMenuExpandedHeight)
    if (
      subMenuRef.current.clientHeight !== subMenuExpandedHeight &&
      subMenuRef.current.clientHeight > 0
    ) {
      setSubMenuExpandedHeight(subMenuRef.current.clientHeight);
      //console.log(subMenuRef.current.clientHeight)
    }
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
            {
              <ColumnSubSubMenu
                subSubCategories={subCategory[Object.keys(subCategory)[0]]}
                subCategory={Object.keys(subCategory)[0]}
                category={category}
                isExpanded={true}
              />
            }
          </li>
        );
      })}
    </ul>
  );
};

export default ColumnSubMenu;
