import headerImg from "../../assets/images/headerImg.png";

const MainBanner = () => {
  return (
    <header>
      <h1>Reddit Museum</h1>
      <img src={headerImg} alt="" />
      <div className="userAlert">
        <h3>Be aware!!</h3>
        <p>
          Project is currently in development mode and is being updated almost
          daily. All features are subject to change.
        </p>
      </div>
    </header>
  );
};

export default MainBanner;
