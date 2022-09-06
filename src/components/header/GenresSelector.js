import { useState } from "react";

const GenresSelector = () => {
  const genres = [
    "AI",
    "Surrealist (unavailable)",
    "Steampunk (unavailable)",
    "Romantic (unavailable)",
    "Modern (unavailable)",
    "Abstract (unavailable)",
    "Digital (unavailable)",
    "Anime (unavailable)",
    "Kanagawa (unavailable)",
    "Impressionist (unavailable)",
  ];
  const [genre, setGenre] = useState("AI");

  return (
    <div className="genres">
      <select
        name="genre"
        id="genre"
        value={genre}
        onChange={(e) => setGenre(e.currentTarget.value)}
      >
        {genres.map((g) => (
          <option>{g}</option>
        ))}
      </select>
    </div>
  );
};

export default GenresSelector;
