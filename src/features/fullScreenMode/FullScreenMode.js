import { useState, useEffect } from "react";
import { useRef } from "react";
import { BiFullscreen, BiExitFullscreen } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectAllPosts,
  selectCurrentGenreName,
} from "../../components/posts/postsSlice";
//if type img return img, if type = video, return video
const FullScreenMode = ({ post }) => {
  const navigate = useNavigate();
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
    if(fsModeIsActive){
      fullScreenRef.current.scrollIntoView({
        behavior: "auto",
        block: "center",
        inline: "center",
      });
    } else if (!fsModeIsActive) {

    }

    if(fsModeIsActive){
      const handleBrowserGoBack = (e) => {
        
        handleExitFsMode()

      };
      window.addEventListener('popstate', handleBrowserGoBack);
      return ()=> window.removeEventListener("popstate", handleBrowserGoBack)
    }
  }, [fsModeIsActive]);


  const handleEnterFsMode = () => { 
    document.body.style.overflow = "hidden";
    setFsModeIsActive(true);
    //the navigate call below adds a doubled layer of current genre gallery
    //this way, if the user chooses to navigate backward while in fullScreenMode,
    //then back still = current genre because of current genre was doubled
    //the issue with this solution is that currently all "forward" browser history gets cleared
    navigate();
  }

  const handleExitFsMode = () => {
    originPostRef.current.scrollIntoView({
      behavior: "auto",
      block: "end",
      inline: "center",
    });
    document.body.style.overflow = "";
    setFsModeIsActive(false);

  };

  return (
    <div>
      <button
        ref={originPostRef}
        className="fsm-button enter"
        onClick={handleEnterFsMode}
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
            onClick={handleExitFsMode}
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
