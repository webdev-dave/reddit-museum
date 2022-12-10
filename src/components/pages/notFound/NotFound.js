import "./notFound.css";
import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  const goBack = useNavigate();
  return (
    <div className="not-found-container">
      <h1>404 Error!! Page Not Found</h1>
      <h3>
        <Link to="/">Home</Link>
      </h3>
      <h3>
        <button className="go-back" onClick={() => goBack(-1)}>
          Go Back
        </button>
      </h3>
    </div>
  );
}

export default NotFound;
