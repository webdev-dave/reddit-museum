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


const LoadPosts = ({ category, isSubSubCategory, parentInfo}) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const genreName = id ? id : "";
  const genrePath = genresObject[genreName]
    ? genresObject[genreName].path
    : false;

  const getParentCategoryName = string => string.split("/")[0];

  const parentGenreName = parentInfo ? getParentCategoryName(parentInfo) : false;
  
  useEffect(() => {
      dispatch(fetchRedditInfo(genrePath));
      dispatch(changeGenre({ genreName: genreName, path: genrePath }));
      window.scrollTo(0, 0);
  },[genrePath, genreName, dispatch, isSubSubCategory]);



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
            <h5 className="sub-category-name">
              Current Gallery: &nbsp;
              {isSubSubCategory && replaceUnderscoreAndCapitalizeFirstChar(parentGenreName) + " / "}
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
