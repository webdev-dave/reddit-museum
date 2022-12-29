import { useSelector } from "react-redux";
import { selectCurrentGenrePosts } from "../../components/posts/postsSlice";

const GalCounter = ({propsPost}) => {
  const postIndex = propsPost.postIndex;
  const gallery = useSelector(selectCurrentGenrePosts)[postIndex].gallery;
  console.log(gallery); 
  return (
    <div className="media-counter">
      {gallery.map((media, index) => (
        <div
          className={`circle-icon ${
            media.isCurrentlyDisplayed ? "current" : ""
          }`}
          key={"circle-" + index}
        ></div>
      ))}
    </div>
  );
};

export default GalCounter;
