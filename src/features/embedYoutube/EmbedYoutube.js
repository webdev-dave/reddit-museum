import "./embedYoutubeStyles.css";

const EmbedYoutube = ({ youtubeId, title, mediaClassName}) => {
  return (
    <div className={" iframe-container " + mediaClassName}>
      <iframe
        className={`iframe`}
        src={`https://www.youtube.com/embed/${youtubeId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
      />
    </div>
  );
};

export default EmbedYoutube;
