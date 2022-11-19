import Media from "./microComponents/Media";
import EmbedGal from "./microComponents/embedGal/EmbedGal";
import PostMenu from "./microComponents/PostMenu";

//move this to main js
const PostContainer = ({ post, postIndex }) => {
  const className = `post-container ${post.isGallery ? "gallery" : post.isVideo ? "video" : ""}`;
  return (
    <div className={className}>
      {!post.isGallery ? (
        <Media src={post.srcUrl} post={post} />
      ) : (
        <EmbedGal post={post} postIndex={postIndex} />
      )}
      <h5>{post.title.toUpperCase()}</h5>
      <PostMenu post={post} />
    </div>
  );
};

export default PostContainer;
