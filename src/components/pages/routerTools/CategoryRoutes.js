import { Routes, Route, useParams } from "react-router-dom";
import NotFound from "../notFound/NotFound";
import LoadPosts from "../../posts/LoadPosts";

const CategoryRoutes = () => {
  const params = useParams();

  
  return (
    <Routes>
      <Route path=":id/" element={<LoadPosts category={params.id} isSubSubCategory={false} parentInfo={false} />}/>
      <Route path=":id/*">
        <Route path=":id/"  element={<LoadPosts category={params.id}  isSubSubCategory={true} parentInfo={Object.values(params)[1]}  />}/>
        <Route path=":id/*" element={<NotFound />} />
      </Route>
      
    </Routes>
  );
};

export default CategoryRoutes;
