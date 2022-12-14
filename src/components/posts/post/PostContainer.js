import Media from "./media/Media";
import EmbedGal from "../../../features/embedGal/EmbedGal";
import PostMenu from "./postMenu/PostMenu";


const PostContainer = ({ post, postIndex }) => {
  const className = `post-container ${
    post.isGallery
      ? "gallery"
      : post.isLocalVideo || post.isYoutubeVideo
      ? "video"
      : ""
  }`;

  return (
    <div className={className}>
      {!post.isGallery ? (
        <Media media={post} />
      ) : post.isGallery && post.gallery ? (
        <EmbedGal propsPost={post} />
      ) : (
        ""
      )}
      <PostMenu post={post} />
    </div>
  );
};

export default PostContainer;
