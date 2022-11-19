import './embedGalStyles.css';
import { useState } from "react";
import Media from "../Media";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// import { useDispatch } from 'react-redux';
// import { updateSortedGalleries } from '../../main/mainSlice';


const EmbedGal = ({ post, postIndex }) => {
  // const dispatch = useDispatch();
  const gallery = post.gallery;


  //dispatch(updateSortedGalleries({value: gallery, postIndex: postIndex}));

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideOutImgIndex, setSlideOutImgIndex] = useState("");
  /*   slideInClassName is preset to next-slide-in in order to fix a bug.
  By pre-setting slideInClassName, the main img starts off having been animated upon loading.
  This helps prevent the main-img from freezing (sometimes) upon the first iteration of clicking the next img-btn. */
  const [slideInClassName, setSlideInClassName] = useState("next-slide-in");
  const [slideOutClassName, setSlideOutClassName] = useState("");
  const finalImg = gallery.length - 1;


  const handleNext = () => {
    if (currentImageIndex === finalImg){
      return;
    };
    setSlideOutImgIndex(currentImageIndex);
    setCurrentImageIndex(currentImageIndex + 1);
    setSlideInClassName("next-slide-in");
    setSlideOutClassName("next-slide-out");
  };

  const handlePrevious = () => {
    if (currentImageIndex === 0){
      return;
    }

    setSlideOutImgIndex(currentImageIndex);
    setCurrentImageIndex(currentImageIndex - 1);
    setSlideInClassName("prev-slide-in");
    setSlideOutClassName("prev-slide-out");
  };


  return (
    <div className="outer-gallery-container">
    <div className="gallery-container">
      <button onClick={handlePrevious}>
        <FaAngleLeft className={`icon left ${currentImageIndex === 0 ? 'first' : ''}`} />
        
      </button>
      <div className="sliding-stack">
        {gallery.map((media, index) => {
          const imgIndex = index;
          const fileExtension = media.fileType.slice(-3);
          const srcUrl = `https://i.redd.it/${media.id}.${fileExtension}`;

          return (
            <Media
              post={media}
              src={srcUrl}
              isVideo={media.isVideo}
              videoUrl={media.videoUrl}
              key={`gal-${postIndex}-img${imgIndex}`}
              className={` ${imgIndex === 0 ? "main" : ""} ${
                imgIndex === currentImageIndex
                  ? `displayed ${slideInClassName}`
                  : imgIndex === slideOutImgIndex
                  ? "hidden " + slideOutClassName
                  : "hidden"
              }  `}
              id={imgIndex}
            />
          );
        })}
      </div>
      <button onClick={handleNext}>
        <FaAngleRight className={`icon right ${currentImageIndex === finalImg ? 'last' : ''}`} />
      </button>
    </div>
        <div className="media-counter">
        {gallery.map((media, index) => (<div className={`circle-icon ${(index === currentImageIndex) ? "current" : ""}` } key={"circle-"+index}></div>))}
        </div>
    </div>
  );
};

export default EmbedGal;
