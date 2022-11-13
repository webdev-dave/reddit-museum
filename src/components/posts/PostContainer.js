import Media from "./postComponents/Media";
import EmbedGal from "./postComponents/EmbedGal";
import Credits from "./postComponents/Credits";

//move this to main js
const PostContainer = ({
  child,
  index,
  isGallery,
  isVideo,
  credits,
  isHostedOnReddit,
}) => {
  const className = `post-container ${isGallery ? "gallery" : isVideo ? "video" : ""}`;

  const post = () => {
    if (!isHostedOnReddit) {
      return null;
    } else if (!isGallery) {
      return (
        <div className={className} >
          <Media
            src={child.srcUrl}
            alt="main-img"
            type="main"
            isVideo={isVideo}
            videoUrl={child.videoUrl}
            key={`main-img-${index}`}
            className=""
          />
          <h5>{child.title}</h5>
          <Credits credits={credits} />
        </div>
      );
    } else {
      return (
        <div className={className} >
          <EmbedGal child={child} postIndex={index} key={`gal-${index}`} />
          <h5>{child.title}</h5>
          <Credits credits={credits} />
        </div>
      );
    }
  };
  return post();
};

export default PostContainer;
