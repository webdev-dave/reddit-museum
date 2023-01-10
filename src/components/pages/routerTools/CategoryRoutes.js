import { Routes, Route } from "react-router-dom";
import NotFound from "../notFound/NotFound";
import ArtGallery from "../../pages/artGallery/ArtGallery";

const CategoryRoutes = () => {

  return (
    <Routes>
      <Route path=":id" element={<ArtGallery />}>
        <Route path=":id" element={<ArtGallery  />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default CategoryRoutes;
