import { useState } from "react";
import { FaDownload } from "react-icons/fa";
// import { sortGallery } from "../../../utils/helperFunctions";


const PostMenu = ({ credits, src, isVideo, videoUrl, isGallery, child }) => {
  const [downloadUrl, setDownloadUrl] = useState(src);
  //const gallery = isGallery && sortGallery(child.redditGalleryOrder, child.initialGallery);


  if(isVideo){
    setDownloadUrl(videoUrl);
  } 

  return (
    <div>
      <p className="author-url">
        <a href={credits.authorUrl} target="_blank" rel="noreferrer noopener">
          {credits.author}
        </a>
      </p>
      <div className="menu-buttons-section">
        <a
          href={credits.redditPostUrl}
          target="_blank"
          rel="noreferrer noopener"
        >
          Origin
        </a>
        <button>
          <a href={downloadUrl} download>
            <FaDownload className="download-icon" />
          </a>
          
        </button>
      </div>
    </div>
  );
};

export default PostMenu;
