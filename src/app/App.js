import { Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import "../features/fullScreenMode/fullScreenMode.css"
import CategoryRoutes from "../components/pages/routerTools/CategoryRoutes";
import Home from "../components/pages/home/Home";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<Home />} />
          <Route path="/:id/*" element={<CategoryRoutes/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
