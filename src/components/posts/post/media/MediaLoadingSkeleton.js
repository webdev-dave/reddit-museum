import { FaRegImage, FaFilm, FaYoutube } from "react-icons/fa";

const MediaLoadingSkeleton = ({ media, containerStyles, isLoaded }) => {
  const loadingIcon = media.isLocalVideo ? (
    <FaFilm />
  ) : media.isYoutubeVideo ? (
    <FaYoutube />
  ) : (
    <FaRegImage />
  );
  return (
    <div
      style={containerStyles}
      className={`loading-skeleton-container loading-skeleton-animation ${
        isLoaded && !media.isYoutubeVideo ? "loaded" : ""
      }`}
    >
      <div className="icon-wrapper">{loadingIcon}</div>
      <h5 className="loading-message">Loading...</h5>
    </div>
  );
};

export default MediaLoadingSkeleton;
