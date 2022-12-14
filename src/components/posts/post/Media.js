import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { getNewHeightBasedOnAspectRatio } from "../../../utils/helperFunctions";

const Media = ({ post, src, galleryStackClassName }) => {
  const alt = post.title.toLowerCase();
  const mediaRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false);
  const [mediaHeight, setMediaHeight] = useState(0);
  const mediaWrapperStyles = (mediaHeight > 0) ? { minHeight: `${mediaHeight}px`, width: "100%" } : {};
  



  
  useEffect(()=>{
    setIsLoaded(false);
  }, [src])

  useEffect(() => {
    
    const width = mediaRef.current.offsetWidth;
    const aspectRatioQuotient = post.sizeData.aspectRatioQuotient;
    const height = getNewHeightBasedOnAspectRatio(aspectRatioQuotient, width);


    //get width of galleries
    if (width > 0 && height > 0) {
      //console.log(post);
      //console.log("width: " + width + " height: " + height);

      // console.log(height);
      setMediaHeight(height);
      //setMediaWidth(width);
    }
  }, [post.sizeData.aspectRatioQuotient, mediaHeight]);
 
  return (
    <div
      className={`media-wrapper ${(!isLoaded && !post.isVideo) ? "loading" : ""} ${galleryStackClassName ? galleryStackClassName : ""}`}
      style={mediaWrapperStyles}
      ref={mediaRef}
    >
      <div className={`loading-message ${(isLoaded || post.isVideo) ? "loaded" : ""}`}>
        <h5>Loading...</h5>
      </div>
      {!post.isVideo ? (
        <img
          src={src}
          alt={alt}
          className={`media ${!isLoaded ? "loading" : "loaded"}`}
          onLoad={()=>{setIsLoaded(true);}}
        />
      ) : (
        <video controls width="100%" className={`media loaded`}>
          <source src={src + "/DASH_1080.mp4"} type="video/mp4" />
          <source src={src + "/DASH_720.mp4"} type="video/mp4" />
          <source src={src + "/DASH_480.mp4"} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default Media;
