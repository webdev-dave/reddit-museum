import Header from "../components/header/Header";
import Main from "../components/main/Main";
import "../../src/components/posts/microComponents/postMenu/postMenuStyles.css";


function App() {
  
  return (
    <div className={`app`}>
      <Header/>
      <Main />
    </div>
  );
}

export default App;
