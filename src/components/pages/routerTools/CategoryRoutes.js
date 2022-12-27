import { Routes, Route } from "react-router-dom";
import NotFound from "../notFound/NotFound";
import LoadPosts from "../../posts/LoadPosts";

const CategoryRoutes = () => {

  return (
    <Routes>
      <Route path=":id" element={<LoadPosts />}>
        <Route path=":id" element={<LoadPosts  />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default CategoryRoutes;
