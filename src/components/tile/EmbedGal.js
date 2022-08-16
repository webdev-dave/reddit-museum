import { useState } from "react";
import Tile from "./Tile";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const EmbedGal = ({ child, index }) => {
  let gallery = child.gallery;
  //add gallery-img-objects by order of default reddit order
  const redditGalleryOrder = child.redditGalleryOrder.map((orderId, i) => {
    const newImgObj = gallery.find((imgObj) => imgObj.id === orderId);
    return { ...newImgObj, imgIndex: i };
  });
  gallery = redditGalleryOrder;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  let finalImg = gallery.length - 1;
  let imgId = gallery[currentImageIndex].id;
  let imgIndex = gallery[currentImageIndex].imgIndex;
  let fileExtension = gallery[currentImageIndex].fileType.slice(-3);
  let srcUrl = `https://i.redd.it/${imgId}.${fileExtension}`;

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
        <FaAngleLeft className="icon" />{" "}
      </button>
      <Tile
        src={srcUrl}
        alt="mainImg"
        id={imgIndex}
        isVideo={gallery[currentImageIndex].isVideo}
        videoUrl={gallery[currentImageIndex].videoUrl}
        key={`gal-${index}-img${imgIndex}`}
      />
      <button onClick={handleNext}>
        <FaAngleRight className="icon" />{" "}
      </button>
    </div>
  );

  // return gallery.map((media, i) => {
  //   const imgId = media.id;
  //   const fileExtension = "." + media.fileType.slice(-3);
  //   //console.log(`https://i.redd.it/${imgId}${fileExtension}`);
  //   return (
  //     <Tile
  //       src={`https://i.redd.it/${imgId}${fileExtension}`}
  //       alt="mainImg"
  //       id={i}
  //       isVideo={child.isVideo}
  //       videoUrl={child.videoUrl}
  //       key={`gal-${index}-img${i}`}
  //     />
  //   );
  // });
};

export default EmbedGal;
