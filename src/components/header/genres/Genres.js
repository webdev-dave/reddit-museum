import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeGenre, fetchRedditInfo } from "../../../features/apiRequests/redditApiRequestSlice";
import { genreNames } from "../../../utils/helperArrays";
import { genresObject } from "../../../utils/helperObjects";


const Genres = () => {
  const dispatch = useDispatch();
  //replace blank spaces in genre names with underscores
  genreNames.forEach((genreName, i) => {
    genreNames[i] = genreName.replace(/_/g, ' ');
  })
  const [genreName, setGenreName] = useState(genreNames[0]);

  const handleSelect = (e) => {
    const genreName = e.currentTarget.value.replace(/ /g, "_");
    const genrePath = genresObject[genreName].path;
    dispatch(changeGenre({ genreName: genreName, path: genrePath}));
    dispatch(fetchRedditInfo(genrePath));
    setGenreName(genreName.replace(/_/, " "));
  };

  return (
    <div className="genres">
      <select name="genre" id="genre" value={genreName} onChange={handleSelect}>
        {genreNames.map((g) => (
          <option key={g}>{g}</option>
        ))}
      </select>
    </div>
  );
};

export default Genres;
