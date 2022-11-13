//if type img return img, if type = video, return video
const Media = ({ src, alt, isVideo, className }) => {

  return !isVideo ? (
    <img src={src} alt={alt} className={`media ${className}`} />
  ) : (
    <video
      src={src+"/DASH_1080.mp4"}
      width="300"
      type="video/mp4"
      className="media"
      controls
    ></video>
  );
};

export default Media;
