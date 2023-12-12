import "./slider.css";
import { useState } from "react";
import Media from "../../components/posts/post/media/Media";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentGenrePosts,
  updateSliderMediaOnDisplay,
} from "../../components/posts/postsSlice";

const Slider = ({ propsPost }) => {
  const dispatch = useDispatch();
  const postIndex = propsPost.postIndex;
  const gallery = useSelector(selectCurrentGenrePosts)[postIndex].gallery;
  const finalImg = gallery.length - 1;
  /*   sliderState.slideInClassName is preset to next-slide-in in order to fix a bug.
  By pre-setting slideInClassName, the main img starts off having been animated upon loading.
  This helps prevent the main-img from freezing (sometimes) upon the first iteration of clicking the next img-btn. */
  const [sliderState, setSliderState] = useState({
    currentImgIndex: 0,
    slideOutImgIndex: "",
    slideInClassName: "next-slide-in",
    slideOutClassName: "",
  });

  const handleNext = () => {
    if (sliderState.currentImgIndex === finalImg) {
      return;
    }

    const prevImgIndex = sliderState.currentImgIndex;
    setSliderState({
      currentImgIndex: prevImgIndex + 1,
      slideOutImgIndex: prevImgIndex,
      slideInClassName: "next-slide-in",
      slideOutClassName: "next-slide-out",
    });


    /*  the updateGallery dispatch is not necessary for local EmbedGal functionality however,
    it is useful for the global storeState to track gallery state.
    For example, FullScreenMode makes use of this in order to display 
    any given gallery's CURRENT IMAGE in full screen */
    dispatch(
      updateSliderMediaOnDisplay({
        postIndex: postIndex,
        currentImageIndex: prevImgIndex + 1,
        prevImageIndex: prevImgIndex,
      })
    );
  };

  const handlePrevious = () => {
    if (sliderState.currentImgIndex === 0) {
      return;
    }

    const prevImgIndex = sliderState.currentImgIndex;
    setSliderState({
      currentImgIndex: prevImgIndex - 1,
      slideOutImgIndex: prevImgIndex,
      slideInClassName: "prev-slide-in",
      slideOutClassName: "prev-slide-out",
    });

    dispatch(
      updateSliderMediaOnDisplay({
        postIndex: postIndex,
        currentImageIndex: prevImgIndex - 1,
        prevImageIndex: prevImgIndex,
      })
    );
  };

  return (
    <div className="outer-gallery-container">
      <div className="gallery-container">
        <button onClick={handlePrevious} className="previous-btn">
          <FaAngleLeft
            className={`icon left ${
              sliderState.currentImgIndex === 0 ? "first" : ""
            }`}
          />
        </button>

        <div className="sliding-stack">
          {gallery.map((media, imgIndex) => {
            return (
              <Media
                media={media}
                key={`slider-${postIndex}-img${imgIndex}`}
                galleryStackClassName={` ${imgIndex === 0 ? "main" : ""} ${
                  imgIndex === sliderState.currentImgIndex
                    ? `displayed ${sliderState.slideInClassName}`
                    : imgIndex === sliderState.slideOutImgIndex
                    ? "hidden " + sliderState.slideOutClassName
                    : "hidden"
                }  `}
              />
            );
          })}
        </div>

        <button onClick={handleNext} className="next-btn">
          <FaAngleRight
            className={`icon right ${
              sliderState.currentImgIndex === finalImg ? "last" : ""
            }`}
          />
        </button>
      </div>
      <div className="media-counter">
        {gallery.map((media, index) => (
          <div
            className={`circle-icon ${
              index === sliderState.currentImgIndex ? "current" : ""
            }`}
            key={"circle-" + index}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
