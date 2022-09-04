import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  fetchRedditInfo,
  selectLoadedStatus,
  selectChildren,
} from "../main/mainSlice";

import Media from "./Media";
import EmbedGal from "./EmbedGal";
import Credits from "./Credits";

const PostContainer = () => {
  const dispatch = useDispatch();
  const isLoaded = useSelector(selectLoadedStatus);
  const childrenArr = useSelector(selectChildren);
  //fetch data from reddit
  useEffect(() => {
    !isLoaded && dispatch(fetchRedditInfo("/r/aiArt/"));
  }, [dispatch, isLoaded, childrenArr]);

  return childrenArr.map((child, index) => {
    const isGallery = child.isGallery;
    const isVideo = child.srcUrl && child.srcUrl.slice(8, 9) === "v";
    const className = `post-container ${
      isGallery ? "gallery" : isVideo ? "video" : ""
    }`;
    const key = `post-container-${index}`;
    const credits = {
      author: child.author,
      authorUrl: child.authorUrl,
      redditPostUrl: child.redditPostUrl
    }

    //func returns false if media is externally hosted (for example, an embedded YouTube video link)
    const isHostedOnReddit = () => {
      if (isGallery) {
        return true;
      } else if (child.srcUrl) {
        const host = child.srcUrl.slice(10, 17);
        console.log(child.srcUrl);
        console.log( host === ("redd.it" || "imgur.c") ? true : false)
        return host === ("redd.it" || "imgur.c") ? true : false;
      }
    };



    return !isHostedOnReddit() ? null : !isGallery ? (
      <div className={className} key={key}>
        <Media
          src={child.srcUrl}
          alt="main-img"
          type="main"
          isVideo={isVideo}
          videoUrl={child.videoUrl}
          key={`main-img-${index}`}
          className=""
        />

        <h5>{child.title}</h5>
        <Credits  credits={credits} />
      </div>
    ) : (
      <div className={className} key={key}>
        <EmbedGal child={child} postIndex={index} key={`gal-${index}`} />
        <h5>{child.title}</h5>
        <Credits  credits={credits} />
      </div>
    );
  });
};

export default PostContainer;
