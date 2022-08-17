import { useState } from "react";
import Tile from "./Tile";
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
  const finalImg = gallery.length - 1;

  const handleNext = () => {
    if (currentImageIndex === finalImg) return;
    setCurrentImageIndex(currentImageIndex + 1);
  };

  const handlePrevious = () => {
    if (currentImageIndex === 0) return;
    setCurrentImageIndex(currentImageIndex - 1);
  };

  return (
    <div className="gallery-container">
      <button onClick={handlePrevious}>
        <FaAngleLeft className="icon" />
      </button>
      {gallery.map((media, index) => {
        const imgIndex = index;
        const fileExtension = media.fileType.slice(-3);
        const srcUrl = `https://i.redd.it/${media.id}.${fileExtension}`;

        return (
          <Tile
            src={srcUrl}
            alt="mainImg"
            isVideo={media.isVideo}
            videoUrl={media.videoUrl}
            key={`gal-${postIndex}-img${imgIndex}`}
            className={
              imgIndex === currentImageIndex ? "current-media" : "hidden"
            }
            id={imgIndex}
          />
        );
      })}

      <button onClick={handleNext}>
        <FaAngleRight className="icon" />
      </button>
    </div>
  );
};

export default EmbedGal;
