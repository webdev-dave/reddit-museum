import headerImg from "../../../../assets/localMedia/headerImg.png";
import "./mainBanner.css";
import {FaExclamationTriangle} from "react-icons/fa";

const MainBanner = () => {
  const redditBlackoutsUrl = "https://www.vox.com/technology/2023/6/14/23760738/reddit-blackout-explained-subreddit-apollo-third-party-apps";
  return (
    <div className="main-banner">
      <h1>Reddit Museum</h1>
      <img src={headerImg} alt="" />
      <div className="userAlert">
        <FaExclamationTriangle className="icon" />
        <h3>Due to the ongoing <a target="_blank" rel="noreferrer" href={redditBlackoutsUrl}>Reddit Blackouts</a> , many galleries may be offline and will fail to load as a result</h3><br />
        <p>We are aware of this issue and are monitoring the situation closely. <br /> Thank you for your patience.</p><br />
        {/* <p>
          Project is currently in development mode and is updated frequently. All features are subject to sudden changes.
        </p> */}
      </div>
    </div>
  );
};

export default MainBanner;
