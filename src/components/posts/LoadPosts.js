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


const LoadPosts = ({ category, isSubSubCategory}) => {
  const { id } = useParams();
  const additonalParams = useParams();
  console.log(additonalParams)
  const dispatch = useDispatch();
  
  const genreName = id ? id : "";
  const genrePath = genresObject[genreName.toLowerCase()]
    ? genresObject[genreName.toLowerCase()].path
    : false;
  useEffect(() => {
    if (genrePath) {
      if(!isSubSubCategory){
        dispatch(fetchRedditInfo(genrePath));
        dispatch(changeGenre({ genreName: genreName, path: genrePath }));
      } else {
        //figure out how to load subcategories here
      }

    }
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
