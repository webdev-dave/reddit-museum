import { navSubOptions } from "../../../utils/helperArrays";

const SubMenu = ({option, isCollapsed, index}) => {
    
  return (
    <ul 
      className={`sub-menu ${!isCollapsed[index] ? "expanded" : "collapsed"}`}
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
