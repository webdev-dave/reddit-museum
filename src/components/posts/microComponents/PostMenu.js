// import { useState } from "react";
import { FaDownload } from "react-icons/fa";
// import { saveAs } from "file-saver";
// import { sortGallery } from "../../../utils/helperFunctions";

const PostMenu = ({ post }) => {
  //const [downloadUrl, setDownloadUrl] = useState(post.srcUrl);
  const credits = post.credits;
  //const gallery = isGallery && sortGallery(child.redditGalleryOrder, child.initialGallery);


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

        <a href={post.srcUrl} download={post.srcUrl}>
          <FaDownload className="download-icon" />
        </a>
        {/* <button onClick={downloadMedia}>
          <FaDownload className="download-icon" />
        </button> */}
      </div>
    </div>
  );
};

export default PostMenu;
