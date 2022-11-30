import Media from "./Media";
import EmbedGal from "./embedGal/EmbedGal";
import PostMenu from "./menu/PostMenu";
import EmbedYoutube from "../../../features/embedYoutube/EmbedYoutube";

//move this to main js
const PostContainer = ({ post, postIndex }) => {
  const className = `post-container ${post.isGallery ? "gallery" : (post.isVideo || post.isYoutubeVideo) ? "video" : ""}`;
  return (
    <div className={className}>
      {!post.isGallery && !post.isYoutubeVideo ? (
        <Media src={post.srcUrl} post={post} />
      ) : post.isYoutubeVideo ? (
        <EmbedYoutube youtubeId={post.youtubeId} className="media" />
      ) : post.isGallery ? (
        <EmbedGal post={post} />
      ) : ""}
      <h5>{post.title.toUpperCase()}</h5>
      <PostMenu post={post} />
    </div>
  );
};

export default PostContainer;
