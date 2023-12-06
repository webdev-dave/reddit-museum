import "./galleriesShelf.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useRef } from "react";

const GalleriesShelf = () => {
  const slide = "slide";
  const slides = [];
  const slideWidth = 400;
  for (let i = 0; i < 7; i++) {
    slides.push(slide);
  };
  const sliderRef = useRef();

  const handleRightClick = () => {
    sliderRef.current.scrollLeft += slideWidth;
  }

  const handleLeftClick = () => {
    sliderRef.current.scrollLeft -= slideWidth;
  }


  console.log(slides);
  return (
    <div className="shelfContainer">
      <h2>Now on View</h2>
      <div className="sliderContainer">
        <button id="slideLeft" onClick={handleLeftClick}>{<FaAngleLeft className="icon" />}</button>
        <ul className="slider" ref={sliderRef}>
          {slides.map((s, index) => (
            <li className="slide" key={"slide-" + index}>
              <p>{s}</p>
            </li>
          ))}
        </ul>
        <button id="slideRight" onClick={handleRightClick}>{<FaAngleRight className="icon" />}</button>
      </div>
    </div>
  );
};

export default GalleriesShelf;
