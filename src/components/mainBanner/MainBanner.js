import headerImg from "../../assets/images/headerImg.png";
import {FaExclamationTriangle} from "react-icons/fa"

const MainBanner = () => {
  return (
    <header>
      <h1>Reddit Museum</h1>
      <img src={headerImg} alt="" />
      <div className="userAlert">
        <FaExclamationTriangle className="icon" />
        <p>
          Project is currently in development mode and is being updated almost
          daily. All features are subject to sudden changes.
        </p>
      </div>
    </header>
  );
};

export default MainBanner;
