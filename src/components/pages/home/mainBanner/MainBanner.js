import thumbnail from "../../../../assets/localMedia/video_banner_thumbnail.png";
import videoBanner from "../../../../assets/localMedia/video_banner.mp4";
import "./mainBanner.css";
import { useState } from "react";
// import { FaExclamationTriangle } from "react-icons/fa";

const MainBanner = () => {
  const [videoIsLoaded, setVideoIsLoaded] = useState(false);

  return (
    <div className="main-banner">
      {/* <img src={headerImg} alt="" /> */}
      <div id="videoContainer">
        <img
          src={thumbnail}
          alt="video banner thumbnail"
          id="thumbnail"
          className={videoIsLoaded ? "hide" : ""}
        />
        <video muted autoPlay loop src={videoBanner} type="video/mp4" onCanPlay={()=>setVideoIsLoaded(true)}></video>
      </div>

      <div id="headerContainer">
        <h1>Welcome to the Reddit Museum</h1>
      </div>

      {/* <div className="userAlert">
        <FaExclamationTriangle className="icon" />
        <p>
          Project is currently in development mode and is updated frequently.
          All features are subject to sudden changes.
        </p>
      </div> */}
    </div>
  );
};

export default MainBanner;
