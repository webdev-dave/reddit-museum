//if type img return img, if type = video, return video
const Media = ({ post, src, className }) => {
  const alt = post.title.toLowerCase();
  return !post.isVideo ? (
    <img src={src} alt={alt} className={`media ${className}`} />
  ) : (
    <video
      controls
      width="100%"
      className={`media`}
    >
      <source src={src+"/DASH_1080.mp4"} type="video/mp4" />
      <source src={src+"/DASH_720.mp4"} type="video/mp4" />
      <source src={src+"/DASH_480.mp4"} type="video/mp4" />
    </video>
  );
};

export default Media;
