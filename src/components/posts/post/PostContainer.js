
import Media from "./Media";
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

  const getTallestMediaSizeInGallery = (gallery) => {
    const sizeDataArr = gallery.map(media => media.sizeData.aspectRatioQuotient);
    //console.log(sizeDataArr);
    const organizedSizeDataArr = sizeDataArr.sort((a,b) => b-a);
    console.log(organizedSizeDataArr);
    const tallestMediaSize = organizedSizeDataArr[0];
    return tallestMediaSize;
  }


  post.isGallery && getTallestMediaSizeInGallery(post.gallery);

  return (
    <div className={className}>
      {!post.isGallery ? (
        <Media post={post} />
      ) : post.isGallery && post.gallery ? (
        <EmbedGal post={post} />
      ) : (
        ""
      )}
      <PostMenu post={post} />
    </div>
  );
};

export default PostContainer;
