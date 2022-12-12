import EmbedYoutube from "../../../features/embedYoutube/EmbedYoutube";
import Media from "./Media";
import EmbedGal from "../../../features/embedGal/EmbedGal";
import PostMenu from "./menu/PostMenu";


const PostContainer = ({ post, postIndex }) => {

  const className = `post-container ${post.isGallery ? "gallery" : (post.isVideo || post.isYoutubeVideo) ? "video" : ""}`;
  return (
    <div className={className + " loading"} >
      {!post.isGallery && !post.isYoutubeVideo ? (
        <Media src={post.srcUrl} post={post} />
      ) : post.isYoutubeVideo ? (
        <EmbedYoutube youtubeId={post.youtubeId} title={post.title} />
      ) : (post.isGallery && post.gallery) ? (
        <EmbedGal post={post} />
      ) : ""}
      <PostMenu post={post} />
    </div>
  );
};

export default PostContainer;
