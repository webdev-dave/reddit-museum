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
import "./postStyles.css"


const LoadPosts = ({ category, subCategory }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const genreName = id ? id : "";
  const genrePath = genresObject[genreName.toLowerCase()]
    ? genresObject[genreName.toLowerCase()].path
    : false;
  useEffect(() => {
    if (genrePath) {
      dispatch(fetchRedditInfo(genrePath));
      dispatch(changeGenre({ genreName: genreName, path: genrePath }));
    }
  },[genrePath, genreName, dispatch]);



  return (
    <main >
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
