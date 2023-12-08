const Slide = ({ slide, index, updateSlideWidth }) => {
  return (
    <li className="slide">
      <p>{slide + " " + (index+1)}</p>
    </li>
  );
};

export default Slide;
