import MainBanner from "./mainBanner/MainBanner";
import GalleriesShelf from "./galleriesShelf/GalleriesShelf";
//import { Navigate } from "react-router-dom";

const Home = () => {
  //return (<Navigate to="/paintings/mixed_paintings" />);
  return (
    <div className="home">
      <main className="posts-section">
        <MainBanner /> 
        <GalleriesShelf/>
      </main>
    </div>
  );
};

export default Home;
