import { Routes, Route, useParams } from "react-router-dom";
import NotFound from "../notFound/NotFound";
import LoadPosts from "../../posts/LoadPosts";

const CategoryRoutes = () => {
  const category = useParams().id;
  
  return (
    <Routes>
      <Route path="/:id/" element={<LoadPosts category={category} isSubSubCategory={false} />}/>
      <Route path="/:id/*" element={<LoadPosts category={category} isSubSubCategory={true} />}/>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default CategoryRoutes;
