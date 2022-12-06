import { useState } from "react";
import "./mobileMenuStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect } from "react";
import { useRef } from "react";
import NavBar from "../navBar/NavBar";

const MobileMenu = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [vh, setVh] = useState(window.innerHeight * 0.01);
  const headerHeight = "80";
  const sideMenuRef = useRef();
  const expandedClassName = isExpanded ? "expanded" : "";

  useEffect(() => {
    const handleResize = () => setVh(window.innerHeight * 0.01);
    window.addEventListener("resize", handleResize);
    return () => document.removeEventListener("resize", handleResize);
  });

  const handleClickOutside = (e) =>
    !sideMenuRef.current.contains(e.target) && setIsExpanded(false);
  useEffect(() => {
    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  });

  return (
    <div className="side-menu-container" ref={sideMenuRef}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={expandedClassName}
      >
        {isExpanded ? <FaTimes className="icon" /> : <FaBars className="icon" />}
      </button>
      <div
        className={`nav-bar-container ${expandedClassName}`}
      >
        <div
          className="nav-bar-wrapper"
          style={{ height: `calc(${100 * vh}px - ${headerHeight}px)` }}
        >
          <NavBar isColumn={true} />
        </div>

        {/* when viewport height changes (on mobile browser scroll when top url bar is hidden),
         there is a lag until the browser adjusts the menu height to the custom vh used above.
         The extraHeightDiv below, adds another 50vh to the navBarContainer.
         Since the navBarWrapper set to full screen height, the extraHeightDiv is usually not visible but appears directly below the viewport bottom.
         However when the above mentioned lag occurs, a chunk of the (blank) extraHeightDiv appears and effectively hides the issue.
         The navBar is wrapped in it's own standalone wrapper (navBarWrapper) and it is on this wrapper -
         that we handle all mobile menu overflow scroll behavior.
         (if the overflow scroll behavior was set on parent navBarContainer then the extra 50vh added via the extraHeightDiv would be factored into the overflow behavior which is undesired)
         */}
        <div className="extra-height"></div>
      </div>
    </div>
  );
};

export default MobileMenu;
