import Header from "../components/header/Header";
// import "../components/posts/post/postMenu/postMenuStyles.css";
import MainBanner from "../components/mainBanner/MainBanner";
import Posts from "../components/posts/Posts";


function App() {
  
  return (
    <div className={`app`}>
      <Header/>
      <main className="posts-section">
      <MainBanner />
      <Posts />
    </main>
    </div>
  );
}

export default App;
