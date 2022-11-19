import React from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";
import "./navBarStyles.css";

const NavBar = () => {
const [isCollapsed, setIsCollapsed] = useState(true);
  const navBarRef = useRef();
  const navOptions = [
    "photography",
    "digital",
    "ai",
    "paintings",
    "cinema",
    "sculptures",
    "architecture",
  ];
  const optionRefs = useRef([...new Array(navOptions.length)].map(() => React.createRef()));

  const navSubOptions = {
    photography: ["option-1", "option-2"],
    digital: ["option-1", "option-2"],
    ai: ["option-1", "option-2"],
    paintings: ["option-1", "option-2"],
    cinema: ["option-1", "option-2"],
    sculptures: ["option-1", "option-2"],
    architecture: ["option-1", "option-2"],
  };

  const handleClickInside = () => {
    setIsCollapsed(isCollapsed ? false : true);
  };
  const handleClickOutside = (e) => {
    if(!navBarRef.current.contains(e.target)){
        setIsCollapsed(true);
    }
    
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  
  return (
    <div className="nav-bar" ref={navBarRef}>
      {navOptions.map((option, i) => (
        <div key={"option-" + i} className={`option`} ref={optionRefs.current[i]}>
          {/* <h5>{option.charAt(0).toUpperCase() + option.substring(1)}</h5> */}
          <button onClick={handleClickInside}>
            {option.charAt(0).toUpperCase() + option.substring(1)}
          </button>
          <div className={`sub-menu ${!isCollapsed ? "expanded" : "collapsed"}`}>
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

