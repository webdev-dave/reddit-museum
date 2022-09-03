//if type img return img, if type = video, return video
const Media = ({ src, alt, isVideo, videoUrl, className }) => {
  return !isVideo ? (
    <img src={src} alt={alt} className={`media ${className}`} />
  ) : (
    <video
      src={videoUrl}
      width="300"
      type="video/mp4"
      className="media"
      controls
    ></video>
  );
};

export default Media;
