import { useDispatch } from "react-redux";
import { changeGenre, fetchRedditInfo } from "../../../features/apiRequest/apiRequestSlice";
import { genreNames } from "../../../utils/helperArrays";
import { genresObject, navSubOptions } from "../../../utils/helperObjects";


const SubMenu = ({option, isExpanded, index}) => {
  const dispatch = useDispatch();
  //replace blank spaces in genre names with underscores
  genreNames.forEach((genreName, i) => {
    genreNames[i] = genreName.replace(/_/g, ' ');
  })


  const handleSelect = (e) => {
    console.log(e.currentTarget.innerText)
    const genreName = e.currentTarget.innerText.replace(/ /g, "_");
    const genrePath = genresObject[genreName.toLowerCase()];
    console.log(genrePath)
    dispatch(changeGenre({ genreName: genreName, path: genrePath}));
    dispatch(fetchRedditInfo(genrePath));

  };
    
  return (
    <ul 
      className={`sub-menu ${isExpanded[index] ? "expanded" : "collapsed"}`}
    >
      {navSubOptions[option].map((subOption, i) => (
        <li className="sub-option" key={"sub-option-" + i} onClick={handleSelect}>
          {subOption}
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
