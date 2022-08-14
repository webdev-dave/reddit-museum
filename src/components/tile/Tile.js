//if type img return img, if type = video, return video
const Tile = ({ src, alt, isVideo, videoUrl }) => {
  return !isVideo ? (
    <img src={src} alt={alt} />
  ) : (
    <video
      src={videoUrl}
      width="300"
      type="video/mp4"
      controls
    ></video>
  );
};

export default Tile;
