import "./galleriesShelf.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useRef } from "react";

//To Do:
//need to animate scroll button sliding direction so that the animation "feels" correct

const GalleriesShelf = () => {
  const slide = "slide";
  const slides = [];
  const slideWidth = 400;
  const sliderRef = useRef();

  for (let i = 0; i < 7; i++) {
    slides.push(slide);
  };

  const handleRightClick = () => {
    sliderRef.current.scrollBy({
      left: slideWidth,
      top: 0,
      behavior: 'smooth'
  });
  }

  const handleLeftClick = () => {
    sliderRef.current.scrollBy({
      left: -slideWidth,
      top: 0,
      behavior: 'smooth'
  });
  }

  return (
    <div className="shelfContainer">
      <h2>Now on View</h2>
      <div className="sliderContainer">
        <button id="slideLeft" onClick={handleLeftClick}>{<FaAngleLeft className="icon" />}</button>
        <ul className="slider" ref={sliderRef}>
          {slides.map((s, index) => (
            <li className="slide" key={"slide-" + index}>
              <p>{s +" "+ index}</p>
            </li>
          ))}
        </ul>
        <button id="slideRight" onClick={handleRightClick}>{<FaAngleRight className="icon" />}</button>
      </div>
    </div>
  );
};

export default GalleriesShelf;
