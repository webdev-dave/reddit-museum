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
    dispatch(updateGenrePosts({ genreName: genreName, posts: formattedPosts }));
  }, [dispatch, rawPostsArr, genreName]);

  return currentlyOnDisplay.map((post, postIndex) => (
    <PostContainer
      post={post}
      postIndex={postIndex}
      key={`post-container-${postIndex}`}
    />
  ));
};

export default Posts;
