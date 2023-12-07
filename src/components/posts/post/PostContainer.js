import Media from "./media/Media";
import PostGal from "../../../features/postGal/PostGal";
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
        <PostGal propsPost={post} />
      ) : (
        ""
      )}
      <PostMenu post={post} />
    </div>
  );
};

export default PostContainer;
