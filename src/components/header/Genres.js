import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRedditInfo, selectGenrePath } from "../main/mainSlice";
import { selectGenres } from "./genresSlice";

const Genres = () => {
  const dispatch = useDispatch();
  const genresObject = useSelector(selectGenres);
  const genrePath = useSelector(selectGenrePath)
  const genres = Object.keys(genresObject);
  let genre = "AI";

  console.log(genresObject[genre]);

  const handleSelect = (e) => {
    genre = e.currentTarget.value;
    dispatch({
      type: "main/changeGenre",
      payload: { name: genre, path: genresObject[genre] },
    });
    dispatch(fetchRedditInfo(genrePath));

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
