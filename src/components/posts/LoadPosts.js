import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  changeGenre,
  fetchRedditInfo,
} from "../../features/apiRequests/redditApiRequestSlice";
import { replaceUnderscoreAndCapitalizeFirstChar } from "../../utils/helperFunctions";
import { genresObject } from "../../utils/helperObjects";
import Posts from "./Posts";
import NotFound from "../pages/notFound/NotFound";

const LoadPosts = ({ category, subCategory }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // const contextObj = useOutletContext();
  const genreName = id ? id : "";
  // const genreName = id ? id : "ai";
  const genrePath = genresObject[genreName.toLowerCase()]
    ? genresObject[genreName.toLowerCase()].path
    : false;
  //console.log(genrePath);
  useEffect(() => {
    if (genrePath) {
      dispatch(fetchRedditInfo(genrePath));
      dispatch(changeGenre({ genreName: genreName, path: genrePath }));
    }
  });
  return (
    <main className="posts-section">
      {/* <h3>id = {id}</h3> */}
      {genrePath ? (
        <>
          {" "}
          <div className="posts-section">
            <h1 className="category-name">
              {replaceUnderscoreAndCapitalizeFirstChar(category)}
            </h1>
            <h5>
              Current Gallery:{" "}
              <em className="em">
                {replaceUnderscoreAndCapitalizeFirstChar(genreName)}
              </em>
            </h5>
            <Posts />
          </div>
        </>
      ) : (
        <NotFound />
      )}
    </main>
  );
};

export default LoadPosts;
