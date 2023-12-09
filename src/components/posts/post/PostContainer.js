import Media from "./media/Media";
import Slider from "../../../features/slider/Slider";
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
        <Slider propsPost={post} />
      ) : (
        ""
      )}
      <PostMenu post={post} />
    </div>
  );
};

export default PostContainer;
