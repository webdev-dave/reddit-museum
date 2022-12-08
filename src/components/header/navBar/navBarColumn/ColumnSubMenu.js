import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { replaceUnderscoreAndCapitalizeFirstChar } from "../../../../utils/helperFunctions";
import { navSubCategories } from "../../../../utils/helperObjects";

const ColumnSubMenu = ({ category, isExpanded }) => {
  const subMenuRef = useRef();
  const [subMenuExpandedHeight, setSubMenuExpandedHeight] = useState(0);

  console.log("component rendered")
  console.log(subMenuExpandedHeight)
  useEffect(()=>{
    //console.log("use effect ran " + subMenuExpandedHeight)
    if(subMenuRef.current.clientHeight !== subMenuExpandedHeight && subMenuRef.current.clientHeight > 0){
      setSubMenuExpandedHeight(subMenuRef.current.clientHeight)
      //console.log(subMenuRef.current.clientHeight)
    }
    
  },[subMenuExpandedHeight])
  const subMenuStyles = (subMenuExpandedHeight > 0) ? {maxHeight: `${isExpanded ? subMenuExpandedHeight : 0}px`} : {};
  
  
 


  return (
    <ul ref={subMenuRef} className={`sub-menu ${isExpanded ? "expanded" : "collapsed"}`}  style={subMenuStyles}>
      { navSubCategories[category].map((subCategory, i) => {
        //if typeof subOption = object then we can infer that this is a sub-sub-menu since all regular subOptions are strings
        return typeof subCategory === "object" ? (
          <li className="sub-category sub-sub-menu" key={"sub-category-" + i}>
            {Object.keys(subCategory)}
            <ul className="sub-sub-options">
              {subCategory[Object.keys(subCategory)].map((subSubOption, index) => (
                <li key={"sso-" + index} className={"sub-sub-option"}>
                  {replaceUnderscoreAndCapitalizeFirstChar(subSubOption)}
                </li>
              ))}
            </ul>
          </li>
        ) : (
          <li
            className="sub-category"
            key={"sub-category-" + i}
            
          >
            <NavLink to={category+"/"+subCategory} >{replaceUnderscoreAndCapitalizeFirstChar(subCategory)}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default ColumnSubMenu;
