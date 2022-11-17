// import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { saveAs } from "file-saver";
// import { sortGallery } from "../../../utils/helperFunctions";

const PostMenu = ({ post }) => {
  //const [downloadUrl, setDownloadUrl] = useState(post.srcUrl);
  const credits = post.credits;
  //const gallery = isGallery && sortGallery(child.redditGalleryOrder, child.initialGallery);
  const downloadMedia = () => {
    saveAs(post.srcUrl, "test.jpg")
    //saveAs("use_current_media_url", "use_current_post_title")
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

        {/* <a href={post.srcUrl} download onClick={(e) => download(e)}>
          <FaDownload className="download-icon" />
        </a> */}
        <button onClick={downloadMedia}>
          <FaDownload className="download-icon" />
        </button>
      </div>
    </div>
  );
};

export default PostMenu;
