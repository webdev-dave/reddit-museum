import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRedditInfo } from "../../main/mainSlice";
import { selectGenres } from "./genresSlice";

const Genres = () => {
  const dispatch = useDispatch();
  const genresObject = useSelector(selectGenres);
  const genres =  Object.keys(genresObject);
  //get rid of spaces in genre names
  genres.forEach((g, i) => {
    genres[i] = g.replace(/_/g, ' ');
  })
 
  const [genre, setGenre] = useState(genres[0]);

  const handleSelect = (e) => {
    const genreName = e.currentTarget.value.replace(/ /g, "_");
    const genrePath = genresObject[genreName];
    dispatch({
      type: "main/changeGenre",
      payload: { genreName: genreName, path: genrePath },
    });
    dispatch(fetchRedditInfo(genrePath));
    setGenre(genreName.replace(/_/, " "));
  };

  return (
    <div className="genres">
      <select name="genre" id="genre" value={genre} onChange={handleSelect}>
        {genres.map((g) => (
          <option key={g}>{g}</option>
        ))}
      </select>
    </div>
  );
};

export default Genres;
