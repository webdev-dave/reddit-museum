const EmbedYoutube = ({youtubeId, className }) => {
  return (
   
      <iframe
        className="media iframe"
        width="100%"
        height="auto"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    
  );
};

export default EmbedYoutube;