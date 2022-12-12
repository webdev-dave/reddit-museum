import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { replaceUnderscoreAndCapitalizeFirstChar } from "../../../../utils/helperFunctions";
// import { navSubCategories } from "../../../../utils/helperObjects";

const ColumnSubSubMenu = ({category, subCategory, isExpanded, isExpandedClassName, subSubCategories }) => {
  const subSubMenuRef = useRef();
  const [expandedHeight, setExpandedHeight] = useState(0);

  console.log(isExpandedClassName);
  const subSubMenuStyles = (expandedHeight > 0) ? {height: `${isExpanded ? expandedHeight : 0}px`} : {};

  useEffect(()=>{
    setExpandedHeight(subSubMenuRef.current.offsetHeight);

  },[])
  console.log(expandedHeight);
  console.log(subSubMenuStyles);
  return (
    <ul ref={subSubMenuRef} className={`sub-sub-menu ${isExpandedClassName}`} style={subSubMenuStyles}>
    {subSubCategories.map(
      (subSubCategory, index) => (
        <li key={"sub-sub-category" + index} className={"sub-sub-category"}>
          <NavLink className="child-name" to={`/${category}/${subCategory}/${subSubCategory}/`}>{replaceUnderscoreAndCapitalizeFirstChar(subSubCategory)}</NavLink>
        </li>
      )
    )}
  </ul>
    
  );
};

export default ColumnSubSubMenu;
