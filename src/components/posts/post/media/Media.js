import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { selectLoadingStatus } from "../../../../features/apiRequests/redditApiRequestSlice";
import { getNewHeightBasedOnAspectRatio } from "../../../../utils/helperFunctions";
import EmbedYoutube from "../../../../features/embedYoutube/EmbedYoutube";
import MediaLoadingSkeleton from "./MediaLoadingSkeleton";

const Media = ({ media, galleryStackClassName }) => {
  const src = media.srcUrl;
  const alt = media.title.toLowerCase();
  const mediaRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false);
  const [mediaHeight, setMediaHeight] = useState(0);
  const containerStyles =
    !media.isYoutubeVideo && mediaHeight > 0
      ? { minHeight: `${mediaHeight}px` }
      : { minHeight: "25rem" };
  const isLoading = useSelector(selectLoadingStatus);

  const mediaClassName = `media ${!isLoaded ? "loading" : "loaded"}`;

  useEffect(() => {
    //make sure old posts clear and enter "loading mode" as soon as a new redditApiRequest is sent (i.e. when isLoading = true)
    if (isLoading) {
      setIsLoaded(false);
    }
  }, [isLoading]);

  const handleSetMediaHeight = () => {
    const width = mediaRef.current.offsetWidth;
    const aspectRatioQuotient = media.isGallery
      ? media.sizeData.tallestMediaSize.aspectRatioQuotient
      : media.sizeData.aspectRatioQuotient;
    const height = getNewHeightBasedOnAspectRatio(aspectRatioQuotient, width);
    setMediaHeight(height);
  };

  useEffect(() => {
    handleSetMediaHeight();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    //this updates media height if viewport height changes
    const handleResize = () => handleSetMediaHeight();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div
      className={`media-container ${
        isLoaded && !media.isYoutubeVideo ? "loaded" : ""
      } ${galleryStackClassName ? galleryStackClassName : ""}`}
      style={containerStyles}
      ref={mediaRef}
    >
      <MediaLoadingSkeleton
        media={media}
        containerStyles={containerStyles}
        isLoaded={isLoaded}
      />

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
