import "./embedYoutubeStyles.css";

const EmbedYoutube = ({ youtubeId, title }) => {
  return (
    <div className={" iframe-container media"}>
      <iframe
        className={`iframe`}
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
      />
    </div>
  );
};

export default EmbedYoutube;
