import { NavLink } from "react-router-dom";
import { replaceUnderscoreAndCapitalizeFirstChar } from "../../../../utils/helperFunctions";


const RowSubSubMenu = ({
  category,
  subCategory,
  isExpanded,
  isExpandedClassName,
  subSubCategories
}) => {

  return (
    <ul className={`sub-sub-menu ${isExpandedClassName}`}>
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
