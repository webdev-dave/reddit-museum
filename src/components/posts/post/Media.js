import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { getNewHeightBasedOnAspectRatio } from "../../../utils/helperFunctions";

const Media = ({ post, src, className }) => {
  const alt = post.title.toLowerCase();
  const [isLoaded, setIsLoaded] = useState(false);
  const [mediaHeight, setMediaHeight] = useState(0);
  const mediaRef = useRef();
  



  const handleLoadingCompleted = () => {
    setIsLoaded(true);
  };
  
  useEffect(()=>{
    setIsLoaded(false);
  }, [src])

  useEffect(() => {
    
    const width = mediaRef.current.offsetWidth;
    const aspectRatioQuotient = post.sizeData.aspectRatioQuotient;
    const height = getNewHeightBasedOnAspectRatio(aspectRatioQuotient, width);

    if (width > 0 && height > 0) {
      //console.log(post);
      //console.log("width: " + width + " height: " + height);
      setMediaHeight(height);
      //setMediaWidth(width);
    }
  }, [post.sizeData.aspectRatioQuotient]);

  return (
    <div
      className={`media-wrapper ${!isLoaded ? "loading" : ""}`}
      style={{ height: `${mediaHeight}px`, width: "100%" }}
      ref={mediaRef}
    >
      <div className={`loading-message ${isLoaded ? "hide" : ""}`}>
        <h5>Loading...</h5>
      </div>
      {!post.isVideo ? (
        <img
          src={src}
          alt={alt}
          className={`media ${!isLoaded ? "loading" : "loaded"} ${
            className ? className : ""
          }`}
          id={"media"}
          onLoad={handleLoadingCompleted}
        />
      ) : (
        <video controls width="100%" className={`media`} id={"media"}>
          <source src={src + "/DASH_1080.mp4"} type="video/mp4" />
          <source src={src + "/DASH_720.mp4"} type="video/mp4" />
          <source src={src + "/DASH_480.mp4"} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default Media;
