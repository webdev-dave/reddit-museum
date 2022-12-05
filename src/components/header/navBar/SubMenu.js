import { NavLink } from "react-router-dom";
import { genreNames } from "../../../utils/helperArrays";
import { navSubCategories } from "../../../utils/helperObjects";

const SubMenu = ({ category, isExpanded, index }) => {
  //replace blank spaces in genre names with underscores
  genreNames.forEach((genreName, i) => {
    genreNames[i] = genreName.replace(/_/g, " ");
  });
  


  return (
    <ul className={`sub-menu ${isExpanded[index] ? "expanded" : "collapsed"}`}>
      { navSubCategories[category].map((subCategory, i) => {
        //if typeof subOption = object then we can infer that this is a sub-sub-menu since all regular subOptions are strings
        return typeof subCategory === "object" ? (
          <li className="sub-category sub-sub-menu" key={"sub-category-" + i}>
            {Object.keys(subCategory)}
            <ul className="sub-sub-options">
              {subCategory[Object.keys(subCategory)].map((subSubOption, index) => (
                <li key={"sso-" + index} className={"sub-sub-option"}>
                  {subSubOption}
                </li>
              ))}
            </ul>
          </li>
        ) : (
          <li
            className="sub-category"
            key={"sub-category-" + i}
            
          >
            <NavLink to={category+"/"+subCategory} >{subCategory}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default SubMenu;
