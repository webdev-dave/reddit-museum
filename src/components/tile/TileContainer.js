import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  fetchRedditInfo,
  selectLoadedStatus,
  selectChildren,
} from "../main/mainSlice";

import Tile from "./Tile";
import EmbedGal from "./EmbedGal";

const TileContainer = () => {
  const dispatch = useDispatch();
  const isLoaded = useSelector(selectLoadedStatus);
  const childrenArr = useSelector(selectChildren);

  //fetch data from reddit
  useEffect(() => {
    !isLoaded && dispatch(fetchRedditInfo("/r/aiArt/"));
  }, [dispatch, isLoaded, childrenArr]);

  return childrenArr.map((child, index) => {
    const isGallery = child.isGallery;
    const isVideo = child.isVideo;

    //func returns false if media is externally hosted
    const isHostedOnReddit = () => {
      if (isGallery) {
        return true;
      } else if (child.imgUrl || child.videoUrl) {
        const host = !isVideo
          ? child.imgUrl.slice(10, 17)
          : child.videoUrl.slice(10, 17);
        return host === "redd.it";
      }
    };

    return (
      <div
        className={`post-container ${
          isGallery ? "gallery" : isVideo ? "video" : ""
        }`}
        key={`post-container-${index}`}
      >
        <h3>Post #{index}</h3>
        
        {/* <Tile
          src={child.thumbnail}
          alt="thumbnail"
          type="thumbnail"
          key={`thumbnail-${index}`}
        /> */}

        {!isHostedOnReddit() ? <p>{child.title + child.isGallery}</p> : !isGallery ? (
          <Tile
            src={child.imgUrl}
            alt="main-img"
            type="main"
            isVideo={isVideo}
            videoUrl={child.videoUrl}
            key={`main-img-${index}`}
            className=""
          />
        ) : (
          <EmbedGal child={child} postIndex={index} key={`gal-${index}`} />
        )}
        <a href={child.redditPostUrl} target="_blank" rel="noreferrer noopener">
          View on Reddit
        </a>
      </div>
    );
  });
};

export default TileContainer;
