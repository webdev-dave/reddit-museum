import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { selectLoadingStatus } from "../../../features/apiRequests/redditApiRequestSlice";
import { getNewHeightBasedOnAspectRatio } from "../../../utils/helperFunctions";
import EmbedYoutube from "../../../features/embedYoutube/EmbedYoutube";
import { FaRegImage, FaFilm, FaYoutube } from "react-icons/fa";

const Media = ({ media, galleryStackClassName }) => {
  const src = media.srcUrl;
  const alt = media.title.toLowerCase();
  const mediaRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false);
  const [mediaHeight, setMediaHeight] = useState(0);
  const mediaWrapperStyles = (!media.isYoutubeVideo && mediaHeight > 0) ? { minHeight: `${mediaHeight}px`, width: "100%" } : {};
  
    
  //post.isGallery && console.log(mediaHeight);
  const isLoading = useSelector(selectLoadingStatus);
  const loadingIcon = media.isLocalVideo ? (
    <FaFilm />
  ) : media.isYoutubeVideo ? (
    <FaYoutube />
  ) : (
    <FaRegImage />
  );
  const mediaClassName = `media ${!isLoaded ? "loading" : "loaded"}`;

  useEffect(() => {
    //make sure old posts clear and enter "loading mode" as soon as a new redditApiRequest is sent (i.e. when isLoading = true)
    if (isLoading) {
      setIsLoaded(false);
    }
  }, [isLoading]);

  const handleSetMediaHeight = () => {
    const width = mediaRef.current.offsetWidth;
    const aspectRatioQuotient = media.isGallery ? media.sizeData.tallestMediaSize.aspectRatioQuotient : media.sizeData.aspectRatioQuotient;
    const height = getNewHeightBasedOnAspectRatio(aspectRatioQuotient, width);
    setMediaHeight(height);
  }

  useEffect(()=>{
    handleSetMediaHeight();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    //this updates media height if viewport height changes
    const handleResize = () => handleSetMediaHeight();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize)
  });



  return (
    <div
      className={`media-container ${(isLoaded && !media.isYoutubeVideo) ? "loaded" : ""} ${
        galleryStackClassName ? galleryStackClassName : ""
      }`}
      style={mediaWrapperStyles}
      ref={mediaRef}
    >
      <div className={`loading-skeleton-container loading-skeleton-animation ${(isLoaded && !media.isYoutubeVideo) ? "loaded" : ""}`}>
        <div className="icon-wrapper">{loadingIcon}</div>
        <h5 className="loading-message">Loading...</h5>
      </div>
      {!media.isLocalVideo && !media.isYoutubeVideo ? (
        <img
          src={src}
          alt={alt}
          className={mediaClassName}
          onLoad={() => setIsLoaded(true)}
        />
      ) : media.isLocalVideo ? (
        <video
          controls
          width="100%"
          className={mediaClassName}
          onCanPlay={() => setIsLoaded(true)}
        >
          <source src={src + "/DASH_1080.mp4"} type="video/mp4" />
          <source src={src + "/DASH_720.mp4"} type="video/mp4" />
          <source src={src + "/DASH_480.mp4"} type="video/mp4" />
        </video>
      ) : media.isYoutubeVideo ? (
        <EmbedYoutube
          youtubeId={media.youtubeId}
          title={media.title}
          mediaClassName={`media`}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Media;
