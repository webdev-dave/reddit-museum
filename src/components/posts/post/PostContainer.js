import Media from "./Media";
import EmbedGal from "./embedGal/EmbedGal";
import PostMenu from "./menu/PostMenu";

//move this to main js
const PostContainer = ({ post, postIndex }) => {
  const className = `post-container ${post.isGallery ? "gallery" : post.isVideo ? "video" : ""}`;
  return (
    <div className={className}>
      {!post.isGallery ? (
        <Media src={post.srcUrl} post={post} className="" />
      ) : (
        <EmbedGal post={post} />
      )}
      <h5>{post.title.toUpperCase()}</h5>
      <PostMenu post={post} />
    </div>
  );
};

export default PostContainer;
