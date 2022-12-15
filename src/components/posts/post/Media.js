import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { selectLoadingStatus } from "../../../features/apiRequests/redditApiRequestSlice";
import { getNewHeightBasedOnAspectRatio } from "../../../utils/helperFunctions";
import EmbedYoutube from "../../../features/embedYoutube/EmbedYoutube";
// import {FaRegImage} from "react-icons/fa"

const Media = ({ post, galleryStackClassName }) => {
  const src = post.srcUrl;
  const alt = post.title.toLowerCase();
  const mediaRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false);
  const [mediaHeight, setMediaHeight] = useState(0);
  const mediaWrapperStyles =
    mediaHeight > 0 ? { minHeight: `${mediaHeight}px`, width: "100%" } : {};
  const isLoading = useSelector(selectLoadingStatus);

  useEffect(() => {
    //make sure old posts clear and enter "loading mode" as soon as a new redditApiRequest is sent (i.e. when isLoading = true)
    if (isLoading) {
      setIsLoaded(false);
    }
  }, [isLoading]);


  useEffect(() => {
    //set width and height of galleries
    const width = mediaRef.current.offsetWidth;
    const aspectRatioQuotient = post.sizeData.aspectRatioQuotient;
    const height = getNewHeightBasedOnAspectRatio(aspectRatioQuotient, width);
    if (width > 0 && height > 0) {
      setMediaHeight(height);
    }
  }, [post.sizeData.aspectRatioQuotient, mediaHeight]);

  return (
    <div
      className={`media-wrapper ${
        !isLoaded && !post.isLocalVideo ? "loading" : ""
      } ${galleryStackClassName ? galleryStackClassName : ""}`}
      style={mediaWrapperStyles}
      ref={mediaRef}
    >
      <div
        className={`loading-message ${
          isLoaded || post.isLocalVideo ? "loaded" : ""
        }`}
      >
        {/* <FaRegImage className="icon" /> */}
        <h5>Loading...</h5>
      </div>
      {!post.isLocalVideo && !post.isYoutubeVideo ? (
        <img
          src={src}
          alt={alt}
          className={`media ${!isLoaded ? "loading" : "loaded"}`}
          onLoad={() => {
            setIsLoaded(true);
          }}
        />
      ) : post.isLocalVideo ? (
        <video controls width="100%" className={`media loaded`}>
          <source src={src + "/DASH_1080.mp4"} type="video/mp4" />
          <source src={src + "/DASH_720.mp4"} type="video/mp4" />
          <source src={src + "/DASH_480.mp4"} type="video/mp4" />
        </video>
      ) : post.isYoutubeVideo ? (
        <EmbedYoutube youtubeId={post.youtubeId} title={post.title} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Media;
