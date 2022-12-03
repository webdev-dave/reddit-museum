import MainBanner from "../../mainBanner/MainBanner";
import Posts from "../../posts/Posts";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <main className="posts-section">
      
        <MainBanner />
        <h4 style={{fontWeight: "700", fontSize: "20px", padding: "15px"}}>
          <Link to="/photography/">Photography</Link>
        </h4>
        <Posts />
      </main>
    </div>
  );
};

export default Home;
