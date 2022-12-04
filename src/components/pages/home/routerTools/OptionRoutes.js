import { Routes, Route } from "react-router-dom";
import NotFound from "../../notFound/NotFound";
import LoadPosts from "./LoadPosts";

const OptionRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/photography/:id/" element={<LoadPosts />} />
      <Route path="/digital/:id/" element={<LoadPosts />} />
      <Route path="/paintings/:id/" element={<LoadPosts />} />
      <Route path="/cinema/:id/" element={<LoadPosts />} />
      <Route path="/structural/:id/" element={<LoadPosts />} /> */}
      <Route path="/:id/" element={<LoadPosts />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default OptionRoutes;
