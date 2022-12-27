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
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const currentGenreName = useSelector(selectCurrentGenreName);
  const currentPost =
    useSelector(selectAllPosts)[currentGenreName][post.postIndex];
  const mediaStyles =
    window.innerHeight >= window.innerWidth
      ? { height: "auto", width: `${viewportWidth}px` }
      : { height: `${viewportHeight}px`, width: "auto" };

  const containerStyles =
    window.innerWidth < 850
      ? { minHeight: `${viewportHeight}px`, minWidth: `${viewportWidth}px` }
      : { minHeight: "100%", minWidth: "100%" };
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
  const handleResize = () => {
    setViewportHeight(window.innerHeight);
    setViewportWidth(window.innerWidth);
  };

  useEffect(()=>{
    //this useEffect must be able to fire multiple times when fsModeIsActive state is true.
    //This is because, the event listener below (besides for handling a viewport resize, also) handles a resize on mobile when the address bar is hidden/revealed
    if(fsModeIsActive){
      window.addEventListener("resize", handleResize);
      return ()=> document.removeEventListener("resize", handleResize);
    }
  })

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
          <button onClick={exitFsMode} className="fsm-button exit" style={{height: `${viewportHeight}px`}}>
            <BiExitFullscreen className="icon" />
          </button>
        </div>
      )}
    </div>
  );
};
export default FullScreenMode;

// //if type img return img, if type = video, return video
// const FullScreenMode = ({ post }) => {

//   const currentGenreName = useSelector(selectCurrentGenreName);
//   const currentPost =
//     useSelector(selectAllPosts)[currentGenreName][post.postIndex];
//   // const getSrcUrl = () => {
//   //   if (currentPost && currentPost.isGallery) {
//   //     const currentGalleryImageIndex = currentPost.gallery.find(
//   //       (galImg) => galImg.isCurrentlyDisplayed
//   //     ).imgIndex;
//   //     return post.gallery[currentGalleryImageIndex].srcUrl;
//   //   } else {
//   //     return post.srcUrl;
//   //   }
//   // };
//   // const getMediaId = (srcUrl) => {
//   //   const splitUrl = srcUrl.split("/");
//   //   const urlType = splitUrl[2].split(".")[1];
//   //   //const alt = post.title.toLowerCase().split(" ").join("_");
//   //   return `${urlType}-${splitUrl.slice(-1)}`;
//   // };

//   const handleEnterFsm = () => {

//   }

//   return (
//     // <button className="full-screen enter" id={activeId} onClick={()=>setActiveId("active")}>
//     //   <Link to={`fsm/${getMediaId(getSrcUrl())}`}>
//     //     <BiFullscreen className="icon" />
//     //   </Link>
//     // </button>
//     <button
//       className="full-screen enter"

//       onClick={handleEnterFsm}
//     >
//       <BiFullscreen className="icon" />
//     </button>
//   );
// };

// export default FullScreenMode;
