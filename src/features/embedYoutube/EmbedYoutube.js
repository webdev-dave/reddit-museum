import "./embedYoutubeStyles.css";

const EmbedYoutube = ({ youtubeId, className }) => {
  return (
    <div className={" iframe-container"}>
      <iframe
        className="iframe"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default EmbedYoutube;
