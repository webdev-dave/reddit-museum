import "./slider.css";
import { useState } from "react";
import Media from "../../components/posts/post/media/Media";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentGenrePosts, updateSliderMediaOnDisplay } from "../../components/posts/postsSlice";

const Slider = ({ propsPost }) => {
 
  const dispatch = useDispatch();
  const postIndex = propsPost.postIndex;
  const gallery = useSelector(selectCurrentGenrePosts)[postIndex].gallery;
  //console.log(propsPost.gallery);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideOutImgIndex, setSlideOutImgIndex] = useState("");
  /*   slideInClassName is preset to next-slide-in in order to fix a bug.
  By pre-setting slideInClassName, the main img starts off having been animated upon loading.
  This helps prevent the main-img from freezing (sometimes) upon the first iteration of clicking the next img-btn. */
  const [slideInClassName, setSlideInClassName] = useState("next-slide-in");
  const [slideOutClassName, setSlideOutClassName] = useState("");
  const finalImg = gallery.length - 1;

  

  const handleNext = () => {
    if (currentImageIndex === finalImg) {
      return;
    }
    setSlideOutImgIndex(currentImageIndex);
    setCurrentImageIndex(currentImageIndex + 1);
    setSlideInClassName("next-slide-in");
    setSlideOutClassName("next-slide-out");
    /*  the updateGallery dispatch is not necessary for local EmbedGal functionality however,
    it is useful for the global storeState to track gallery state.
    For example, FullScreenMode makes use of this in order to display 
    any given gallery's CURRENT IMAGE in full screen */
    dispatch(
      updateSliderMediaOnDisplay({
        postIndex: postIndex,
        currentImageIndex: currentImageIndex + 1,
        prevImageIndex: currentImageIndex,
      })
    );
  };

  const handlePrevious = () => {
    if (currentImageIndex === 0) {
      return;
    }

    setSlideOutImgIndex(currentImageIndex);
    setCurrentImageIndex(currentImageIndex - 1);
    setSlideInClassName("prev-slide-in");
    setSlideOutClassName("prev-slide-out");
    dispatch(
      updateSliderMediaOnDisplay({
        postIndex: postIndex,
        currentImageIndex: currentImageIndex - 1,
        prevImageIndex: currentImageIndex,
      })
    );
  };

  return (
    <div className="outer-gallery-container" >
      <div className="gallery-container">
        <button onClick={handlePrevious} className="previous-btn">
          <FaAngleLeft
            className={`icon left ${currentImageIndex === 0 ? "first" : ""}`}
          />
        </button>

        <div className="sliding-stack">
          {gallery.map((media, imgIndex) => {
            return (
              <Media
                media={media}
                key={`gal-${postIndex}-img${imgIndex}`}
                galleryStackClassName={` ${imgIndex === 0 ? "main" : ""} ${
                  imgIndex === currentImageIndex
                    ? `displayed ${slideInClassName}`
                    : imgIndex === slideOutImgIndex
                    ? "hidden " + slideOutClassName
                    : "hidden"
                }  `}
              />
            );
          })}
        </div>

        <button onClick={handleNext} className="next-btn">
          <FaAngleRight
            className={`icon right ${
              currentImageIndex === finalImg ? "last" : ""
            }`}
          />
        </button>
      </div>
      <div className="media-counter">
        {gallery.map((media, index) => (
          <div
            className={`circle-icon ${
              (index === currentImageIndex) ? "current" : ""
            }`}
            key={"circle-" + index}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
