import { useState, useEffect } from "react";
import { useRef } from "react";
import { BiFullscreen, BiExitFullscreen } from "react-icons/bi";
import { useSelector } from "react-redux";
import {
  selectAllPosts,
  selectCurrentGenreName,
} from "../../components/posts/postsSlice";
//if type img return img, if type = video, return video
const FullScreenMode = ({ post }) => {
  const originPostRef = useRef();
  const fullScreenRef = useRef();
  const [fsModeIsActive, setFsModeIsActive] = useState(false);
  const currentGenreName = useSelector(selectCurrentGenreName);
  const currentPost = useSelector(selectAllPosts)[currentGenreName][post.postIndex];
  const mediaStyles =
    window.innerHeight >= window.innerWidth
      ? { height: "auto", width: `100%`}
      : { height: `100vh`, width: "auto" };
  const containerStyles = { minHeight: "100vh", minWidth: "100%"};
  const alt = post.title.toLowerCase();
  const getSrcUrl = () => {
    if (currentPost && currentPost.isGallery) {
      const currentGalleryImageIndex = currentPost.gallery.find(
        (galImg) => galImg.isCurrentlyDisplayed
      ).imgIndex;
      return post.gallery[currentGalleryImageIndex].srcUrl;
    } else {
      return post.srcUrl;
    }
  };

  useEffect(() => {
    if (fsModeIsActive) {
      fullScreenRef.current.scrollIntoView({
        behavior: "auto",
        block: "center",
        inline: "center",
      });
      document.body.classList.add("freeze-scroll");
      return () => {
        document.body.classList.remove("freeze-scroll");
      };
    }
  }, [fsModeIsActive]);

  const exitFsMode = () => {
    originPostRef.current.scrollIntoView({
      behavior: "auto",
      block: "end",
      inline: "center",
    });
    setFsModeIsActive(false);
  };
  return (
    <div>
      <button
        ref={originPostRef}
        className="fsm-button enter"
        onClick={() => {
          setFsModeIsActive(true);
        }}
      >
        <BiFullscreen className="icon" />
      </button>
      {fsModeIsActive && (
        <div
          className="full-screen-container"
          ref={fullScreenRef}
          style={containerStyles}
        >
          <div className="media-wrapper">
            <img
              src={getSrcUrl()}
              alt={alt}
              className={`media full-screen`}
              style={mediaStyles}
            />
          </div>
          <button
            onClick={exitFsMode}
            className="fsm-button exit"
            style={{ height: `100vh` }}
          >
            <BiExitFullscreen className="icon" />
          </button>
        </div>
      )}
    </div>
  );
};
export default FullScreenMode;
