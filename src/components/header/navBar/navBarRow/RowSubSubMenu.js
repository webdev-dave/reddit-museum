// import { useEffect } from "react";
// import { useState } from "react";
// import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { replaceUnderscoreAndCapitalizeFirstChar } from "../../../../utils/helperFunctions";
// import { navSubCategories } from "../../../../utils/helperObjects";

const RowSubSubMenu = ({category, subCategory, isExpanded, subSubCategories, subMenuWidth }) => {
  console.log(subMenuWidth)
  // console.log("component rendered");
  // console.log(subMenuExpandedHeight);
  // useEffect(() => {
  //   //console.log("use effect ran " + subMenuExpandedHeight)
  //   if (
  //     subMenuRef.current.clientHeight !== subMenuExpandedHeight &&
  //     subMenuRef.current.clientHeight > 0
  //   ) {
  //     setSubMenuExpandedHeight(subMenuRef.current.clientHeight);
  //     //console.log(subMenuRef.current.clientHeight)
  //   }
  //   //eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const subSubMenuStyles =
    subMenuWidth > 0
      ? { left: `${subMenuWidth}px` }
      : {};
  console.log(subSubMenuStyles)

  return (
    <ul className="sub-sub-menu" style={subSubMenuStyles}>
    {subSubCategories.map(
      (subSubCategory, index) => (
        <li key={"sub-sub-category" + index} className={"sub-sub-category"}>
          <NavLink to={`/${category}/${subCategory}/${subSubCategory}/`}>{replaceUnderscoreAndCapitalizeFirstChar(subSubCategory)}</NavLink>
        </li>
      )
    )}
  </ul>
    
  );
};

export default RowSubSubMenu;
