//import headerImg from "../../../../assets/localMedia/headerImg.png";
import videoBanner from "../../../../assets/localMedia/video_banner.mp4"
import "./mainBanner.css";
import { FaExclamationTriangle } from "react-icons/fa";

const MainBanner = () => {
  return (
    <div className="main-banner">
      <h1>Reddit Museum</h1>
      {/* <img src={headerImg} alt="" /> */}
      <video autoPlay={"autoplay"} muted loop width="100%" height="" >
      <source src={videoBanner} type="video/mp4"/>
     </video>
      <div className="userAlert">
        <FaExclamationTriangle className="icon" />
        <p>
          Project is currently in development mode and is updated frequently.
          All features are subject to sudden changes.
        </p>
      </div>
    </div>
  );
};

export default MainBanner;
