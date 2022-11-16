import Media from "./postComponents/Media";
import EmbedGal from "./postComponents/EmbedGal";
import PostMenu from "./postComponents/PostMenu";

//move this to main js
const PostContainer = ({
  child,
  index,
  isGallery,
  isVideo,
  credits,
  isHostedOnReddit,
}) => {
  const className = `post-container ${
    isGallery ? "gallery" : isVideo ? "video" : ""
  }`;

  const post = () => {
    if (!isHostedOnReddit) {
      return null;
    } else if (!isGallery) {
      return (
        <div className={className}>
          <Media
            src={child.srcUrl}
            alt="main-img"
            type="main"
            isVideo={isVideo}
            videoUrl={child.videoUrl}   
          />
          <h5>{child.title.toUpperCase()}</h5>
          <PostMenu
            credits={credits}
            src={child.srcUrl}
            isVideo={isVideo}
            videoUrl={child.videoUrl}
            isGallery={false}
          />
        </div>
      );
    } else {
      return (
        <div className={className}>
          <EmbedGal child={child} postIndex={index} key={`gal-${index}`} />
          <h5>{child.title.toUpperCase()}</h5>
          <PostMenu credits={credits} isGallery={true} child={child} />
        </div>
      );
    }
  };
  return post();
};

export default PostContainer;
