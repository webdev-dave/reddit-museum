import Header from "../header/Header";
import PostContainer from "../posts/PostContainer";

const Main = () => {
  return (
    <div className="main-container">
      <header>
        <Header />
        {/* <video src="https://v.redd.it/43eh4tiu2vl91/DASH_1080.mp4" type="video/mp4" controls></video> */}
      </header>
      <main className="posts-section">
        <PostContainer />
      </main>
    </div>
  );
};

export default Main;
