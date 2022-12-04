import { Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import NotFound from "../components/pages/notFound/NotFound";
import LoadPosts from "../components/pages/home/routerTools/LoadPosts";
import OptionRoutes from "../components/pages/home/routerTools/OptionRoutes";
import "../features/fullScreenMode/fullScreenMode.css"

function App() {
  return (
    <div className="app">
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<LoadPosts/>} />
          <Route path="/:id/*" element={<OptionRoutes/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
