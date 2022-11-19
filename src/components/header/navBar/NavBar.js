import { useState } from "react";
import "./navBarStyles.css";

const NavBar = () => {
  const navOptions = [
    "photography",
    "digital",
    "ai",
    "paintings",
    "cinema",
    "sculptures",
    "architecture",
  ];
  const navSubOptions = {
    photography: ["option-1", "option-2"],
    digital: ["option-1", "option-2"],
    ai: ["option-1", "option-2"],
    paintings: ["option-1", "option-2"],
    cinema: ["option-1", "option-2"],
    sculptures: ["option-1", "option-2"],
    architecture: ["option-1", "option-2"],
  };
  return (
    <div className="nav-bar">
      {navOptions.map((option, i) => (
        <div key={"option-"+i} className="option">
          {/* <h5>{option.charAt(0).toUpperCase() + option.substring(1)}</h5> */}
          <button >{option.charAt(0).toUpperCase() + option.substring(1)}</button>
          <div className="sub-menu">
          {
            navSubOptions[option].map((subOption, i) => (<p className="sub-option" key={"sub-option-"+i}>{subOption}</p>))
          }
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavBar;


















export function DropDown({ options, callback }) {
    const [selected, setSelected] = useState("");
    const [expanded, setExpanded] = useState(false);

    function expand() {
        setExpanded(true);
    }

    function close() {
        setExpanded(false);
    }

    function select(event) {
        const value = event.target.textContent;
        callback(value);
        close();
        setSelected(value);
    }

    return (
        <div className="dropdown" tabIndex={0} onFocus={expand} onBlur={close} >
            <div>{selected}</div>
            {expanded ? (
                <div className={"dropdown-options-list"}>
                    {options.map((O) => (
                        <div className={"dropdown-option"} onClick={select}>
                            {O}
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    );
}