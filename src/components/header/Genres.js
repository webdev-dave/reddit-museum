import { useState } from "react";
import { useSelector } from "react-redux";
import { selectGenres } from "./genresSlice";

const Genres = () => {
  const genres = useSelector(selectGenres);
  const [genre, setGenre] = useState("AI");
  //const dispatch = useDispatch();

  return (
    <div className="genres">
      <select
        name="genre"
        id="genre"
        value={genre}
        onChange={(e) => setGenre(e.currentTarget.value)}
      >
        {genres.map((g) => (
          <option key={g}>{g}</option>
        ))}
      </select>
    </div>
  );
};

export default Genres;
