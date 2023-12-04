import "./galleriesShelf.css";

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
      <ul className="slider">{slides.map((s, index) => (
        <li className="slide" key={"slide-" + index}>{s}</li>
      ))}</ul>
    </div>
  );
};

export default GalleriesShelf;
