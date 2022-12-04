import "./notFound.css"
import { Link, useNavigate } from "react-router-dom";


function NotFound() {
  const goBack = useNavigate()
  return (
    <>
      <h1>404 Error!! Page Not Found</h1>
      <h3><Link to="/">Home</Link></h3>
      <h3 className="go-back"><button onClick={()=>goBack(-1)}>Go Back</button></h3>
    </>
  );
}

export default NotFound;
