import headerImg from "../../assets/images/headerImg.png";
import {FaExclamationTriangle} from "react-icons/fa"

const MainBanner = () => {
  return (
    <div className="main-banner">
      <h1>Reddit Museum</h1>
      <img src={headerImg} alt="" />
      <div className="userAlert">
        <FaExclamationTriangle className="icon" />
        <p>
          Project is currently in development mode and is being updated almost
          daily. All features are subject to sudden changes.
        </p>
      </div>
    </div>
  );
};

export default MainBanner;
