// import { useState } from "react";
import "./postMenuStyles.css";
import FullScreenMode from "../../../../features/fullScreenMode/FullScreenMode";
import { removeLongWords } from "../../../../utils/helperFunctions";

// import { saveAs } from "file-saver";
// import { sortGallery } from "../../../utils/helperFunctions";

const PostMenu = ({ post }) => {
  //const [downloadUrl, setDownloadUrl] = useState(post.srcUrl);
  const credits = post.credits;
  
  
  //const gallery = isGallery && sortGallery(child.redditGalleryOrder, child.initialGallery);
  // const handleFullScreen = () => {
  //   setFullScreenOn(!fullScreenOn);
  //   if(!fullScreenOn){
  //     return <h1>Gotcha</h1>
  //   }
  // }

  return (
    <div className="post-menu">
      {(post.isVideo || post.isYoutubeVideo) ? "" : <FullScreenMode post={post} />}
      
      <h5>{removeLongWords(post.title).toUpperCase()}</h5>
      <p className="author-url">
        <a href={credits.authorUrl} target="_blank" rel="noreferrer noopener">
          {credits.author}
        </a>
      </p>
      <div className="post-menu-footer">
        <a
          href={credits.redditPostUrl}
          target="_blank"
          rel="noreferrer noopener"
        >
          Origin
        </a>
  
        
      </div>
    </div>
  );
};

export default PostMenu;
