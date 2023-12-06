import "./galleriesShelf.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
//import { useState, useRef } from "react";

//solution for building a scroller lies in using document.getElementById("slider").scrollLeft += 20;

const GalleriesShelf = () => {
  const slide = "slide";
  const slides = [];
  for (let i = 0; i < 5; i++) {
    slides.push(slide);
  }
  console.log(slides);
  return (
    <div className="shelfContainer">
      <h2>Now on View</h2>
      <div className="sliderContainer">
        <button id="slideLeft">{<FaAngleLeft className="icon" />}</button>
        <ul className="slider">
          {slides.map((s, index) => (
            <li className="slide" key={"slide-" + index}>
              <p>{s}</p>
            </li>
          ))}
        </ul>
        <button id="slideRight">{<FaAngleRight className="icon" />}</button>
      </div>
    </div>
  );
};

export default GalleriesShelf;
