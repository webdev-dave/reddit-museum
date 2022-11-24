// import { useState } from "react";
import "./postMenuStyles.css";
import "../../../../features/displayFullScreen/displayFullScreenStyles.css"
import {BiFullscreen, BiExitFullscreen} from "react-icons/bi";
import DisplayFullScreen from "../../../../features/displayFullScreen/DisplayFullScreen";

import { useState } from "react";

// import { saveAs } from "file-saver";
// import { sortGallery } from "../../../utils/helperFunctions";

const PostMenu = ({post}) => {
  const [fsModeIsActive, setFsModeIsActive] = useState(false);
  //const [downloadUrl, setDownloadUrl] = useState(post.srcUrl);
  const credits = post.credits;

  //const gallery = isGallery && sortGallery(child.redditGalleryOrder, child.initialGallery);
  // const handleFullScreen = () => {
  //   setFullScreenOn(!fullScreenOn);
  //   if(!fullScreenOn){
  //     return <h1>Gotcha</h1>
  //   }
  // }
  const toggleFullScreenMode = () => {
    setFsModeIsActive(!fsModeIsActive);
  }

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

        {/* <a href={post.srcUrl} download={post.srcUrl}>
          <FaDownload className="download-icon" />
        </a> */}
        <button onClick={toggleFullScreenMode}>
          {!fsModeIsActive ? <BiFullscreen className="icon" /> : <BiExitFullscreen className="icon" />}
        </button>
        {fsModeIsActive && 
          <DisplayFullScreen post={post} />
        }
      </div>
    </div>
  );
};

export default PostMenu;
