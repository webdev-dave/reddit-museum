// import { useEffect } from "react";
// import { useState } from "react";
// import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { replaceUnderscoreAndCapitalizeFirstChar } from "../../../../utils/helperFunctions";
// import { navSubCategories } from "../../../../utils/helperObjects";

const RowSubSubMenu = ({
  category,
  subCategory,
  isExpanded,
  isExpandedClassName,
  subSubCategories,
  subMenuWidth,
}) => {

  const subSubMenuStyles =
    subMenuWidth > 0 ? { left: `${subMenuWidth}px` } : {};


  return (
    <ul className={`sub-sub-menu ${isExpandedClassName}`} style={subSubMenuStyles}>
      {subSubCategories.map((subSubCategory, index) => (
        <li key={"sub-sub-category" + index} className={`sub-sub-category`}>
          <NavLink to={`/${category}/${subCategory}/${subSubCategory}/`} className={isExpandedClassName}>
            {replaceUnderscoreAndCapitalizeFirstChar(subSubCategory)}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default RowSubSubMenu;
