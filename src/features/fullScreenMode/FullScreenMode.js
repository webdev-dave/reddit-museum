import { useRef } from "react";
import { useEffect, useState } from "react";
import { BiFullscreen, BiExitFullscreen } from "react-icons/bi";

//if type img return img, if type = video, return video
const FullScreenMode = ({ post }) => {
  const [fsModeIsActive, setFsModeIsActive] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const originRef = useRef();
  const alt = post.title.toLowerCase();
  const fullScreenRef = useRef();
  const exitFsMode = () =>{
    originRef.current?.scrollIntoView({
      behavior: "auto",
      block: "end",
      inline: "center",
    });
    setFsModeIsActive(false);
  } 

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => document.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    if(fsModeIsActive){
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

  return (
    <div>
      <button
        ref={originRef}
        onClick={() => {
          setFsModeIsActive(!fsModeIsActive);
        }}
      >
        <BiFullscreen className="icon" />
      </button>

      {fsModeIsActive && !post.isVideo ? (
        <div className="full-screen-container" ref={fullScreenRef}>
          <img
            src={post.srcUrl}
            alt={alt}
            className={`media full-screen`}
            style={{ height: `${viewportHeight}px`, width: "auto" }}
          />
          <button onClick={exitFsMode}><BiExitFullscreen/></button>
        </div>
      ) : fsModeIsActive && post.isVideo ? (
        <video controls width="100%" className={`media`}>
          <source src={post.srcUrl + "/DASH_1080.mp4"} type="video/mp4" />
          <source src={post.srcUrl + "/DASH_720.mp4"} type="video/mp4" />
          <source src={post.srcUrl + "/DASH_480.mp4"} type="video/mp4" />
        </video>
      ) : (
        null
      )}
    </div>
  );
};

export default FullScreenMode;
