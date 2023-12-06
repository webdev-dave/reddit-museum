import "./galleriesShelf.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const GalleriesShelf = () => {
  const slide = "slide";
  const slides = [];
  for (let i = 0; i < 5; i++) {
    slides.push(slide);
  }
  console.log(slides);
  return (
    <div className="sliderWrapper">
      <h2>Now on View</h2>
      <button id="slideLeft">{<FaAngleLeft className="icon" />}</button>
      <ul className="slider">
        {slides.map((s, index) => (
          <li className="slide" key={"slide-" + index}>
            {s}
          </li>
        ))}
      </ul>
      <button id="slideRight">{<FaAngleRight className="icon" />}</button>
    </div>
  );
};

export default GalleriesShelf;
