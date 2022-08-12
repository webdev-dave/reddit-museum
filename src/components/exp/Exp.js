import React, { useEffect } from "react";
import {
  fetchRedditInfo,
  selectLoadedStatus,
  selectChildren,
} from "./expSlice";
import { useDispatch, useSelector } from "react-redux";


const Exp = () => {
  const dispatch = useDispatch();
  const isLoaded = useSelector(selectLoadedStatus);
  const childrenArr = useSelector(selectChildren);

  useEffect(() => {
    !isLoaded && dispatch(fetchRedditInfo("/r/aiArt/"));
    //isLoaded && console.log(childrenArr);
  }, [dispatch, isLoaded, childrenArr]);



  return (
    <section>
      <h1>Reddit</h1>
      {childrenArr.map((child, index) => {
        const isGallery = child.isGallery;
        const gallery =
          isGallery &&
          Object.values(child.gallery).map((img, index) => {
            return {
              fileType: img.m,
              id: img.id,
            };
          });

        return (
          <div key={`img-container-${index}`}>
            <img
              src={child.thumbnail}
              alt="thumbnail"
              width="100"
              key={`thumbnail-${index}`}
            />
            {!isGallery ? (
              <img
                src={child.imgUrl}
                alt="main-img"
                width="400"
                key={`main-img-${index}`}
              />
            ) : (
              gallery.map((media, i) => {
                const imgId = media.id;
                const fileExtension = "." + media.fileType.slice(-3);
                //console.log(`https://i.redd.it/${imgId}${fileExtension}`);
                return (
                  <img
                    src={`https://i.redd.it/${imgId}${fileExtension}`}
                    alt="mainImg"
                    width="400"
                    key={`gal-${index}-img${i}`}
                  />
                );
              })
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Exp;
