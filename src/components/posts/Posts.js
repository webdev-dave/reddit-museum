import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  fetchRedditInfo,
  selectLoadedStatus,
  selectPosts,
  selectGenrePath,
  selectGenreName,
} from "../main/mainSlice";
import PostContainer from "./PostContainer";
import { isHostedOnReddit, sortGallery } from "../../utils/helperFunctions";
import { updateGenrePosts } from "./postsSlice";

//move this to main js
const Posts = () => {
  const dispatch = useDispatch();
  const isLoaded = useSelector(selectLoadedStatus);
  const postsArr = useSelector(selectPosts);
  const genrePath = useSelector(selectGenrePath);
  const genreName = useSelector(selectGenreName);
  //fetch data from reddit
  useEffect(() => {
    if (!isLoaded) {
      dispatch(fetchRedditInfo(genrePath)); 
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const posts = postsArr.filter(post => isHostedOnReddit(post.isGallery, post)).map((post, index) => {
    const isGallery = post.isGallery;
    const gallery = isGallery ? sortGallery(post.redditGalleryOrder, post.initialGallery) : [];
    const isVideo =  post.srcUrl && post.srcUrl.slice(8, 9) === "v";

    return {
      isGallery: isGallery,
      isVideo: isVideo ? true : false,
      srcUrl: post.srcUrl ? post.srcUrl : "",
      videoUrl: post.videoUrl,
      gallery: gallery,
      title: post.title,
      credits: {
        author: post.author,
        authorUrl: post.authorUrl,
        redditPostUrl: post.redditPostUrl,
      },
      genreName: genreName,
    }

    
  });
  dispatch(updateGenrePosts({genreName: genreName, posts: posts}));

  return posts.map((post, postIndex) => (
    <PostContainer
      post={post}
      postIndex={postIndex}
      key={`post-container-${postIndex}`}
    />
  ))


};

export default Posts;
