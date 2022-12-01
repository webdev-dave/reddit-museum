import Media from "./Media";
import EmbedGal from "./embedGal/EmbedGal";
import PostMenu from "./menu/PostMenu";
import EmbedYoutube from "../../../features/embedYoutube/EmbedYoutube";
import { removeLongWords } from "../../../utils/helperFunctions";
import { useRef } from "react";
import { useEffect } from "react";

//move this to main js
const PostContainer = ({ post, postIndex }) => {
  const mediaRef = useRef();
  useEffect(()=>{
    //console.log(mediaRef.current.clientHeight)
  })
  const className = `post-container ${post.isGallery ? "gallery" : (post.isVideo || post.isYoutubeVideo) ? "video" : ""}`;
  return (
    <div className={className + " loading"} ref={mediaRef}>
      {!post.isGallery && !post.isYoutubeVideo ? (
        <Media src={post.srcUrl} post={post} />
      ) : post.isYoutubeVideo ? (
        <EmbedYoutube youtubeId={post.youtubeId} />
      ) : post.isGallery ? (
        <EmbedGal post={post} />
      ) : ""}
      <h5>{removeLongWords(post.title).toUpperCase()}</h5>
      <PostMenu post={post} />
    </div>
  );
};

export default PostContainer;
