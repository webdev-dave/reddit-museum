import { useRef } from "react";
import { useEffect, useState } from "react";
import { BiFullscreen, BiExitFullscreen } from "react-icons/bi";
import { useSelector } from "react-redux";
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
  const containerStyles = window.innerWidth < 850 ? {height: viewportHeight, width: viewportWidth} : {height: "100%", width: "100%"}

const alt = post.title.toLowerCase();
  const getCurrentGalleryImgSrcUrl = () => {
    if (currentPost && currentPost.isGallery) {
      const currentGalleryImageIndex = currentPost.gallery.find(
        (galImg) => galImg.isCurrentlyDisplayed
      ).imgIndex;
      return post.gallery[currentGalleryImageIndex].srcUrl;
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
      fullScreenRef.current?.scrollIntoView({
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
    originRef.current?.scrollIntoView({
      behavior: "auto",
      block: "end",
      inline: "center",
    });
    setFsModeIsActive(false);
  };

  return (
    <div>
      <button
        ref={originRef}
        className="full-screen"
        onClick={() => {
          setFsModeIsActive(!fsModeIsActive);
        }}
      >
        <BiFullscreen className="icon" />
      </button>

      {fsModeIsActive && (
        <div className="full-screen-container" ref={fullScreenRef} style={containerStyles}>
          <div className="media-wrapper">
            {post.isVideo ? (
              ""
              // <video controls width="100%" className={`media`}>
              //   <source src={post.srcUrl + "/DASH_1080.mp4"} type="video/mp4" />
              //   <source src={post.srcUrl + "/DASH_720.mp4"} type="video/mp4" />
              //   <source src={post.srcUrl + "/DASH_480.mp4"} type="video/mp4" />
              // </video>
            ) : !post.isGallery ? (
              <img
                src={post.srcUrl}
                alt={alt}
                className={`media full-screen`}
                style={mediaStyles}
              />
            ) : post.isGallery ? (
              <img
                src={getCurrentGalleryImgSrcUrl()}
                alt={alt}
                className={`media full-screen`}
                style={mediaStyles}
              />
            ) : (
              ""
            )}
          </div>

          <button onClick={exitFsMode} className="full-screen">
            <BiExitFullscreen className="icon" />
          </button>
        </div>
      )}
    </div>
  );
};

export default FullScreenMode;
