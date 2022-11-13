import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  fetchRedditInfo,
  selectLoadedStatus,
  selectPosts,
  selectGenrePath,
} from "../main/mainSlice";

import PostContainer from "./PostContainer";

//move this to main js
const Posts = () => {
  const dispatch = useDispatch();
  const isLoaded = useSelector(selectLoadedStatus);
  const postsArr = useSelector(selectPosts);
  const genrePath = useSelector(selectGenrePath);
  //fetch data from reddit
  useEffect(() => {
    if (!isLoaded) {
      dispatch(fetchRedditInfo(genrePath));
    }
  }, [dispatch, genrePath, isLoaded, postsArr]);

  return postsArr.map((child, index) => {
    const isGallery = child.isGallery;
    const isVideo = child.srcUrl && child.srcUrl.slice(8, 9) === "v";
    const credits = {
      author: child.author,
      authorUrl: child.authorUrl,
      redditPostUrl: child.redditPostUrl,
    };

    //func returns false if media is externally hosted (for example, an embedded YouTube video link)
    const isHostedOnReddit = () => {
      if (isGallery) {
        return true;
      } else if (child.srcUrl) {
        const host = child.srcUrl.slice(10, 17);
        return host === ("redd.it" || "imgur.c") ? true : false;
      }
    };

    return (
      <PostContainer
        child={child}
        index={index}
        isGallery={isGallery}
        isVideo={isVideo}
        key={`post-container-${index}`}
        credits={credits}
        isHostedOnReddit={isHostedOnReddit()}
      />
    );
  });
};

export default Posts;
