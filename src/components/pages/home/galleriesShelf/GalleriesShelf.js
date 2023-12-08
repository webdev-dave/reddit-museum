import "./galleriesShelf.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import Slide from "./Slide/Slide";

//To Do
//Rename Galleries Shelf?

const GalleriesShelf = () => {
  const slide = "slide";
  const slides = [];
  const [slideWidth, setSlideWidth] = useState("400");
  const sliderRef = useRef();

  
  useEffect(()=>{
    const updatedSlideWidth = sliderRef.current.scrollWidth / slides.length;
    setSlideWidth(updatedSlideWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  const updateSlideWidth = (updatedSlideWidth) => {
    setSlideWidth(updatedSlideWidth);
  }

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
            <Slide slide={s} index={index} key={"slide-" + index} updateSlideWidth={updateSlideWidth} />
          ))}
        </ul>
        <button id="slideRight" onClick={handleRightClick}>{<FaAngleRight className="icon" />}</button>
      </div>
    </div>
  );
};

export default GalleriesShelf;
