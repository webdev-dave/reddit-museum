import { navSubOptions } from "../../../utils/helperArrays";

const SubMenu = ({option, isExpanded, index}) => {
    
  return (
    <ul 
      className={`sub-menu ${isExpanded[index] ? "expanded" : "collapsed"}`}
    >
      {navSubOptions[option].map((subOption, i) => (
        <li className="sub-option" key={"sub-option-" + i}>
          {subOption}
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
