import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  selectPosts,
  selectGenreName,
} from "../../features/apiRequests/redditApiRequestSlice";
import PostContainer from "./post/PostContainer";
import { formatPosts } from "../../utils/helperFunctions";
import {
  selectCurrentlyOnDisplay,
  updateCurrentlyOnDisplayToCurrent,
  updateGenrePosts,
} from "./postsSlice";
import { genresObject } from "../../utils/helperObjects";

//move this to main js
const Posts = () => {
  const dispatch = useDispatch();
  const rawPostsArr = useSelector(selectPosts);
  const genreName = useSelector(selectGenreName);
  const currentlyOnDisplay = useSelector(selectCurrentlyOnDisplay);
  

  useEffect(() => {
    const allowYoutube = genresObject[genreName].allowYoutubeVideos;
    const formattedPosts = formatPosts(rawPostsArr, genreName, allowYoutube);
    dispatch(updateGenrePosts({ genreName: genreName, posts:  formattedPosts}));
    //timeout function allows setPosts to register loadingPlaceholderArray before setting posts to formattedPosts 
    const timer = setTimeout(() => {
      dispatch(updateCurrentlyOnDisplayToCurrent({}))
    }, 100);
    return () => clearTimeout(timer);
  }, [dispatch, rawPostsArr , genreName]);



  return (
    <div className="posts-section">
      <h5>Current Gallery: <em className="em">{genreName}</em></h5>
      {currentlyOnDisplay.map((post, postIndex) => (
        <PostContainer
          post={post}
          postIndex={postIndex}
          key={`post-container-${postIndex}`}
        />
      ))}
    </div>
  );
};

export default Posts;
