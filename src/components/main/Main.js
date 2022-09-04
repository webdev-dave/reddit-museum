import Header from "../header/Header";
import PostContainer from "../tile/PostContainer";

const Main = () => {
  return (
    <div className="main-container">
      <header>
        <Header />
      </header>
      <main className="posts-section">
        <PostContainer />
      </main>
    </div>
  );
};

export default Main;
