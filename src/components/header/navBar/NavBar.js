import React, { createRef, useMemo } from "react";
import { useEffect, useState } from "react";
import { navOptions, navSubOptions } from "../../../utils/helperArrays";
import "./navBarStyles.css";

const NavBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(
    Array(navOptions.length).fill(true)
  );

  //console.log(isCollapsed);

  const optionRefs = useMemo(
    () => Array.from({ length: navOptions.length }).map(() => createRef()),
    []
  );

  const handleClickOutside = (e) => {
    //this blocks the handleClickOutside from changing anything based on the mousedown event listener (set on the document via the useEffect below) if the mousedown event occurs inside one of the optionRefs / option buttons.
    if (optionRefs.every(ref => ref.current.contains(e.target) === false)) {
      setIsCollapsed(isCollapsed.map(el => true));
    }
  };

  useEffect(() => {
    if(isCollapsed.includes(false)){
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  });

  return (
    <div className="nav-bar" >
      {navOptions.map((option, index) => (
        <div
          key={"option-" + index}
          className={`option`}
          ref={optionRefs[index]}
        >
          <button
            onClick={() => {
              //handle click inside
               setIsCollapsed(
                isCollapsed.map((el, idx) => (idx === index) ? !el : true)
              );
            }}
          >
            {option.charAt(0).toUpperCase() + option.substring(1)}
          </button>
          <div
            className={`sub-menu ${
              !isCollapsed[index] ? "expanded" : "collapsed"
            }`}
          >
            {navSubOptions[option].map((subOption, i) => (
              <p className="sub-option" key={"sub-option-" + i}>
                {subOption}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavBar;

// const SampleComponent = () => {
//     const [clickedOutside, setClickedOutside] = useState(false);
//     const myRef = useRef();

//     const handleClickOutside = e => {
//         if (!myRef.current.contains(e.target)) {
//             setClickedOutside(true);
//         }
//     };

//     const handleClickInside = () => setClickedOutside(false);

//     useEffect(() => {
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => document.removeEventListener('mousedown', handleClickOutside);
//     });

//     return (
//         <button ref={myRef} onClick={handleClickInside}>
//             {clickedOutside ? 'Bye!' : 'Hello!'}
//         </button>
//     );
// };
