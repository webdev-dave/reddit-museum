import MainBanner from "../mainBanner/MainBanner";
import Posts from "../posts/Posts";

const Main = () => {
  return (
    <main className="posts-section">
      <MainBanner/>
      <Posts />
    </main>
  );
};

export default Main;
