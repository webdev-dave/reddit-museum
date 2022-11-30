import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  fetchRedditInfo,
  selectPosts,
  selectGenrePath,
  selectGenreName,
} from "../../features/apiRequests/redditApiRequestSlice";
import PostContainer from "./post/PostContainer";
import { formatPosts } from "../../utils/helperFunctions";
import {
  selectIsSearching,
  selectSearchResults,
  selectSearchWord,
  updateGenrePosts,
} from "./postsSlice";
import { genresObject } from "../../utils/helperObjects";

//move this to main js
const Posts = () => {
  const dispatch = useDispatch();
  const rawPostsArr = useSelector(selectPosts);
  const genrePath = useSelector(selectGenrePath);
  const genreName = useSelector(selectGenreName);
  const isSearching = useSelector(selectIsSearching);
  const searchWord = useSelector(selectSearchWord);
  const searchResults = useSelector(selectSearchResults);
  const allowYoutube = genresObject[genreName].allowYoutubeVideos;
  const formattedPosts = formatPosts(rawPostsArr, genreName, allowYoutube);
  const posts = isSearching && searchWord ? searchResults : formattedPosts;

  //fetch data from reddit
  useEffect(() => {
    dispatch(fetchRedditInfo(genrePath));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  
  useEffect(() => {
    dispatch(updateGenrePosts({ genreName: genreName, posts: formattedPosts }));
  }, [dispatch, genreName, formattedPosts]);


  return (
    <div className="posts-section">
      <h5>Current Gallery: <em className="em">{genreName}</em></h5>
      {posts.map((post, postIndex) => (
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
