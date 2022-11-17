/*   
  - 1 the map function bellow overwrites the default reddit api galleryArray (which comes in a randomized order) and reorganizes all imgObj based on the default redditGalleryOrder (as it appears on reddit).
  - 2 child.redditGalleryOrder is an array of gallery-media-id's in default reddit order
  - 3 the map function below maps over all the id's inside redditGalleryOrder. It then parses the initial store gallery (that comes in a randomized order) and finds the the img object that have a matching id
  - 4 once the matching imgObj is found, it is pushed into the new gallery array, only this time, all the imgObj's appear in order of redditGalleryOrder */
export const sortGallery = (galleryOrder, initialGal) => {
  return galleryOrder.map((orderedImgId, index) => {
    const newImgObj = initialGal.find((imgObj) => imgObj.id === orderedImgId);
    return { ...newImgObj, imgIndex: index };
  });
};


// returns false if media is externally hosted (for example, an embedded YouTube video link)
export const isHostedOnReddit = (isGallery, child) => {
  if (isGallery) {
    return true;
  } else if (child.srcUrl) {
    const host = child.srcUrl.slice(10, 17);
    return host === ("redd.it" || "imgur.c") ? true : false;
  } else {
    return false;
  }
};

