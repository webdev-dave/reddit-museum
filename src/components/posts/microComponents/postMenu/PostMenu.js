// import { useState } from "react";
import "./postMenuStyles.css";
import "../../../../features/displayFullScreen/displayFullScreenStyles.css";
import DisplayFullScreen from "../../../../features/displayFullScreen/DisplayFullScreen";

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
    <div>
      <p className="author-url">
        <a href={credits.authorUrl} target="_blank" rel="noreferrer noopener">
          {credits.author}
        </a>
      </p>
      <div className="post-menu">
        <a
          href={credits.redditPostUrl}
          target="_blank"
          rel="noreferrer noopener"
        >
          Origin
        </a>
        <DisplayFullScreen post={post} />
      </div>
    </div>
  );
};

export default PostMenu;
