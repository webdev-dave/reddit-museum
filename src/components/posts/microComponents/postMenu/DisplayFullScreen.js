import { useEffect, useState } from "react";
import {BiFullscreen, BiExitFullscreen} from "react-icons/bi";

//if type img return img, if type = video, return video
const DisplayFullScreen = ({ post }) => {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => document.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    // 👇 add class to body element
    document.body.requestFullscreen();
    document.body.classList.add("freeze-scroll");
    return () => {
      document.body.classList.remove("freeze-scroll");
    };
  }, []);

  const alt = post.title.toLowerCase();
  return !post.isVideo ? (

      <div className="full-screen-container">
        <img src={post.srcUrl} alt={alt} className={`media full-screen`} />
        <button>
          <BiExitFullscreen/>
        </button>
      </div>

  ) : (
    <video controls width="100%" className={`media`}>
      <source src={post.srcUrl + "/DASH_1080.mp4"} type="video/mp4" />
      <source src={post.srcUrl + "/DASH_720.mp4"} type="video/mp4" />
      <source src={post.srcUrl + "/DASH_480.mp4"} type="video/mp4" />
    </video>
  );
};

export default DisplayFullScreen;
