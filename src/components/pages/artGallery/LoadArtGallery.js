import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  changeGenre,
  fetchRedditInfo,
} from "../../../features/apiRequests/redditApiRequestSlice";
import { replaceUnderscoreAndCapitalizeFirstChar } from "../../../utils/helperFunctions";
import { genresObject } from "../../../utils/helperObjects";
import Posts from "../../posts/Posts";
import NotFound from "../notFound/NotFound";
import "../../posts/postStyles.css";

const LoadArtGallery = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const pathnameArr = window.location.href.split("#")[1].split("/");
  const category = pathnameArr[1];
  const subCategory = pathnameArr[2];
  const subSubCategory = pathnameArr.length > 3 ? pathnameArr[3] : false;
  const isSubSubCategory =
    genresObject[subSubCategory] && genresObject[subSubCategory].path
      ? true
      : false;
  const genreName = params.id;
  const path =
    genresObject[genreName] && genresObject[genreName].path
      ? genresObject[genreName].path
      : false;

  useEffect(() => {
    if (path) {
      dispatch(fetchRedditInfo(path));
      dispatch(changeGenre({ genreName: genreName, path: path }));
    }
    window.scrollTo(0, 0);
  }, [path, genreName, dispatch]);

  return (
    <main>
      {path ? (
        <div className="posts-container">
          <h1 className="category-name">
            {replaceUnderscoreAndCapitalizeFirstChar(category)}
          </h1>
          <h5 className="sub-category-name">
            Current Gallery: &nbsp;
            {isSubSubCategory &&
              replaceUnderscoreAndCapitalizeFirstChar(subCategory) + " / "}
            <em className="em">
              {replaceUnderscoreAndCapitalizeFirstChar(genreName)}
            </em>
          </h5>
          <Posts />
        </div>
      ) : (
        <NotFound />
      )}
    </main>
  );
};

export default LoadArtGallery;
