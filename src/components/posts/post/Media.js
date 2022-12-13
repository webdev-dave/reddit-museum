import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const Media = ({ post, src }) => {
  const alt = post.title.toLowerCase();
  const [isLoaded, setIsLoaded] = useState(false);
  const [mediaWidth, setMediaWidth] = useState(0);
  const mediaRef = useRef();
  const handleLoadingCompleted = () => {
    setIsLoaded(true);
    //console.log("loading complete");
  };

  useEffect(() => {
    setMediaWidth(mediaRef.current.offsetWidth);
  }, [mediaRef, mediaWidth]);
  //console.log(mediaWidth);

  return !post.isVideo ? (
    <div>
      {" "}
      <img
        src={src}
        alt={alt}
        className={`media ${!isLoaded ? "loading" : "loaded"} }`}
        ref={mediaRef}
        onLoad={handleLoadingCompleted}
      />
    </div>
  ) : (
    <video controls width="100%" className={`media`}>
      <source src={src + "/DASH_1080.mp4"} type="video/mp4" />
      <source src={src + "/DASH_720.mp4"} type="video/mp4" />
      <source src={src + "/DASH_480.mp4"} type="video/mp4" />
    </video>
  );
};

export default Media;
