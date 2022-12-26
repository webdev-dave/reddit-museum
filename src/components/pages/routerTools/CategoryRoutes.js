import { Routes, Route, useParams } from "react-router-dom";
import NotFound from "../notFound/NotFound";
import LoadPosts from "../../posts/LoadPosts";
import FullScreenPage from "../../../features/fullScreenMode/FullScreenPage";

const CategoryRoutes = () => {
  const params = useParams();


  return (
    <Routes>
      <Route path=":id/fsm-:id" element={<FullScreenPage />} />
      <Route path=":id" element={<LoadPosts category={params.id} isSubSubCategory={false} parentInfo={false} />}>
        <Route path=":id" element={<LoadPosts category={params.id} isSubSubCategory={true} parentInfo={Object.values(params)[1]} />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>


    </Routes>
  );
};

export default CategoryRoutes;
