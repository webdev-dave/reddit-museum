import { useRef } from "react";
import { useEffect, useState } from "react";
import { BiExitFullscreen} from "react-icons/bi";

//if type img return img, if type = video, return video
const DisplayFullScreen = ({ post }) => {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const alt = post.title.toLowerCase();
  const fullScreenRef = useRef();
  const exitFullscreen = () => {
    
  }

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => document.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    fullScreenRef.current?.scrollIntoView({behavior: 'auto', block: "center", inline: "center"});
    document.body.classList.add("freeze-scroll");
    return () => {
      document.body.classList.remove("freeze-scroll");
    };
  }, []);

  
  return !post.isVideo ? (

      <div className="full-screen-container" ref={fullScreenRef}>
        <img src={post.srcUrl} alt={alt} className={`media full-screen`} style={{height: `${viewportHeight}px`, width: "auto"}} />
        <button onClick={exitFullscreen}>
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
