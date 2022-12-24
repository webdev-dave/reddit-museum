import { useRef } from "react";
import { useEffect, useState } from "react";
import { BiFullscreen, BiExitFullscreen } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectAllPosts,
  selectCurrentGenreName,
} from "../../components/posts/postsSlice";

//if type img return img, if type = video, return video
const FullScreenMode = ({ post }) => {
  const originRef = useRef();
  const fullScreenRef = useRef();
  const [fsModeIsActive, setFsModeIsActive] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const currentGenreName = useSelector(selectCurrentGenreName);
  const currentPost = useSelector(selectAllPosts)[currentGenreName][post.postIndex];
  const mediaStyles =
    window.innerHeight >= window.innerWidth
      ? { height: "auto", width: `${viewportWidth}px` }
      : { height: `${viewportHeight}px`, width: "auto" };
  const containerStyles = window.innerWidth < 850 ? { height: viewportHeight, width: viewportWidth } : { height: "100%", width: "100%" }

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
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => document.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    if (fsModeIsActive) {
      fullScreenRef.current.scrollIntoView({
        behavior: "auto",
        block: "center",
        inline: "center",
      });
      document.body.setAttribute("id", "freeze-scroll");
      return () => {
        document.body.removeAttribute("id");
      };
    }
  }, [fsModeIsActive]);

  const exitFsMode = () => {
    originRef.current?.scrollIntoView({
      behavior: "auto",
      block: "end",
      inline: "center",
    });
    setFsModeIsActive(false);
  };

  return (
    <div>
      <Link to={`fsm_${"l"}`}></Link>
      <button
        ref={originRef}
        className="full-screen enter"
        onClick={() => {
          setFsModeIsActive(!fsModeIsActive);
        }}
      >
        <BiFullscreen className="icon" />
      </button>

      {fsModeIsActive && (
        <div className="full-screen-container" ref={fullScreenRef} style={containerStyles}>
          <div className="media-wrapper">
            <img
              src={getSrcUrl()}
              alt={alt}
              className={`media full-screen`}
              style={mediaStyles}
            />
          </div>

          <button onClick={exitFsMode} className="full-screen exit">
            <BiExitFullscreen className="icon" />
          </button>
        </div>
      )}
    </div>
  );
};

export default FullScreenMode;
