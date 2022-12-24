import { BiFullscreen } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectAllPosts,
  selectCurrentGenreName,
} from "../../components/posts/postsSlice";

//if type img return img, if type = video, return video
const FullScreenMode = ({ post }) => {
  const currentGenreName = useSelector(selectCurrentGenreName);
  const currentPost = useSelector(selectAllPosts)[currentGenreName][post.postIndex];
  const getSrcUrl = () => {
    if (currentPost && currentPost.isGallery) {
      const currentGalleryImageIndex = currentPost.gallery.find(
        (galImg) => galImg.isCurrentlyDisplayed
      ).imgIndex;
      return post.gallery[currentGalleryImageIndex].srcUrl;
    } else {
      console.log(post.srcUrl);
      return post.srcUrl;
    }
  };
  const getMediaId = (srcUrl) => {
    const splitUrl = srcUrl.split("/");
    const urlType = splitUrl[2].split(".")[1];
    //const alt = post.title.toLowerCase().split(" ").join("_");
    return `${urlType}-${splitUrl.slice(-1)}`
  };


  return (
    <div>
      <Link to={`fsm/${getMediaId(getSrcUrl())}`} className="full-screen enter"><BiFullscreen className="icon" /></Link>
    </div>
  );
};

export default FullScreenMode;
