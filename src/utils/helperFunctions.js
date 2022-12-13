import Big from "big.js";

// --------------------------------------------------------- Mini Functions ----
// ------------
// ------------
// ------------
// ------------
// ------------
// ------------
// ------------
// ------------

export const getAspectRatioQuotient = (width, height) => {
  return isNaN(height / width) ? false : Big(height).div(width).toNumber();
}

export const getNewHeightBasedOnAspectRatio = (aspectRatioQuotient, newWidth) => {
  return !aspectRatioQuotient ? false : Number(Big(aspectRatioQuotient).times(newWidth).toFixed(4));
}


export const removeLongWords = (textString) => {
  // this help remove super long continuos words which are usually unwanted social media handles or url's
  return textString.split(" ").filter(str => str.length < 20).join(" ");
}

export const returnMaximumOfTenArrayItems = (array) => {
  if(array.length <= 10){
    return array;
  }
  return array.slice(0, 11);
}

export const createLoadingArray = (array) => {
  const loadingArray = [];
  for(let i = 0; i < array.length; i++ ){
    loadingArray.push({...array[i], title: "loading", srcUrl: ""});
  }
  return loadingArray
}

export const capitalizeFirstChar = (string) => string.charAt(0).toUpperCase() + string.substring(1);


export const replaceUnderscoreAndCapitalizeFirstChar = (string) => {
  return string.split("_").map(str => capitalizeFirstChar(str)).join(" ");
  //(string.charAt(0).toUpperCase() + string.substring(1));
};



// --------------------------------------------------------- Medium Functions ----
// ------------
// ------------
// ------------
// ------------
// ------------
// ------------
// ------------
// ------------


/*   
  - 1 the map function bellow overwrites the default reddit api galleryArray (which comes in a randomized order) and reorganizes all imgObj based on the default redditGalleryOrder (as it appears on reddit).
  - 2 child.redditGalleryOrder is an array of gallery-media-id's in default reddit order
  - 3 the map function below maps over all the id's inside redditGalleryOrder. It then parses the initial store gallery (that comes in a randomized order) and finds the the img object that have a matching id
  - 4 once the matching imgObj is found, it is pushed into the new gallery array, only this time, all the imgObj's appear in order of redditGalleryOrder */
export const sortGallery = (galleryOrder, initialGal) => {
  return galleryOrder ? galleryOrder.map((orderedImgId, imgIndex) => {
    const newImgObj = initialGal.find((imgObj) => imgObj.id === orderedImgId);
    return {
      ...newImgObj,
      imgIndex: imgIndex,
      isCurrentlyDisplayed: imgIndex === 0 ? true : false,
      srcUrl: getGalleryImgSrcUrl(newImgObj, imgIndex)
    };
  }) : null;
};

const getGalleryImgSrcUrl = (media, imgIndex) => {
  const fileExtension = media.fileType.slice(-3);
  return `https://i.redd.it/${media.id}.${fileExtension}`;
};



const isHostedOnReddit = ( child) => {
  if (child.isGallery) {
    return true;
  } else if (child.srcUrl) {
    const host = child.srcUrl.slice(10, 17);
    if(host === "redd.it" || host === "imgur.c"){
      return true
    } else {
      return false;
    }
  } else {
    return false;
  }
};

const isHostedOnRedditOrYoutube = (child) => {
  const host = child.srcUrl && child.srcUrl.slice(10, 17);
  if(host === "utu.be/" ||host === "w.youtu" ||host === "utube.c"){
    return true;
  } else {
    return isHostedOnReddit(child);
  };
};


const getYoutubeId = (url) => {
  if(url.slice(0, 17) === "https://youtu.be/"){
    return url.slice(17, 28)
  } else if (url.slice(0, 28) === "https://youtube.com/watch?v="){
    return url.slice(28, 39);
  } else if(url.slice(0, 32) === "https://www.youtube.com/watch?v="){
    return url.slice(32, 43);
  } else {
    return false;
  }
}





// --------------------------------------------------------- Large Functions ----
// ------------
// ------------
// ------------
// ------------
// ------------
// ------------
// ------------
// ------------



export const formatRedditDataChildren = (childrenArray) => {
  console.log(childrenArray)
  return childrenArray.map(
    (child) => {
      const width = child.data.preview ? child.data.preview.images[0].source.width : false;
      const height = child.data.preview ? child.data.preview.images[0].source.height : false;
      const aspectRatioQuotient = getAspectRatioQuotient(width, height);
      return {
        sizeData: {width: width, height: height, aspectRatioQuotient: aspectRatioQuotient},
        isGallery: child.data.is_gallery ? true : false,
        thumbnail: child.data.thumbnail,
        title: child.data.title,
        child: child,
        srcUrl: child.data.url_overridden_by_dest,
        redditGalleryOrder:
          child.data.gallery_data ?
          child.data.gallery_data.items.map((img) => img.media_id) : null,
        //extendedGallery: child.data.is_gallery && child.data.gallery_data.items.map(img => img.media_id),
        initialGallery:
          child.data.media_metadata ?
          Object.values(child.data.media_metadata).map((img, idx) => {
            return {
              fileType: img.m,
              id: img.id,
              imgIndex: null,
              headerImg: "unknown",
              isVideo: false,
              videoUrl: null,
              mediaType: img.e,
              y: img.s.y,
              x: img.s.x,
              backupUrl: img.s.u,
              title: child.data.title,
            };
          }) : null,

        voteCount: child.data.ups,
        subreddit: child.data.subreddit_name_prefixed,
        author: child.data.author,
        authorUrl: "https://www.reddit.com/user/" + child.data.author,
        date: child.data.created_utc,
        redditPostUrl: "https://www.reddit.com" + child.data.permalink,
        redditMediaViewer: child.data.url,
      };
    }
  );
}


export const formatPosts = (posts, genreName, allowYoutube) => {
  //when embedding youtube iframes, page performance slowes down dramatically hence the use of returnMaximumOfTenArrayItems()
  const postsArr = allowYoutube ?  returnMaximumOfTenArrayItems(posts.filter((post)=> isHostedOnRedditOrYoutube(post))) : posts.filter((post)=> isHostedOnReddit(post));
  return postsArr.map((post, index) => {
    const isGallery = post.isGallery;
    const gallery = isGallery
      ? sortGallery(post.redditGalleryOrder, post.initialGallery)
      : [];
    const isVideo = post.srcUrl && post.srcUrl.slice(8, 9) === "v";
    const isYoutubeVideo = (getYoutubeId(post.srcUrl) !== false) ? true : false;
    const youtubeId = isYoutubeVideo ? getYoutubeId(post.srcUrl) : "";

    return {
      postIndex: index,
      isGallery: isGallery,
      isVideo: isVideo ? true : false,
      isYoutubeVideo: isYoutubeVideo,
      youtubeId: youtubeId,
      srcUrl: post.srcUrl ? post.srcUrl : "",
      gallery: gallery,
      title: post.title,
      credits: {
        author: post.author,
        authorUrl: post.authorUrl,
        redditPostUrl: post.redditPostUrl,
      },
      genreName: genreName,
      fsModeIsActive: false,
      voteCount: post.voteCount,
    };
  });
}
