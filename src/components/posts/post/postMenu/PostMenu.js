import "./postMenuStyles.css";
import FullScreenMode from "../../../../features/fullScreenMode/FullScreenMode";
import { removeLongWords } from "../../../../utils/helperFunctions";
import { useEffect, useState } from "react";
import { FaShareAlt } from "react-icons/fa";

const PostMenu = ({ post }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shareButtonIsActive, setShareButtonIsActive] = useState(false);
  const credits = post.credits;
  useEffect(() => {
    post.title ? setIsLoaded(true) : setIsLoaded(false);
  }, [post.title]);

  const handleShareButton = () => {
    navigator.clipboard.writeText(post.srcUrl);
    setShareButtonIsActive(true);
  };
  console.log(shareButtonIsActive);

  useEffect(() => {
    if (shareButtonIsActive) {
      const resetShareButtonState = setTimeout(() => {
        setShareButtonIsActive(false);
      }, 1000);
      return clearTimeout(() => setShareButtonIsActive(resetShareButtonState));
    }

    //return clearTimeout(timeout);
  }, [shareButtonIsActive]);

  return (
    <>
      <div className="post-menu">
        <div className="actions-container">
          <div className="share-button-container">
            <button onClick={handleShareButton} className={"share-button"}>
              <FaShareAlt class="icon"/>
            </button>
            <p
              className={`copied-alert ${shareButtonIsActive ? "active" : ""}`}
            >
              copied to clipboard
            </p>
          </div>
          {post.isLocalVideo || post.isYoutubeVideo ? (
          ""
        ) : (
          <FullScreenMode post={post} />
        )}
        </div>



        <div className="text-section">
          <div
            className={`text-skeleton-container ${isLoaded ? "loaded" : ""}`}
          >
            <div className="text-skeleton titles">
              <div className="child loading-skeleton-animation"></div>
              <div className="child loading-skeleton-animation"></div>
              <div className="child loading-skeleton-animation"></div>
            </div>
            <div className="text-skeleton author">
              <div className="child loading-skeleton-animation"></div>
            </div>
          </div>
          <div className="title-wrapper">
            <h5>{removeLongWords(post.title).toUpperCase()}</h5>
          </div>
          <p className="author-url">
            <a
              href={credits.authorUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              {credits.author}
            </a>
          </p>
          <div className="post-menu-footer">
            <a
              href={credits.redditPostUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              Origin
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostMenu;
