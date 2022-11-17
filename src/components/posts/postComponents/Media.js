//if type img return img, if type = video, return video
const Media = ({ post, src, className }) => {
  const alt = post.title.toLowerCase();
  return !post.isVideo ? (
    <img src={src} alt={alt} className={`media ${className}`} />
  ) : (
    <video
      src={src+"/DASH_1080.mp4"}
      alt={alt}
      width="300"
      type="video/mp4"
      className="media"
      controls
    ></video>
  );
};

export default Media;
