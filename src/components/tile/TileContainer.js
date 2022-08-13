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
  //console.log(childrenArr);

  useEffect(() => {
    !isLoaded && dispatch(fetchRedditInfo("/r/aiArt/"));
    //isLoaded && console.log(childrenArr);
  }, [dispatch, isLoaded, childrenArr]);

  return childrenArr.map((child, index) => {
    const isGallery = child.isGallery;
    return (
      <div className={`post-container ${isGallery ? 'gallery' : ''}`} key={`post-container-${index}`}>
        <Tile
          src={child.thumbnail}
          alt="thumbnail"
          type="thumbnail"
          key={`thumbnail-${index}`}
        />

        {!isGallery ? (
          <Tile
            src={child.imgUrl}
            alt="main-img"
            type="main"
            key={`main-img-${index}`}
          />
        ) : (
          <EmbedGal child={child} index={index} key={`gal-${index}`} />
        )}
      </div>
    );
  });
};

export default TileContainer;
