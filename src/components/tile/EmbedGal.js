import '../../assets/embedGal.css';
import { useState } from "react";
import Media from "./Media";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const EmbedGal = ({ child, postIndex }) => {
  const initialGallery = child.initialGallery;
  /*   
  - 1 the map function bellow overwrites the initial store gallery (which comes in a randomized order) and reorganizes all imgObj based on the default redditGalleryOrder (as it appears on reddit).
  - 2 child.redditGalleryOrder is an array of gallery-media-id's in default reddit order
  - 3 the map function below maps over all the id's inside redditGalleryOrder, searches through the initial store gallery (that comes in a randomized order) and finds the the img object that has a matching id
  - 4 once the matching imgObj is found, it is pushed into the new gallery array only this time, all the imgObj appear in order of redditGalleryOrder */
  const gallery = child.redditGalleryOrder.map((orderId, index) => {
    const newImgObj = initialGallery.find((imgObj) => imgObj.id === orderId);

    return { ...newImgObj, imgIndex: index };
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideOutImgIndex, setSlideOutImgIndex] = useState("");
  /*   slideInClassName is preset to next-slide-in in order to fix a bug.
  By pre-setting slideInClassName, the main img starts off having been animated upon loading.
  This helps prevent the main-img from freezing (sometimes) upon the first iteration of clicking the next img-btn. */
  const [slideInClassName, setSlideInClassName] = useState("next-slide-in");
  const [slideOutClassName, setSlideOutClassName] = useState("");
  const finalImg = gallery.length - 1;

  const handleNext = () => {
    if (currentImageIndex === finalImg) return;
    setSlideOutImgIndex(currentImageIndex);
    setCurrentImageIndex(currentImageIndex + 1);
    setSlideInClassName("next-slide-in");
    setSlideOutClassName("next-slide-out");
  };

  const handlePrevious = () => {
    if (currentImageIndex === 0) return;
    setSlideOutImgIndex(currentImageIndex);
    setCurrentImageIndex(currentImageIndex - 1);
    setSlideInClassName("prev-slide-in");
    setSlideOutClassName("prev-slide-out");
  };

  return (
    <div className="gallery-container">
      <button onClick={handlePrevious}>
        <FaAngleLeft className="icon" />
      </button>
      <div className="sliding-stack">
        {gallery.map((media, index) => {
          const imgIndex = index;
          const fileExtension = media.fileType.slice(-3);
          const srcUrl = `https://i.redd.it/${media.id}.${fileExtension}`;

          return (
            <Media
              src={srcUrl}
              alt="mainImg"
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
        <FaAngleRight className="icon" />
      </button>
    </div>
  );
};

export default EmbedGal;
