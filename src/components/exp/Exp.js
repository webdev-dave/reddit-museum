import React, { useState, useEffect } from "react";
import {
  fetchRedditInfo,
  selectLoadedStatus,
  selectIsGallery,
  selectExpImg,
  selectThumbnail,
} from "./expSlice";
import { useDispatch, useSelector } from "react-redux";
//import placeholderImg from '../../assets/images/placeholder.png';

const Exp = () => {
  const dispatch = useDispatch();
  const isLoaded = useSelector(selectLoadedStatus);
  const importedImg = useSelector(selectExpImg);
  const importedThumbnail = useSelector(selectThumbnail);
  const [imgUrl, setImgUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const isGallery = useSelector(selectIsGallery);
  //uncommited bla blab blabel
  const setupGallery = () => {
    console.log("isGallery!!");
  };

  useEffect(() => {
    !isLoaded && dispatch(fetchRedditInfo("/r/aiArt/"));
  }, [dispatch, isLoaded]);

  useEffect(() => {
    isGallery ? setupGallery() : setImgUrl(importedImg);
    setThumbnailUrl(importedThumbnail);
    console.log(importedImg);
  }, [isLoaded, imgUrl, importedImg, importedThumbnail, isGallery]);

  const generalSearch = () => {};

  return (
    <section>
      <h1>Reddit</h1>
      <img src={imgUrl} alt="redditPic" width="400" />
      <img src={thumbnailUrl} alt="" />
      {/* <img src='https://a.thumbs.redditmedia.com/01wY3159BM1xdqNWsbdvxW6CwPPPxKpBrnnCXRGHq10.jpg' alt="" /> */}
    </section>
  );
};

export default Exp;
