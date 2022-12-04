import React, { createRef, useMemo } from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { navOptions } from "../../../utils/helperArrays";
import { capitalizeFirstCharacter } from "../../../utils/helperFunctions";
import "./navBarStyles.css";
import SubMenu from "./SubMenu";

const NavBar = () => {
  const [isExpanded, setIsExpanded] = useState(
    Array(navOptions.length).fill(false)
  );
  const optionRefs = useMemo(
    () => Array.from({ length: navOptions.length }).map(() => createRef()),
    []
  );

  const handleClickOutside = (e) => {
    //this blocks the handleClickOutside from changing anything based on the mousedown event listener (set on the document via the useEffect below) if the mousedown event occurs inside one of the optionRefs / option buttons.
    if (optionRefs.every((ref) => ref.current.contains(e.target) === false)) {
      setIsExpanded(isExpanded.map((el) => false));
    }
  };

  useEffect(() => {
    if (isExpanded.includes(true)) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  });

  const handleClickInside = (index) => {
    setIsExpanded(isExpanded.map((el, idx) => (idx === index ? !el : false)));
  };

  return (
    <div className="nav-bar">
      {navOptions.map((option, index) => (
        <div
          key={"option-" + index}
          className={`option`}
          ref={optionRefs[index]}
        >
          <NavLink
            to={option}
            className={`nav-link ${isExpanded[index] ? "expanded" : ""}`}
            onClick={() => {
              handleClickInside(index);
            }}
          >
            {capitalizeFirstCharacter(option)}
          </NavLink>

          <SubMenu option={option} isExpanded={isExpanded} index={index} />
        </div>
      ))}
    </div>
  );
};

export default NavBar;
