const Credits = ({credits}) => {
  return (
    <div className="credits">
      <p>
        By:{" "}
        <a href={credits.authorUrl} target="_blank" rel="noreferrer noopener">
          {credits.author}
        </a>
      </p>
      <a href={credits.redditPostUrl} target="_blank" rel="noreferrer noopener">
        View on Reddit
      </a>
    </div>
  );
};

export default Credits;
